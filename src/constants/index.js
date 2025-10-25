import {
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "@/assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  // {
  //   id: "1",
  //   title: "Services",
  //   url: "/#services",
  // },
  // {
  //   id: "2",
  //   title: "Process",
  //   url: "/#process",
  // },

  {
    id: "4",
    title: "Projects",
    url: "/#projects",
  },
  // {
  //   id: "5",
  //   title: "Testimonials",
  //   url: "/#testimonials",
  // },
  {
    id: "6",
    title: "Blog",
    url: "/blog",
  },
  {
    id: "7",
    title: "Newsletter",
    url: "/newsletter",
  },
  // {
  //   id: "8",
  //   title: "Our Universe",
  //   url: "/universe",
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const aaladinServices = [
  "Product strategy & discovery",
  "Collaborative Solution Design",
  "Integration & deployment",
];

export const aaladinServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "E-Commerce Platform",
    text: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product management, cart functionality, and secure payments.",
    date: "Completed 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
    // Detailed project information
    client: "RetailMax Solutions",
    description:
      "A comprehensive e-commerce platform designed to handle high-volume transactions with advanced inventory management, multi-vendor support, and seamless payment processing. The platform serves over 10,000 daily active users and processes $2M+ in monthly transactions.",
    problem:
      "The client's legacy e-commerce system was outdated, slow, and couldn't handle peak traffic during sales events. They needed a modern, scalable solution that could grow with their business.",
    solution:
      "We built a modern, cloud-native e-commerce platform using React for the frontend, Node.js for the backend, and integrated Stripe for secure payments. The solution includes real-time inventory tracking, automated order processing, and advanced analytics.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe API",
      "AWS",
      "Redis",
      "Docker",
    ],
    currentStatus: "Live and serving 10,000+ daily users with 99.9% uptime",
    liveUrl: "https://retailmax-demo.aaladin.ai",
    screenshots: [roadmap1, roadmap2, roadmap3, roadmap4, roadmap1],
    features: [
      "Multi-vendor marketplace",
      "Real-time inventory management",
      "Advanced search and filtering",
      "Secure payment processing",
      "Order tracking and notifications",
      "Admin dashboard with analytics",
    ],
    results: [
      "300% increase in conversion rate",
      "50% reduction in page load times",
      "99.9% uptime achievement",
      "$2M+ monthly transaction volume",
    ],
  },
  {
    id: "1",
    title: "AI Content Generator",
    text: "Generative AI application for creating marketing content, blog posts, and social media captions using OpenAI GPT models with custom fine-tuning.",
    date: "In Progress",
    status: "progress",
    imageUrl: roadmap2,
    client: "ContentCorp Marketing Agency",
    description:
      "An AI-powered content generation platform that helps marketing teams create high-quality blog posts, social media content, and marketing copy in minutes instead of hours.",
    problem:
      "The marketing agency was spending 80% of their time on content creation, leaving little time for strategy and client relationships. They needed to scale content production without compromising quality.",
    solution:
      "We developed an AI content generator using OpenAI's GPT models with custom fine-tuning for the client's brand voice. The platform includes content templates, SEO optimization, and multi-language support.",
    technologies: [
      "Next.js",
      "OpenAI API",
      "Python",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    currentStatus: "Beta testing with 50+ users, preparing for public launch",
    liveUrl: "https://ai-content-beta.aaladin.ai",
    screenshots: [roadmap2, roadmap1, roadmap3, roadmap4],
    features: [
      "AI-powered content generation",
      "Custom brand voice training",
      "SEO optimization suggestions",
      "Multi-language support",
      "Content calendar integration",
      "Performance analytics",
    ],
    results: [
      "80% reduction in content creation time",
      "500+ pieces of content generated",
      "95% client satisfaction rate",
      "Currently in beta with 50+ active users",
    ],
  },
  {
    id: "2",
    title: "Task Management App",
    text: "Cross-platform mobile app built with React Native featuring real-time collaboration, push notifications, and offline synchronization capabilities.",
    date: "Completed 2024",
    status: "done",
    imageUrl: roadmap3,
    client: "ProductivityPro Inc",
    description:
      "A comprehensive task management mobile application that enables teams to collaborate effectively, track project progress, and maintain productivity across different time zones and work environments.",
    problem:
      "Remote teams were struggling with coordination and task visibility. Existing solutions were either too complex or lacked essential features like offline access and real-time collaboration.",
    solution:
      "We created a React Native app with real-time synchronization, offline capabilities, and intuitive UI. The app includes advanced features like time tracking, file attachments, and team analytics.",
    technologies: [
      "React Native",
      "Firebase",
      "Node.js",
      "Socket.io",
      "Redux",
      "Expo",
    ],
    currentStatus: "Live on App Store and Google Play with 5,000+ downloads",
    liveUrl: "https://taskmanager-demo.aaladin.ai",
    appStoreUrl: "https://apps.apple.com/app/productivitypro",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.productivitypro",
    screenshots: [roadmap3, roadmap4, roadmap1, roadmap2, roadmap3],
    features: [
      "Real-time collaboration",
      "Offline synchronization",
      "Push notifications",
      "Time tracking",
      "File attachments",
      "Team analytics dashboard",
    ],
    results: [
      "5,000+ app downloads",
      "4.8/5 star rating on app stores",
      "40% increase in team productivity",
      "Used by 200+ companies",
    ],
  },
  {
    id: "3",
    title: "Chrome Extension Suite",
    text: "Productivity-focused browser extensions including password manager, tab organizer, and website blocker with cloud sync across devices.",
    date: "In Progress",
    status: "progress",
    imageUrl: roadmap4,
    client: "FocusFlow Technologies",
    description:
      "A suite of Chrome extensions designed to boost productivity by managing passwords securely, organizing browser tabs efficiently, and blocking distracting websites during work hours.",
    problem:
      "Knowledge workers were losing 2+ hours daily due to poor browser organization, password management issues, and digital distractions. They needed an integrated solution to streamline their workflow.",
    solution:
      "We developed a comprehensive Chrome extension suite with cloud synchronization, advanced security features, and intelligent automation to help users stay focused and organized.",
    technologies: [
      "JavaScript",
      "Chrome Extension API",
      "Firebase",
      "Webpack",
      "CSS3",
    ],
    currentStatus: "Development 70% complete, alpha testing in progress",
    liveUrl: null, // Not yet launched
    chromeStoreUrl: "https://chrome.google.com/webstore/detail/focusflow-suite", // Coming soon
    screenshots: [roadmap4, roadmap2, roadmap1, roadmap3],
    features: [
      "Secure password management",
      "Intelligent tab organization",
      "Website blocking with schedules",
      "Cross-device synchronization",
      "Productivity analytics",
      "Custom workflow automation",
    ],
    results: [
      "Alpha testing with 100+ users",
      "90% user satisfaction in early feedback",
      "2+ hours daily time savings reported",
      "Preparing for Chrome Web Store launch",
    ],
  },
];

// Extended projects for the full projects page
export const allProjects = [
  ...roadmap, // Include the featured projects
  {
    id: "4",
    title: "Healthcare Management System",
    text: "Comprehensive healthcare platform with patient records, appointment scheduling, and telemedicine features built with React, Node.js, and MongoDB.",
    date: "Completed 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: false,
    client: "MediCare Solutions",
    description:
      "A comprehensive healthcare management platform that streamlines patient care, appointment scheduling, and medical record management for healthcare providers of all sizes.",
    problem:
      "Healthcare providers were using multiple disconnected systems for patient management, leading to inefficiencies, data silos, and poor patient experience.",
    solution:
      "We developed an integrated healthcare platform with patient portals, telemedicine capabilities, and comprehensive record management to streamline operations.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Stripe",
      "Twilio",
    ],
    currentStatus:
      "Serving 50+ healthcare facilities with 100,000+ patient records",
    liveUrl: "https://medicare-platform.aaladin.ai",
    screenshots: [roadmap1, roadmap2, roadmap3, roadmap4],
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Telemedicine integration",
      "Billing and insurance",
      "Prescription management",
      "Analytics dashboard",
    ],
    results: [
      "50+ healthcare facilities using the platform",
      "100,000+ patient records managed",
      "60% reduction in administrative time",
      "95% patient satisfaction rate",
    ],
  },
  {
    id: "5",
    title: "Real Estate Platform",
    text: "Modern property listing and management platform with virtual tours, mortgage calculator, and CRM integration using Next.js and PostgreSQL.",
    date: "Completed 2024",
    status: "done",
    imageUrl: roadmap2,
    colorful: true,
    client: "PropertyPro Realty",
    description:
      "A modern real estate platform that connects buyers, sellers, and agents with advanced search capabilities, virtual tours, and integrated financial tools.",
    problem:
      "Traditional real estate platforms lacked modern features like virtual tours and integrated financial calculators, making property discovery and evaluation difficult.",
    solution:
      "We built a comprehensive platform with 3D virtual tours, mortgage calculators, market analytics, and CRM integration for real estate professionals.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Stripe",
      "Mapbox",
      "AWS S3",
      "WebRTC",
    ],
    currentStatus:
      "Live with 10,000+ property listings and 5,000+ active users",
    liveUrl: "https://propertypro-platform.aaladin.ai",
    screenshots: [roadmap2, roadmap3, roadmap4, roadmap1],
    features: [
      "Advanced property search",
      "3D virtual tours",
      "Mortgage calculator",
      "Market analytics",
      "Agent CRM system",
      "Document management",
    ],
    results: [
      "10,000+ property listings",
      "5,000+ active users",
      "40% increase in lead conversion",
      "200+ real estate agents onboarded",
    ],
  },
  {
    id: "6",
    title: "Fintech Dashboard",
    text: "Advanced financial analytics dashboard with real-time data visualization, portfolio tracking, and automated reporting using React and D3.js.",
    date: "In Progress",
    status: "progress",
    imageUrl: roadmap3,
    colorful: false,
    client: "InvestSmart Analytics",
    description:
      "A sophisticated financial analytics platform that provides real-time market data, portfolio tracking, and automated investment insights for financial advisors and investors.",
    problem:
      "Financial advisors needed a unified platform to track multiple portfolios, analyze market trends, and generate client reports efficiently.",
    solution:
      "We're developing a comprehensive fintech dashboard with real-time data feeds, advanced charting, and automated reporting capabilities.",
    technologies: [
      "React",
      "D3.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
    ],
    currentStatus: "80% complete, beta testing with 25+ financial advisors",
    liveUrl: "https://fintech-beta.aaladin.ai",
    screenshots: [roadmap3, roadmap1, roadmap2, roadmap4],
    features: [
      "Real-time market data",
      "Portfolio analytics",
      "Risk assessment tools",
      "Automated reporting",
      "Client management",
      "Performance tracking",
    ],
    results: [
      "Beta testing with 25+ advisors",
      "Real-time processing of 1M+ data points",
      "50% reduction in report generation time",
      "Preparing for full launch Q2 2024",
    ],
  },
  {
    id: "7",
    title: "Learning Management System",
    text: "Interactive online learning platform with video streaming, progress tracking, and gamification features built with Vue.js and Laravel.",
    date: "Completed 2023",
    status: "done",
    imageUrl: roadmap4,
    colorful: false,
    client: "EduTech Academy",
    description:
      "A comprehensive learning management system that delivers engaging online education with interactive content, progress tracking, and gamification elements.",
    problem:
      "Educational institutions needed a modern LMS that could engage students with interactive content and provide detailed analytics on learning progress.",
    solution:
      "We created an interactive LMS with video streaming, quizzes, gamification, and comprehensive analytics to enhance the online learning experience.",
    technologies: [
      "Vue.js",
      "Laravel",
      "MySQL",
      "Redis",
      "AWS CloudFront",
      "WebRTC",
    ],
    currentStatus: "Serving 15,000+ students across 50+ courses",
    liveUrl: "https://edutech-academy.aaladin.ai",
    screenshots: [roadmap4, roadmap2, roadmap1, roadmap3],
    features: [
      "Interactive video lessons",
      "Progress tracking",
      "Gamification system",
      "Discussion forums",
      "Assignment management",
      "Certification system",
    ],
    results: [
      "15,000+ active students",
      "50+ courses available",
      "85% course completion rate",
      "4.7/5 average student rating",
    ],
  },
  {
    id: "8",
    title: "IoT Monitoring Platform",
    text: "Real-time IoT device monitoring and control system with data analytics, alerts, and predictive maintenance using React and Python.",
    date: "In Progress",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
    client: "SmartFactory Industries",
    description:
      "An IoT monitoring platform that provides real-time visibility into industrial equipment, predictive maintenance alerts, and comprehensive analytics for manufacturing operations.",
    problem:
      "Manufacturing facilities lacked real-time visibility into equipment performance, leading to unexpected downtime and costly maintenance issues.",
    solution:
      "We're building an IoT platform that monitors equipment in real-time, predicts maintenance needs, and provides actionable insights to prevent downtime.",
    technologies: [
      "React",
      "Python",
      "InfluxDB",
      "MQTT",
      "TensorFlow",
      "Docker",
    ],
    currentStatus: "Pilot deployment monitoring 500+ IoT devices",
    liveUrl: "https://iot-monitoring-demo.aaladin.ai",
    screenshots: [roadmap1, roadmap3, roadmap2, roadmap4],
    features: [
      "Real-time device monitoring",
      "Predictive maintenance",
      "Custom alert system",
      "Data visualization",
      "Remote device control",
      "Performance analytics",
    ],
    results: [
      "500+ IoT devices monitored",
      "30% reduction in unplanned downtime",
      "Pilot testing in 3 manufacturing facilities",
      "Full deployment planned for Q3 2024",
    ],
  },
];

export const collabText =
  "We work closely with your team using modern development tools and agile methodologies to deliver exceptional results on time.";

export const collabContent = [
  {
    id: "0",
    title: "Product Strategy & Discovery",
    text: "We identify challenges, define goals, and create clear, data-driven roadmaps.",
  },
  {
    id: "1",
    title: "Collaborative Solution Design",
    text: "We co-create intelligent solutions through adaptability, transparency, and continuous feedback.",
  },
  {
    id: "2",
    title: "Integration & Deployment",
    text: "We integrate, optimize, and support your AI solution for lasting success.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Discovery",
    description: "Project planning and technical consultation",
    price: "2.5K",
    features: [
      "2-week discovery and planning phase",
      "Technical architecture and roadmap",
      "UI/UX wireframes and user flows",
      "Project timeline and cost estimation",
    ],
  },
  {
    id: "1",
    title: "Development",
    description: "Full-stack development and deployment",
    price: "15K",
    features: [
      "Complete web/mobile application development",
      "Cloud deployment and CI/CD setup",
      "3 months of maintenance and support",
      "Performance optimization and testing",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom solutions with dedicated team",
    price: null,
    features: [
      "Dedicated development team (3-8 developers)",
      "Custom integrations and enterprise features",
      "24/7 support with SLA guarantees",
      "Ongoing maintenance and feature updates",
    ],
  },
];

export const services = [
  {
    id: "0",
    title: "Web and Mobile App Development",
    text: "Full-stack development for responsive web applications and native mobile apps using modern frameworks like React, Next.js, React Native, and Flutter.",
    backgroundUrl: benefitCard1,
    icon: "Code2",
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "UI/UX Design",
    text: "User-centered design solutions that create intuitive interfaces and seamless user experiences across all digital touchpoints.",
    backgroundUrl: benefitCard2,
    icon: "Palette",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Automation Tools",
    text: "Custom automation solutions that streamline business processes, reduce manual work, and increase operational efficiency through intelligent workflows.",
    backgroundUrl: benefitCard3,
    icon: "Settings",
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Generative AI",
    text: "Advanced AI solutions including chatbots, content generation, image synthesis, and machine learning models tailored to your business needs.",
    backgroundUrl: benefitCard4,
    icon: "Brain",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Cloud Solutions",
    text: "Scalable cloud infrastructure, deployment, and management services using AWS, Google Cloud, and Azure for optimal performance and reliability.",
    backgroundUrl: benefitCard5,
    icon: "Cloud",
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Chrome Extensions",
    text: "Custom browser extensions that enhance productivity, automate tasks, and integrate seamlessly with web applications to improve user workflows.",
    backgroundUrl: benefitCard6,
    icon: "Puzzle",
    imageUrl: benefitImage2,
  },
];

// Backward compatibility alias
export const benefits = services;

export const testimonials = [
  {
    id: "0",
    name: "Sarah Chen",
    role: "CTO, TechFlow Inc",
    text: "Aaladin transformed our legacy system into a modern, scalable platform. Their AI integration boosted our efficiency by 300%. Exceptional work!",
    avatar: "/assets/testimonials/avatar-1.jpg",
  },
  {
    id: "1",
    name: "Marcus Rodriguez",
    role: "Founder, StartupLab",
    text: "From concept to deployment in just 8 weeks. The team's expertise in React and Node.js is unmatched. Our users love the new interface!",
    avatar: "/assets/testimonials/avatar-2.jpg",
  },
  {
    id: "2",
    name: "Emily Watson",
    role: "Product Manager, InnovateCorp",
    text: "The Chrome extension they built has become essential for our workflow. Clean code, great performance, and delivered ahead of schedule.",
    avatar: "/assets/testimonials/avatar-3.jpg",
  },
  {
    id: "3",
    name: "David Kim",
    role: "CEO, DataDriven Solutions",
    text: "Aaladin's AI content generator revolutionized our marketing. We now produce 10x more content with better quality. ROI was immediate.",
    avatar: "/assets/testimonials/avatar-4.jpg",
  },
  {
    id: "4",
    name: "Lisa Thompson",
    role: "Operations Director, CloudFirst",
    text: "Their automation tools saved us 40 hours per week. The team understood our needs perfectly and delivered beyond expectations.",
    avatar: "/assets/testimonials/avatar-5.jpg",
  },
  {
    id: "5",
    name: "Alex Johnson",
    role: "Tech Lead, MobileFirst",
    text: "The React Native app they developed is flawless. Cross-platform compatibility, smooth animations, and rock-solid performance.",
    avatar: "/assets/testimonials/avatar-6.jpg",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
