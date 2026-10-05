import bloodDonorImage from '../assets/images/Blood.png';
import EventImage from '../assets/images/Event.png';
import LoomLinkImage from '../assets/images/LoomLink.png';

export const projects = [
  
  {
    id: "baby-guard",
    number: "01",
    title: "Baby Guard System",
    category: "IoT / AI",
    date: "2026",
    tagline: "Intelligent child safety & edge vision door override system",
    description:
      "Child safety system with face recognition and door override mechanism.",
    fullDescription:
      "An automated edge-computing security solution combining computer vision and hardware actuators to safeguard infants and toddlers. The system continuously analyzes live camera feeds near dangerous household boundaries (balconies, stairs, exit doors) and triggers automated electronic door locks and warning alerts when an unattended child is detected.",
    problem:
      "Toddlers are naturally curious and wander into high-risk areas within seconds of parental distraction, leading to severe domestic falls and accidents.",
    solution:
      "Utilizing a Raspberry Pi connected to a high-resolution camera module, custom Python OpenCV models perform real-time facial and age-classification detection. If an unaccompanied infant approaches the restricted zone, the system immediately energizes a solenoid door lock override and sounds an alarm.",
    image: "/assets/projects/baby-guard.svg",
    technologies: [
      "Raspberry Pi",
      "Python",
      "OpenCV",
      "Hardware Sensors",
      "Relay Module"
    ],
    flow: [
      "Camera",
      "Face Detection",
      "Decision",
      "Door Override"
    ],
    features: [
      "Face Recognition",
      "Child Detection",
      "Door Safety Mechanism",
      "Instant Buzzer Notification",
      "Fail-safe Hardware Relay",
      "Real-time Frame Processing"
    ],
    challenges: [
      "Achieving low-latency frame analysis (30+ FPS) on limited single-board computer resources",
      "Handling dynamic lighting variations and partial face occlusions",
      "Ensuring fail-safe hardware behavior during unexpected power fluctuations"
    ],
    outcome:
      "Built an autonomous safety appliance with sub-second hazard detection and instantaneous physical lockout prevention.",
    github: "https://github.com/praveen1304r",
    liveDemo: "#",
    color: "#7C3AED",
    accentGlow: "rgba(124, 58, 237, 0.4)"
  },
  {
    id: "blood-donor",
    number: "02",
    title: "College Blood Donor Network",
    category: "Web Application",
    date: "2026",
    tagline: "Campus emergency blood donor discovery & matching directory",
    description:
      "College-only blood donor platform with donor search and role-based access.",
    fullDescription:
      "A dedicated, privacy-focused institutional web portal designed to connect registered student and faculty blood donors with emergency requesters in real time. Features structured blood group filtering, department tags, availability toggles, and secure contact gateways.",
    problem:
      "During critical medical emergencies involving college members, finding rare matching blood types quickly through scattered social media groups causes fatal delays and spam.",
    solution:
      "Engineered an authenticated campus directory powered by Express.js and MySQL, providing immediate indexed search by blood group (A+, B+, O+, AB-, etc.), eligibility status, and direct one-click emergency contact options.",
    image: bloodDonorImage,
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "React",
      "REST APIs"
    ],
    flow: [
      "React",
      "Express",
      "Node.js",
      "MySQL"
    ],
    features: [
      "Donor Search",
      "Blood Group Filtering",
      "Profile View",
      "Call / Message",
      "Admin Approval Flow",
      "Donation History Log"
    ],
    challenges: [
      "Designing a normalized relational schema with strict privacy masking for phone numbers",
      "Implementing efficient indexing on blood groups and geographic campus zones",
      "Handling concurrent donor search queries during peak emergency broadcasts"
    ],
    outcome:
      "Delivered a centralized, reliable campus life-saving portal with sub-50ms query response times across hundreds of student profiles.",
    github: "https://github.com/praveen1304r",
    liveDemo: "#",
    color: "#EF4444",
    accentGlow: "rgba(239, 68, 68, 0.4)"
  },
  {
    id: "campuspulse",
    number: "03",
    title: "CampusPulse",
    category: "Web Application",
    date: "2026",
    tagline: "College event countdown, RSVP & QR pass management system",
    description:
      "College event countdown and RSVP tracking platform.",
    fullDescription:
      "CampusPulse is a centralized event discovery and interactive ticketing platform tailored for university symposiums, hackathons, and cultural fests. Featuring live countdown clocks, group RSVP registrations, and automated QR code entry passes.",
    problem:
      "Campus events rely on messy Google Forms, scattered social media posters, and long entry queues with manual name verification at auditorium doors.",
    solution:
      "A unified event platform built with React and Firebase that provides live event countdowns, automated team slot reservations, and generates unique scannable QR passes for rapid event check-in.",
    image: EventImage,
    technologies: [
      "React",
      "CSS",
      "Firebase",
      "QR Generation",
      "Cloud Database"
    ],
    flow: [
      "React",
      "Firebase",
      "Event Registration",
      "QR Entry"
    ],
    features: [
      "Event Countdown",
      "RSVP",
      "Team Registration",
      "QR Entry Pass",
      "Coordinator Dashboard",
      "Live Ticket Quotas"
    ],
    challenges: [
      "Synchronizing live seat quota counters during high-concurrency registration rushes",
      "Client-side dynamic generation and download of digital QR pass tickets",
      "Designing responsive countdown timers with timezone-safe calculations"
    ],
    outcome:
      "Streamlined college event operations, eliminated paper passes, and accelerated attendee entry validation time by 75%.",
    github: "https://github.com/praveen1304r",
    liveDemo: "#",
    color: "#06B6D4",
    accentGlow: "rgba(6, 182, 212, 0.4)"
  },
  {
  id: "loomlink",
  number: "04",
  title: "LoomLink",
  category: "Web Application",
  date: "2026",
  tagline: "Smart textile waste exchange platform connecting weavers with industries",
  description:
    "A digital textile platform that connects handloom weavers and small-scale industries for efficient reuse of yarn and fabric waste.",
  fullDescription:
    "LoomLink is a web-based circular textile platform designed to connect handloom weavers with small-scale industries that need reusable textile materials. Weavers can upload available yarn and fabric waste with details such as material type, quantity and location, while industries can post their material requirements. The platform helps both sides discover suitable opportunities and promotes the reuse of textile waste instead of disposal.",
  problem:
    "Handloom weavers and small textile businesses often have unused yarn, fabric remnants and production waste but lack a simple digital platform to find suitable local buyers. At the same time, small-scale industries face high raw-material costs and difficulty finding affordable reusable textile materials.",
  solution:
    "A centralized textile exchange platform where weavers can list available textile waste and industries can post their material requirements. LoomLink matches material type, quantity and location to help users discover relevant opportunities and establish direct connections without unnecessary intermediaries.",
  image: LoomLinkImage,
  technologies: [
    "React",
    "CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API"
  ],
  flow: [
    "Weaver Registration",
    "Upload Textile Waste",
    "Industry Requirement",
    "Material Matching",
    "Connect & Reuse"
  ],
  features: [
    "Weaver Waste Upload",
    "Industry Demand Listings",
    "Material Search",
    "Quantity & Location Details",
    "Textile Material Matching",
    "Direct User Connection",
    "Waste Reuse Tracking",
    "Circular Economy Dashboard"
  ],
  challenges: [
    "Designing a simple platform that can be easily used by weavers and small-scale industries",
    "Matching available textile materials with industry requirements based on material type, quantity and location",
    "Creating an organized listing system for different types of yarn and fabric waste",
    "Maintaining consistent material and requirement data between users",
    "Designing the platform around textile waste reuse and circular-economy principles"
  ],
  outcome:
    "Created a digital textile exchange platform that helps convert reusable yarn and fabric waste into economic opportunities by connecting weavers with industries and encouraging sustainable material reuse.",
  github: "https://github.com/praveen1304r",
  liveDemo: "#",
  color: "#8B5CF6",
  accentGlow: "rgba(139, 92, 246, 0.4)"
}
];
