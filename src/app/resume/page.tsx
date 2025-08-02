import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Linkedin, Github, MapPin, Calendar } from "lucide-react";
import { professionalExperience, education, skills, certificates, contactInfo } from "@/lib/data";

export default function Resume() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My Resume
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my professional experience, skills, and projects that reflect my expertise in frontend development.
          </p>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-16">
          <Button asChild size="lg">
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
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>{contactInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <span>{contactInfo.linkedin}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <span>{contactInfo.github}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {professionalExperience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm mt-4">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-muted-foreground">
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
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{education.degree}</h3>
                <p className="text-muted-foreground">{education.institution}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{education.duration}</span>
                  <span>•</span>
                  <span>{education.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {['frontend', 'backend', 'tools'].map((category) => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  return (
                    <div key={category}>
                      <h4 className="font-semibold mb-3 capitalize">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                          <Badge key={skill.id} variant="secondary" className="text-xs">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {certificates.map((cert) => (
                  <div key={cert.id} className="space-y-1">
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">
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

