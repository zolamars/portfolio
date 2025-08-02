import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutMe, skills, education, certificates } from "@/lib/data";

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {aboutMe.intro}
          </p>
        </div>

        {/* Description */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                {aboutMe.description}
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {aboutMe.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {['frontend', 'backend', 'tools'].map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              return (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="capitalize">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <Badge key={skill.id} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <Card>
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
                <p className="text-muted-foreground mb-2">{education.institution}</p>
                <p className="text-sm text-muted-foreground">
                  {education.duration} • {education.location}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certificates */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((cert) => (
              <Card key={cert.id}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{cert.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {cert.issuer} • {cert.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
