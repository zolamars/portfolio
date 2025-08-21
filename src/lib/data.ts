import { Project, Experience, Skill, Certificate, ContactInfo } from "@/types";

export const contactInfo: ContactInfo = {
  email: "zolyemek@gmail.com",
  linkedin: "https://www.linkedin.com/in/zolbera",
  github: "https://github.com/zolamars",
  location: "Ethiopia"
};
export const professionalExperience = [
  {
    company: "TwoF Capital",
    position: "Senior Front-End Developer",
    duration: "05/2022 - present",
    location: "Addis Ababa, Ethiopia",
    responsibilities: [
      "Developed Ride Plus SSO, System Admin, and Corporate Admin web applications for comprehensive ride management.",
      "Built Payment Gateway platform including Admin, Merchant, and Checkout web applications for secure transaction processing.",
      "Created Delivery Dispatch web application to streamline order scheduling, real-time tracking, and driver management.",
      "Implemented role-based access control and authentication systems across multiple platforms.",
      "Optimized frontend performance, reducing page load times by 30% across all applications.",
      "Led code reviews and debugging, collaborating with cross-functional teams to ensure seamless system integration."
    ]
  },
  {
    company: "Fineto IoT Solutions",
    position: "Hardware & Software Engineer",
    duration: "07/2019 - 05/2022",
    location: "Addis Ababa, Ethiopia",
    responsibilities: [
      "Designed an access control system, including creating hardware schemes, circuit designs, and PCB layouts.",
      "Conducted hardware testing and debugging to ensure system reliability and compliance with design specifications.",
      "Developed and maintained Spring Boot back-end services, focusing on scalability, performance, and security.",
      "Implemented robust unit and integration testing, achieving 95% test coverage and reducing production bugs.",
      "Played a key role in transitioning from hardware to software development, leveraging multidisciplinary skills to drive project success."
    ]
  },
  {
    company: "Anhui Telecommunications Engineering Co. LTD",
    position: "Site Supervisor Engineer, Software Engineer",
    duration: "09/2017 - 04/2019",
    location: "Addis Ababa, Ethiopia",
    responsibilities: [
      "Supervised multiple sites and managed team coordination for project execution.",
      "Developed network system layouts and handled hardware/software troubleshooting.",
      "Conducted training sessions for local technicians on network and hardware maintenance."
    ]
  }
];

export const qualifications = [
  "Senior Front-End Developer with 5+ years of experience in designing and developing responsive web applications.",
  "Expertise in React, JavaScript, TypeScript, Redux, and modern UI frameworks.",
  "Strong background in performance optimization, improving load times by 30% in previous projects.",
  "Experience in project management and Agile methodologies, leading teams to successful product launches.",
  "Proficient in front-end development, ensuring seamless integration and scalability.",
  "Fluent in English and Amharic."
];

export const education = {
  institution: "Addis Ababa Institute of Technology (AAIT), Addis Ababa University",
  degree: "Electrical and Computer Engineering",
  duration: "10/2012 - 07/2017",
  location: "Addis Ababa, Ethiopia"
};




export const projects: Project[] = [
  {
    id: "byd-cms",
    title: "FinTech Credit Management System",
    description: "A comprehensive credit management system built for FinTech Investment PLC, financing BYD electric vehicles in Ethiopia.",
    longDescription: "A comprehensive credit management system built for FinTech Investment PLC, an Ethiopian company financing BYD electric vehicles. The platform supports the entire credit lifecycle—customer onboarding, credit assessment, payment tracking, penalty calculation, and document handling. It includes role-based access control, SMS notifications, digital agreement workflows, exchange rate management, and real-time reporting across 15+ interconnected modules.",
    techStack: ["React", "TypeScript", "Material UI", "React Query", "SMS Integration", "PDF Generation"],
    liveUrl: "https://cms.fintechinvestment.net",
    featured: true,
    status: "completed",
    category: "web"
  },
  {
    id: "ride-delivery-platform",
    title: "Ride, Delivery & E-commerce Platform",
    description: "Multi-service platform combining ride-hailing, delivery services, and e-commerce functionality.",
    longDescription: "Currently developing a comprehensive platform that integrates ride-hailing services, delivery logistics, and e-commerce capabilities for Semay Software. Serving as Frontend Developer, Scrum Master, and preparing project proposals to ensure successful delivery.",
    techStack: ["React", "Next.js", "TypeScript", "Material UI", "React Query"],
    featured: true,
    status: "in-progress",
    category: "web"
  },
  {
    id: "ride-plus-suite",
    title: "Ride Plus Multi-Platform Suite",
    description: "Complete ride management ecosystem with SSO, admin panels, and corporate dashboards.",
    longDescription: "Developed a comprehensive suite of web applications for TwoF Capital including Ride Plus SSO authentication system, System Admin dashboard, and Corporate Admin panel for managing ride services, user accounts, and business operations.",
    techStack: ["React", "TypeScript", "SSO", "Admin Dashboards", "Role-based Access"],
    liveUrl: "https://rpadmin.rideplus.co",
    featured: true,
    status: "completed",
    category: "web"
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway Platform",
    description: "Multi-application payment processing system with admin, merchant, and checkout interfaces.",
    longDescription: "Built a complete payment gateway ecosystem for TwoF Capital featuring separate Admin dashboard for system management, Merchant portal for business users, and secure Checkout application for seamless payment processing.",
    techStack: ["React", "TypeScript", "Payment APIs", "Security", "Admin Panels"],
    featured: true,
    status: "in-progress",
    category: "web"
  },
  {
    id: "mira-coffee",
    title: "Mira Coffee Company Profile",
    description: "WordPress-based company profile website for Ethiopian coffee exporter.",
    longDescription: "Served as Product Owner and project facilitator for Mira Coffee's company profile website. The project showcases their Ethiopian coffee varieties, farming practices, and company heritage with a focus on tradition and quality.",
    techStack: ["WordPress", "PHP", "MySQL", "Responsive Design", "SEO"],
    liveUrl: "https://miracoffees.com",
    featured: false,
    status: "completed",
    category: "web"
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website showcasing projects and skills.",
    longDescription: "A clean and intuitive portfolio website built with Next.js, featuring dark/light mode theming, responsive design, and optimized performance.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/zolamars/portfolio",
    featured: false,
    status: "completed",
    category: "web"
  }
];

export const experiences: Experience[] = [
  {
    id: "current-role",
    company: "Semay Software",
    position: "Frontend Developer & Scrum Master",
    duration: "2023 - Present",
    description: "Leading frontend development and agile processes for a multi-service platform combining ride-hailing, delivery, and e-commerce features. Managing sprint planning, daily standups, and team coordination while developing user interfaces, ensuring code quality, and preparing project proposals.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Jira", "Agile/Scrum"],
    current: true
  },
  {
    id: "twof-capital",
    company: "TwoF Capital",
    position: "Senior Frontend Developer",
    duration: "2022 - 2023",
    description: "Developed multiple web applications including Ride Plus suite (SSO, System Admin, Corporate Admin), Payment Gateway platform (Admin, Merchant, Checkout), and Delivery Dispatch system. Implemented role-based access control and optimized performance across all applications.",
    technologies: ["React", "TypeScript", "SSO", "Admin Dashboards", "Payment APIs"],
    current: false
  },
  {
    id: "fintech-dev",
    company: "FinTech Investment PLC",
    position: "Full Stack Developer",
    duration: "2021 - 2022",
    description: "Developed and maintained the BYD Electric Vehicle Credit Management System, a comprehensive platform supporting the entire credit lifecycle with 15+ interconnected modules including customer onboarding, credit assessment, payment tracking, and real-time reporting.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "SMS Integration"],
    current: false
  }
];

export const skills: Skill[] = [
  // Frontend
  { id: "react", name: "React", category: "frontend", level: "advanced" },
  { id: "nextjs", name: "Next.js", category: "frontend", level: "advanced" },
  { id: "typescript", name: "TypeScript", category: "frontend", level: "advanced" },
  { id: "javascript", name: "JavaScript", category: "frontend", level: "expert" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { id: "html", name: "HTML5", category: "frontend", level: "expert" },
  { id: "css", name: "CSS3", category: "frontend", level: "advanced" },
  
  // Backend
  { id: "nodejs", name: "Node.js", category: "backend", level: "advanced" },
  { id: "express", name: "Express.js", category: "backend", level: "advanced" },
  { id: "mongodb", name: "MongoDB", category: "backend", level: "intermediate" },
  { id: "postgresql", name: "PostgreSQL", category: "backend", level: "intermediate" },
  { id: "python", name: "Python", category: "backend", level: "intermediate" },
  
  // Tools
  { id: "git", name: "Git", category: "tools", level: "advanced" },
  { id: "jira", name: "Jira", category: "tools", level: "advanced" },
  { id: "scrum", name: "Scrum/Agile", category: "tools", level: "advanced" },
  { id: "figma", name: "Figma", category: "tools", level: "intermediate" }
];

export const certificates: Certificate[] = [
  {
    id: "agile-jira",
    name: "Agile with Atlassian Jira",
    issuer: "Atlassian",
    date: "2025"
  },
  {
    id: "python-basics",
    name: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan (Coursera)",
    date: "2025"
  },
  {
    id: "ftl-ml-bootcamp",
    name: "Frontier Tech Leaders Programme – Ethiopia Machine Learning Bootcamp",
    issuer: "UNDP",
    date: "2025"
  },
  {
    id: "hp-life-digital-business",
    name: "Introduction to Digital Business Skills",
    issuer: "HP LIFE",
    date: "2025",
    credentialId: "ff6d57d4-5ec5-463e-b42b-4ed2a561d3e5"
  },
  {
    id: "hp-life-uvp",
    name: "Unique Value Proposition",
    issuer: "HP LIFE",
    date: "2025",
    credentialId: "a06c844b-0f19-43be-b97b-965a4e264b74"
  },
  {
    id: "hp-life-basics-finance",
    name: "Basics of Finance",
    issuer: "HP LIFE",
    date: "2025",
    credentialId: "01d5bea6-6357-44a8-8a05-7319840f170c"
  },
  {
    id: "hp-life-design-thinking",
    name: "Design Thinking",
    issuer: "HP LIFE",
    date: "2025",
    credentialId: "5684a556-a16c-4d4a-894b-b6097206f3e3"
  },
  {
    id: "hp-life-effective-leadership",
    name: "Effective Leadership",
    issuer: "HP LIFE",
    date: "2025",
    credentialId: "603e0a35-2ef8-48cd-8890-5baf3d56607a"
  }
];

export const aboutMe = {
  intro: "I'm a passionate Frontend Developer and Scrum Master with experience in building modern web applications and leading agile development teams.",
  description: "With a strong foundation in React, Next.js, and TypeScript, I specialize in creating responsive, user-friendly web applications. My experience spans from fintech solutions to multi-service platforms, and I'm committed to writing clean, maintainable code while ensuring excellent user experiences.",
  highlights: [
    "Frontend development with modern frameworks",
    "Agile project management and team leadership",
    // "Full-stack web application development",
    "Credit management and fintech systems",
    "Responsive and accessible UI/UX design"
  ]
};
