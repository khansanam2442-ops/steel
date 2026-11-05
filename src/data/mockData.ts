import { Product, LandmarkProject, PlantFacility, JobOpening, PressRelease, InvestorReport } from '../types';

export const HERO_IMAGES = {
  steelMill: '/src/assets/images/hero_steel_mill_1793899464514.jpg',
  plantDawn: '/src/assets/images/manufacturing_plant_1793899465166.jpg',
  structuralProducts: '/src/assets/images/product_steel_beams_1793899465777.jpg',
  bridgeInfrastructure: '/src/assets/images/infra_bridge_project_1793899465107.jpg',
};

export const COMPANY_STATS = [
  { label: 'Annual Steel Capacity', value: '12.5 MTPA', sublabel: 'Integrated across 3 mega complexes' },
  { label: 'Longest Rail Sections', value: '260 Metres', sublabel: 'Single-piece head-hardened track' },
  { label: 'Global Footprint', value: '45+ Countries', sublabel: 'Exports to Europe, Americas & Asia' },
  { label: 'Renewable Power Mix', value: '1,450 MW', sublabel: 'Solar, wind & waste-heat recovery' },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'heavy-structural-sections',
    name: 'Universal Beams, Columns & Heavy Structurals',
    category: 'Structural Steel',
    subtitle: 'High-tensile parallel flange sections for seismic & high-rise architecture',
    description: 'Vanguard pioneered the domestic manufacturing of large-dimension parallel flange universal beams and column sections. Produced on advanced 4-high universal rolling mills with inline water-quenching technology for superior yield strength and uniform grain refinement.',
    standards: ['IS 2062:2011', 'EN 10025-2', 'ASTM A572 / A992', 'AS/NZS 3679.1'],
    grades: ['E250', 'E350', 'E450', 'S355JR / J0 / J2', 'S460ML', 'Grade 50'],
    dimensions: 'Depth 200mm to 1000mm, Flange Width 100mm to 450mm, Web thickness up to 50mm',
    applications: [
      'Supertall skyscrapers & commercial towers',
      'Long-span airport terminals and convention canopies',
      'Heavy industrial crane gantries and steel plant sheds',
      'Offshore drilling platform topsides'
    ],
    keyFeatures: [
      'Superior strength-to-weight ratio reducing total structural tonnage up to 18%',
      'Exceptional weldability with low carbon equivalent values (CEV < 0.42)',
      'Sub-zero impact toughness down to -40°C for cryogenic environments',
      'Precision dimensional tolerances minimizing fabrication re-work'
    ],
    brochureUrl: '/brochures/vanguard-heavy-structurals-spec.pdf',
    specTable: [
      { property: 'Yield Strength (Re)', value: '355 - 460 MPa min' },
      { property: 'Tensile Strength (Rm)', value: '490 - 630 MPa' },
      { property: 'Elongation (A5)', value: '≥ 22%' },
      { property: 'Charpy V-Notch Impact', value: '≥ 40J at -20°C / -40°C' },
      { property: 'Carbon Equivalent (CEV)', value: '≤ 0.41%' }
    ]
  },
  {
    id: 'head-hardened-rail',
    name: 'Head-Hardened & High-Speed Rails (60E1 / 1080HH)',
    category: 'Rail & Track',
    subtitle: 'World-class 1080 grade rails for high-speed corridors & heavy freight transit',
    description: 'Manufactured to stringent railway standards with automated online heat treatment. Vanguard produces single-piece rails up to 260 metres long, virtually eliminating welded joints, reducing track maintenance costs, and ensuring smooth, whisper-quiet high-speed transit.',
    standards: ['IRS T-12:2009', 'EN 13674-1', 'AREMA Chapter 4', 'UIC 860'],
    grades: ['R260', 'R350HT (1080 Head-Hardened)', 'R370CrHT (Corrosion Resistant)'],
    dimensions: 'Profile: 60E1, 52kg, 60kg, 136RE; Lengths: 13m to 260m continuous weld-free',
    applications: [
      'High-Speed Bullet Train corridors (350 km/h)',
      'Dedicated Heavy Freight Corridors (32.5 tonne axle loads)',
      'Urban Metro Rail transit networks & Monorails',
      'Port rail sidings and mining logistics arteries'
    ],
    keyFeatures: [
      'Superior railhead surface hardness (340 to 390 HBW) resists rolling contact fatigue',
      'Very low residual stress through computer-controlled vertical roller straightening',
      'Full-length automated phased-array ultrasonic and eddy-current defect inspection',
      'Zero decarburization layer on the running surface for extended fatigue life'
    ],
    brochureUrl: '/brochures/vanguard-rail-systems-1080hh.pdf',
    specTable: [
      { property: 'Head Hardness', value: '340 - 390 HBW' },
      { property: 'Tensile Strength (Rm)', value: '≥ 1080 MPa' },
      { property: 'Yield Strength (Re)', value: '≥ 640 MPa' },
      { property: 'Residual Stress', value: '< 200 MPa longitudinal' },
      { property: 'Hydrogen Content in Liquid Steel', value: '≤ 1.5 ppm' }
    ]
  },
  {
    id: 'heavy-plates-coils',
    name: 'Wide Heavy Plates & High-Strength Hot Rolled Coils',
    category: 'Plates & Coils',
    subtitle: 'Up to 5,000mm width plates from modern 4-High Steckel & Plate Mills',
    description: 'Thermo-mechanically rolled plates engineered for the most rigorous pressure vessel, marine shipbuilding, and cross-country gas pipeline environments. Enhanced through vacuum degassing and ladle desulfurization to attain ultra-low sulfur levels (S < 0.002%).',
    standards: ['API 5L (PSL2)', 'ASTM A516 / A537', 'EN 10028', 'DNV-GL / Lloyd\'s Register'],
    grades: ['API 5L X65 / X70 / X80 (Sour Service)', 'SA 516 Gr 70', 'NV E36', 'S690QL Quenched & Tempered'],
    dimensions: 'Thickness: 5mm to 160mm, Width: up to 5,000mm, Length: up to 25,000mm',
    applications: [
      'Deepwater subsea and cross-country hydrocarbon transmission pipelines',
      'Supercritical boiler drums and cryogenic LPG/LNG storage tanks',
      'Naval warships, defense hull plating and commercial ice-class vessels',
      'Wind turbine generator towers and monopiles'
    ],
    keyFeatures: [
      'Hydrogen-Induced Cracking (HIC) & Sulfide Stress Corrosion Cracking (SSCC) resistance',
      'Tight gauge uniformity across 5-metre plate width via hydraulic automatic gauge control',
      'Quenched and tempered state offering high yield with ductile fracture resistance',
      'Dual-certified for structural and pressure-bearing multi-code compliance'
    ],
    brochureUrl: '/brochures/vanguard-heavy-plates-api-spec.pdf',
    specTable: [
      { property: 'Thickness Tolerance', value: 'EN 10029 Class A / ASTM A6' },
      { property: 'Tensile Strength (Rm)', value: '535 - 760 MPa (Gr X70/SA516)' },
      { property: 'HIC Sensitivity (CLR/CTR)', value: 'CLR < 15%, CTR < 3%' },
      { property: 'Ultrasonic Quality Class', value: 'EN 10160 S2/E2 standard (S3/E3 available)' },
      { property: 'Cleanliness Index', value: 'Total Oxygen < 15 ppm' }
    ]
  },
  {
    id: 'vanguard-tmt-rebars',
    name: 'Vanguard Thermo-Mechanically Treated (TMT) Rebars',
    category: 'Rebars & TMT',
    subtitle: '550D & 600 High-Ductility corrosion-resistant concrete reinforcing bars',
    description: 'Manufactured using primary virgin liquid steel route with proprietary inline Quenching & Self-Tempering (QST) technology. Features a tempered martensitic outer ring and ductile ferritic-pearlitic core, delivering unmatched earthquake resistance and fire safety.',
    standards: ['IS 1786:2008 (Fe 550D / Fe 600)', 'BS 4449 Grade B500B', 'ASTM A615 / A706'],
    grades: ['Fe 550D Super Ductile', 'Fe 600', 'CRS (Corrosion Resistant Steel)', 'Epoxy Coated TMT'],
    dimensions: 'Diameter 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm, 36mm, 40mm',
    applications: [
      'Seismic Zones IV and V critical infrastructure',
      'Nuclear containment domes and thermal power plant foundations',
      'Marine docks, jetties and coastal expressways (CRS Grade)',
      'Metro viaducts, bridge piers and pre-cast segmental girders'
    ],
    keyFeatures: [
      'High uniform elongation (UEL ≥ 16%) for exceptional plastic deformation during earthquakes',
      'Superior thermal resistance up to 500°C without loss of structural integrity',
      'Enhanced rib geometry engineered for 40% higher bonding with high-grade concrete',
      'Copper-Chromium micro-alloying in CRS variant to resist chloride attack in coastal soils'
    ],
    brochureUrl: '/brochures/vanguard-tmt-550d-brochure.pdf',
    specTable: [
      { property: '0.2% Proof Stress (Yield)', value: '≥ 550 MPa (Fe 550D)' },
      { property: 'Tensile-to-Yield Ratio (Rm/Re)', value: '≥ 1.12 (High seismic resistance)' },
      { property: 'Total Elongation (A5)', value: '≥ 16.0%' },
      { property: 'Bend & Rebend Mandrel', value: '3d / 4d with zero crack formation' },
      { property: 'Corrosion Resistance', value: '3x extended service life over standard steel' }
    ]
  },
  {
    id: 'wire-rods-special-alloys',
    name: 'Low & Medium Carbon Wire Rods and Special Alloy Billets',
    category: 'Wire Rods',
    subtitle: 'Precision drawn wire rods for tyre cord, fastener, welding & spring applications',
    description: 'Produced on high-speed single-strand wire rod mills equipped with Stelmor controlled cooling conveyor systems. Guarantees tight ovality, decarburization control, and tailored microstructure for intense cold-heading and fine wire drawing.',
    standards: ['IS 7887', 'DIN 17140', 'JIS G3505', 'ASTM A510'],
    grades: ['Low Carbon (1006/1008)', 'High Carbon (HC72A/HC82B)', 'CHQ Fastener Grade', 'Electrode Quality'],
    dimensions: 'Diameter: 5.5mm to 22.0mm in compact coils up to 2,500 kg',
    applications: [
      'Automotive radial tyre cord and bead wire',
      'High-tensile fasteners, bolts and studs (Class 8.8, 10.9, 12.9)',
      'Submerged arc welding wires and flux-cored filler wire',
      'Pre-stressed Concrete (PC) wire and suspension bridge strand cables'
    ],
    keyFeatures: [
      'Minimal scale thickness (< 0.5%) enabling rapid mechanical descaling',
      'Uniform fine pearlitic structure enabling reduction up to 0.15mm diameter without patenting',
      'Ultra-low inclusion rating (ASTM E45 Class A/B/C/D Thin ≤ 1.0)',
      'Precise coil lay pattern with zero entanglement during continuous high-speed drawing'
    ],
    brochureUrl: '/brochures/vanguard-wirerods-speciality.pdf',
    specTable: [
      { property: 'Dimensional Tolerance', value: '± 0.20 mm diameter, Ovality ≤ 0.25 mm' },
      { property: 'Tensile Strength (HC82B)', value: '1100 - 1250 MPa' },
      { property: 'Reduction of Area (Z%)', value: '≥ 35%' },
      { property: 'Decarburization Depth', value: 'Total de-carb ≤ 1.0% of wire diameter' },
      { property: 'Surface Quality', value: 'Eddy Current inspected 100% defect-free' }
    ]
  },
  {
    id: 'fabricated-heavy-sections',
    name: 'Engineered Fabricated Beams & Box Girders',
    category: 'Special Alloys',
    subtitle: 'Pre-engineered submerged-arc welded bridge box girders and nodal joints',
    description: 'Custom fabricated heavy plate girders and curved box girders manufactured in automated fabrication bays equipped with CNC multi-torch profile cutting, continuous tandem SAW welding, and grit blasting to SA 2.5 finish.',
    standards: ['AWS D1.1 / D1.5 Bridge Welding Code', 'EN 1090-2 EXC4', 'IS 800'],
    grades: ['E350BR / BO', 'E450BR', 'S355K2+N', 'Weathering Steel (Corten)'],
    dimensions: 'Girders up to 4,500mm depth, lengths up to 40m single piece, weight up to 120 MT per unit',
    applications: [
      'Cable-stayed and balanced cantilever railway and road bridges',
      'Heavy industrial crane runways in blast furnace and rolling mill sheds',
      'Sports stadium roof cantilever trusses and spatial domes',
      'Seismic nodal transfer trusses in commercial superstructures'
    ],
    keyFeatures: [
      '100% full-penetration butt welds tested with Radiographic (RT) and Ultrasonic (UT) testing',
      'Multi-coat inorganic zinc silicate & polyurethane high-durability marine paint systems',
      'Pre-assembled trial erection in plant to guarantee zero site fit-up deviation',
      'Modular design optimized for road trailer and rail flatcar transit'
    ],
    brochureUrl: '/brochures/vanguard-fabricated-girders.pdf',
    specTable: [
      { property: 'Welding Qualification', value: 'WPS / PQR qualified to AWS D1.5 & EN ISO 15614' },
      { property: 'Flange Flatness', value: 'Within 1.5mm per 1,000mm width' },
      { property: 'Camber Accuracy', value: '± 3mm against theoretical engineer profile' },
      { property: 'Surface Prep', value: 'Grit Blasting to Swedish SA 2.5 standard' },
      { property: 'Corrosion Warranty', value: 'Up to 25 years with high-performance epoxy-polyurethane' }
    ]
  }
];

export const LANDMARK_PROJECTS: LandmarkProject[] = [
  {
    id: 'national-high-speed-rail',
    title: 'Bullet Train Rail Corridor & Elevated Viaducts',
    category: 'Rail Transit',
    location: '508 km Corridor Network',
    steelSupplied: '185,000 Metric Tonnes',
    year: '2023 - 2026',
    highlight: '60E1 1080 Head-Hardened Rails and Seismic-Class Fe 550D Pier Rebars',
    description: 'Supplied high-performance 1080 Head-Hardened single-length rails and high-ductility rebar for high-speed passenger operations operating at 320 km/h. Vanguard steel enables vibration attenuation and 40% reduction in track lifecycle maintenance.',
    gradesUsed: ['60E1 R350HT', 'Fe 550D Super Ductile', 'E410 Grade Plates']
  },
  {
    id: 'chenab-gorge-arch-bridge',
    title: 'World\'s Highest Railway Arch Bridge',
    category: 'Bridges & Highways',
    location: 'Deep Himalayan Gorge (359m above river)',
    steelSupplied: '28,000 Metric Tonnes Special Structural Steel',
    year: '2021 - 2025',
    highlight: 'Sub-zero impact resistant steel tested to -40°C with blast-resistant design',
    description: 'An engineering triumph spanning a deep mountainous ravine. Vanguard developed custom micro-alloyed plates capable of absorbing intense wind gusts up to 266 km/h and high-velocity seismic tremors while enduring Himalayan winters without brittle cleavage.',
    gradesUsed: ['S355J2+N', 'S460ML Custom Spec', 'E350BO Heavy Plates']
  },
  {
    id: 'trans-coastal-sea-link',
    title: '21.8 km Marine Trans-Harbour Expressway',
    category: 'Bridges & Highways',
    location: 'Coastal Deepwater Estuary',
    steelSupplied: '92,000 Metric Tonnes Orthotropic Steel Decks & CRS Rebar',
    year: '2022 - 2024',
    highlight: 'Orthotropic steel deck plates with 100-year marine corrosion protection',
    description: 'Longest sea bridge constructed using corrosion-resistant steel plates with micro-alloyed copper and phosphorus. Allowed ultra-wide navigational spans up to 180 metres without intermediate sea piers, safeguarding marine transit channels.',
    gradesUsed: ['Copper-Bearing CRS 500D', 'EN 10025-5 S355J2W (Weathering)', 'SAW Box Girders']
  },
  {
    id: 'supercritical-energy-complex',
    title: '4,000 MW Supercritical Thermal & Nuclear Power Island',
    category: 'Energy & Power',
    location: 'Central Power Hub',
    steelSupplied: '140,000 Metric Tonnes Boiler Drums & Heavy Structural Frames',
    year: '2020 - 2025',
    highlight: 'High-temperature creep-resistant SA 387 alloy plates and heavy columns',
    description: 'Critical containment shells, boiler support structures, and steam generation tubing engineered to endure sustained temperatures exceeding 585°C and 27 MPa operating pressures with zero dimensional creep.',
    gradesUsed: ['SA 387 Gr 11 / Gr 22', 'ASTM A516 Gr 70', 'Heavy UC 356x406x634 kg/m']
  },
  {
    id: 'skyline-commercial-citadel',
    title: '85-Storey Iconic Financial Tower',
    category: 'Skyscrapers',
    location: 'Metropolitan Financial District',
    steelSupplied: '48,000 Metric Tonnes Jumbo Universal Columns & Outrigger Trusses',
    year: '2023 - 2026',
    highlight: 'Composite mega-columns utilizing E450 high-yield parallel flange beams',
    description: 'Enabled expansive column-free trading floors and wind-sway mitigation through a steel outrigger belt truss system. Cut structural erection time by 5 months compared to traditional cast concrete construction.',
    gradesUsed: ['E450 Grade Universal Columns', 'S460 High-Strength Plates', 'Composite Shear Connectors']
  }
];

export const MANUFACTURING_STEPS = [
  {
    step: '01',
    title: 'Raw Materials & Captive Beneficiation',
    summary: 'High-grade hematite iron ore and premium metallurgical coking coal sourced through captive mines and automated beneficiation wash plants to optimize Fe content > 65%.',
    iconName: 'Pickaxe',
    stats: '100% captive raw material integration',
    detail: 'Beneficiation plants employ advanced gravity separation, hydro-cyclones, and vacuum disk filtration, converting low-grade fines into high-density pellets (8.5 MTPA) for low-emission smelting.'
  },
  {
    step: '02',
    title: 'Iron Making: Blast Furnace & Green DRI',
    summary: 'Hybrid smelting architecture combining state-of-the-art 4,500m³ blast furnaces with synthesis-gas / green-hydrogen ready Direct Reduced Iron (DRI) shafts.',
    iconName: 'Flame',
    stats: '4,500 m³ furnace volume · Top gas recovery turbines',
    detail: 'Equipped with pulverized coal injection (PCI), oxygen enrichment, and bell-less top charging systems. Captures waste blast furnace gas to generate 450 MW of clean captive electricity.'
  },
  {
    step: '03',
    title: 'Steel Refining & Secondary Metallurgy',
    summary: 'Molten hot metal transferred via torpedo ladles to 250-tonne Top-and-Bottom blown Basic Oxygen Furnaces (BOF) and Ultra-High Power Electric Arc Furnaces (EAF).',
    iconName: 'Zap',
    stats: 'Ultra-low sulfur S < 0.002% · Vacuum Degassing',
    detail: 'Secondary refining in twin Ladle Refining Furnaces (LRF) and vacuum degassing (VD/RH) units strips gaseous impurities (hydrogen < 1.5 ppm, nitrogen < 50 ppm) for aerospace-grade cleanliness.'
  },
  {
    step: '04',
    title: 'Continuous Billet, Bloom & Slab Casting',
    summary: 'Multi-strand curved continuous casters casting high-dimension slabs up to 300mm thickness and blooms up to 400x500mm with electromagnetic stirring.',
    iconName: 'Layers',
    stats: 'Inline dynamic soft reduction · Zero centerline segregation',
    detail: 'Dynamic secondary cooling spray algorithms and radiographically controlled mould level sensors guarantee pristine subsurface quality and minimize internal core porosity.'
  },
  {
    step: '05',
    title: 'Specialized Rolling Mills & Heat Treatment',
    summary: 'World-renowned rolling complexes: Universal Rail & Beam Mill (URBM), 5-Metre Wide Plate Mill, and High-Speed Wire Rod Mills with inline heat treatment.',
    iconName: 'Cpu',
    stats: '260-metre continuous rail rolling · Thermo-mechanical rolling',
    detail: 'Automated hydraulic screwdowns and roll-eccentricity compensation provide ultra-precise thickness tolerances within ± 0.1mm. Inline head-hardening sprays deep pearlitic microstructures.'
  },
  {
    step: '06',
    title: 'Non-Destructive Testing & Global Dispatch',
    summary: '100% automated Phased Array Ultrasonic, Eddy Current, and laser surface geometry scanning prior to barcoding and multi-modal logistics dispatch.',
    iconName: 'ShieldCheck',
    stats: 'Zero-defect certified · Direct inland rail siding connectivity',
    detail: 'Every bundle and plate is permanently laser-etched with QR codes linked to mill test certificates (EN 10204 Type 3.1/3.2), verified in NABL and ISO 17025 accredited physical-chemical testing labs.'
  }
];

export const PLANT_FACILITIES: PlantFacility[] = [
  {
    id: 'angul-integrated-complex',
    name: 'Angul Mega Steel Complex',
    location: 'Odisha, India',
    type: 'Integrated Blast Furnace & DRI Steelworks',
    capacity: '6.0 MTPA (Expanding to 12.0 MTPA)',
    keyUnits: ['4,500 m³ Blast Furnace', 'Synthesis Gas DRI Plant', '5m Wide Plate Mill', '1,050 MW Captive Power'],
    description: 'Vanguard\'s flagship coastal-proximate mega complex, celebrated as one of the world\'s most technologically advanced integrated steel plants with zero effluent discharge and integrated rail sidings.'
  },
  {
    id: 'raigarh-industrial-works',
    name: 'Raigarh Industrial & Rail Works',
    location: 'Chhattisgarh, India',
    type: 'Pioneer Rail & Structural Steel Complex',
    capacity: '4.5 MTPA Finished Products',
    keyUnits: ['Universal Rail & Section Mill', 'Medium & Light Structural Mill', 'Coal Washery & Sinter Plants', 'Sponge Iron Kilns'],
    description: 'Birthplace of Vanguard\'s world-record 260m long rails and heavy universal columns. Houses our central metallurgy research institute and NABL certified testing center.'
  },
  {
    id: 'patratu-rolling-mills',
    name: 'Patratu Precision Rolling Complex',
    location: 'Jharkhand, India',
    type: 'High-Speed Wire Rod & Rebar Mill',
    capacity: '2.0 MTPA Finished Steel',
    keyUnits: ['Morgan High-Speed Wire Rod Mill', 'Bar Rolling Mill', 'Automated TMT Finishing Line'],
    description: 'Specializes in high-tensile earthquake-resistant TMT rebars, pre-stressed concrete wire rods, and automotive cold-heading grades with automated bundling and robotic tagging.'
  }
];

export const SUSTAINABILITY_PILLARS = [
  {
    title: 'Decarbonization & Green Hydrogen',
    target: '0.65 tCO₂ / tonne of crude steel by 2030',
    description: 'Transitioning from coal-based reduction to clean synthesis gas and green hydrogen DRI pathways, coupled with carbon capture, utilization, and storage (CCUS) pilot units.',
    icon: 'Leaf'
  },
  {
    title: 'Circular Economy & 100% Slag Valorization',
    target: 'Zero Solid Waste to Landfills',
    description: '100% of blast furnace granulated slag is converted into Portland Slag Cement (PSC) and road base aggregates, conserving millions of tonnes of natural limestone.',
    icon: 'RefreshCw'
  },
  {
    title: 'Zero Liquid Discharge (ZLD) & Water Stewardship',
    target: 'Specific Water Consumption < 2.1 m³/tcs',
    description: 'Comprehensive effluent treatment plants with reverse osmosis, multi-effect evaporators, and expansive rainwater retention reservoirs recharging local aquifers.',
    icon: 'Droplets'
  },
  {
    title: 'Renewable Energy Integration',
    target: '1,450 MW Operational Green Power Capacity',
    description: 'Utility-scale solar farms, wind turbine installations, and top-gas recovery turbine (TRT) power generation operating round-the-clock across manufacturing assets.',
    icon: 'Sun'
  }
];

export const CSR_INITIATIVES = [
  {
    program: 'Vanguard Technical Skill Academies',
    reach: '42,000+ Youths Certified',
    description: 'Free vocational training in high-precision CNC machining, robotic welding, electrical instrumentation, and industrial mechatronics with guaranteed placement assistance.'
  },
  {
    program: 'Aarogya Rural Healthcare Foundation',
    reach: '380,000+ Patient Consultations',
    description: 'Network of 3 multi-speciality charitable hospitals, 14 mobile medical units, and child immunization camps delivering world-class healthcare to mining and plant communities.'
  },
  {
    program: 'Clean Water & Watershed Development',
    reach: '115 Villages Supported',
    description: 'Installation of automated solar-powered RO water filtration kiosks and creation of 45 check dams reviving seasonal river basins and irrigation for farming families.'
  }
];

export const PRESS_RELEASES: PressRelease[] = [
  {
    id: 'pr-q3-results-2026',
    title: 'Vanguard Steel Reports Record Q3 FY26 Operating EBITDA of $480M; Steel Shipments Up 14%',
    date: 'February 12, 2026',
    category: 'Financial',
    summary: 'Robust domestic infrastructure demand and record-breaking shipments of head-hardened rails drive 18% YoY net revenue growth to $2.1B.',
    fullText: 'Vanguard Steel and Infrastructure Limited today announced its consolidated financial results for the third quarter ended December 31, 2025. The company delivered its strongest operating performance in corporate history, driven by strong volumes from high-speed railway contracts and expanding exports to Southeast Asian and European markets. Consolidated net debt reduced by $310M during the quarter.',
    readTime: '3 min read'
  },
  {
    id: 'pr-green-hydrogen-mou',
    title: 'Vanguard Signs Strategic Pact for 100 MW Green Hydrogen Electrolyzer at Angul Mega Works',
    date: 'January 28, 2026',
    category: 'Sustainability',
    summary: 'Milestone green steel initiative will displace 180,000 MT of coking coal emissions annually in direct reduction operations.',
    fullText: 'In a transformative stride toward net-zero industrial manufacturing, Vanguard Steel has finalized an engineering consortium agreement to erect a 100 MW pressurized alkaline electrolyzer facility at its Angul plant. The green hydrogen generated will be directly injected into the Direct Reduced Iron shaft furnace, marking India\'s largest commercial decarbonization deployment in heavy metallurgy.',
    readTime: '4 min read'
  },
  {
    id: 'pr-rail-contract-award',
    title: 'Vanguard Secures Marquee 120,000 MT Head-Hardened Rail Order for High-Speed Transit Corridor',
    date: 'January 09, 2026',
    category: 'Expansion',
    summary: 'Consortium selects Vanguard\'s 260m long 60E1 1080HH rail tracks for the country\'s next-generation regional commuter rapid rail network.',
    fullText: 'Vanguard Steel has been awarded the sole supply contract for 120,000 metric tonnes of 60E1 profile 1080 Head-Hardened continuous rails. These track components undergo computer-controlled online quenching to achieve minimum surface hardness of 350 HBW, engineered to support train speeds up to 200 km/h with 40-year designed fatigue endurance.',
    readTime: '3 min read'
  },
  {
    id: 'pr-esg-rating-upgrade',
    title: 'Vanguard Steel Awarded \'Gold\' Sustainability Leadership Rating by Global ESG Index',
    date: 'November 24, 2025',
    category: 'Sustainability',
    summary: 'Recognition underscores industry-leading water recycling rates, safety records, and captive biodiversity conservation corridors.',
    fullText: 'Global industrial rating agency has upgraded Vanguard Steel\'s ESG rating to \'Gold\', positioning the corporation in the top 5th percentile of worldwide steel producers. The report specifically commended Vanguard\'s 100% slag utilization in green cement and zero fatality track record over 35 million man-hours.',
    readTime: '2 min read'
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'lead-metallurgy-engineer',
    title: 'Lead Metallurgist – High-Strength Alloy Development',
    department: 'Metallurgy & R&D',
    location: 'Angul Research Center, Odisha',
    experience: '8 - 12 Years',
    type: 'Full-time',
    description: 'Lead research into thermo-mechanically controlled processing (TMCP), ultra-clean steel vacuum degassing, and high-strength low-alloy (HSLA) plates for cryogenic and defense applications.',
    requirements: [
      'Master\'s or Ph.D. in Metallurgical Engineering / Materials Science',
      'Hands-on expertise with thermodynamic simulation (Thermo-Calc / Dictra)',
      'Demonstrated experience with continuous casting dynamic soft reduction and hot plate rolling',
      'Deep familiarity with ASTM, API, and EN steel product standards'
    ],
    postedDate: 'Posted 4 days ago'
  },
  {
    id: 'rolling-mill-operations-manager',
    title: 'Operations Manager – Universal Rail & Section Mill',
    department: 'Operations & Maintenance',
    location: 'Raigarh Works, Chhattisgarh',
    experience: '10 - 15 Years',
    type: 'Full-time',
    description: 'Direct 24/7 manufacturing operations of our 1.5 MTPA Universal Rail and Beam Mill, ensuring optimal roll pass design, inline water cooling controls, and zero dimensional deviation.',
    requirements: [
      'B.Tech / B.E. in Mechanical or Metallurgical Engineering',
      'Minimum 8 years in heavy structural steel or rail rolling mills',
      'Proficiency in Siemens / ABB mill automation and roll shop maintenance',
      'Proven leadership managing teams of 200+ engineers and technicians'
    ],
    postedDate: 'Posted 1 week ago'
  },
  {
    id: 'decarbonization-scada-specialist',
    title: 'Lead Engineer – Blast Furnace & DRI Energy Optimization',
    department: 'Safety & Environment',
    location: 'Angul Mega Complex, Odisha',
    experience: '5 - 8 Years',
    type: 'Full-time',
    description: 'Spearhead energy recovery initiatives, blast furnace top-gas turbine optimization, and integration of hydrogen fuel blends into direct reduction shafts.',
    requirements: [
      'Degree in Chemical / Energy / Mechanical Engineering',
      'Experience in thermal energy audits of heavy industrial furnaces and gas networks',
      'Knowledge of CCUS systems, ISO 50001 energy management frameworks',
      'Strong data analytics skills in Python or MATLAB for process modeling'
    ],
    postedDate: 'Posted 2 weeks ago'
  },
  {
    id: 'graduate-engineer-trainee-2026',
    title: 'Graduate Engineer Trainees (GET) – Batch of 2026',
    department: 'Corporate & Finance',
    location: 'Multiple Manufacturing Locations',
    experience: 'Fresh Graduates',
    type: 'Full-time',
    description: 'Vanguard\'s prestigious fast-track leadership incubation program. 12 months of structured rotation across Blast Furnaces, Plate Mills, Quality Labs, and Supply Chain.',
    requirements: [
      'B.E. / B.Tech in Metallurgy, Mechanical, Electrical, Instrumentation, or Chemical Engineering',
      'Minimum 70% or 7.5 CGPA throughout academic career with no active backlogs',
      'Strong analytical reasoning, passion for core industrial manufacturing, and team spirit'
    ],
    postedDate: 'Campus & Open Drive'
  }
];

export const INVESTOR_REPORTS: InvestorReport[] = [
  {
    title: 'Integrated Annual Report & Financial Statements 2024-25',
    fiscalPeriod: 'FY 2024-25',
    type: 'Annual Report',
    fileSize: '14.2 MB PDF',
    publishDate: 'June 2025'
  },
  {
    title: 'Q3 FY26 Unaudited Financial Results & Press Release',
    fiscalPeriod: 'Q3 FY 2025-26',
    type: 'Quarterly Results',
    fileSize: '2.8 MB PDF',
    publishDate: 'February 2026'
  },
  {
    title: 'Q3 FY26 Institutional Investor & Analyst Presentation',
    fiscalPeriod: 'Q3 FY 2025-26',
    type: 'Earnings Presentation',
    fileSize: '6.4 MB PDF',
    publishDate: 'February 2026'
  },
  {
    title: 'Sustainability & Business Responsibility Report (BRSR)',
    fiscalPeriod: 'FY 2024-25',
    type: 'ESG Disclosure',
    fileSize: '8.9 MB PDF',
    publishDate: 'July 2025'
  },
  {
    title: 'Corporate Governance Report & Board Committee Charters',
    fiscalPeriod: 'FY 2024-25',
    type: 'ESG Disclosure',
    fileSize: '1.9 MB PDF',
    publishDate: 'August 2025'
  }
];

export const LEADERSHIP_TEAM = [
  {
    name: 'Vikramaditya Singhania',
    role: 'Executive Chairman',
    bio: 'Pioneered India\'s heavy structural steel and high-speed rail manufacturing revolution. Over three decades of industrial stewardship driving sustainable nation-building.',
    credentials: 'B.S. Metallurgical Engineering, MIT; Industrialist of the Decade Awardee'
  },
  {
    name: 'Dr. Aruna Sengupta',
    role: 'Managing Director & CEO',
    bio: 'Former head of global operations at leading multinational metallurgy groups. Champion of lean digital manufacturing, employee safety, and international export growth.',
    credentials: 'Ph.D. in Materials Engineering, Imperial College London; MBA, INSEAD'
  },
  {
    name: 'Kavita Chidambaram',
    role: 'Chief Technology & Sustainability Officer',
    bio: 'Architect of Vanguard\'s 2030 Net-Zero roadmap, patent holder in low-temperature DRI synthesis, and member of the Global Green Steel Council.',
    credentials: 'M.Tech Metallurgy, IIT Kharagpur; Fulbright Fellow in Industrial Decarbonization'
  },
  {
    name: 'Rajeev Malhotra',
    role: 'Chief Financial Officer',
    bio: 'Over 25 years of capital markets expertise managing balance sheet deleveraging, multi-billion-dollar CAPEX financing, and investor relations excellence.',
    credentials: 'FCA, Institute of Chartered Accountants; B.Com (Hons), SRCC New Delhi'
  }
];

export const MILESTONES = [
  { year: '1984', title: 'Founding Vision', desc: 'Commenced operations with our first sponge iron rotary kiln in Raigarh, pioneering coal-based direct reduction.' },
  { year: '1998', title: 'Integrated Steelmaking', desc: 'Commissioned first captive blast furnace and electric arc furnace facility, reaching 1.0 MTPA capacity.' },
  { year: '2008', title: 'World Record Rail Mill', desc: 'Erected India\'s first Universal Rail & Beam Mill, manufacturing 120-metre single-piece rails for Indian Railways.' },
  { year: '2016', title: 'Angul Mega Works Expansion', desc: 'Inaugurated 6.0 MTPA integrated steel plant with 5-metre wide heavy plate mill for defense and subsea pipelines.' },
  { year: '2022', title: '260m Head-Hardened Rails', desc: 'Achieved technological breakthrough rolling 260-metre continuous head-hardened rails for Dedicated Freight Corridors.' },
  { year: '2026', title: 'Green Steel Frontier', desc: 'Reached 12.5 MTPA capacity with groundbreaking 100 MW green hydrogen direct reduction commercial pilot.' }
];

export const REGIONAL_OFFICES = [
  {
    city: 'New Delhi (Corporate Headquarters)',
    address: 'Vanguard Centre, 12 Barakhamba Road, Connaught Place, New Delhi – 110001, India',
    phone: '+91 (11) 4890-7000',
    email: 'corporate@vanguardsteel.com',
    type: 'Global Headquarters'
  },
  {
    city: 'Mumbai (Commercial & Finance Hub)',
    address: 'Maker Chambers VI, 14th Floor, Nariman Point, Mumbai – 400021, India',
    phone: '+91 (22) 6720-3500',
    email: 'commercial.west@vanguardsteel.com',
    type: 'Regional Sales Office'
  },
  {
    city: 'Kolkata (Eastern Operations Office)',
    address: 'Camac Street Industrial Tower, 9th Floor, Kolkata – 700016, India',
    phone: '+91 (33) 2289-4100',
    email: 'sales.east@vanguardsteel.com',
    type: 'Regional Sales Office'
  },
  {
    city: 'Bengaluru (Tech & South Regional)',
    address: 'Prestige Meridian, 8th Floor, M.G. Road, Bengaluru – 560001, India',
    phone: '+91 (80) 4150-8800',
    email: 'sales.south@vanguardsteel.com',
    type: 'Regional Sales Office'
  },
  {
    city: 'London (European Commercial Office)',
    address: '1 Angel Court, Bank, London EC2R 7HJ, United Kingdom',
    phone: '+44 20 7946 0912',
    email: 'europe@vanguardsteel.com',
    type: 'International Office'
  },
  {
    city: 'Dubai (Middle East & Africa Hub)',
    address: 'DIFC Gate Precinct Building 4, Level 6, Dubai, UAE',
    phone: '+971 4 362 7700',
    email: 'mea@vanguardsteel.com',
    type: 'International Office'
  }
];
