import { profile } from "@/lib/data";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": profile.fullName,
    "alternateName": profile.name,
    "url": "https://portfolio-jay-patel.vercel.app",
    "jobTitle": "Data Analyst & Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Schbang",
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "New Horizon Institute of Technology and Management, Thane",
      },
      {
        "@type": "EducationalOrganization",
        "name": "Pravin Patil Polytechnic, Bhayandar",
      },
    ],
    "sameAs": [profile.github, profile.linkedin],
    "knowsAbout": [
      "Data Analytics",
      "Software Development",
      "Python",
      "SQL",
      "Pandas",
      "ETL Pipelines",
      "Next.js",
      "React",
      "Machine Learning",
      "Power BI",
      "MySQL",
      "MongoDB",
    ],
    "description": profile.tagline,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jay Patel — Data Analyst & Software Developer",
    "alternateName": "Jay Patel Portfolio",
    "url": "https://portfolio-jay-patel.vercel.app",
    "author": {
      "@type": "Person",
      "name": profile.fullName,
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2026-01-01T00:00:00Z",
    "dateModified": new Date().toISOString(),
    "mainEntity": {
      "@type": "Person",
      "name": profile.fullName,
      "description": profile.tagline,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
