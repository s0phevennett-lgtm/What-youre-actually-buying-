// GET /api/results — returns all survey responses to the results page.
// Protected by the RESULTS_PASSWORD environment variable set in the Vercel dashboard.
const crypto = require('crypto');

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

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

// Compare passwords without leaking timing information
function passwordMatches(given, expected) {
  const a = crypto.createHash('sha256').update(String(given)).digest();
  const b = crypto.createHash('sha256').update(String(expected)).digest();
  return crypto.timingSafeEqual(a, b);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return send(res, 405, { error: 'Method not allowed' });
  }

  const expected = process.env.RESULTS_PASSWORD;
  const cfg = redisConfig();
  if (!expected || !cfg) return send(res, 503, { error: 'Results are not set up yet' });

  const given = req.headers['x-results-password'] || '';
  if (!given || !passwordMatches(given, expected)) {
    await new Promise(function (r) { setTimeout(r, 600); }); // slow down guessing
    return send(res, 401, { error: 'Wrong password' });
  }

  try {
    const rows = await redis(cfg, ['LRANGE', 'survey:responses', '0', '-1']);
    const responses = (rows || []).map(function (row) {
      try { return JSON.parse(row); } catch (e) { return null; }
    }).filter(Boolean);
    return send(res, 200, { responses: responses });
  } catch (e) {
    console.error('Results read failed:', e.message);
    return send(res, 502, { error: 'Could not read results' });
  }
};
