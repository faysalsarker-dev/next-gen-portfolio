import {
  Eye,
  Target,
  Palette,
  Code,
  Rocket,
  TrendingUp,
  CheckCircle,
} from "lucide-react";


export const navItems = [
  { label: "Start", href: "/" },
  { label: "DeFi Network", href: "/defi" },
  { label: "Crypto Labs", href: "/labs" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Exchange", href: "/exchange" },
]

export const services = [
  {
    title: 'AI & Automation',
    price: '$ Xxx',
    icon: '/ai.png',
    features: [
      'AI Chatbots & Agents',
      'Custom Automation Tools',
      'Data-Driven Optimization',
      'Auto Lead Gen & CRM'
    ]
  },
  {
    title: 'Web & App Development',
    price: '$ Xxx',
    icon: '/atom.png',
    features: [
      'Modern UI/UX Design',
      'Full-stack Development',
      'Responsive Mobile Support',
      'SEO + Performance Boost'
    ]
  },
  {
    title: 'Tech Growth Support',
    price: '$ Xxx',
    icon: '/lightbulb.png',
    features: [
      'Growth Strategy Planning',
      'Conversion Optimization',
      'Maintenance & Support',
      'Analytics & Tracking Setup'
    ]
  },
  {
    title: 'AI & Automation',
    price: '$ Xxx',
    icon: '/ai.png',
    features: [
      'AI Chatbots & Agents',
      'Custom Automation Tools',
      'Data-Driven Optimization',
      'Auto Lead Gen & CRM'
    ]
  },
  {
    title: 'Web & App Development',
    price: '$ Xxx',
    icon: '/atom.png',
    features: [
      'Modern UI/UX Design',
      'Full-stack Development',
      'Responsive Mobile Support',
      'SEO + Performance Boost'
    ]
  },
  {
    title: 'Tech Growth Support',
    price: '$ Xxx',
    icon: '/lightbulb.png',
    features: [
      'Growth Strategy Planning',
      'Conversion Optimization',
      'Maintenance & Support',
      'Analytics & Tracking Setup'
    ]
  },
];



export const steps = [
  {
    title: "Vision Discovery",
    icon: Eye,
    description:
      "We dive deep into your goals and transform ideas into digital strategy.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Strategic Blueprint",
    icon: Target,
    description:
      "Architect scalable solutions that grow with your business ambitions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Design Excellence",
    icon: Palette,
    description:
      "Craft stunning interfaces that captivate and convert your audience.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Development Magic",
    icon: Code,
    description: "Build lightning-fast solutions with cutting-edge tech.",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Launch Perfect",
    icon: Rocket,
    description:
      "Deploy flawlessly with rigorous testing and optimization.",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Growth Accelerate",
    icon: TrendingUp,
    description:
      "Scale your success with ongoing optimization and support.",
    color: "from-pink-500 to-rose-500",
  },
];


export const globeConfig = {
    pointSize: 3,
  
    // atmosphereColor: "#ffffff",
    atmosphereColor: "#782EFA",
    showAtmosphere: true,
    atmosphereAltitude: 0.2,
    // polygonColor: "rgba(255,255,255,0.7)",
    polygonColor: "#782EFA",
    globeColor: "#15101E",
    // globeColor: "#782EFA",
    emissive: "#1B1427",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 6,
  };

export  const arcData = [
    {
      startLat: 40.7128,
      startLng: -74.006,
      endLat: 51.5074,
      endLng: -0.1278,
      color: "#3DF2B3", // secondary
      arcAlt: 0.25,
      order: 1,
    },
    {
      startLat: 35.6895,
      startLng: 139.6917,
      endLat: -33.8688,
      endLng: 151.2093,
      color: "#3DF2B3", // secondary
      arcAlt: 0.25,
      order: 2,
    },
    {
      startLat: 29.6139,
      startLng: 77.209,
      endLat: 37.7749,
      endLng: -122.4194,
      color: "#3DF2B3", // secondary
      arcAlt: 0.25,
      order: 3,
    },
    {
      startLat: 65.6895,
      startLng: 139.6917,
      endLat: -33.8688,
      endLng: 151.2093,
      color: "#F622C2", // secondary
      arcAlt: 0.25,
      order: 2,
    },
    {
      startLat: 88.6139,
      startLng: 77.209,
      endLat: 37.7749,
      endLng: -122.4194,
      color: "#F622C2", // secondary
      arcAlt: 0.25,
      order: 3,
    },
    {
      startLat: 95.6895,
      startLng: 139.6917,
      endLat: -33.8688,
      endLng: 151.2093,
      color: "#F622C2", // secondary
      arcAlt: 0.25,
      order: 2,
    },
    {
      startLat: 38.6139,
      startLng: 77.209,
      endLat: 37.7749,
      endLng: -122.4194,
      color: "#3DF2B3", // secondary
      arcAlt: 0.25,
      order: 3,
    },
  ];
