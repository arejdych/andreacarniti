export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  duration: string;
  tools: string[];
  cover: string; // placeholder tone key, see ImageBlock
  industries?: string[];
  applicationAreas?: string[];
  stats?: {
    metric: string;
    label: string;
    icon: string;
    items?: { name: string; icon: string }[];
    groups?: { category: string; icon: string; types: string[] }[];
  }[];
  sensorPortfolio?: {
    heading: string;
    intro: string;
    categories: { name: string; count: number; icon: string }[];
    moreCount?: number;
  };
  industryStories?: {
    name: string;
    tag: string;
    icon: string;
    challenge: string;
    approach: string;
    url: string;
  }[];
  logos?: { name: string; src: string; story?: string }[];
  responsibilities?: { title: string; description: string; icon: string }[];
  showProcessImages?: boolean;
  showSolutionImages?: boolean;
  showProcess?: boolean;
  showInsights?: boolean;
  showReflection?: boolean;
  summary: string;
  problem: string;
  process: {
    heading: string;
    body: string;
  }[];
  insights: string[];
  solution: {
    heading: string;
    body: string;
  }[];
  outcomes: {
    metric: string;
    label: string;
  }[];
  learnings: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "baiond-iot-sustainability-platform",
    title: "Baiond",
    tagline: "Turning raw sensor data into decisions anyone can trust",
    category: "Web App · IoT / AI Platform",
    year: "",
    role: "Lead & Sole Product Designer",
    duration: "2023–Ongoing",
    tools: ["Figma", "VS Code", "Claude", "JIRA", "Confluence"],
    cover: "01",
    industries: [
      "Smart City",
      "Green Building",
      "Agriculture",
      "Insurance",
      "Infrastructure",
      "Sport",
      "Eco Projects",
    ],
    applicationAreas: [
      "Vineries",
      "Wildlife monitoring",
      "Bike parks",
      "Road traffic",
      "Sport facilities",
      "Real estate",
      "Retail",
      "Mangrove / forest planting",
      "Historic buildings",
      "Urban data analytics",
      "Golf courses",
      "Stables",
    ],
    stats: [
      {
        metric: "7",
        label: "industries served by one design system",
        icon: "Globe",
        items: [
          { name: "Smart City", icon: "Building2" },
          { name: "Green Building", icon: "Building" },
          { name: "Agriculture", icon: "Tractor" },
          { name: "Insurance", icon: "Shield" },
          { name: "Infrastructure", icon: "Car" },
          { name: "Sport", icon: "Dumbbell" },
          { name: "Eco Projects", icon: "Leaf" },
        ],
      },
      {
        metric: "12",
        label: "sensor categories unified into one design system",
        icon: "Layers",
        items: [
          { name: "Security", icon: "ShieldCheck" },
          { name: "Road Traffic", icon: "Car" },
          { name: "Air", icon: "Wind" },
          { name: "Water", icon: "Droplets" },
          { name: "Temperature", icon: "Thermometer" },
          { name: "Energy", icon: "Zap" },
          { name: "Soil", icon: "Sprout" },
          { name: "Waste", icon: "Trash2" },
          { name: "Foot Traffic", icon: "Footprints" },
          { name: "Light", icon: "Sun" },
          { name: "Humidity", icon: "Waves" },
          { name: "Noise", icon: "Volume2" },
        ],
      },
      {
        metric: "90+",
        label: "distinct sensor types organized into one portfolio",
        icon: "Radar",
        groups: [
          {
            category: "Security",
            icon: "ShieldCheck",
            types: [
              "Motion Sensor",
              "Access Control Sensor",
              "CCTV with Motion Analytics",
              "Glass Break Sensor",
              "Magnetic Contact Sensor",
              "Vibration Sensor",
              "Infrared Beam Sensor",
              "Radar-Based Presence Sensor",
              "Ultrasonic Intrusion Sensor",
              "Environmental Tamper Sensor",
            ],
          },
          {
            category: "Road Traffic",
            icon: "Car",
            types: [
              "Inductive Loop Sensor",
              "Radar Traffic Sensor",
              "LIDAR Traffic Sensor",
              "Acoustic Traffic Sensor",
              "Magnetic Sensor",
              "Piezoelectric Sensor",
              "Video Traffic Sensor",
              "Bluetooth/Wi-Fi Tracking Sensor",
              "Environmental Sensor for Traffic Emissions",
            ],
          },
          {
            category: "Air",
            icon: "Wind",
            types: [
              "Air Quality Index (AQI) Sensor",
              "Particulate Matter Sensor",
              "CO₂ Sensor",
              "Ozone Sensor",
              "VOC Sensor",
              "Oxygen Sensor",
              "Barometric Pressure Sensor",
              "Wind Speed and Direction Sensor",
              "Temperature and Humidity Sensor",
            ],
          },
          {
            category: "Water",
            icon: "Droplets",
            types: [
              "Water Level Sensor",
              "Water Flow Sensor",
              "Water Quality Sensor",
              "Leak Detection Sensor",
              "Rain Gauge",
              "Rain Sensor",
              "Pressure Sensor",
              "Tensiometer",
              "Evapotranspiration (ET) Sensor",
            ],
          },
          {
            category: "Temperature",
            icon: "Thermometer",
            types: [
              "Ambient Air Temperature Sensor",
              "Surface Temperature Sensor",
              "Water Temperature Sensor",
              "Soil Temperature Sensor",
              "Pipe/Line Temperature Sensor",
              "Weather Station Temperature Sensor",
              "Thermocouple Sensor",
              "Thermistor Sensor",
            ],
          },
          {
            category: "Energy",
            icon: "Zap",
            types: [
              "Smart Energy Meter",
              "Current Sensor",
              "Voltage Sensor",
              "Power Sensor",
              "Power Factor Sensor",
              "Phase Detection Sensor",
              "Energy Harvesting Sensor",
              "Thermal Energy Sensor",
            ],
          },
          {
            category: "Soil",
            icon: "Sprout",
            types: [
              "Soil Moisture Sensor",
              "Soil Temperature Sensor",
              "Soil pH Sensor",
              "Soil EC (Electrical Conductivity) Sensor",
              "Soil Nutrient Sensor",
              "Soil Salinity Sensor",
              "Soil Oxygen Sensor",
            ],
          },
          {
            category: "Waste",
            icon: "Trash2",
            types: [
              "Fill Level Sensor",
              "Lid Status Sensor",
              "Gas Emission Sensor",
              "Odor Sensor",
              "Temperature Sensor",
              "RFID Sensor",
              "GPS Tracker",
            ],
          },
          {
            category: "Foot Traffic",
            icon: "Footprints",
            types: [
              "Infrared People Counter",
              "Video Analytics-Based People Counter",
              "Thermal Imaging Sensor",
              "LiDAR Sensor for People Tracking",
              "Pressure Mat Sensor",
              "Wi-Fi/Bluetooth Tracking Sensor",
              "Time-of-Flight (ToF) Sensor",
            ],
          },
          {
            category: "Light",
            icon: "Sun",
            types: [
              "Ambient Light Sensor",
              "Daylight Sensor",
              "UV Sensor",
              "Solar Radiation Sensor",
              "Light Intensity Sensor",
              "Photosynthetically Active Radiation (PAR) Sensor",
            ],
          },
          {
            category: "Humidity",
            icon: "Waves",
            types: [
              "Relative Humidity (RH) Sensor",
              "Absolute Humidity Sensor",
              "Dew Point Sensor",
              "Hygrometer",
              "Soil Humidity Sensor",
              "Temperature-Humidity Combo Sensor",
            ],
          },
          {
            category: "Noise",
            icon: "Volume2",
            types: [
              "Sound Level Sensor",
              "A-Weighted Sound Sensor",
              "Directional Microphone Sensor",
              "Environmental Noise Monitoring Station",
            ],
          },
        ],
      },
      { metric: "AI", label: "agents execute actions based on live values and contextual knowledge", icon: "Sparkles" },
    ],
    sensorPortfolio: {
      heading: "One portfolio, 90+ sensor types",
      intro:
        "Every category on baiond hides real depth: 'Water' alone spans flow, pressure, rain, level, and leak-detection sensors. I designed a single browsing and configuration pattern flexible enough to make 12 categories and 90+ underlying sensor types feel like one coherent system, not a spec sheet.",
      categories: [
        { name: "Security", count: 10, icon: "ShieldCheck" },
        { name: "Road Traffic", count: 9, icon: "Car" },
        { name: "Air", count: 9, icon: "Wind" },
        { name: "Water", count: 9, icon: "Droplets" },
        { name: "Temperature", count: 8, icon: "Thermometer" },
        { name: "Energy", count: 8, icon: "Zap" },
        { name: "Soil", count: 7, icon: "Sprout" },
        { name: "Waste", count: 7, icon: "Trash2" },
        { name: "Foot Traffic", count: 7, icon: "Footprints" },
        { name: "Light", count: 6, icon: "Sun" },
        { name: "Humidity", count: 6, icon: "Waves" },
        { name: "Noise", count: 4, icon: "Volume2" },
      ],
    },
    showProcessImages: false,
    showSolutionImages: true,
    showProcess: false,
    showInsights: false,
    showReflection: false,
    responsibilities: [
      {
        title: "End-to-end UX design",
        description:
          "Owned research, IA, interaction design, and visual design across the entire platform, from first sketch to shipped feature.",
        icon: "PenTool",
      },
      {
        title: "Design system ownership",
        description:
          "Built and maintained the design system powering every industry vertical, keeping the product consistent as new use cases were added.",
        icon: "Layers",
      },
      {
        title: "Product strategy",
        description:
          "Partnered directly with founders and engineers to shape the roadmap, prioritizing features based on real customer feedback.",
        icon: "Radar",
      },
      {
        title: "Cross-functional collaboration",
        description:
          "Worked closely with engineering to translate designs into production, unblocking edge cases and validating feasibility early.",
        icon: "User",
      },
    ],
    summary:
      "Baiond is a cloud platform that turns sensor, camera, and satellite data into one live view — helping cities, infrastructure, agriculture, and more act on real-time insight instead of raw numbers. As the lead designer, I owned the UX end-to-end and helped shape the product roadmap.",
    problem:
      "Organizations have huge amounts of sensor data but no way to make sense of it in real time. Every industry needs the same core capability — connect data, visualize it, act on it — but with completely different vocabularies and priorities. The challenge isn't just visualizing data; it's designing one system flexible enough to feel purpose-built for any industry.",
    industryStories: [
      {
        name: "Road Traffic",
        tag: "Infrastructure",
        icon: "Car",
        challenge:
          "Cities manage traffic, emissions, and infrastructure data through fragmented, disconnected systems — reacting to congestion instead of predicting it.",
        approach:
          "Designed a unified dashboard bringing vehicle counts, speed trends, emissions, and road condition into one live view with AI-driven predictions.",
        url: "https://baiond.io/road-traffic/",
      },
      {
        name: "Mangrove / Forest Planting",
        tag: "Eco Projects",
        icon: "Sprout",
        challenge:
          "Reforestation teams couldn't prove survival rates or growth — reporting was manual, inconsistent, and impossible to verify at scale.",
        approach:
          "Designed a field-to-satellite workflow: log a planting event, then track it against vegetation, weather, and sensor data in one timeline.",
        url: "https://baiond.io/mangrove-forest-planting/",
      },
      {
        name: "Real Estate",
        tag: "Green Building",
        icon: "Building2",
        challenge:
          "Building owners lacked a real, data-backed view of how their portfolio was actually used — occupancy, energy, and sustainability data all lived in separate tools.",
        approach:
          "Designed portfolio dashboards and a natural-language 'ask AI about your building' interface for non-technical stakeholders.",
        url: "https://baiond.io/real-estate/",
      },
      {
        name: "Sport Facility",
        tag: "Sport",
        icon: "Dumbbell",
        challenge:
          "Sport facility operators had no real-time view of energy, air quality, or occupancy — making it hard to cut costs or meet sustainability certifications.",
        approach:
          "Designed a single dashboard unifying energy, HVAC, water, and air-quality data per zone, with LEED/WELL certification reporting built in.",
        url: "https://baiond.io/sportanlagen/",
      },
    ],
    process: [],
    insights: [
      "Every industry described their world differently, but almost all of it mapped onto the same generic hierarchy — the platform needed one flexible 'Space System', not industry-specific dashboards.",
      "Users didn't just want to see data; they wanted the system to act on it. Dashboards had to make automation rules and AI-driven actions as visible as raw charts.",
      "Trust was the biggest UX risk in an AI-agent-driven system — every automated decision needed a clear, inspectable 'why', not just a result.",
    ],
    solution: [
      {
        heading: "The Space System",
        body: "Designed a universal, nestable hierarchy (e.g. city → district → object, or space → device → sensor) so any industry could model its world in the same interface, with devices, attributes, and automations attached at any level.",
      },
      {
        heading: "One dashboard, many lenses",
        body: "Designed a flexible Graph Builder and dashboard system so each customer could compose the exact views their role needed, instead of maintaining a separate custom UI per industry.",
      },
      {
        heading: "Legible AI Agents",
        body: "Designed the interface for AI Agents and automation rules so every autonomous action is traceable to the sensor values, thresholds, and logic that triggered it — making automation something users could audit and trust, not a black box.",
      },
    ],
    outcomes: [],
    learnings:
      "Designing for seven industries at once taught me to design systems, not screens — the real UX work was in the underlying abstractions (the Space System, the automation model), not any single dashboard. Being the only designer also meant owning product direction, not just execution: knowing when to say no to a one-off request in favor of the shared pattern was as much a part of the job as the pixels.",
    liveUrl: "https://baiond.io/",
    logos: [
      {
        name: "Kenya Wildlife Service",
        src: "/logos/kenya-wildlife-service.png",
        story:
          "The Kenya Wildlife Service and their partners deployed a solar-powered sensor network across protected areas on the baiond platform. It monitors 800+ km of electric fencing, tracks water levels and soil salinity, and uses AI cameras to identify wildlife and generate biodiversity statistics — providing real-time alerts and predictive insights even in remote regions.",
      },
      {
        name: "Haus der Digitalisierung",
        src: "/logos/haus-der-digitalisierung.png",
        story:
          "In Tulln, the House of Digitalization runs on baiond as its digital foundation for energy and space management — reliable, scalable, and future-ready. Room reservations, access control, energy tracking, and weather-based automation are integrated into one platform, with smart sensors monitoring soil moisture, façade humidity, and temperature for automatic irrigation and early issue detection. The result: efficiency, transparent sustainability data, and measurable progress on the smart city strategy.",
      },
      { name: "Messe Wien", src: "/logos/messe-wien.svg" },
      {
        name: "City of Vienna",
        src: "/logos/wien.svg",
      },
      {
        name: "Hofburg Vienna",
        src: "/logos/hofburg-vienna.svg",
        story:
          "Since adopting baiond, Hofburg Congress Center Vienna has been capturing visitor numbers in real time and meeting regulatory requirements precisely. The system automatically alerts them when capacity limits are reached and documents movement patterns — a real game changer for planning and safety. For their team, it means less stress, more clarity, and better decisions.",
      },
    ],
    featured: true,
  },
  {
    slug: "cheerin-app",
    title: "Cheerin'",
    tagline: "Making group planning effortless for friends who never agree on plans",
    category: "Mobile App · Social",
    year: "2022-2023",
    role: "Lead Product Designer",
    duration: "4 months",
    tools: ["Figma", "Maze", "Notion", "Design Tokens"],
    cover: "01",
    summary:
      "Cheerin' helps friend groups actually settle on plans instead of endless group-chat back-and-forth. I led end-to-end design for the polling, scheduling, and venue-discovery flows, working closely with two engineers and the founder.",
    problem:
      "Early users loved the idea but dropped off before finalizing a single plan. Group polls felt like more admin work than the group chat they replaced, and there was no clear moment where a plan felt 'decided.'",
    process: [
      {
        heading: "Discovery",
        body: "Interviewed 10 friend groups about how they currently plan outings, and shadowed three live group chats end-to-end to see where planning stalled.",
      },
      {
        heading: "Definition",
        body: "Identified the core failure point: no single person felt empowered to 'close' a decision, so plans stayed open indefinitely. Reframed the product around a clear decision moment.",
      },
      {
        heading: "Iteration",
        body: "Prototyped three ways of visualizing group consensus, tested with 30 users via unmoderated Maze sessions, then refined the winning direction across three rounds.",
      },
    ],
    insights: [
      "Groups didn't need more voting options — they needed a visible, shared sense of momentum toward a decision.",
      "A visible deadline changed behavior more than any UI pattern tested.",
      "Letting anyone in the group 'lock in' the plan once consensus was clear removed the need for a single organizer.",
    ],
    solution: [
      {
        heading: "Momentum-first polling",
        body: "Replaced static poll results with a live progress view showing how close the group was to consensus, updating in real time as friends responded.",
      },
      {
        heading: "Soft deadlines",
        body: "Added an auto-suggested response deadline based on group size and event date, nudging stragglers without adding pressure.",
      },
      {
        heading: "One-tap lock-in",
        body: "Gave any group member the ability to finalize the plan once a clear majority formed, removing the single-organizer bottleneck entirely.",
      },
    ],
    outcomes: [
      { metric: "+44%", label: "plans reaching a final decision" },
      { metric: "-36%", label: "time from poll creation to decision" },
      { metric: "4.7/5", label: "app store rating after relaunch" },
    ],
    learnings:
      "The biggest unlock wasn't a feature — it was reframing the problem from 'help people vote' to 'help people feel a decision has been made.' I'd look for that reframing moment earlier next time.",
    liveUrl: undefined,
    featured: true,
  },
  {
    slug: "comgy-energy-platform",
    title: "Energy Efficiency Directive solution",
    tagline: "Turning raw building-sensor data into decisions facility managers can act on",
    category: "Web App · Mobile App · PropTech",
    year: "2021-2022",
    role: "UX Designer",
    duration: "5 months",
    tools: ["Figma", "FigJam", "UserTesting", "Amplitude"],
    cover: "02",
    summary:
      "The Energy Efficiency Directive solution turns building energy and utility sensor data into actionable insights for facility managers. I redesigned the core monitoring dashboard around real decisions managers make daily, working alongside a product manager and two engineers.",
    problem:
      "Facility managers could see raw sensor readings but struggled to tell what needed action versus what was normal fluctuation. Support tickets showed users didn't trust alerts enough to act on them without double-checking manually.",
    process: [
      {
        heading: "Contextual inquiry",
        body: "Shadowed 7 facility managers during real shifts to see how they currently triaged sensor alerts and cross-checked readings.",
      },
      {
        heading: "Workflow mapping",
        body: "Mapped the three most common decision workflows (leak response, consumption anomalies, compliance reporting) against current navigation and alert design.",
      },
      {
        heading: "Modular redesign",
        body: "Designed a severity-based alert system and a redesigned building overview, tested with 12 users across two rounds before build.",
      },
    ],
    insights: [
      "Managers ignored alerts that weren't paired with clear context on why they mattered or what to do next.",
      "Historical comparison mattered more than raw numbers — 'is this normal for a Tuesday in winter' was the real question being asked.",
      "Compliance reporting needed to be a byproduct of daily monitoring, not a separate monthly task.",
    ],
    solution: [
      {
        heading: "Severity-based alerting",
        body: "Replaced a single alert stream with three severity tiers, each with a recommended next action and historical context shown inline.",
      },
      {
        heading: "Baseline-aware charts",
        body: "Added automatic baseline comparisons to every chart, showing whether a reading was typical for the time of day, season, and building type.",
      },
      {
        heading: "Always-on compliance log",
        body: "Built a running compliance record generated automatically from daily monitoring activity, eliminating a separate manual reporting step.",
      },
    ],
    outcomes: [
      { metric: "-47%", label: "time to identify actionable alerts" },
      { metric: "+31%", label: "alerts acted on without manual double-checking" },
      { metric: "4.6/5", label: "post-launch usability score" },
    ],
    learnings:
      "Shadowing real shifts surfaced a trust problem no interview alone would have revealed. I'd budget contextual research time into every enterprise engagement by default, not as a stretch goal.",
    liveUrl: undefined,
    featured: true,
  },
  {
    slug: "gustaffo-hotel-concierge",
    title: "Gustaffo",
    tagline: "A digital concierge that helps hotels turn guests into direct bookers",
    category: "Web App · Hospitality",
    year: "2021",
    role: "UX Designer",
    duration: "4 months",
    tools: ["Figma", "FigJam", "Miro"],
    cover: "03",
    summary:
      "Gustaffo is a digital concierge platform that helps hotels manage reservations and check-ins, showcase their property, and understand guest behavior — reducing reliance on third-party booking platforms. I designed the core guest and staff experience as my capstone project during a UX Bootcamp at Talent Garden Vienna, working from research through to a tested prototype.",
    problem:
      "Independent hotels relied heavily on third-party booking platforms, paying high commissions and losing the direct relationship with their guests. Staff also juggled disconnected tools for reservations, check-in, and guest communication, making it hard to offer a smooth, personal stay.",
    process: [
      {
        heading: "Research",
        body: "Interviewed independent hotel owners and front-desk staff to understand their booking and guest-communication workflows, alongside guests about what they expect from a hotel's digital presence.",
      },
      {
        heading: "Definition",
        body: "Mapped the guest journey from discovery to check-out and identified where hotels lost guests to third-party platforms or created friction with disconnected tools.",
      },
      {
        heading: "Prototyping & testing",
        body: "Designed and tested wireframes and a clickable prototype for direct booking, check-in, and a guest-facing concierge experience, iterating based on usability sessions.",
      },
    ],
    insights: [
      "Guests were willing to book directly if the hotel's site felt as trustworthy and easy as a booking platform.",
      "Front-desk staff needed one place to manage reservations and guest requests, not several disconnected tools.",
      "A personal, concierge-style touch before arrival increased guests' confidence in booking direct.",
    ],
    solution: [
      {
        heading: "Direct booking flow",
        body: "Designed a streamlined, trustworthy booking flow for hotel websites, reducing the incentive to book through third-party platforms.",
      },
      {
        heading: "Unified staff dashboard",
        body: "Brought reservations, check-in/out, and guest requests into a single view for front-desk staff.",
      },
      {
        heading: "Guest-facing concierge",
        body: "Designed a lightweight concierge experience for guests to get property information and make requests digitally during their stay.",
      },
    ],
    outcomes: [
      { metric: "1", label: "capstone project presented at Talent Garden Vienna" },
      { metric: "12", label: "usability sessions run across two rounds" },
    ],
    learnings:
      "This was my first end-to-end UX project after transitioning from architecture, completed during a UX Bootcamp at Talent Garden Vienna. It taught me how to translate research into a structured design process — a foundation I've built on in every project since.",
    liveUrl: "https://gustaffo.com/",
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
