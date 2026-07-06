export const profile = {
  name: "Jay Patel",
  fullName: "Jay Girish Patel",
  role: "Data Analyst",
  location: "Thane, Maharashtra",
  phone: "+91 98920 07108",
  email: "gjaypatel15@gmail.com",
  github: "https://github.com/Jay-patel15",
  githubUsername: "Jay-patel15",
  linkedin: "https://www.linkedin.com/in/jay-patel-30904b317",
  tagline: "Data Analyst specializing in Python, SQL, Power BI, and Machine Learning.",
  available: true,
  // TODO: replace with the real shareable Google Drive resume link.
  resumeUrl: "https://drive.google.com/file/d/1i3GKz4ZrFr73qQvcRX5Y_x-son1MAk5f/view?usp=drive_link",
};

export const about = {
  paragraphs: [
    "I'm a Data Analyst based in Thane, Maharashtra, focused on turning raw, messy data into decisions people can actually act on.",
    "I recently completed a stint as a Data Validation Analyst (QA Intern) at Schbang, building automated data-quality pipelines for an AI product — writing Python scripts, cross-validating outputs against MySQL/MongoDB sources, and tracking defect trends across releases.",
    "My toolkit spans Python, SQL, Power BI, and Machine Learning, backed by a B.E. in Artificial Intelligence & Data Science. I like problems where the data is dirty and the stakes are real.",
  ],
};

export const skills = [
  {
    id: "languages",
    title: "Languages",
    span: "md:col-span-2",
    items: ["Python (advanced)", "SQL (MySQL)", "Java (basic)"],
  },
  {
    id: "data",
    title: "Data & Analysis",
    span: "md:col-span-2 md:row-span-2",
    items: ["Pandas", "NumPy", "Data Cleaning", "EDA", "Statistical Validation", "Regex"],
  },
  {
    id: "bi",
    title: "BI & Visualization",
    span: "md:col-span-2",
    items: ["Power BI", "Tableau", "Excel (pivot tables)", "Advanced charts"],
  },
  {
    id: "ml",
    title: "ML Libraries",
    span: "md:col-span-1",
    items: ["Scikit-learn", "Classification", "Feature engineering"],
  },
  {
    id: "tools",
    title: "Databases & Tools",
    span: "md:col-span-3",
    items: ["MySQL", "MongoDB", "Git", "Jupyter Notebook", "VS Code"],
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
      "Designed and executed data validation workflows for “Second Brain” AI product, ensuring accuracy and consistency of structured and unstructured datasets across chat, knowledge-base, and document pipelines.",
      "Wrote 20+ Python scripts using Pandas, Selenium, and Playwright to automate data quality checks, reducing manual validation effort by 40%.",
      "Identified 50+ data defects including schema mismatches, null propagation, and incorrect AI retrieval outputs; produced data-backed defect reports shared with product and ML stakeholders.",
      "Increased data test coverage by 30% through parameterised test design covering boundary values, negative inputs, and edge cases for AI model data flows.",
      "Queried MySQL and MongoDB databases to cross-validate application outputs against source data, identifying discrepancies at the record level.",
      "Tracked quality trends across releases, providing analytical summaries to guide prioritisation of fixes before each deployment.",
    ],
  },
];

export const projects = [
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
    id: "farm-expert",
    title: "Farm Expert App",
    stack: ["Python", "Data Analysis", "ML", "Matplotlib"],
    description:
      "Analysed agricultural dataset (soil composition, rainfall, temperature) to surface actionable crop-selection insights.",
    highlights: [
      "85% prediction accuracy",
      "200+ active users served",
      "Feature selection driven by domain-aware data prep",
    ],
    metric: { value: "200+", label: "users served" },
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
    marksheetUrl: null,
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
