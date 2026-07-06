export const profile = {
  name: "Jay Patel",
  fullName: "Jay Girish Patel",
  role: "Data Analyst",
  location: "Thane, Maharashtra",
  timezone: "IST (UTC+5:30)",
  phone: "+91 98920 07108",
  email: "gjaypatel15@gmail.com",
  github: "https://github.com/Jay-patel15",
  githubUsername: "Jay-patel15",
  linkedin: "https://linkedin.com/in/jay-patel15",
  tagline: "Data Analyst specializing in Python, SQL, Power BI, and Machine Learning.",
  available: true,
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
    period: "Jan 2026 – Ongoing",
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

export const education = [
  {
    id: "be-aids",
    degree: "B.E. in Artificial Intelligence & Data Science",
    institution: "New Horizon Institute of Technology and Management, Thane",
    score: "CGPI: 7.0",
    period: "Jun 2025",
  },
  {
    id: "diploma-ce",
    degree: "Diploma in Computer Engineering",
    institution: "Pravin Patil Polytechnic, Bhayandar",
    score: "82%",
    period: "Jul 2022",
  },
];

export const certifications = [
  "Python Programming for Absolute Beginners – SQL in Python (Udemy)",
  "Cybersecurity Fundamentals (IBM)",
  "Accenture North America – Data Analytics and Visualization Job Simulation",
];
