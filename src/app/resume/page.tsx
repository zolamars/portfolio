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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-900 dark:via-gray-950 dark:to-zinc-950 animate-gradient relative overflow-hidden">
      {/* Floating Document Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-48 h-48 bg-zinc-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        {/* Document-like elements */}
        <div
          className="absolute top-1/3 right-1/3 text-slate-400/20 text-2xl animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          📄
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 text-gray-400/20 text-xl animate-pulse"
          style={{ animationDelay: "3s" }}
        >
          📋
        </div>
        <div
          className="absolute top-2/3 right-1/4 text-zinc-400/20 text-lg animate-spin"
          style={{ animationDelay: "5s" }}
        >
          📝
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 dark:from-slate-400 dark:via-gray-400 dark:to-zinc-400 bg-clip-text text-transparent animate-gradient">
            My Resume
          </h1>
          <p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-slide-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Explore my professional experience, skills, and projects that
            reflect my expertise in frontend development.
          </p>
        </div>

        {/* Download Button */}
        <div
          className="flex justify-center mb-16 animate-slide-in-up"
          style={{ animationDelay: "0.4s" }}
        >
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
          <Card
            className="animate-slide-in-up glass border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-slate-500/20 transition-all duration-500"
            style={{ animationDelay: "0.6s" }}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3 group hover:bg-slate-50 dark:hover:bg-slate-900 p-2 rounded-lg transition-colors">
                  <Mail className="h-5 w-5 text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors" />
                  <span className="group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                    {contactInfo.email}
                  </span>
                </div>
                <div className="flex items-center gap-3 group hover:bg-slate-50 dark:hover:bg-slate-900 p-2 rounded-lg transition-colors">
                  <MapPin className="h-5 w-5 text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors" />
                  <span className="group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                    {contactInfo.location}
                  </span>
                </div>
                <div className="flex items-center gap-3 group hover:bg-slate-50 dark:hover:bg-slate-900 p-2 rounded-lg transition-colors">
                  <Linkedin className="h-5 w-5 text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors" />
                  <span className="group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                    {contactInfo.linkedin}
                  </span>
                </div>
                <div className="flex items-center gap-3 group hover:bg-slate-50 dark:hover:bg-slate-900 p-2 rounded-lg transition-colors">
                  <Github className="h-5 w-5 text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors" />
                  <span className="group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                    {contactInfo.github}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card
            className="animate-slide-in-up glass border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-500"
            style={{ animationDelay: "0.8s" }}
          >
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
                    className="border-l-2 border-primary pl-6 relative animate-slide-in-left group hover:bg-gray-50 dark:hover:bg-gray-900 p-4 rounded-r-lg transition-all duration-300"
                    style={{ animationDelay: `${1.0 + index * 0.2}s` }}
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
          <Card
            className="animate-slide-in-up glass border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-zinc-500/20 transition-all duration-500"
            style={{ animationDelay: "1.2s" }}
          >
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
          <Card
            className="animate-slide-in-up glass border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-slate-500/20 transition-all duration-500"
            style={{ animationDelay: "1.4s" }}
          >
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
          <Card
            className="animate-slide-in-up glass border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-500"
            style={{ animationDelay: "1.6s" }}
          >
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
