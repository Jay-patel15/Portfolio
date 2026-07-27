export const profile = {
  name: "Jay Patel",
  fullName: "Jay Girish Patel",
  role: "Data Analyst & Software Developer",
  location: "Thane, Maharashtra",
  phone: "+91 98920 07108",
  email: "gjaypatel15@gmail.com",
  github: "https://github.com/Jay-patel15",
  githubUsername: "Jay-patel15",
  linkedin: "https://www.linkedin.com/in/jay-patel-30904b317",
  tagline: "Data Analyst & Software Developer specializing in data engineering pipelines, analytics dashboards, SQL database architecture, and full-stack web solutions — leveraging Python, SQL, Next.js, Pandas, and Machine Learning.",
  available: true,
  resumeUrl: "https://drive.google.com/file/d/1i3GKz4ZrFr73qQvcRX5Y_x-son1MAk5f/view?usp=drive_link",
};

export const about = {
  paragraphs: [
    "I'm a Data Analyst and Software Developer based in Thane, Maharashtra, focused on building robust data pipelines, analytics dashboards, scalable backend services, and interactive web applications.",
    "I recently completed a stint as a Data Validation & Analytics Engineer at Schbang, where I designed and automated data validation workflows and performance analytics for an AI agent product. I wrote 20+ Python automation and data extraction scripts, reducing data verification latency by 40%.",
    "My toolkit spans Python, SQL, MySQL, MongoDB, Next.js, Pandas, NumPy, and Machine Learning, backed by a B.E. in Artificial Intelligence & Data Science. I combine analytical depth with software engineering rigor to solve complex data and technical problems.",
  ],
};

export const skills = [
  {
    id: "software-dev",
    title: "Software Engineering & Development",
    span: "md:col-span-2 md:row-span-2",
    items: [
      "Python Backend",
      "Next.js & React",
      "REST APIs",
      "SQL Database Design",
      "Automation Scripts",
      "System Architecture",
      "Git & CI/CD",
      "Performance Tuning"
    ],
  },
  {
    id: "languages",
    title: "Languages",
    span: "md:col-span-2",
    items: ["Python (advanced)", "SQL (MySQL, MongoDB)", "JavaScript / TypeScript", "Java (basic)"],
  },
  {
    id: "data-validation",
    title: "Data Analytics & Engineering",
    span: "md:col-span-2",
    items: ["Pandas (data analysis)", "NumPy", "Data Cleaning", "EDA", "ETL Pipelines", "Schema Validation", "Regex Parsing"],
  },
  {
    id: "bi-ml",
    title: "BI & ML Libraries",
    span: "md:col-span-1",
    items: ["Power BI", "Tableau", "Scikit-learn", "Data Visualization"],
  },
  {
    id: "tools",
    title: "Databases & Tools",
    span: "md:col-span-3",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Git", "VS Code", "Postman", "Jupyter Notebook", "Vercel"],
  },
];

export const experience = [
  {
    id: "schbang",
    role: "Data Validation & Analytics Engineer (Intern)",
    company: "Schbang",
    period: "Jan 2026 – May 2026",
    experienceLetterUrl: "https://drive.google.com/file/d/183TKHH9z0xduENHKLZjgJn3dEBMpoUj4/view?usp=drive_link",
    points: [
      "Designed and executed automated data validation workflows and analytics for “Second Brain” AI product, verifying multi-page document pipelines and LLM response accuracy.",
      "Built performance and load testing frameworks using Python and Locust to analyze response latencies and system throughput under heavy concurrent loads, optimizing pipeline performance by 40%.",
      "Identified and resolved 50+ data and backend system bottlenecks (null propagation, schema mismatches, and data retrieval shifts), documenting technical specs for engineering teams.",
      "Created parameterized validation matrices incorporating boundary, edge, and high-volume data inputs, increasing total pipeline verification coverage by 30%.",
      "Queried MongoDB and MySQL databases to perform deep backend verification and cross-table consistency checks against live API responses.",
      "Analyzed system reliability metrics across sprint releases, presenting data-driven quality insights and performance benchmarks for staging deployments.",
    ],
  },
];

export const projects = [
  {
    id: "ai-product-testing",
    title: "AI Agent Load Testing & Performance Suite",
    githubUrl: "https://github.com/Jay-patel15/Locust-setup",
    stack: ["Python", "Locust", "FastAPI", "Data Analytics", "Load Optimization"],
    description:
      "Built a modular performance and analytics framework for the 'Second Brain' AI product to analyze system throughput, evaluate response latencies, and validate schema integrity under load.",
    highlights: [
      "Reduced data verification cycles by 40% using automated Python scripts",
      "Simulated 500+ concurrent user chat sessions via Locust load scripts",
      "Automated schema verification and database record assertions",
    ],
    metric: { value: "500+", label: "concurrent users" },
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance Using ML",
    githubUrl: "https://github.com/Jay-patel15/Predictive-maintainance-using-ML",
    stack: ["Python", "EDA", "Scikit-learn", "Visualisation"],
    description:
      "Conducted full EDA on sensor dataset — correlation analysis, distribution plots, and outlier detection — to identify key failure predictors before model training.",
    highlights: [
      "92% classification accuracy",
      "30% reduction in simulated downtime",
      "Feature importance visualised for non-technical stakeholders",
    ],
    metric: { value: "92%", label: "model accuracy" },
  },
  {
    id: "pdf-to-csv",
    title: "PDF to CSV Converter using Regex",
    githubUrl: "https://github.com/Jay-patel15/PDF_to_CSV_using_Regex",
    stack: ["Python", "Regex", "PDF Parsing", "Pandas"],
    description:
      "College project (NHITM) that extracts tabular data from unstructured PDF documents and converts it into clean CSV files using regex-based pattern matching.",
    highlights: [
      "Automated extraction from multi-page PDFs",
      "Regex patterns handled inconsistent table formatting",
      "Eliminated manual data re-entry",
    ],
    metric: { value: "100%", label: "manual entry eliminated" },
  },
];

// Set each marksheetUrl to the real Drive share link for that result; leave null to hide the "View Result" button.
export const education = [
  {
    id: "be-aids",
    degree: "B.E. in Artificial Intelligence & Data Science",
    institution: "New Horizon Institute of Technology and Management, Thane",
    score: "CGPI: 7.0",
    period: "Jun 2025",
    marksheetUrl: null,
  },
  {
    id: "diploma-ce",
    degree: "Diploma in Computer Engineering",
    institution: "Pravin Patil Polytechnic, Bhayandar",
    score: "82%",
    period: "Jul 2022",
    marksheetUrl: null,
  },
  {
    id: "SSC",
    degree: "SSC",
    institution: "RK Memorial High School Bhayandar",
    score: "69.6%",
    period: "March 2018",
    marksheetUrl: "https://drive.google.com/file/d/1aCQl0RQ8qZYzNVr7N_vLPS6-qpnk1i80/view?usp=drive_link",
  },
];

// TODO: replace each url with the real Credly badge or Drive share link.
export const certifications = [
  {
    name: "Python Programming for Absolute Beginners – SQL in Python (Udemy)",
    url: "https://www.udemy.com/certificate/UC-3531d901-2339-4ed9-8bfc-fdeec232fb76/",
  },
  {
    name: "Cybersecurity Fundamentals (IBM)",
    url: "https://www.credly.com/badges/055dfacb-ed04-41df-826f-7ace038189b7/public_url",
  },
  {
    name: "Accenture North America – Data Analytics and Visualization Job Simulation",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_LAkgbvRSHpH9BK9W3_1720182999511_completion_certificate.pdf",
  },
];
