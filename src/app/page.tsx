import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { qualifications, contactInfo } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 animate-gradient">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-48 h-48 bg-indigo-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="text-center space-y-8 animate-slide-in-up">
          <div className="space-y-4">
            <div className="inline-block animate-scale-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent animate-gradient">
                Zelalem Abera Regassa
              </h1>
            </div>
            <div
              className="space-y-2 animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                Senior Frontend Developer
              </p>
              <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-lg">Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          <div
            className="animate-slide-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
              Passionate about creating exceptional web experiences with modern
              technologies. Specializing in{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                React
              </span>
              ,
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                {" "}
                Next.js
              </span>
              , and
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                leading agile development teams
              </span>
              .
            </p>
          </div>

          <div
            className="flex flex-wrap justify-center gap-6 animate-slide-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              asChild
              size="lg"
              className="button-hover bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-semibold rounded-xl"
            >
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="button-hover border-2 border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 text-lg font-semibold rounded-xl"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center gap-6 pt-6 animate-slide-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="button-hover w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800"
            >
              <a href={`mailto:${contactInfo.email}`} aria-label="Email">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="button-hover w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900 hover:from-purple-200 hover:to-indigo-200 dark:hover:from-purple-800 dark:hover:to-indigo-800"
            >
              <a
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="button-hover w-12 h-12 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-900 hover:from-indigo-200 hover:to-blue-200 dark:hover:from-indigo-800 dark:hover:to-blue-800"
            >
              <a
                href={`https://${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
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
            Over 5 years of experience in frontend development with a strong
            track record of delivering high-quality web applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {qualifications.map((qualification, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
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
          {[
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "Spring Boot",
            "Git",
            "Jira",
            "Agile/Scrum",
          ].map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-4 py-2 text-sm"
            >
              {skill}
            </Badge>
          ))}
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
