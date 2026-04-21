export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Feedback",
    href: "#feedback",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

// Placeholder colleague feedback until final testimonials are collected.
export const colleagueFeedbacks = [
  {
    id: 1,
    name: "Pranav Kumar Aggarwal",
    position: "Software Engineer L2",
    img: "assets/pranav1.jpg",
    review:
      "Placeholder feedback from Pranav will go here. This card is reserved for teammate feedback around engineering ownership, collaboration, and execution quality.",
  },
  {
    id: 2,
    name: "Tamojay Dey",
    position: "Software Engineer L2 - UI",
    img: "assets/tamojay.jpg",
    review:
      "Placeholder feedback from Tamojay will go here. This space is reserved for input on frontend collaboration, product thinking, and day-to-day teamwork.",
  },
  {
    id: 3,
    name: "Akash V Kulkarni",
    position: "Senior Software Engineer",
    img: "assets/akash.jpg",
    review:
      "Placeholder feedback from Akash will go here. This card will later capture perspective on system design, technical depth, and delivery across distributed services.",
  },
  {
    id: 4,
    name: "Shubham Rastogi",
    position: "Manager, Software Development Engineering",
    img: "assets/shubham1.jpg",
    review:
      "Placeholder feedback from Shubham will go here. This section is reserved for leadership feedback on ownership, impact, and growth within the team.",
  },
];

// Need to replace these Projects with My Own Projects
export const myProjects = [
  {
    title: "Podcastr - AI Podcast Platform",
    desc: "Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "LiveDoc - Real-Time Google Docs Clone",
    desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "CarePulse - Health Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Horizon - Online Banking Platform",
    desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
    subdesc:
      "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Imaginify - AI Photo Manipulation App",
    desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

type calculateSizesType = {
  deskScale: number;
  deskPosition: [number, number, number];
  cubePosition: [number, number, number];
  reactLogoPosition: [number, number, number];
  ringPosition: [number, number, number];
  targetPosition: [number, number, number];
};

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean,
  isLargeDesktop: boolean,
): calculateSizesType => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : isLargeDesktop ? 0.06 : 0.065,
    deskPosition: isMobile
      ? [0.5, -4.5, 0]
      : isTablet
        ? [0.25, -5, 0]
        : isLargeDesktop
          ? [0.25, -6.2, 0]
          : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : isLargeDesktop
            ? [10, -6.2, 0]
            : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : isLargeDesktop
            ? [13, 1.5, 0]
            : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : isLargeDesktop
            ? [-24, 10, 0]
            : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : isLargeDesktop
            ? [-13, -10, -10]
            : [-13, -11, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    company: "Thomson Reuters",
    totalDuration: "2 yrs 3 mos",
    location: "Bengaluru, Karnataka, India",
    icon: "/assets/trlogo.png",
    roles: [
      {
        id: 1,
        title: "Software Engineer",
        employmentType: "Full-time",
        duration: "May 2025 - Present",
        tenure: "1 yr",
        workMode: "Hybrid",
        summary:
          "Leading feature ownership, real-time product workflows, and production reliability across distributed CPA platform services.",
        highlights: [
          "Designed a centralized event classification system to split internal vs client events across 124 tracked events.",
          "Modified 18+ microservices and database schemas, and delivered a historical event reclassification migration with zero QA, staging, or master bugs.",
          "Built a real-time CPA dashboard with SignalR synchronization, tab-based filtering, pagination, sorting, and contextual HTML-to-PDF generation.",
          "Improved production reliability for 50k+ daily usage by fixing critical blob deletion issues, restoring 10k+ blobs in under 10 minutes, and migrating 33 services to Datadog.",
          "Served as a required PR reviewer across 3 product teams, mentored interns to full-time placement, and conducted KT sessions for new engineers.",
        ],
        animation: "victory",
      },
      {
        id: 2,
        title: "Associate Software Engineer",
        employmentType: "Full-time",
        duration: "Sep 2024 - May 2025",
        tenure: "9 mos",
        workMode: "On-site",
        summary:
          "Built the foundations for Thomson Reuters' Entity Gather expansion and scaled batch document processing for enterprise CPA workflows.",
        highlights: [
          "Acted as a founding engineer for the multi-quarter Entity Gather initiative, expanding document gathering beyond organizer-based flows.",
          "Designed a CSV-driven extraction model with configurable column mapping and built BatchExtractor and Replication Service microservices from scratch.",
          "Implemented Azure Service Bus, Blob Storage, Key Vault, AKS deployment workflows, and Saga-based distributed batch processing.",
          "Delivered a stable production batch architecture handling 200 gathers × 3000 documents with 6M+ database inserts, plus 8-10 new APIs, schema changes, and secure SAS uploads.",
        ],
        animation: "clapping",
      },
      {
        id: 3,
        title: "Graduate Engineering Trainee",
        employmentType: "Internship",
        duration: "Feb 2024 - Sep 2024",
        tenure: "8 mos",
        workMode: "On-site",
        summary:
          "Started with frontend, security, and platform quality improvements across multiple Thomson Reuters products.",
        highlights: [
          "Resolved npm vulnerabilities across 5 major products using Snyk and implemented dependency override strategies for nested package issues.",
          "Built a React + Jest unit testing proof of concept that was adopted across teams and improved frontend engineering confidence.",
          "Contributed to audit logging migration from SQL triggers to Cosmos DB microservices, fixed production UI bugs, and improved debugging reliability.",
        ],
        animation: "salute",
      },
    ],
  },
];
