/*
 * LGA data for the "Explore Your Area" map.
 *
 * Each key must match one of the 20 LGA names used on the map exactly.
 * To fill in an area, replace "Data to be added" and the empty strings / arrays.
 * Leave a URL as "" to hide that link. Do not rename any of the fields.
 */
const lgaData = {
  "City of Sydney": {
    council_website: "https://www.cityofsydney.nsw.gov.au",
    da_tracker: "https://online.cityofsydney.nsw.gov.au/DA",
    planning: {
      dcp: "Sydney Development Control Plan 2012",
      dcp_link: "https://www.cityofsydney.nsw.gov.au/development-control-plans",
      lep: "Sydney Local Environmental Plan 2012",
      max_height: "Various, up to 80m+ in CBD",
      max_fsr: "Various, up to 14:1 in CBD",
      local_controls: [
        "Design Excellence clause applies to buildings over 55m",
        "Competitive design process required for certain sites",
        "Affordable housing contribution required in Green Square and Southern Employment Lands"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "City of Sydney Design Advisory Panel",
      notes: "Reviews residential flat buildings of 4+ storeys under SEPP 65"
    },
    adg_notes: "SEPP 65 and the Apartment Design Guide apply to all residential flat buildings of 3+ storeys. The City of Sydney DCP does not set benchmarks above the ADG for apartment size.",
    market: {
      character: "Highest density LGA in Australia. Major apartment precincts at Green Square, Zetland, Waterloo, Barangaroo, and CBD fringe. Mix of luxury towers and high-volume developer product.",
      developers: ["Lendlease", "Crown Group", "Mirvac", "Aqualand", "DASCO"],
      precincts: ["Green Square", "Zetland", "Waterloo", "Barangaroo", "CBD South"]
    },
    warnings: [
      "Green Square and Zetland have the highest concentration of new apartment development in Sydney. Check solar access carefully as building density can reduce natural light to lower-floor apartments.",
      "Affordable housing contributions are required in some precincts but the spatial quality of affordable units may be lower than market units in the same building.",
      "Design excellence competitions apply to taller buildings but assess primarily external form and facade, not interior spatial quality."
    ],
    links: [
      { label: "DA Tracker", url: "https://online.cityofsydney.nsw.gov.au/DA" },
      { label: "DCP 2012", url: "https://www.cityofsydney.nsw.gov.au/development-control-plans" },
      { label: "Council Contact", url: "https://www.cityofsydney.nsw.gov.au/contact-us" }
    ]
  },

  "North Sydney": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Bayside": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Canterbury-Bankstown": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Inner West": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "City of Parramatta": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "City of Ryde": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Canada Bay": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Willoughby": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Lane Cove": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Burwood": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Strathfield": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Cumberland": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Georges River": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Randwick": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Waverley": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Woollahra": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Ku-ring-gai": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Hornsby": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  },

  "Northern Beaches": {
    council_website: "",
    da_tracker: "",
    planning: { dcp: "Data to be added", dcp_link: "", lep: "Data to be added", max_height: "Data to be added", max_fsr: "Data to be added", local_controls: ["Data to be added"] },
    design_review: { has_panel: false, panel_name: "", notes: "Data to be added" },
    adg_notes: "Data to be added",
    market: { character: "Data to be added", developers: [], precincts: [] },
    warnings: ["Data to be added"],
    links: []
  }
};

// No build step: expose the data globally for index.html
window.lgaData = lgaData;
