// POST /api/survey — stores one anonymous survey response.
// Storage: Upstash Redis, connected through the Vercel dashboard (Storage tab).
// Nothing identifying is stored: no names, emails, IP addresses or exact times.
const crypto = require('crypto');

const ALLOWED = {
  purpose: ['buying-off-plan', 'buying-established', 'renting', 'curious'],
  awareness: ['yes', 'somewhat', 'no'],
  source: ['display-suite', 'open-day', 'shelter-nsw', 'tenants-union', 'social', 'other']
};

const LGAS = [
  'City of Sydney', 'North Sydney', 'Bayside', 'Canterbury-Bankstown', 'Inner West',
  'City of Parramatta', 'City of Ryde', 'Canada Bay', 'Willoughby', 'Lane Cove',
  'Burwood', 'Strathfield', 'Cumberland', 'Georges River', 'Randwick',
  'Waverley', 'Woollahra', 'Ku-ring-gai', 'Hornsby', 'Northern Beaches', 'Other area'
];

const DAILY_LIMIT_PER_DEVICE = 10;

function redisConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

async function redis(cfg, command) {
  const r = await fetch(cfg.url, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + cfg.token, 'Content-Type': 'application/json' },
    body: JSON.stringify(command)
  });
  const data = await r.json();
  if (!r.ok || data.error) throw new Error(data.error || 'Redis HTTP ' + r.status);
  return data.result;
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body);
  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 4096) throw new Error('Body too large');
  }
  return JSON.parse(raw || '{}');
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { error: 'Method not allowed' });
  }

  const cfg = redisConfig();
  if (!cfg) return send(res, 503, { error: 'Survey storage is not set up yet' });

  let body;
  try { body = await readBody(req); } catch (e) { return send(res, 400, { error: 'Invalid request' }); }

  // Honeypot field that real visitors never see: quietly accept and drop bot submissions
  if (body.website) return send(res, 200, { ok: true });

  const clean = { v: 1, date: new Date().toISOString().slice(0, 10) };

  for (const key of Object.keys(ALLOWED)) {
    const value = body[key];
    if (value === undefined || value === null || value === '') clean[key] = null;
    else if (ALLOWED[key].includes(value)) clean[key] = value;
    else return send(res, 400, { error: 'Invalid answer' });
  }

  const qs = Array.isArray(body.questions) ? body.questions : [];
  if (qs.length > 5 || !qs.every(function (n) { return Number.isInteger(n) && n >= 1 && n <= 5; })) {
    return send(res, 400, { error: 'Invalid answer' });
  }
  clean.questions = Array.from(new Set(qs)).sort();

  if (body.lga === undefined || body.lga === null || body.lga === '') clean.lga = null;
  else if (LGAS.includes(body.lga)) clean.lga = body.lga;
  else return send(res, 400, { error: 'Invalid answer' });

  if (!clean.purpose && !clean.awareness && !clean.source && !clean.questions.length && !clean.lga) {
    return send(res, 400, { error: 'No answers' });
  }

  // Light abuse protection: a salted hash of the address, kept for 24 hours only
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    (req.socket && req.socket.remoteAddress) || 'unknown';
  const limitKey = 'survey:limit:' + crypto.createHash('sha256')
    .update(ip + '|' + cfg.token + '|' + clean.date).digest('hex').slice(0, 32);

  try {
    const count = await redis(cfg, ['INCR', limitKey]);
    if (count === 1) await redis(cfg, ['EXPIRE', limitKey, '86400']);
    if (count > DAILY_LIMIT_PER_DEVICE) return send(res, 429, { error: 'Too many responses today' });
    await redis(cfg, ['RPUSH', 'survey:responses', JSON.stringify(clean)]);
  } catch (e) {
    console.error('Survey save failed:', e.message);
    return send(res, 502, { error: 'Could not save the response' });
  }

  return send(res, 200, { ok: true });
};
