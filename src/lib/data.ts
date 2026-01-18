// Site-wide content data for TeleHealth Van Network

export const siteConfig = {
  name: "TeleHealth Van Network",
  tagline: "Contract & Grant Funded Mental Health Care",
  mission:
    "Free, anonymous mental health therapy for everyone. Licensed therapists. No insurance required. No one turned away.",
  phone: "",
  email: "",
  crisisLine: "988",
};

export const stats = [
  {
    value: "30,000",
    label: "Virtual Therapy Sessions",
    description: "Delivered since 2020",
  },
  {
    value: "9,000",
    label: "Students at Pull Up Concert",
    description: "Connected to resources",
  },
  {
    value: "$0",
    label: "Cost to Clients",
    description: "100% grant funded",
  },
  {
    value: "5+",
    label: "National Awards",
    description: "For innovation & impact",
  },
];

export const keyDifferentiators = [
  "No insurance ever collected",
  "100% anonymous services available",
  "Licensed therapists only",
  "Data-driven outcomes with transparent reporting",
  "Nation's largest 5G-enabled mobile telehealth van fleet",
];

export type ProgramColor = "teal" | "gold" | "purple";

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  secondDescription?: string;
  features: string[];
  tags: string[];
  image: string;
  logo: string;
  color: ProgramColor;
  artists?: { name: string; grammy?: boolean }[];
}

export const programs: Program[] = [
  {
    id: "mobile-telehealth",
    title: "Mobile Telehealth Van",
    subtitle: "Flagship Program",
    description:
      "The nation's largest 5G-enabled fleet bringing licensed therapists to communities, shelters, and underserved populations.",
    secondDescription:
      "Our mobile vans bring mental health care directly to where people are—communities, shelters, military bases, and underserved neighborhoods across California.",
    features: [
      "5G-enabled mobile fleet",
      "Walk-up sessions available",
      "Licensed therapists on-site",
      "Private, disposable headphones",
    ],
    tags: ["Flagship Program", "Nationwide", "5G-Enabled"],
    image: "/images/van-fleet.jpg",
    logo: "/images/telehealth-van-logo.png",
    color: "teal",
  },
  {
    id: "student-wellness",
    title: "Student Wellness Program",
    subtitle: "University Partnerships",
    description:
      "Created for educational institutions, the Student Wellness Program gives students access to licensed therapists—whether remotely from where they are, or by walking up to TeleHealth Vans parked on campus.",
    secondDescription:
      "Students can schedule therapy sessions ahead of time or walk up to the van for real-time access when a therapist is available. All sessions are free, private, and completely anonymous.",
    features: [
      "Remote sessions from anywhere on campus",
      "Walk-up van access on select days",
      "Schedule appointments in advance",
      "Digital waiver system—no paperwork",
    ],
    tags: ["University Partnerships", "Walk-Up or Scheduled", "100% Free"],
    image: "/images/telehealth-van-main.jpeg",
    logo: "/images/student-wellness-logo.png",
    color: "teal",
  },
  {
    id: "hawthorne-cares",
    title: "Hawthorne Cares",
    subtitle: "First City-Wide Program",
    description:
      "City-wide mental health initiative making Hawthorne the first city with universal free telehealth access.",
    secondDescription:
      "Working closely with local police, we provided de-escalation support and helped homeless residents get off the streets and into care—reducing emergency interventions and ambulance calls.",
    features: [
      "All city residents eligible—free access",
      "Police de-escalation partnership",
      "Homeless outreach and housing connections",
      "Received city recognition award",
    ],
    tags: ["First Entire City as Client", "Police Partnership", "Award-Winning"],
    image: "/images/a-frame-sign.png",
    logo: "/images/hawthorne-cares-logo.png",
    color: "gold",
  },
  {
    id: "afghan-helpline",
    title: "Afghan Community Care",
    subtitle: "Only Provider in Region",
    description:
      "Culturally competent, language-appropriate mental health support for Afghan refugees and families.",
    secondDescription:
      "Operating in Texas and other regions, this program provides culturally competent, language-appropriate therapy for Afghan refugees and families navigating the trauma of displacement and resettlement.",
    features: [
      "Culturally competent therapists",
      "Language-appropriate services",
      "Trauma-informed care for refugees",
      "Award-winning program from USCRI",
    ],
    tags: ["USCRI Partnership", "Only Provider", "Texas"],
    image: "/images/van-military-thumbs-up.jpg",
    logo: "/images/wha-afghan-logo.png",
    color: "teal",
  },
  {
    id: "pull-up-concert",
    title: "Pull Up Mental Health Concert",
    subtitle: "5,000+ Students · LACCD Partnership",
    description:
      "Landmark event in partnership with LA Community College District, connecting 5,000+ students to mental health resources through music and top artists.",
    secondDescription:
      "Beyond performances, the event provided free resources for housing, immigration assistance, and jobs through partnerships with the Department of Economic Opportunity and Department of Children and Family Services.",
    features: [
      "Welcomed by LA County Director Lisa Wong",
      "Introduced by LA County CEO Fesia Davenport",
      "Housing, jobs & immigration resources on-site",
      "Featured on Spectrum News",
    ],
    tags: ["9,000 Students", "LACCD Partnership", "Dept of Mental Health"],
    artists: [
      { name: "Jhené Aiko", grammy: true },
      { name: "Ty Dolla $ign", grammy: true },
      { name: "YG", grammy: false },
      { name: "+ More Artists", grammy: false },
    ],
    image: "/images/van-session-1.jpeg",
    logo: "/images/pull-up-logo.png",
    color: "purple",
  },
  {
    id: "jewish-student",
    title: "Jewish Student Mental Health",
    subtitle: "Ruderman Foundation Funded",
    description:
      "Ruderman Family Foundation funded program providing mental health support for Jewish students facing antisemitism at Harvard, MIT, Northeastern, and BU.",
    secondDescription:
      "Focused primarily in the Boston, Massachusetts area, we serve students at Harvard, MIT, Northeastern University, Boston University, and other institutions experiencing the psychological impact of campus antisemitism.",
    features: [
      "Harvard, MIT, Northeastern, Boston University",
      "Specialized support for antisemitism impact",
      "Crisis response available",
      "Culturally aware licensed therapists",
    ],
    tags: ["Ruderman Foundation Funded", "Boston Area"],
    image: "/images/van-session-2.jpeg",
    logo: "/images/ruderman-logo.png",
    color: "gold",
  },
];

// Partner logos are stored in /public/images/partners/ folder
// Add new partner logos there and update this array
export const partners = [
  {
    name: "LA County Department of Mental Health",
    logo: "/images/partners/la-dmh-logo.png",
    type: "government",
  },
  {
    name: "City of Hawthorne",
    logo: "/images/partners/hawthorne-city-logo.png",
    type: "government",
  },
  {
    name: "Ruderman Family Foundation",
    logo: "/images/partners/ruderman-logo.png",
    type: "foundation",
  },
  {
    name: "Behavioral Health Services",
    logo: "/images/partners/bhs-logo.png",
    type: "healthcare",
  },
  {
    name: "USCRI",
    logo: "/images/partners/uscri-logo.png",
    type: "nonprofit",
  },
  {
    name: "4Hunnid Wayz Foundation",
    logo: "/images/partners/4hunnid-logo.png",
    type: "nonprofit",
  },
  {
    name: "American Indian Changing Spirits",
    logo: "/images/partners/aics-logo.png",
    type: "nonprofit",
  },
];

export const awards = [
  {
    title: "City of Los Angeles",
    description:
      "Recognized for innovative approaches to community mental health and reducing barriers to care for underserved populations.",
    icon: "trophy",
  },
  {
    title: "United States Military",
    description:
      "Honored for exceptional service providing mental health support to military families and veterans.",
    icon: "medal",
  },
  {
    title: "U.S. Committee for Refugees & Immigrants",
    description:
      "Awarded for pioneering mental health services for Afghan refugee populations—the only provider serving this community.",
    icon: "globe",
  },
  {
    title: "TherapyMate Mental Health Innovation Award",
    description:
      "Recognized by TherapyMate CEO for groundbreaking innovation in telehealth mental health delivery.",
    icon: "lightbulb",
  },
];

export const techPartners = [
  {
    name: "Oracle",
    description: "Infrastructure Partner",
  },
  {
    name: "Salesforce",
    description: "CRM & Scheduling Systems",
  },
  {
    name: "TherapyMate",
    description: "Therapy Platform",
  },
];

export const mediaFeatures = [
  {
    outlet: "Spectrum News",
    title: "Pull Up Mental Health Concert",
    description:
      "Coverage of the groundbreaking concert connecting thousands of students to mental health resources.",
    tag: "Los Angeles",
  },
  {
    outlet: "Boston Media",
    title: "Campus Mental Health Initiative",
    description:
      "Multiple outlets covered the Ruderman Foundation-funded program supporting Jewish students facing antisemitism.",
    tag: "Boston 2025",
  },
  {
    outlet: "Book Feature",
    title: "Featured in Publication",
    description:
      "Our innovative model was featured in a book by a TherapyMate founder on the future of mental health care.",
    tag: "National",
  },
];

export const serviceLocations = [
  {
    region: "Los Angeles County",
    description:
      "Serving communities throughout LA County including the City of Hawthorne, working with local agencies and police departments on de-escalation and preventative care.",
    tag: "City & County Contracts",
    icon: "palm",
  },
  {
    region: "Boston, Massachusetts",
    description:
      "Supporting students at Harvard, MIT, Northeastern University, Boston University, and other Boston-area institutions through the Ruderman Family Foundation.",
    tag: "University Partnerships",
    icon: "graduation",
  },
  {
    region: "Texas",
    description:
      "Partnering with the U.S. Committee for Refugees and Immigrants (USCRI) to provide mental health support for Afghan refugee populations and families.",
    tag: "USCRI Partnership",
    icon: "star",
  },
];

export const accessSteps = [
  {
    step: 1,
    title: "Verify Eligibility",
    description:
      "Prove you're a resident, student, or member of the grant-funded population (if required by the specific program).",
    icon: "user-check",
  },
  {
    step: 2,
    title: "Sign Digital Waiver",
    description:
      "Complete automatic digital waivers quickly and securely—no paperwork, no hassle.",
    icon: "file-check",
  },
  {
    step: 3,
    title: "Schedule or Walk Up",
    description:
      "Book a session in advance or walk up to the van for real-time access if a therapist is available.",
    icon: "calendar",
  },
  {
    step: 4,
    title: "Private Session",
    description:
      "Meet with a licensed therapist virtually—completely private and anonymous.",
    icon: "headphones",
  },
];

export const fleetFeatures = [
  {
    title: "5G-Enabled Connectivity",
    description:
      "High-speed, reliable connections ensure uninterrupted virtual therapy sessions from any location.",
    icon: "signal",
  },
  {
    title: "Private Walk-Up Sessions",
    description:
      "Disposable headphones and private screens allow for confidential sessions right at the van.",
    icon: "headphones",
  },
  {
    title: "Crisis De-Escalation",
    description:
      "Police and first responders can call our vans for urgent mental health de-escalation situations, reducing emergency interventions.",
    icon: "alert",
  },
  {
    title: "Preventative Care & Resources",
    description:
      "Beyond therapy, we connect people to housing partners, social services, and community resources to address root causes.",
    icon: "home",
  },
  {
    title: "QR Code Scheduling",
    description:
      "Scan a code to instantly schedule a therapy session, sign waivers digitally, and see where vans will be located.",
    icon: "qr-code",
  },
  {
    title: "Licensed Therapists On-Call",
    description:
      "Every session is with a licensed mental health professional—available in real-time or by appointment.",
    icon: "user-check",
  },
];

export const valuePropositions = [
  {
    title: "Zero-Barrier Model",
    description: "No insurance, no ID, no forms, complete anonymity",
    icon: "unlock",
  },
  {
    title: "Data-Driven Outcomes",
    description: "Transparent reporting for all funders",
    icon: "chart",
  },
  {
    title: "First-of-Kind Programs",
    description: "Only provider for Afghan refugees, first city-wide program",
    icon: "award",
  },
  {
    title: "Proven Scale",
    description: "30,000+ sessions delivered with rapid deployment capability",
    icon: "trending-up",
  },
  {
    title: "Preventative Care Focus",
    description: "De-escalation support reduces emergency interventions",
    icon: "shield",
  },
  {
    title: "Mobile & Remote Hybrid",
    description: "Combines telehealth with physical van presence",
    icon: "truck",
  },
];

export const partnershipBenefits = [
  {
    title: "Online Scheduling System",
    description:
      "Full appointment scheduling platform where clients can book sessions in advance or see real-time therapist availability.",
    icon: "calendar",
  },
  {
    title: "Digital Waiver System",
    description:
      "Automatic waiver signing—clients prove residency or student status digitally. No paperwork, no hassle, instant verification.",
    icon: "file-text",
  },
  {
    title: "Remote Therapist Access",
    description:
      "Licensed therapists available virtually—clients connect from anywhere or through our vans for private sessions.",
    icon: "video",
  },
  {
    title: "TeleHealth Vans",
    description:
      "5G-enabled mobile units deployed where needed—schools, shelters, community centers, or wherever your population is.",
    icon: "truck",
  },
];

export const partnerTypes = [
  {
    title: "Cities & Counties",
    description:
      "Deploy city-wide mental health programs like Hawthorne Cares. Serve all residents with mobile and remote therapy access.",
    icon: "building",
  },
  {
    title: "Universities & Schools",
    description:
      "Campus-based programs with van deployments and remote access for students. Supports general wellness and crisis response.",
    icon: "graduation",
  },
  {
    title: "Foundations & Funders",
    description:
      "Fund specific populations or initiatives—like the Ruderman Foundation's support for Jewish students facing antisemitism.",
    icon: "heart",
  },
  {
    title: "Government Agencies",
    description:
      "Contract-based programs through departments of mental health, health services, or social services.",
    icon: "clipboard",
  },
  {
    title: "Refugee & Immigrant Orgs",
    description:
      "Specialized programs for specific populations—like our USCRI partnership serving Afghan refugees in Texas.",
    icon: "globe",
  },
  {
    title: "Nonprofits",
    description:
      "Plug our infrastructure into your existing community programs. We handle therapy logistics, you handle outreach.",
    icon: "users",
  },
];

export const preventativeCareItems = [
  "Police de-escalation partnership",
  "Reduce ambulance and ER visits",
  "Housing partner connections",
  "On-call therapists for urgent situations",
  "Community resource referrals",
];

export const preventativeStats = [
  {
    title: "Reduced Emergency Calls",
    description: "Early intervention prevents escalation to 911",
    icon: "ambulance",
  },
  {
    title: "Housing Connections",
    description: "Partner with housing providers to address root causes",
    icon: "home",
  },
  {
    title: "Police Partnership",
    description: "Immediate mental health support for field officers",
    icon: "shield",
  },
  {
    title: "Cost Savings",
    description: "Preventative care costs less than crisis response",
    icon: "dollar",
  },
];

export const supportAccessTypes = [
  {
    title: "Students",
    description:
      "If you're a student at a partner university or institution, you can access free therapy through your campus wellness program.",
    icon: "graduation",
    steps: [
      "Contact your campus student wellness office or student center",
      "Ask about TeleHealth Van services on campus",
      "Schedule a session or walk up to the van when it's on campus",
    ],
    highlight: true,
  },
  {
    title: "City Residents",
    description:
      "If you live in a city with a TeleHealth Van partnership (like Hawthorne), you may qualify for free services.",
    icon: "home",
    steps: [
      "Contact your local community center or city offices",
      "Ask if TeleHealth Van services are available for residents",
      "Prove residency (if required) and schedule your session",
    ],
    highlight: false,
  },
  {
    title: "Refugees & Immigrants",
    description:
      "If you're an Afghan refugee or immigrant, we may have specialized programs available through our USCRI partnership.",
    icon: "globe",
    steps: [
      "Contact your local USCRI office or resettlement agency",
      "Ask about the Wellness Helpline for Afghans program",
      "Access culturally competent, language-appropriate therapy",
    ],
    highlight: false,
  },
  {
    title: "Jewish Students (Boston)",
    description:
      "If you're a Jewish student facing antisemitism at a Boston-area university, dedicated support is available.",
    icon: "star",
    steps: [
      "Available at Harvard, MIT, Northeastern, and Boston University",
      "Contact your campus Hillel or student wellness office",
      "Ask about the Ruderman Foundation mental health program",
    ],
    highlight: false,
  },
];

export const requestOptions = [
  {
    title: "Contact Your Council Member",
    description:
      "Ask your city council representative to explore TeleHealth Van partnerships",
    icon: "phone",
  },
  {
    title: "Talk to Student Services",
    description:
      "Request that your university or college explore campus mental health vans",
    icon: "graduation",
  },
  {
    title: "Connect Us to Your Organization",
    description:
      "If you work with a nonprofit or agency, we'd love to discuss partnership",
    icon: "building",
  },
];

export const supportPromises = [
  {
    title: "Confidential",
    description: "Your inquiry is private and secure",
    icon: "lock",
  },
  {
    title: "No Judgment",
    description: "We're here to help, not to ask unnecessary questions",
    icon: "heart",
  },
  {
    title: "Quick Response",
    description: "We'll get back to you within 24 hours",
    icon: "zap",
  },
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Fleet", href: "/fleet" },
  { name: "Programs", href: "/programs" },
  { name: "Impact", href: "/impact" },
  { name: "Partner With Us", href: "/partner" },
];

export const footerLinks = {
  programs: [
    { name: "Mobile Telehealth Van", href: "/programs#mobile-telehealth" },
    { name: "Student Wellness", href: "/programs#student-wellness" },
    { name: "Hawthorne Cares", href: "/programs#hawthorne-cares" },
    { name: "Afghan Community Care", href: "/programs#afghan-helpline" },
    { name: "Pull Up Concert", href: "/programs#pull-up-concert" },
    { name: "Jewish Student Mental Health", href: "/programs#jewish-student" },
  ],
  company: [
    { name: "Home", href: "/" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Programs", href: "/programs" },
    { name: "Impact & Recognition", href: "/impact" },
    { name: "Partner With Us", href: "/partner" },
    { name: "Get Support", href: "/support" },
  ],
  resources: [
    { name: "FAQ", href: "/faq" },
    { name: "Crisis Line: 988", href: "tel:988" },
    { name: "Schedule a Session", href: "/support" },
    { name: "Van Locations", href: "/fleet#locations" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};
