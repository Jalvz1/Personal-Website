// just look at the setup its not hard to add 

export const categories = [
  { label: "All", value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Machine Learning", value: "ml" },
];

export const projects = [
  {
    id: "senior-project",
    title: "Company-Sponsored Senior Development Project",
    category: "fullstack",
    period: "January 2026 – May 2026",
    thumbnail: "/images/nda.webp",
    blurb:
      "An enterprise integration application for a company's internal business " +
      "workflow, built with a 7-person agile team and delivered to the sponsoring " +
      "company at the end of the semester.",
    gallery: ["/images/nda.webp"],
    whatIDid: [
      "Developed an enterprise integration app for a company's internal workflow in a 7-person agile team",
      "Built the front end with TypeScript, React, and Tailwind, and the backend with Node.js/Express and MSSQL",
      "Provisioned and deployed an Azure SQL database, including server setup and schema design",
      "Wrote unit tests with Vitest to ensure reliable software before delivery to the client",
      "Gathered and clarified requirements directly with company representatives",
      "Oversaw all merges and conflict resolutions to keep the codebase stable across the team",
    ],
    tech: ["TypeScript", "React", "Tailwind", "Node.js", "Express", "MSSQL", "Azure", "Vitest", "Jenkins"],
    links: { demo: "", github: "" },
  },
  {
    id: "property-management",
    title: "Real Estate Management System",
    category: "fullstack",
    period: "March 2026 – Present",
    thumbnail: "/images/confidential.png",
    blurb:
      "A full-stack platform that digitizes and streamlines the day-to-day " +
      "operations of my family's rental business. It brings tenant management, " +
      "lease tracking, and maintenance requests into one place — replacing the " +
      "paper forms and spreadsheets the business previously relied on — and gives " +
      "administrators real-time reporting to support their decisions. Multiple " +
      "team members can work in the system at once through secure, role-based " +
      "access. It is built with a responsive Angular frontend, an ASP.NET Core " +
      "(C#) REST API, and a SQL Server relational database, secured with JWT " +
      "authentication.",
    gallery: ["/images/confidential.png"],
    whatIDid: [
      "Built a full-stack web application to streamline operations for my family's rental business",
      "Designed RESTful APIs with ASP.NET Core, JWT tokens for multi-user access, and a SQL Server relational database",
      "Built a responsive Angular UI for tenant management, lease tracking, and maintenance requests with real-time reporting",
      "Consolidated previously paper-based and spreadsheet-driven operations into a single platform",
    ],
    tech: ["Angular", "TypeScript", "Tailwind", "ASP.NET Core", "C#", "SQL Server", "JWT"],
    links: { demo: "", github: "" },
  },
  {
    id: "lung-cancer-detection",
    title: "Dual-Pipeline Lung Cancer Detection System",
    category: "ml",
    period: "December 2025 · 3rd Place, UH AI & Data Science Showcase",
    thumbnail: "/projects/lung-cancer-detection/lung-detection-screenshot.png",
    blurb:
      "A dual-pipeline lung cancer detection system built with a team of 3 — 3rd place at the UH Fall 2025 AI & Data Science Showcase. It's a two-part system: (1) a risk-assessment model that alerts healthcare providers to investigate potential pulmonary illness based on patient health, lifestyle, environment, and vitals; and (2) a CT-scan analysis CNN that detects lung cancer and classifies tumors as Benign, Normal, or Malignant.",
    // Turns the matching text in `blurb` into a link to the showcase page.
    blurbLink: {
      text: "UH Fall 2025 AI & Data Science Showcase",
      url: "https://hpedsi.uh.edu/partnerships/sponsored-events/data-science-showcase",
    },
    gallery: [
      "/projects/lung-cancer-detection/lung-detection-screenshot.png",
      "/projects/lung-cancer-detection/lungcanceraward.png",
    ],
    whatIDid: [
      "Built a dual-pipeline lung cancer detection system in a team of 3 using Python and TensorFlow",
      "Trained and evaluated the models across multiple datasets to improve detection performance",
      "Earned 3rd place at the University of Houston Fall 2025 AI & Data Science Showcase",
    ],
    tech: ["Python", "TensorFlow", "Keras"],
    // Two PDFs instead of screenshots. Drop the files in
    // public/projects/lung-cancer-detection/ and rename the labels/files to match.
    documents: [
      { label: "Showcase Slides", url: "/projects/lung-cancer-detection/showcase-slides.pdf" },
      { label: "Report", url: "/projects/lung-cancer-detection/report.pdf" },
    ],
    links: {
      demo: "",
      github: "https://github.com/Jalvz1/Dual-Pipeline-Lung-Cancer-Detection-System",
    },
  },
  {
    id: "food-bank",
    title: "Non-Profit Food Bank Platform",
    category: "fullstack",
    period: "August 2025 – November 2025",
    thumbnail: "/images/placeholder.svg",
    blurb:
      "A full-stack volunteer management platform built for a non-profit food " +
      "bank. Volunteers can create accounts, browse events and shifts posted by " +
      "administrators, and sign up to help, while administrators create and " +
      "manage events, coordinate schedules, and match volunteers to the roles " +
      "that need them. The platform includes secure authentication with email " +
      "verification, role-based dashboards tailored to each type of user, and " +
      "notifications that keep volunteers and staff in sync. It is built with a " +
      "React frontend, a Node.js/Express REST API, and a MySQL database, with " +
      "Firebase handling authentication and Microsoft Azure hosting the deployment.",
    gallery: ["/images/placeholder.svg"],
    whatIDid: [
      "Built the volunteer registration page where users create a profile and list their skill sets",
      "Built the administrator page for creating, editing, and deleting events that can require specific skills or none",
      "Built the event registration flow that only lets users sign up for events matching their skills (or events that need none), and recommends events that fit their preferred skill",
      "Developed the notification system that confirms sign-ups and sends reminders as an event's date approaches, implemented with a database trigger",
      "Single-handedly designed and built the database and schema",
    ],
    tech: ["JavaScript", "React", "Tailwind", "Express", "MySQL", "Firebase", "Azure"],
    links: {
      demo: "",
      github: "https://github.com/tabriz-s/foodbank-volunteer-app",
    },
  },
  {
    id: "zoo-web-app",
    title: "Zoo Web Application",
    category: "fullstack",
    period: "February 2025 – April 2025",
    thumbnail: "/images/placeholder.svg",
    blurb:
      "A full-stack web application that simulates zoo operations, allowing " +
      "visitors to browse the zoo's animals and attractions, create accounts, " +
      "and purchase tickets, while employees manage animals and enclosures based " +
      "on their role. The platform includes a public visitor portal, role- and " +
      "privilege-based employee tools, a notification system driven by database " +
      "triggers, and operational reporting on revenue, zoo statistics, and animal " +
      "veterinary history. " + "The application features a React.js frontend, a JavaScript/Node.js backend, " +
      "and a MySQL relational database, with JWT-based authentication and " +
      "Microsoft Azure hosting the deployment.",
    gallery: ["/images/placeholder.svg"],
    whatIDid: [
      "Built the public enclosure information page available to visitors",
      "Built the employee-facing animal and enclosure management features",
      "Implemented role- and privilege-based access so each employee only sees the features and pages their role allows",
      "Collaborated on database schema design and optimization for animals, enclosures, attractions, employees, and visitors data",
    ],
    tech: ["JavaScript", "React", "Tailwind", "Express", "MySQL", "Azure", "JWT"],
    links: {
      demo: "",
      github: "https://github.com/Team-8-Uma-2025/ConceptualZoo",
    },
  },
];
