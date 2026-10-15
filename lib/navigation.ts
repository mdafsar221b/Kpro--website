export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: { label: string; href: string; description?: string }[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: 'What we do',
    href: '/capabilities',
    children: [
      {
        label: 'Generative AI & LLMs',
        href: '/capabilities#genai',
        description: 'Production RAG pipelines, fine-tuned domain models, and autonomous agent orchestration.',
      },
      {
        label: 'Cloud & DevOps Modernization',
        href: '/capabilities#cloud',
        description: 'Kubernetes orchestration, multi-cloud resilience, and automated CI/CD security.',
      },
      {
        label: 'Analytics & Big Data',
        href: '/capabilities#analytics',
        description: 'Low-latency streaming architectures, lakehouse engineering, and governance.',
      },
      {
        label: 'Blockchain & Ledgers',
        href: '/capabilities#blockchain',
        description: 'Tamper-proof distributed ledgers, audit automation, and consensus protocols.',
      },
      {
        label: 'IoT & Edge Intelligence',
        href: '/capabilities#iot',
        description: 'Industrial sensor ingestion, edge ML inferencing, and predictive maintenance.',
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        label: 'Swargaseema Real Estate CRM',
        href: '/case-studies/swargaseema',
        description: 'Enterprise CRM with WebRTC cloud telephony, chauffeur dispatch, and plot engine.',
      },
      {
        label: 'ThirdEye AI Vision',
        href: '/solutions#thirdeye',
        description: 'High-speed automated defect scanning on industrial assembly lines.',
      },
      {
        label: 'Supply Chain ML Solver',
        href: '/solutions#supplychain',
        description: 'Dynamic inventory rebalancing and predictive multi-echelon logistics.',
      },
      {
        label: 'UEBA Security Threat Analytics',
        href: '/solutions#ueba',
        description: 'Behavioral variance anomaly detection and perimeter threat mitigation.',
      },
      {
        label: 'Expense and Audit',
        href: '/solutions/expense-and-audit',
        description: 'Autonomous pre-spend controls, 3-way reconciliation, and 100% continuous pre-payment forensic audit.',
      },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Resumea',
        href: '/products#resumea',
        description: 'AI-driven ATS resume intelligence and candidate profile architect.',
      },
      {
        label: 'Mentora',
        href: '/products#mentora',
        description: 'Next-generation student hub bridging academic progress and industry recruitment.',
      },
      {
        label: 'HRHaaT',
        href: '/products#hrhaat',
        description: 'Unified enterprise human resource and payroll lifecycle management.',
      },
      {
        label: 'NyotaInvite',
        href: '/products#nyotainvite',
        description: 'Dynamic enterprise event registration, guest telemetry, and RSVP portal.',
      },
      {
        label: 'Corely CRM',
        href: '/products#corely',
        description: 'Enterprise PropTech CRM with WebRTC cloud telephony and 2D plot booking.',
      },
      {
        label: 'BuildMyCV',
        href: '/products#buildmycv',
        description: 'Professional executive CV architect for modern talent acquisition.',
      },
    ],
  },
  {
    label: 'Training',
    href: '/training',
    children: [
      {
        label: 'Training Overview',
        href: '/training',
        description: 'Enterprise and academic technology development programs.',
      },
      {
        label: 'Corporate Upskilling',
        href: '/training/corporate',
        description: 'Deep-tech bootcamps in GenAI, Cloud, and Data for engineering teams.',
      },
      {
        label: 'College Programs',
        href: '/training/college',
        description: 'Industry-aligned university curriculums and placement accelerators.',
      },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    children: [
      {
        label: 'About Kpro',
        href: '/about',
        description: 'Our 10+ year engineering legacy and mission since 2014.',
      },
      {
        label: 'True Fixed Cost Model',
        href: '/about#fixed-cost',
        description: 'Guaranteed budgets and definitive outcomes without hourly billing uncertainty.',
      },
      {
        label: 'Leadership',
        href: '/about#leadership',
        description: 'Experienced executive leaders and technical architects.',
      },
    ],
  },
  {
    label: 'Careers',
    href: '/careers',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
