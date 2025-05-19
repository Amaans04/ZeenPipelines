export interface Product {
  id: string;
  category: string;
  name: string;
  types: string[];
  materialGrades: string[];
  image: string;
  features?: string[];
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: "pipes",
    category: "pipes",
    name: "Pipes",
    types: [
      "Seamless, Welded, ERW, EFW, SAW, LSAW with 2 layer and 3 layer PEcoating & cement lining"
    ],
    materialGrades: [
      "A106 GR.B/A53.B/API 5L GR.B,A333 GR.3&GR.6. SS A312 TP304/304L,TP316/316L,F321 API 5LX42 upto X80 PSL 1& PSL2, A335 P5,P11,P22 & P91"
    ],
    image: "/products/Pipe.webp",
    features: [
      "High strength and durability",
      "Excellent corrosion resistance",
      "Suitable for high-pressure applications",
      "Wide range of sizes available"
    ],
    sizes: ["½\" to 84\" – varying with material grade."]
  },
  {
    id: "valves",
    category: "valves",
    name: "Valves",
    types: [
      "Ball Valves, Butterfly Valves, Check Valves, Diaphragm Valves, Float Valves , Gate Valves Globe Valves Needle Valves, Plug Valves, Solenoid Valves, Control Vlves Actuators"
    ],
    materialGrades: [
      "ASTM A216 WCB, WC6, WC7 ASTM A 105, ASTM A182 F304/ 304L ASTM A 182 F316/316L, A351 CF3, A351 CF3M, A351CF8, A351CF8M, ASTM A 182 F22, etc."
    ],
    image: "/products/Valves.webp",
    features: [
      "Full bore design",
      "Rising stem operation",
      "Metal-to-metal seating",
      "Fire-safe design"
    ],
    sizes: ["1/2″ to 84″,#150-#2500 Varying With Material Grades."]
  },
  {
    id: "Fittings",
    category: "Fittings",
    name: "Fittings",
    types: [
      "Elbow 90° LR/SR, 180° LR/SR, Elbow 45° LR, Equal Tee, Reducing Tee, Transition Pieces 5 Deg to 89 Deg, Flanged Fittings, Fittings With Pigging / scraper Bars, Fabricated Spool Pieces. Concentric and Eccentric Reducers, Caps From SCH STD to SCH XXS or Higher as Per Requirement."
    ],
    materialGrades: [
      "Carbon steel, Stainless steel, Alloy steel, Nickel alloys, Hastelloy, Inconel, Duplex, Super Duplex and other Austenitic Steel Grads."
    ],
    image: "/products/Fittings.webp",
    features: [
      "High-pressure resistance",
      "Excellent stress distribution",
      "Smooth bore transition",
      "Radiographic inspection available"
    ],
    sizes: ["½” TO 84” – Varying with material grades."]
  },
  {
    id: "Flanges",
    category: "Flanges",
    name: "Flanges",
    types: [
      "Weld-Neck, Slip-on, Blind, Socket Welded, Lap Joint, Threded Flanges ASME B 16.5 form ½” to 24”and class 150 to 2500 as per ASTM A105N/A350 LF2/A694F52.Duplex and Chrome Moly up to 10,000 PSI."
    ],
    materialGrades: [
      "ASTM A 105 N,ASTM A 350 LF2/LF3,F 304/F 304 L, A 182, F5,F11,F22,F91,F316/316L,F321,F347H, F51 ASTM A694 F42 upto X80, PN10,PN16,5K, 10K,20K,30K,50K, & API Type 6A-6BX Flanges"
    ],
    image: "/products/Flanges.webp",
    features: [
      "Seamless construction",
      "Smooth bore design",
      "Full penetration welds",
      "Available in multiple configurations"
    ],
    sizes: ["½” to 84” and above for all grade materials,where 24” & Above are available in ASME B16.47 Series A(MSS-SP-44) And series B.(API 605).DIN/JIS/PN also available."]
  },
  {
    id: "Gaskets&Sealants",
    category: "Gaskets & Sealants",
    name: "Gaskets & Sealants",
    types: [
      "Spiral Wound Ring Joint, Ring Joint, Oct & Oval Ring, Caf, Cnaf, Epdm, Viton, Neopropane Rubber In According to ASME B16.20"
    ],
    materialGrades: [
      "Carbon Steel, Stainless Steel, Alloy Steel, Nickel Alloys, Hastelloy,Inconel, Duplex, Super Duples And Other Austenitic Steel Grads."
    ],
    image: "/products/Gaskets & Sealants.webp",
    features: [
      "High temperature resistance",
      "Excellent compression recovery",
      "Multiple material combinations",
      "Inner and outer rings available"
    ],
    sizes: ["½\" to 24\"", "Class 150 to 2500"]
  },
  {
    id: "Filter & Strainer",
    category: "Filter & Strainer",
    name: "Filter & Strainer",
    types: [
      "Y strainers, Basket strainers, Duplex Strainers, Tee strainers, Temporary strainers, Fabricated strainers, Flanged Horizontal Swing Check Valve, Wafer Swing Check Valve, Globe or Silent Check Valves."
    ],
    materialGrades: [
    ],
    image: "/products/Filter & Strainer.webp",
    features: [
      "High tensile strength",
      "Threaded both ends",
      "Available in various lengths",
      "Multiple material grades"
    ],
    sizes: ["M10 to M64", "½\" to 2-1/2\""]
  },
  // New Products
  {
    id: "Instrumentation Tubing, Fittings, Valves & Gauges",
    category: "Instrumentation Tubing, Fittings, Valves & Gauges",
    name: "Instrumentation Tubing, Fittings, Valves & Gauges",
    types: ["Medium (Up to 20,000 psi) and High (Up to 60,000 psi) Pressure Fittings& Tubing , Compression Pipe Fittings (6,000 psi to 15,000 psi), Double Ferrule Fittings & Instrumentation Tubing (Up to 15,000 psi) , High and Medium Pressure Adapters (Up to 60,000 psi), Male x Female Adapters, Male x Male Adapters & Female x Female Adapters, Check & Needle Valves (Up to 60,000 psi) , Specialty Needle Valves , Wellhead Gauge Valve, Bleed Valve, Single Block & Bleed Needle Valve, Double Block & Bleed Needle Valve & Bottle Valves (Up to 15,000 psi) , 2/3 Way Ball Valves (Up to 20,000 psi) , Double Block & Bleed Ball Valves , Distribution Manifold Valves , Instrumentation – Pressure Gauge (Up to 150,000 psi or 10,000 bar) , Low to High Pressure Industrial & Hydraulic Hoses (250 psi to 10,000 psi"],
    materialGrades: ["Carbon Steel", "Stainless Steel", "Alloy Steel"],
    image: "products/InstrumentationTuing.webp",
    features: [
      "Quarter-turn operation",
      "Full port design",
      "Fire-safe construction",
      "Anti-static design"
    ],
    sizes: ["1/2\" to 12\"", "Class 150 to 1500"]
  },
  {
    id: "Structural Steel",
    category: "Structural Steel",
    name: "Structural Steel",
    types: ["BEAMS, CHANNELS , ANGLES , FLAT,ROUND & SQUARE BARS , HOT ROLLED SHEETS/COILS/PLATE , CHEQUERED PLATE , TMT/QST BARS"],
    materialGrades: ["Carbon Steel", "Stainless Steel", "Alloy Steel"],
    image: "/products/StructuralSteel.webp",
    features: [
      "Quarter-turn operation",
      "Full port design",
      "Fire-safe construction",
      "Anti-static design"
    ],
    sizes: ["1/2\" to 12\"", "Class 150 to 1500"]
  },
  {
    id: "Industrial Bearings",
    category: "Industrial Bearings",
    name: "Industrial Bearings",
    types: ["MAGNATIC BEARINGS , THRUST BEARINGS , BALL BEARINGS , Insert bearings (Y-bearings) , FLANGE TYPE BEARINGS"],
    materialGrades: ["Carbon Steel", "Stainless Steel", "Alloy Steel"],
    image: "/products/IndustrialBearings.webp",
    features: [
      "Easy installation",
      "Cost-effective solution",
      "Suitable for low-pressure applications",
      "Wide range of sizes"
    ],
    sizes: ["1/2\" to 24\"", "Class 150 to 1500"]
  }
]; 