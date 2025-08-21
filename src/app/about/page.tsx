import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutMe, skills, education, certificates } from "@/lib/data";
import { Section } from "@/components/section";

export default function About() {
  return (
    <div className="min-h-screen bg-muted">
  	<div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            About
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            {aboutMe.intro}
          </p>
        </div>

        {/* Description */}
        <Section>
          <Card className="border shadow-sm">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                {aboutMe.description}
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {aboutMe.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-bounce-in group hover:bg-emerald-50 dark:hover:bg-emerald-900 p-3 rounded-lg transition-all duration-300"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Skills */}
        <Section title="Skills & Technologies">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {["frontend", "backend", "tools"].map((category, categoryIndex) => {
              const categorySkills = skills.filter(
                (skill) => skill.category === category
              );
              return (
                <Card
                  key={category}
                  className="border shadow-sm group"
                  style={{ animationDelay: `${1.0 + categoryIndex * 0.2}s` }}
                >
                  <CardHeader>
                    <CardTitle className="capitalize group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill, skillIndex) => (
                        <Badge
                          key={skill.id}
                          variant="secondary"
                          className="group-hover:bg-green-100 dark:group-hover:bg-green-900 transition-colors animate-slide-in-up"
                          style={{
                            animationDelay: `${
                              1.2 + categoryIndex * 0.2 + skillIndex * 0.05
                            }s`,
                          }}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <Card className="border shadow-sm" style={{ animationDelay: "1.6s" }}>
            <CardContent className="p-8">
              <div className="text-center group hover:bg-lime-50 dark:hover:bg-lime-900 p-4 rounded-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-lime-700 dark:group-hover:text-lime-300 transition-colors">
                  {education.degree}
                </h3>
                <p className="text-muted-foreground mb-2 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  {education.institution}
                </p>
                <p className="text-sm text-muted-foreground group-hover:text-lime-500 dark:group-hover:text-lime-300 transition-colors">
                  {education.duration} • {education.location}
                </p>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Certificates */}
        <Section title="Certifications">
          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((cert, index) => (
              <Card
                key={cert.id}
                className="border shadow-sm"
                style={{ animationDelay: `${2.0 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="group hover:bg-emerald-50 dark:hover:bg-emerald-900 p-3 rounded-lg transition-all duration-300">
                    <h3 className="font-semibold mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {cert.issuer} • {cert.date}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-emerald-700 dark:text-emerald-300/80">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary underline"
                      >
                        Show credential
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
