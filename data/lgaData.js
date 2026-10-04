/*
 * LGA data for the "Explore Your Area" map.
 *
 * Each key must match one of the 20 LGA names used on the map exactly.
 * To fill in an area, replace "Data to be added" and the empty strings / arrays.
 * Leave a URL as "" to hide that link. Do not rename any of the fields.
 *
 * Sources (checked October 2026): each council's website (DA tracker, DCP and
 * design review panel pages), NSW legislation, and NSW Planning publications.
 * Developer lists are left empty on purpose: add names only with a source.
 * Height and FSR controls vary site by site, so check the LEP maps for an address.
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
    council_website: "https://www.northsydney.nsw.gov.au",
    da_tracker: "https://masterview.northsydney.nsw.gov.au/",
    planning: {
      dcp: "North Sydney Development Control Plan 2013",
      dcp_link: "https://www.northsydney.nsw.gov.au/development-regulatory-documents-policies-plans/development-control-plan",
      lep: "North Sydney Local Environmental Plan 2013",
      max_height: "Varies by site. Highest controls in the North Sydney CBD and St Leonards. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Apartment towers are concentrated in the North Sydney CBD and around the Crows Nest metro station",
        "Crows Nest is a NSW Government Transport Oriented Development (TOD) accelerated precinct, allowing more and taller housing near the station",
        "Council's Design Excellence Panel advises on apartment proposals before and during assessment"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "North Sydney Design Excellence Panel",
      notes: "Advises Council on the design quality of apartment proposals, assessed against the ADG and SEPP 65 design principles. Its advice is advisory, not binding."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "A dense commercial centre surrounded by established harbourside apartment suburbs. New development is focused on high-rise towers in the North Sydney CBD and the Crows Nest / St Leonards metro precinct.",
      developers: [],
      precincts: ["North Sydney CBD", "Crows Nest", "St Leonards", "Milsons Point", "Neutral Bay"]
    },
    warnings: [
      "Towers near the Warringah Freeway and Pacific Highway can have significant traffic noise. Ask whether windows must stay closed to meet noise limits, which affects natural ventilation.",
      "In tall towers, lower floors can be heavily overshadowed by neighbouring buildings. Check the solar access diagrams for your specific apartment, not the building average.",
      "The Crows Nest TOD precinct will change rapidly. Check what is approved or proposed on neighbouring sites before you buy for a view or sunlight."
    ],
    links: [
      { label: "DA Tracker", url: "https://masterview.northsydney.nsw.gov.au/" },
      { label: "DCP 2013", url: "https://www.northsydney.nsw.gov.au/development-regulatory-documents-policies-plans/development-control-plan" },
      { label: "Council Contact", url: "https://www.northsydney.nsw.gov.au/council/contact-council" }
    ]
  },

  "Bayside": {
    council_website: "https://www.bayside.nsw.gov.au",
    da_tracker: "https://www.bayside.nsw.gov.au/planning-and-development/development-approvals/tracking-your-application",
    planning: {
      dcp: "Bayside Development Control Plan 2022",
      dcp_link: "https://www.bayside.nsw.gov.au/planning-and-development/planning-our-city/controls",
      lep: "Bayside Local Environmental Plan 2021",
      max_height: "Varies by site. Highest around Wolli Creek, Mascot and Rockdale. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "The Bayside LEP Design Excellence clause requires an independent design review or architectural design competition for some sites before consent",
        "Bayside DCP 2022 (in force from 10 April 2023) replaced the Botany Bay DCP 2013 and Rockdale DCP 2011",
        "Council adopted the NSW Government's Local Government Design Review Panel Manual in August 2025"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Bayside Design Review Panel",
      notes: "Reviews residential apartment proposals and must be consulted on DCP provisions about apartment design quality. Applicants submit a Design Verification Statement from a registered architect."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "Rapid high-density growth along the airport and rail corridors, particularly at Wolli Creek and Mascot, alongside older low-rise suburbs.",
      developers: [],
      precincts: ["Wolli Creek", "Mascot", "Arncliffe", "Rockdale", "Eastgardens"]
    },
    warnings: [
      "Much of Bayside is under Sydney Airport flight paths. Check the aircraft noise (ANEF) contours for the site and ask what acoustic treatment is specified.",
      "Apartments sealed against aircraft or road noise often rely on mechanical ventilation. Ask whether the apartment can be comfortably ventilated with the windows open.",
      "Dense tower clusters at Wolli Creek and Mascot can overshadow lower floors. Check the solar access for your specific apartment."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.bayside.nsw.gov.au/planning-and-development/development-approvals/tracking-your-application" },
      { label: "DCP 2022", url: "https://www.bayside.nsw.gov.au/planning-and-development/planning-our-city/controls" },
      { label: "Council Contact", url: "https://www.bayside.nsw.gov.au/your-council/contact-us" }
    ]
  },

  "Canterbury-Bankstown": {
    council_website: "https://www.cbcity.nsw.gov.au",
    da_tracker: "https://www.cbcity.nsw.gov.au/planning-and-building/development-and-building/development-applications/applications-exhibition-determined",
    planning: {
      dcp: "Canterbury-Bankstown Development Control Plan 2023",
      dcp_link: "https://www.cbcity.nsw.gov.au/planning-and-building/planning-city/planning-controls-and-policies/canterbury-bankstown-development-control-plan",
      lep: "Canterbury-Bankstown Local Environmental Plan 2023",
      max_height: "Varies by site. Highest in the Bankstown and Campsie centres. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "The 2023 LEP and DCP replaced the former Bankstown and Canterbury plans. Older applications may have been assessed under the previous DCPs.",
        "Bankstown is a NSW Government Transport Oriented Development (TOD) accelerated precinct",
        "Residential flat buildings of 4 or more storeys can be reviewed by Council's Design Review Panel, including before a DA is lodged"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Canterbury-Bankstown Design Review Panel",
      notes: "Architecture, urban design and landscape experts who give pre-DA and assessment advice on residential flat buildings of 4 or more storeys and other significant developments."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "Sydney's most populous LGA. Apartment growth is concentrated around rail stations, the Bankstown and Campsie centres, and the Sydney Metro Southwest corridor.",
      developers: [],
      precincts: ["Bankstown", "Campsie", "Canterbury", "Lakemba", "Punchbowl"]
    },
    warnings: [
      "Apartments along Canterbury Road and the rail corridor can be exposed to heavy traffic and rail noise. Ask about acoustic treatment and whether windows can be opened.",
      "Rapid rezoning around stations means neighbouring sites may be redeveloped. Check what is planned next door before relying on a view or sunlight.",
      "Check that the apartment was assessed under the current 2023 controls, especially for older off-the-plan projects."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.cbcity.nsw.gov.au/planning-and-building/development-and-building/development-applications/applications-exhibition-determined" },
      { label: "DCP 2023", url: "https://www.cbcity.nsw.gov.au/planning-and-building/planning-city/planning-controls-and-policies/canterbury-bankstown-development-control-plan" },
      { label: "Council Contact", url: "https://www.cbcity.nsw.gov.au/your-council/contact-us" }
    ]
  },

  "Inner West": {
    council_website: "https://www.innerwest.nsw.gov.au",
    da_tracker: "https://www.innerwest.nsw.gov.au/development-applications/track-applications",
    planning: {
      dcp: "Former council DCPs (Ashfield, Leichhardt, Marrickville); a single Inner West DCP is being finalised",
      dcp_link: "https://www.innerwest.nsw.gov.au/plans-policies-and-controls",
      lep: "Inner West Local Environmental Plan 2022",
      max_height: "Varies by site. Mostly low to mid-rise, with taller controls on renewal sites and main road corridors. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Several former-council DCPs still apply depending on the address, while a single Inner West DCP was exhibited in 2026 and is expected to be finalised late 2026",
        "Proposals subject to the ADG are referred to Council's Architectural Excellence and Design Review Panel",
        "Large parts of the LGA are heritage conservation areas, which limit building height and form"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Inner West Architectural Excellence and Design Review Panel (AEDRP)",
      notes: "Three independent experts in architecture, landscape architecture or urban design who advise on apartment proposals, large boarding houses and master plans. Final reports are published on Council's website."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCPs cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "Mostly smaller-scale apartment buildings on main roads and around rail stations, with some larger urban renewal sites. Older walk-up flats sit alongside new development.",
      developers: [],
      precincts: ["Marrickville", "Ashfield", "Dulwich Hill", "Leichhardt", "Petersham"]
    },
    warnings: [
      "Apartments on Parramatta Road, Victoria Road and other main roads can face heavy traffic noise and pollution. Check which rooms face the road.",
      "Parts of the LGA are under Sydney Airport flight paths. Check the aircraft noise (ANEF) contours for the site.",
      "Narrow infill sites often produce single-aspect apartments with no cross-ventilation. Ask which apartments meet the ADG cross-ventilation criteria."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.innerwest.nsw.gov.au/development-applications/track-applications" },
      { label: "Planning controls", url: "https://www.innerwest.nsw.gov.au/plans-policies-and-controls" },
      { label: "Design Review Panel reports", url: "https://www.innerwest.nsw.gov.au/develop/development-applications/architectural-excellence-and-design-review-panel" },
      { label: "Council Contact", url: "https://www.innerwest.nsw.gov.au/get-in-touch/contact-us" }
    ]
  },

  "City of Parramatta": {
    council_website: "https://www.cityofparramatta.nsw.gov.au",
    da_tracker: "https://www.cityofparramatta.nsw.gov.au/development/development-applications/track-an-application",
    planning: {
      dcp: "Parramatta Development Control Plan 2023",
      dcp_link: "https://www.cityofparramatta.nsw.gov.au/development/plans-and-strategies/development-control-plans",
      lep: "Parramatta Local Environmental Plan 2023",
      max_height: "Varies by site. Very tall towers are permitted in the Parramatta CBD. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Parramatta LEP 2023 (March 2023) and DCP 2023 (September 2023) replaced five former plans after the 2016 council boundary changes",
        "Apartment proposals are reviewed by Council's Design Excellence Advisory Panel (DEAP)",
        "Design excellence processes apply to major CBD sites"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Parramatta Design Excellence Advisory Panel (DEAP)",
      notes: "Independent panel that reviews residential flat buildings, shop-top housing and mixed-use buildings of 3 or more storeys with 4 or more dwellings. Its comments are advisory."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "Sydney's second CBD, with very tall residential towers in the city centre and large master-planned apartment precincts along the river and rail lines.",
      developers: [],
      precincts: ["Parramatta CBD", "Wentworth Point", "Epping", "Melrose Park", "Westmead"]
    },
    warnings: [
      "In the Parramatta CBD, towers are closely spaced. Check how far your windows are from neighbouring towers and whether lower floors receive the ADG minimum of 2 hours of winter sun.",
      "Large precincts such as Wentworth Point are built in stages over many years. Expect ongoing construction nearby and check when promised parks and facilities will be delivered.",
      "Apartments near Parramatta Road, the M4 and light rail can be noisy. Ask whether windows must stay closed to meet noise limits."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.cityofparramatta.nsw.gov.au/development/development-applications/track-an-application" },
      { label: "DCP 2023", url: "https://www.cityofparramatta.nsw.gov.au/development/plans-and-strategies/development-control-plans" },
      { label: "Council Contact", url: "https://www.cityofparramatta.nsw.gov.au/council/contact-council/contact-us" }
    ]
  },

  "City of Ryde": {
    council_website: "https://www.ryde.nsw.gov.au",
    da_tracker: "https://www.ryde.nsw.gov.au/Planning-and-Development/Development-Applications/Development-Application-Tracker",
    planning: {
      dcp: "Ryde Development Control Plan 2014",
      dcp_link: "https://www.ryde.nsw.gov.au/Planning-and-Development/Planning-Controls/Development-Control-Plan",
      lep: "Ryde Local Environmental Plan 2014",
      max_height: "Varies by site. Highest in Macquarie Park and town centres. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Macquarie Park is a NSW Government Transport Oriented Development (TOD) accelerated precinct",
        "Council offers a fee-based Urban Design Review Panel for apartment buildings of 3 or more storeys before a DA is lodged",
        "Apartment growth is concentrated in Macquarie Park, Meadowbank and the town centres"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "City of Ryde Urban Design Review Panel",
      notes: "Pre-lodgement review of apartment buildings of 3 or more storeys and major town centre developments, booked through Council's Development Advisory Service. A fee applies."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "Major high-density growth in Macquarie Park, a metro-served business park, plus apartment precincts at Meadowbank and in the Ryde, Eastwood and Gladesville town centres.",
      developers: [],
      precincts: ["Macquarie Park", "Meadowbank", "Eastwood", "Top Ryde", "Gladesville"]
    },
    warnings: [
      "Macquarie Park is still transitioning from a business park. Check how close the apartment is to shops, schools and open space, not just the metro.",
      "Apartments on Victoria Road, Epping Road and Lane Cove Road can face heavy traffic noise. Check which rooms face the road.",
      "Because the Urban Design Review Panel is optional and pre-lodgement, ask the developer whether the building was reviewed and what changed as a result."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.ryde.nsw.gov.au/Planning-and-Development/Development-Applications/Development-Application-Tracker" },
      { label: "DCP 2014", url: "https://www.ryde.nsw.gov.au/Planning-and-Development/Planning-Controls/Development-Control-Plan" }
    ]
  },

  "Canada Bay": {
    council_website: "https://www.canadabay.nsw.gov.au",
    da_tracker: "https://www.canadabay.nsw.gov.au/eservices/da-tracker",
    planning: {
      dcp: "City of Canada Bay Development Control Plan",
      dcp_link: "https://www.canadabay.nsw.gov.au/development/plans-policies-and-controls/planning-controls-LEP-DCP",
      lep: "Canada Bay Local Environmental Plan 2013",
      max_height: "Varies by site. Highest at Rhodes. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Part F of the DCP covers residential flat buildings",
        "Some large precincts have their own site-specific DCPs instead of the general DCP",
        "Certain residential flat buildings and mixed-use proposals are referred to Council's Design Review Panel"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Canada Bay Design Review Panel",
      notes: "Visits the site and meets Council and the applicant to give independent, expert advice on the design quality of certain residential flat buildings and mixed-use proposals. It has operated jointly with Strathfield Council."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "Former industrial waterfront land redeveloped as high-density precincts, especially at Rhodes and Breakfast Point, alongside established low-rise suburbs.",
      developers: [],
      precincts: ["Rhodes", "Breakfast Point", "Concord West", "Five Dock", "Drummoyne"]
    },
    warnings: [
      "Rhodes has a high concentration of towers. Check solar access and outlook for your specific apartment, and what is planned on neighbouring sites.",
      "Some precincts are controlled by site-specific DCPs. Ask which DCP applied to the building you are buying into.",
      "Waterfront sites can be on former industrial land. Ask what site remediation was carried out."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.canadabay.nsw.gov.au/eservices/da-tracker" },
      { label: "Planning controls", url: "https://www.canadabay.nsw.gov.au/development/plans-policies-and-controls/planning-controls-LEP-DCP" },
      { label: "Council Contact", url: "https://www.canadabay.nsw.gov.au/contact" }
    ]
  },

  "Willoughby": {
    council_website: "https://www.willoughby.nsw.gov.au",
    da_tracker: "https://www.willoughby.nsw.gov.au/Development/Get-approval/Development-applications/DA-Tracker",
    planning: {
      dcp: "Willoughby Development Control Plan",
      dcp_link: "https://www.willoughby.nsw.gov.au/Development/Plan/Planning-rules/WDCP",
      lep: "Willoughby Local Environmental Plan 2012",
      max_height: "Varies by site. Highest in the Chatswood CBD. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "An LEP amendment made in June 2023 added capacity for about 6,500 new dwellings, mainly in an expanded Chatswood CBD",
        "DCP Part L (Place Based Plans, 2023) sets site-specific controls for the Chatswood CBD",
        "Council has developed a design excellence review process for the Chatswood CBD"
      ]
    },
    design_review: {
      has_panel: false,
      panel_name: "",
      notes: "We could not confirm a standing design review panel for all apartment proposals. Design excellence review applies in the Chatswood CBD, and the Willoughby Local Planning Panel determines larger applications. Ask whether the building had an independent design review."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "Chatswood CBD is one of Sydney's largest high-rise residential centres outside the city, with further growth around St Leonards and Artarmon.",
      developers: [],
      precincts: ["Chatswood CBD", "St Leonards", "Artarmon", "Willoughby"]
    },
    warnings: [
      "The Chatswood CBD is changing quickly after the 2023 upzoning. Check approved and proposed towers next door before buying for a view or sunlight.",
      "In closely spaced towers, check the separation distances to neighbouring buildings and the privacy of living rooms and bedrooms.",
      "Apartments near the Pacific Highway and rail line can be noisy. Ask whether windows can be opened while still meeting noise limits."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.willoughby.nsw.gov.au/Development/Get-approval/Development-applications/DA-Tracker" },
      { label: "DCP", url: "https://www.willoughby.nsw.gov.au/Development/Plan/Planning-rules/WDCP" },
      { label: "Council Contact", url: "https://www.willoughby.nsw.gov.au/Council/Contact-us" }
    ]
  },

  "Lane Cove": {
    council_website: "https://www.lanecove.nsw.gov.au",
    da_tracker: "https://www.lanecove.nsw.gov.au/Development/Current-DAs/DA-Search-and-Enquiry",
    planning: {
      dcp: "Lane Cove Development Control Plan",
      dcp_link: "https://www.lanecove.nsw.gov.au/Development/Development-Controls/Planning-Controls",
      lep: "Lane Cove Local Environmental Plan 2009",
      max_height: "Varies by site. Highest in St Leonards and St Leonards South. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "The St Leonards South Precinct has its own planning scheme, with a Design Review Panel reviewing proposals before a DA is lodged",
        "St Leonards sits next to the Crows Nest Transport Oriented Development (TOD) accelerated precinct, which allows more and taller housing near the metro",
        "NSW Low and Mid-Rise Housing reforms allow more apartment buildings near some local centres"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Design Review Panel (St Leonards South Precinct)",
      notes: "Advises on SEPP 65 and design excellence for development in the St Leonards South Precinct, before a DA is lodged. Proposals elsewhere may not be reviewed by a panel."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "A village-scale centre with major high-rise growth concentrated in St Leonards and the St Leonards South precinct.",
      developers: [],
      precincts: ["St Leonards South", "St Leonards", "Lane Cove village", "Lane Cove North"]
    },
    warnings: [
      "St Leonards South is being redeveloped site by site. Expect years of nearby construction, and check what is planned on adjoining lots.",
      "Apartments near the Pacific Highway and rail line can be noisy. Check which rooms face the road or rail.",
      "Outside St Leonards South there may be no panel design review. Ask whether the building was independently reviewed."
    ],
    links: [
      { label: "DA Search", url: "https://www.lanecove.nsw.gov.au/Development/Current-DAs/DA-Search-and-Enquiry" },
      { label: "Planning controls", url: "https://www.lanecove.nsw.gov.au/Development/Development-Controls/Planning-Controls" },
      { label: "Council Contact", url: "https://www.lanecove.nsw.gov.au/Council/Contact-Us" }
    ]
  },

  "Burwood": {
    council_website: "https://www.burwood.nsw.gov.au",
    da_tracker: "https://www.burwood.nsw.gov.au/Planning-Building/Track-a-Development-Application",
    planning: {
      dcp: "Burwood Development Control Plan",
      dcp_link: "https://www.burwood.nsw.gov.au/Planning-Building/Planning-Controls",
      lep: "Burwood Local Environmental Plan 2012",
      max_height: "Varies by site. Highest in the Burwood town centre. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Burwood LEP clause 6.5 (Design Excellence) applies to major development",
        "All residential flat buildings of 4 or more storeys are referred to the Burwood Design Review Panel",
        "The nearby Homebush Transport Oriented Development (TOD) accelerated precinct is adding significant new housing to the area"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Burwood Design Review Panel (BDRP)",
      notes: "Experts in architecture, landscape and urban design who review all residential flat buildings of 4 or more storeys, before and during assessment. Its advice is advisory but central to Council's assessment."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "A small LGA with a tall, dense town centre around Burwood station and Burwood Road, surrounded by heritage residential streets.",
      developers: [],
      precincts: ["Burwood town centre", "Burwood Road", "Croydon"]
    },
    warnings: [
      "Towers in the Burwood town centre are closely packed. Check solar access and separation to neighbouring buildings for your specific apartment.",
      "Apartments on Parramatta Road and near the rail line can face heavy noise. Ask about acoustic treatment and ventilation with windows closed.",
      "Three-storey buildings are not automatically referred to the Design Review Panel. Ask whether a smaller building was independently reviewed."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.burwood.nsw.gov.au/Planning-Building/Track-a-Development-Application" },
      { label: "Planning controls", url: "https://www.burwood.nsw.gov.au/Planning-Building/Planning-Controls" },
      { label: "Design Review Panel", url: "https://www.burwood.nsw.gov.au/Planning-Building/Burwood-Design-Review-Panel" }
    ]
  },

  "Strathfield": {
    council_website: "https://www.strathfield.nsw.gov.au",
    da_tracker: "https://datracker.strathfield.nsw.gov.au/Home/Disclaimer",
    planning: {
      dcp: "Strathfield Consolidated Development Control Plan 2005",
      dcp_link: "https://www.strathfield.nsw.gov.au/Develop/Planning-Policies",
      lep: "Strathfield Local Environmental Plan 2012",
      max_height: "Varies by site. Highest around Strathfield and Homebush stations and the Parramatta Road corridor. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Part C of the Consolidated DCP covers residential flat buildings and shop-top housing",
        "A new General Residential DCP (adopted July 2026, in effect from 1 September 2026) covers houses, dual occupancies, terraces and manor homes",
        "Homebush is a NSW Government Transport Oriented Development (TOD) accelerated precinct"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Strathfield Design Review Panel (SDRP)",
      notes: "A permanent chair and two rotating experts give independent advice on the design quality of referred applications. It has operated jointly with Canada Bay Council for large residential and mixed-use development."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "Apartment growth around Strathfield and Homebush stations and along Parramatta Road, next to heritage-listed low-density streets.",
      developers: [],
      precincts: ["Strathfield town centre", "Homebush", "Homebush West", "Parramatta Road corridor"]
    },
    warnings: [
      "Apartments on Parramatta Road and near the rail lines can face heavy noise and pollution. Check which rooms face the road or rail.",
      "The Homebush TOD precinct will add a lot of new housing. Check what is planned on neighbouring sites.",
      "Ask whether the building was referred to the Design Review Panel and what changed as a result."
    ],
    links: [
      { label: "DA Tracker", url: "https://datracker.strathfield.nsw.gov.au/Home/Disclaimer" },
      { label: "Planning policies", url: "https://www.strathfield.nsw.gov.au/Develop/Planning-Policies" },
      { label: "Council Contact", url: "https://www.strathfield.nsw.gov.au/Council/Contact-Us" }
    ]
  },

  "Cumberland": {
    council_website: "https://www.cumberland.nsw.gov.au",
    da_tracker: "https://www.cumberland.nsw.gov.au/build/development-application-tracking",
    planning: {
      dcp: "Cumberland Development Control Plan 2021",
      dcp_link: "https://www.cumberland.nsw.gov.au/build/development-control-plans-dcp",
      lep: "Cumberland Local Environmental Plan 2021",
      max_height: "Varies by site. Highest around Merrylands, Lidcombe, Auburn and Wentworthville stations. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Design excellence provisions in the LEP can grant extra floor space and height to proposals that achieve design excellence",
        "The Cumberland Design Excellence Panel gives expert design feedback on significant proposals",
        "Several site-specific DCP amendments apply along Woodville Road and around Merrylands station"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Cumberland Design Excellence Panel",
      notes: "Advises on significant proposals using the SEPP 65 design quality principles, focusing on occupant amenity and the quality of the building in its setting."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "A fast-growing western Sydney LGA with apartment towers clustered around rail stations and town centres.",
      developers: [],
      precincts: ["Merrylands", "Lidcombe", "Auburn", "Wentworthville", "Granville"]
    },
    warnings: [
      "Design excellence bonuses allow taller, denser buildings. Ask whether the extra floor space came with better apartments or just more of them.",
      "Apartments near the rail line, Woodville Road and the Great Western Highway can be noisy. Ask about acoustic treatment and ventilation.",
      "Check solar access for lower floors in clustered tower precincts around stations."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.cumberland.nsw.gov.au/build/development-application-tracking" },
      { label: "DCP 2021", url: "https://www.cumberland.nsw.gov.au/build/development-control-plans-dcp" },
      { label: "Design Excellence", url: "https://www.cumberland.nsw.gov.au/build/design-excellence" }
    ]
  },

  "Georges River": {
    council_website: "https://www.georgesriver.nsw.gov.au",
    da_tracker: "https://www.georgesriver.nsw.gov.au/Development/Development-Applications/Development-tracking",
    planning: {
      dcp: "Georges River Development Control Plan 2021",
      dcp_link: "https://www.georgesriver.nsw.gov.au/Development/Planning-Controls/Development-Control-Plans",
      lep: "Georges River Local Environmental Plan 2021",
      max_height: "Varies by site. Highest in the Hurstville and Kogarah centres. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Apartment proposals are assessed by Council's Design Review Panel against the nine design quality principles and the ADG",
        "Council publishes a register of Clause 4.6 and DCP variations, which shows where buildings were approved beyond the standard controls",
        "Apartment growth is concentrated in the Hurstville and Kogarah centres"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Georges River Design Review Panel",
      notes: "Assesses apartment proposals against the nine design quality principles and the Apartment Design Guide."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "High-rise apartment centres at Hurstville and Kogarah, with lower-scale suburbs along the Georges River.",
      developers: [],
      precincts: ["Hurstville", "Kogarah", "Beverly Hills", "Penshurst"]
    },
    warnings: [
      "Check Council's Clause 4.6 variations register to see whether the building was approved above the height or FSR controls.",
      "Apartments near the rail line and King Georges Road can be noisy. Ask about acoustic treatment and ventilation.",
      "Check solar access for lower floors in the dense Hurstville centre."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.georgesriver.nsw.gov.au/Development/Development-Applications/Development-tracking" },
      { label: "DCP 2021", url: "https://www.georgesriver.nsw.gov.au/Development/Planning-Controls/Development-Control-Plans" },
      { label: "Variations register", url: "https://www.georgesriver.nsw.gov.au/Development/Development-Applications/Register-of-Clause-4-6-and-DCP-Variations" },
      { label: "Council Contact", url: "https://www.georgesriver.nsw.gov.au/Contact-Us" }
    ]
  },

  "Randwick": {
    council_website: "https://www.randwick.nsw.gov.au",
    da_tracker: "https://www.randwick.nsw.gov.au/planning-and-building/search-applications",
    planning: {
      dcp: "Randwick Development Control Plan",
      dcp_link: "https://www.randwick.nsw.gov.au/planning-and-building/planning-strategies-and-control/development-control-plan-dcp",
      lep: "Randwick Local Environmental Plan 2012",
      max_height: "Varies by site. Highest along the light rail corridor and in town centres. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Applications subject to SEPP 65 are considered by Council's Design Excellence Panel",
        "Apartment growth is focused on the Kensington and Kingsford light rail corridor and town centres",
        "Coastal and heritage areas have lower height limits"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Randwick Design Excellence Panel",
      notes: "Considers applications subject to SEPP 65. Council has run design review for apartment proposals since 2004."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "A coastal LGA with apartment growth along the light rail corridor and around UNSW, plus older walk-up flats in beachside suburbs.",
      developers: [],
      precincts: ["Kensington", "Kingsford", "Randwick", "Maroubra Junction"]
    },
    warnings: [
      "Near UNSW, many apartments are built or bought as student rentals. Check the building's mix of owner-occupiers and short-term tenants.",
      "Apartments on Anzac Parade can face light rail and traffic noise. Check which rooms face the road.",
      "Beachside sites can be exposed to strong winds and salt air. Ask how balconies and finishes are designed for this."
    ],
    links: [
      { label: "DA Search", url: "https://www.randwick.nsw.gov.au/planning-and-building/search-applications" },
      { label: "DCP", url: "https://www.randwick.nsw.gov.au/planning-and-building/planning-strategies-and-control/development-control-plan-dcp" },
      { label: "Council Contact", url: "https://www.randwick.nsw.gov.au/about-us/council-and-councillors/contact-us" }
    ]
  },

  "Waverley": {
    council_website: "https://www.waverley.nsw.gov.au",
    da_tracker: "https://www.waverley.nsw.gov.au/planning/development_applications/track_a_da",
    planning: {
      dcp: "Waverley Development Control Plan 2022",
      dcp_link: "https://www.waverley.nsw.gov.au/planning/development_applications/development_control_plan_2022",
      lep: "Waverley Local Environmental Plan 2012",
      max_height: "Varies by site. Highest in the Bondi Junction centre. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "DCP Part E sets site-specific urban form controls for the Bondi Junction centre",
        "Apartment proposals, new residential flat buildings and developments over $20m are reviewed by the Waverley Design Excellence Advisory Panel",
        "The latest DCP amendment took effect in April 2026"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Waverley Design Excellence Advisory Panel",
      notes: "Independent experts in architecture, landscape, urban design and heritage who review DAs and pre-DAs against the nine SEPP 65 design principles and design excellence."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "A small, very dense coastal LGA. The tallest buildings are in Bondi Junction, with older walk-up flats throughout Bondi and Bronte.",
      developers: [],
      precincts: ["Bondi Junction", "Bondi Beach", "Bondi", "Bronte"]
    },
    warnings: [
      "Small, narrow sites often produce single-aspect apartments. Ask which apartments achieve cross-ventilation.",
      "In Bondi Junction, check solar access and separation to neighbouring towers for your specific apartment.",
      "Coastal exposure can be hard on balconies, windows and finishes. Ask how materials were chosen for salt air."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.waverley.nsw.gov.au/planning/development_applications/track_a_da" },
      { label: "DCP 2022", url: "https://www.waverley.nsw.gov.au/planning/development_applications/development_control_plan_2022" },
      { label: "Council Contact", url: "https://www.waverley.nsw.gov.au/top/contact_us" }
    ]
  },

  "Woollahra": {
    council_website: "https://www.woollahra.nsw.gov.au",
    da_tracker: "https://www.woollahra.nsw.gov.au/Building-and-development/Development-Applications/Track-a-DA",
    planning: {
      dcp: "Woollahra Development Control Plan 2015",
      dcp_link: "https://www.woollahra.nsw.gov.au/Building-and-development/Development-rules/residential-flat-buildings",
      lep: "Woollahra Local Environmental Plan 2014",
      max_height: "Varies by site. Mostly low to mid-rise, with taller controls in Edgecliff and Double Bay. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Council requires residential flat buildings to be designed by architects to comply with SEPP 65 and the ADG",
        "Large parts of the LGA are heritage conservation areas, which limit height and form",
        "Apartment development is mostly in Edgecliff, Double Bay and Rose Bay"
      ]
    },
    design_review: {
      has_panel: false,
      panel_name: "",
      notes: "We could not confirm a standing design review panel. Design excellence requirements are set in the Woollahra DCP. Ask whether the building had an independent design review."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "A low-scale, heritage-rich harbourside LGA. Apartment development is limited and mostly in small centres, often at the luxury end of the market.",
      developers: [],
      precincts: ["Edgecliff", "Double Bay", "Rose Bay", "Paddington"]
    },
    warnings: [
      "A premium price does not guarantee more than the ADG minimum. Check actual room sizes and ceiling heights.",
      "Apartments on New South Head Road can face heavy traffic noise. Check which rooms face the road.",
      "Without a design review panel, ask the developer for the architect's Design Verification Statement."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.woollahra.nsw.gov.au/Building-and-development/Development-Applications/Track-a-DA" },
      { label: "Apartment rules", url: "https://www.woollahra.nsw.gov.au/Building-and-development/Development-rules/residential-flat-buildings" },
      { label: "Council Contact", url: "https://www.woollahra.nsw.gov.au/Council/Contact-Us" }
    ]
  },

  "Ku-ring-gai": {
    council_website: "https://www.krg.nsw.gov.au",
    da_tracker: "https://www.krg.nsw.gov.au/Planning-and-development/DA-tracking",
    planning: {
      dcp: "Ku-ring-gai Development Control Plan",
      dcp_link: "https://www.krg.nsw.gov.au/Planning-and-development/Planning-policies-and-guidelines/Ku-ring-gai-Development-Control-Plan",
      lep: "Ku-ring-gai Local Environmental Plan 2015",
      max_height: "Varies by site. Apartments are mostly limited to centres along the Pacific Highway and rail line. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Ku-ring-gai LEP 2015 has been the single LEP for the whole LGA since the Local Centres LEP was consolidated in 2021",
        "DCP Part 7 sets residential flat building controls, including articulation, setbacks and landscaping",
        "NSW Government housing reforms may allow more apartments near some rail stations. Check the current controls for a specific address."
      ]
    },
    design_review: {
      has_panel: false,
      panel_name: "",
      notes: "We could not confirm a standing design review panel. Council's urban design consultant assesses apartment proposals against the nine SEPP 65 design principles and the ADG."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "Predominantly low-density, leafy suburbs, with apartment development concentrated along the Pacific Highway and rail corridor.",
      developers: [],
      precincts: ["Gordon", "Lindfield", "Turramurra", "St Ives", "Roseville"]
    },
    warnings: [
      "Apartments facing the Pacific Highway can face heavy traffic noise. Check which rooms face the road.",
      "Some sites are in bushfire-prone areas. Ask what bushfire requirements apply and how they affect windows, balconies and insurance.",
      "Planning controls around stations are changing under state housing reforms. Check what could be built on neighbouring sites."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.krg.nsw.gov.au/Planning-and-development/DA-tracking" },
      { label: "DCP", url: "https://www.krg.nsw.gov.au/Planning-and-development/Planning-policies-and-guidelines/Ku-ring-gai-Development-Control-Plan" },
      { label: "Council Contact", url: "https://www.krg.nsw.gov.au/Council/Contact-us" }
    ]
  },

  "Hornsby": {
    council_website: "https://www.hornsby.nsw.gov.au",
    da_tracker: "https://www.hornsby.nsw.gov.au/Property/Building-and-development/Development-Applications/Find-and-track-a-DA",
    planning: {
      dcp: "Hornsby Development Control Plan 2024",
      dcp_link: "https://www.hornsby.nsw.gov.au/Council/Noticeboard/Hornsby-Development-Control-Plan",
      lep: "Hornsby Local Environmental Plan 2013",
      max_height: "Varies by site. Highest in the Hornsby town centre. Check the LEP Height of Buildings Map for an address.",
      max_fsr: "Varies by site. Check the LEP Floor Space Ratio Map for an address.",
      local_controls: [
        "Hornsby is a NSW Government Transport Oriented Development (TOD) accelerated precinct",
        "Residential flat buildings and mixed-use buildings of 3 or more storeys are reviewed by Council's Design Excellence Panel",
        "Large areas of bushland mean many sites are bushfire prone"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Hornsby Shire Council Design Excellence Panel",
      notes: "Reviews residential flat buildings and mixed-use buildings of 3 or more storeys and townhouse developments. It operates independently and is not a SEPP 65 advisory panel. Its advice is not binding."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCP cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "Apartment growth is concentrated around the Hornsby town centre and stations on the northern rail line, surrounded by large bushland areas.",
      developers: [],
      precincts: ["Hornsby town centre", "Waitara", "Asquith", "Thornleigh"]
    },
    warnings: [
      "Apartments near the Pacific Highway and rail line can be noisy. Check which rooms face the road or rail.",
      "Some sites are bushfire prone. Ask what bushfire requirements apply and how they affect windows, balconies and insurance.",
      "The Hornsby TOD precinct will add a lot of new housing. Check what is planned on neighbouring sites."
    ],
    links: [
      { label: "DA Tracker", url: "https://www.hornsby.nsw.gov.au/Property/Building-and-development/Development-Applications/Find-and-track-a-DA" },
      { label: "DCP 2024", url: "https://www.hornsby.nsw.gov.au/Council/Noticeboard/Hornsby-Development-Control-Plan" },
      { label: "Council Contact", url: "https://www.hornsby.nsw.gov.au/Council/About-Council/Contact-us" }
    ]
  },

  "Northern Beaches": {
    council_website: "https://www.northernbeaches.nsw.gov.au",
    da_tracker: "https://www.northernbeaches.nsw.gov.au/planning-and-development/application-search",
    planning: {
      dcp: "Warringah DCP 2011, Manly DCP 2013 or Pittwater 21 DCP, depending on the address",
      dcp_link: "https://www.northernbeaches.nsw.gov.au/planning-and-development/planning-controls",
      lep: "Warringah LEP 2011, Manly LEP 2013 or Pittwater LEP 2014, depending on the address",
      max_height: "Varies by site. Mostly low-rise, with taller controls in Dee Why, Brookvale and Manly. Check the relevant LEP Height of Buildings Map.",
      max_fsr: "Varies by site. Check the relevant LEP Floor Space Ratio Map.",
      local_controls: [
        "Three former-council LEPs and DCPs still apply. Check which one covers your address.",
        "Apartment and multi-unit proposals are reviewed by Council's Design and Sustainability Advisory Panel (DSAP)",
        "Council is preparing a single Northern Beaches LEP"
      ]
    },
    design_review: {
      has_panel: true,
      panel_name: "Northern Beaches Design and Sustainability Advisory Panel (DSAP)",
      notes: "Architects, urban designers, landscape and sustainability experts who advise on SEPP 65 applications, other multi-unit housing and planning proposals."
    },
    adg_notes: "The ADG applies to apartment buildings of 3 or more storeys with 4 or more dwellings (now under Chapter 4 of the Housing SEPP). Council's DCPs cannot set different standards for apartment size, ceiling height, solar access, natural ventilation, balconies or storage, so the ADG minimums are effectively the local standard.",
    market: {
      character: "Mostly low-density coastal suburbs. Apartments are concentrated in Dee Why, Brookvale and Manly, with a planned new town centre at Frenchs Forest.",
      developers: [],
      precincts: ["Dee Why", "Brookvale", "Manly", "Frenchs Forest", "Mona Vale"]
    },
    warnings: [
      "Apartments on Pittwater Road and Warringah Road can face heavy traffic noise. Check which rooms face the road.",
      "Coastal exposure can be hard on balconies, windows and finishes. Ask how materials were chosen for salt air.",
      "Because three different LEPs and DCPs apply, check which controls the building was assessed under."
    ],
    links: [
      { label: "Application search", url: "https://www.northernbeaches.nsw.gov.au/planning-and-development/application-search" },
      { label: "Planning controls", url: "https://www.northernbeaches.nsw.gov.au/planning-and-development/planning-controls" },
      { label: "Council Contact", url: "https://www.northernbeaches.nsw.gov.au/services/customer-services/contact-us" }
    ]
  }
};

// No build step: expose the data globally for index.html
window.lgaData = lgaData;
