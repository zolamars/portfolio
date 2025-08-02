import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { qualifications, contactInfo } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Zelalem Abera Regassa
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Senior Frontend Developer
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
          
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Passionate about creating exceptional web experiences with modern technologies.
            Specializing in React, Next.js, and leading agile development teams.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${contactInfo.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Qualifications Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Summary of Qualifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 5 years of experience in frontend development with a strong track record of delivering high-quality web applications.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {qualifications.map((qualification, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  </div>
                  <p className="text-sm leading-relaxed">{qualification}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Key Skills Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Core Technologies</h2>
          <p className="text-muted-foreground">
            Technologies I work with to build amazing digital experiences
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Spring Boot", "Git", "Jira", "Agile/Scrum"]
            .map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))
          }
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/about">Learn More About Me</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
