export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zelalem Abera Regassa",
    "alternateName": ["Zelalem Abera", "Zolbera"],
    "jobTitle": ["Senior Frontend Developer", "Scrum Master", "AI Enthusiast"],
    "description": "Senior Frontend Developer and Scrum Master from Ethiopia specializing in React, Next.js, TypeScript, and AI development. 5+ years experience building scalable web applications, FinTech solutions, and modern user interfaces.",
    "url": "https://zelalemabera.vercel.app",
    "image": "https://zelalemabera.vercel.app/pic.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/zolbera",
      "https://github.com/zolamars",
      "mailto:zolyemek@gmail.com"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Addis Ababa",
      "addressCountry": "Ethiopia"
    },
    "knowsAbout": [
      "React.js",
      "Next.js", 
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Scrum",
      "Agile Methodologies",
      "Python",
      "Machine Learning",
      "Artificial Intelligence",
      "Web Development",
      "FinTech",
      "UI/UX Design"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Semay Software",
      "description": "Frontend Developer & Scrum Master"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Addis Ababa Institute of Technology (AAIT), Addis Ababa University",
      "description": "Electrical and Computer Engineering"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Agile with Atlassian Jira",
        "credentialCategory": "certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Atlassian"
        }
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "Programming for Everybody (Getting Started with Python)",
        "credentialCategory": "certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "University of Michigan (Coursera)"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Frontier Tech Leaders Programme – Ethiopia Machine Learning Bootcamp",
        "credentialCategory": "certificate", 
        "recognizedBy": {
          "@type": "Organization",
          "name": "UNDP"
        }
      }
    ],
    "mainEntity": {
      "@type": "WebSite",
      "name": "Zelalem Abera Portfolio",
      "url": "https://zelalemabera.vercel.app",
      "description": "Portfolio website showcasing frontend development projects, skills, and experience",
      "inLanguage": "en-US",
      "copyrightHolder": {
        "@type": "Person",
        "name": "Zelalem Abera Regassa"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
