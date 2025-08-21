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

export default function Resume() {
  return (
<div className="min-h-screen bg-muted">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Resume
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Snapshot of my experience, education, certifications, and skills.
          </p>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-10">
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
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Contact Info */}
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

          {/* Professional Experience */}
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

          {/* Education */}
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

          {/* Skills */}
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {["frontend", "backend", "tools"].map(
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
                        <div className="flex flex-wrap gap-2">
                          {categorySkills.map((skill, skillIndex) => (
                            <Badge
                              key={skill.id}
                              variant="secondary"
                              className="text-xs group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors animate-slide-in-up"
                              style={{
                                animationDelay: `${
                                  1.8 + categoryIndex * 0.1 + skillIndex * 0.05
                                }s`,
                              }}
                            >
                              {skill.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
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
        </div>
      </div>
    </div>
  );
}
