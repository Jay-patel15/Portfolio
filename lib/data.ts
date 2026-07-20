export const profile = {
  name: "Jay Patel",
  fullName: "Jay Girish Patel",
  role: "SDET with the powers of DA",
  location: "Thane, Maharashtra",
  phone: "+91 98920 07108",
  email: "gjaypatel15@gmail.com",
  github: "https://github.com/Jay-patel15",
  githubUsername: "Jay-patel15",
  linkedin: "https://www.linkedin.com/in/jay-patel-30904b317",
  tagline: "SDET & QA Automation Engineer specializing in building robust test frameworks and automated data-validation pipelines — leveraging Python, SQL, Selenium, Playwright, and Machine Learning.",
  available: true,
  resumeUrl: "https://drive.google.com/file/d/1i3GKz4ZrFr73qQvcRX5Y_x-son1MAk5f/view?usp=drive_link",
};

export const about = {
  paragraphs: [
    "I'm an SDET and QA Automation Engineer based in Thane, Maharashtra, focused on building robust automation testing frameworks and data-quality pipelines.",
    "I recently completed a stint as a Data Validation Analyst (QA Intern) at Schbang, where I designed and executed QA automation test suites for an AI agent product. I wrote 20+ automation scripts in Python (using Selenium and Playwright) to test multi-page UI pipelines, API schemas, and model outputs, reducing manual validation cycles by 40%.",
    "My toolkit spans Selenium, Playwright, Python, SQL, and database validation (MySQL, MongoDB), backed by a B.E. in Artificial Intelligence & Data Science. I combine software testing precision with the data-crunching power of an analyst to ensure both code reliability and data integrity.",
  ],
};

export const skills = [
  {
    id: "testing",
    title: "Automation & Testing",
    span: "md:col-span-2 md:row-span-2",
    items: [
      "Locust (load testing)",
      "Playwright",
      "Test Automation",
      "API Testing",
      "Regression Testing",
      "Boundary-Value Analysis",
      "Edge Case Design",
      "Defect Tracking"
    ],
  },
  {
    id: "languages",
    title: "Languages",
    span: "md:col-span-2",
    items: ["Python (advanced)", "SQL (MySQL)", "Java (basic)"],
  },
  {
    id: "data-validation",
    title: "Data Validation & Analytics",
    span: "md:col-span-2",
    items: ["Pandas (data checks)", "NumPy", "Data Cleaning", "EDA", "Schema Validation", "Regex"],
  },
  {
    id: "bi-ml",
    title: "BI & ML Libraries",
    span: "md:col-span-1",
    items: ["Power BI", "Tableau", "Scikit-learn"],
  },
  {
    id: "tools",
    title: "Databases & Tools",
    span: "md:col-span-3",
    items: ["MySQL", "MongoDB", "Git", "VS Code", "Postman", "Jupyter Notebook"],
  },
];

export const experience = [
  {
    id: "schbang",
    role: "Data Validation Analyst (QA Intern Role)",
    company: "Schbang",
    period: "Jan 2026 – May 2026",
    experienceLetterUrl: "https://drive.google.com/file/d/183TKHH9z0xduENHKLZjgJn3dEBMpoUj4/view?usp=drive_link",
    points: [
      "Designed and executed QA test automation and data validation workflows for “Second Brain” AI product, verifying chat retrieval outputs and multi-page doc pipelines.",
      "Built and maintained automated performance and functional testing suites using Python, Locust, and Playwright, shrinking execution cycles by 40%.",
      "Uncovered 50+ system and data defects (null propagation bugs, schema mismatches, and incorrect retrieval behaviors), generating comprehensive bug reports for developer and product squads.",
      "Created parameterized testing matrices incorporating boundary, negative, and extreme inputs, amplifying total QA test coverage by 30%.",
      "Queried MongoDB and MySQL databases to perform backend validation, validating exact record-level outputs against live API responses.",
      "Monitored defect density trends over multiple sprint release cycles, providing clear analytics-driven release quality checkoffs for staging deployment.",
    ],
  },
];

export const projects = [
  {
    id: "ai-product-testing",
    title: "AI Agent Performance & QA Suite",
    stack: ["Python", "Locust", "Playwright", "Load Testing"],
    description:
      "Built a modular performance and automation framework for the 'Second Brain' AI product to simulate user loads, verify response latencies, and check UI flows.",
    highlights: [
      "Reduced manual QA cycles by 40% using Playwright regression scripts",
      "Simulated 500+ concurrent user chat sessions via Locust load scripts",
      "Automated schema verification and database record assertions",
    ],
    metric: { value: "500+", label: "concurrent users" },
  },
  {
    id: "regex-data-validation",
    title: "Regex-Based PDF Data Validation Suite",
    stack: ["Python", "Regex", "Pandas", "Unit Testing"],
    description:
      "Designed a parsing and verification pipeline to extract complex tables from unstructured documents and validate schema integrity before importing to MySQL/MongoDB.",
    highlights: [
      "100% automated validation accuracy",
      "Robust assertion scripts catching null values and invalid shapes",
      "Wrote test suites to cover edge formats and schema shifts",
    ],
    metric: { value: "100%", label: "data accuracy achieved" },
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance Using ML",
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
