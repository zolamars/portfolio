import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Calendar,
} from "lucide-react";
import {
  professionalExperience,
  education,
  skills,
  certificates,
  contactInfo,
} from "@/lib/data";
import { Section } from "@/components/section";

export default function Resume() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <Section
          id="top"
          title="Resume"
          subtitle="Snapshot of my experience, education, certifications, and skills."
        >
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <a
              href="#experience"
              className="text-sm px-3 py-1 rounded-md border text-muted-foreground hover:text-foreground"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-sm px-3 py-1 rounded-md border text-muted-foreground hover:text-foreground"
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-sm px-3 py-1 rounded-md border text-muted-foreground hover:text-foreground"
            >
              Skills
            </a>
            <a
              href="#certifications"
              className="text-sm px-3 py-1 rounded-md border text-muted-foreground hover:text-foreground"
            >
              Certifications
            </a>
          </div>
        </Section>

        {/* Download Button */}
        {/* <div className="flex justify-center mb-6">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white border-0 px-8 py-3 text-lg font-semibold rounded-xl button-hover"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download PDF Resume
            </a>
          </Button>
        </div> */}

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Contact Info */}
          <Section id="contact" title="Contact Information">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3 group hover:bg-slate-50 dark:hover:bg-slate-900 p-2 rounded-lg transition-colors">
                    <Mail className="h-5 w-5 text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors" />
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="underline underline-offset-4 decoration-slate-300 hover:decoration-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group hover:bg-slate-50 dark:hover:bg-slate-900 p-2 rounded-lg transition-colors">
                    <MapPin className="h-5 w-5 text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors" />
                    <span className="group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                      {contactInfo.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group hover:bg-slate-50 dark:hover:bg-slate-900 p-2 rounded-lg transition-colors">
                    <Linkedin className="h-5 w-5 text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors" />
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="underline underline-offset-4 decoration-slate-300 hover:decoration-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors"
                    >
                      {contactInfo.linkedin
                        .replace("https://", "")
                        .replace("www.", "")}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group hover:bg-slate-50 dark:hover:bg-slate-900 p-2 rounded-lg transition-colors">
                    <Github className="h-5 w-5 text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors" />
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="underline underline-offset-4 decoration-slate-300 hover:decoration-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors"
                    >
                      {contactInfo.github.replace("https://", "")}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Section>

          {/* Professional Experience */}
          <Section id="experience" title="Professional Experience">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {professionalExperience.map((exp, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-primary/50 pl-6 relative p-4 rounded-r-lg"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span className="font-medium group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span className="group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                            {exp.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 group-hover:text-gray-500 transition-colors" />
                          <span className="group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                            {exp.duration}
                          </span>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm mt-4">
                          {exp.responsibilities.map((responsibility, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors"
                            >
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Section>

          {/* Education */}
          <Section id="education" title="Education">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 group hover:bg-zinc-50 dark:hover:bg-zinc-900 p-4 rounded-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                    {education.degree}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                    {education.institution}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 group-hover:text-zinc-500 transition-colors" />
                    <span className="group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                      {education.duration}
                    </span>
                    <span>•</span>
                    <span className="group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                      {education.location}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Section>

          {/* Skills */}
          <Section id="skills" title="Technical Skills">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {["frontend", "backend", "tools", "other"].map(
                    (category, categoryIndex) => {
                      const categorySkills = skills.filter(
                        (skill) => skill.category === category
                      );
                      return (
                        <div
                          key={category}
                          className="animate-slide-in-up"
                          style={{
                            animationDelay: `${1.6 + categoryIndex * 0.1}s`,
                          }}
                        >
                          <h4 className="font-semibold mb-3 capitalize group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                            {category}
                          </h4>
                          <div className="space-y-3">
                            {categorySkills.map((skill, skillIndex) => {
                              const getLevelColor = (level: string) => {
                                switch (level) {
                                  case 'expert':
                                    return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700';
                                  case 'advanced':
                                    return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700';
                                  case 'intermediate':
                                    return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700';
                                  case 'beginner':
                                    return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700';
                                  default:
                                    return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700';
                                }
                              };

                              const getLevelDots = (level: string) => {
                                const levels = { beginner: 1, intermediate: 2, advanced: 3, expert: 4 };
                                const dots = levels[level as keyof typeof levels] || 0;
                                return Array.from({ length: 4 }, (_, i) => (
                                  <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${
                                      i < dots
                                        ? level === 'expert'
                                          ? 'bg-green-500'
                                          : level === 'advanced'
                                          ? 'bg-blue-500'
                                          : level === 'intermediate'
                                          ? 'bg-yellow-500'
                                          : 'bg-gray-500'
                                        : 'bg-gray-200 dark:bg-gray-700'
                                    }`}
                                  />
                                ));
                              };

                              return (
                                <div
                                  key={skill.id}
                                  className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors animate-slide-in-up"
                                  style={{
                                    animationDelay: `${
                                      1.8 +
                                      categoryIndex * 0.1 +
                                      skillIndex * 0.05
                                    }s`,
                                  }}
                                >
                                  <div className="flex items-center gap-3">
                                    <Badge
                                      variant="outline"
                                      className={`text-xs font-medium border ${getLevelColor(skill.level)}`}
                                    >
                                      {skill.name}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground capitalize">
                                      {skill.level}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    {getLevelDots(skill.level)}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </CardContent>
            </Card>
          </Section>

          {/* Certifications */}
          <Section id="certifications" title="Certifications">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {certificates.map((cert, index) => (
                    <div
                      key={cert.id}
                      className="space-y-1 group hover:bg-gray-50 dark:hover:bg-gray-900 p-3 rounded-lg transition-all duration-300 animate-slide-in-up"
                      style={{ animationDelay: `${1.8 + index * 0.1}s` }}
                    >
                      <h4 className="font-semibold group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                        {cert.issuer} • {cert.date}
                      </p>
                      {cert.credentialId && (
                        <p className="text-xs text-slate-500">
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
                  ))}
                </div>
              </CardContent>
            </Card>
          </Section>
        </div>
      </div>
    </div>
  );
}
