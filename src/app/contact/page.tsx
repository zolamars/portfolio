import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with Zelalem Abera Regassa, Senior Frontend Developer & Scrum Master from Ethiopia. Available for freelance projects, full-time opportunities, and consulting work. Contact me for React, Next.js, TypeScript, and AI development projects.",
  keywords: [
    "contact Zelalem Abera",
    "hire frontend developer",
    "React developer for hire",
    "freelance developer Ethiopia",
    "Scrum Master consultant",
    "frontend development services",
    "Next.js consultant",
    "TypeScript expert hire"
  ],
  openGraph: {
    title: "Contact Zelalem Abera - Senior Frontend Developer",
    description: "Get in touch for frontend development projects, consulting, or full-time opportunities. Specializing in React, Next.js, TypeScript, and AI development.",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-950 dark:via-cyan-950 dark:to-blue-950 animate-gradient relative overflow-hidden">
      {/* Floating Communication Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        {/* Communication-like elements */}
        <div
          className="absolute top-1/3 right-1/3 text-teal-400/20 text-2xl animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          💬
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 text-cyan-400/20 text-xl animate-pulse"
          style={{ animationDelay: "3s" }}
        >
          📧
        </div>
        <div
          className="absolute top-2/3 right-1/4 text-blue-400/20 text-lg animate-spin"
          style={{ animationDelay: "5s" }}
        >
          📱
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 dark:from-teal-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
            Let&apos;s Work Together
          </h1>
          <p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-slide-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s discuss how we can create something amazing
            together.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            className="animate-slide-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div
            className="space-y-8 animate-slide-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {/* Quick Contact */}
            <Card className="glass border-cyan-200 dark:border-cyan-800 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
              <CardHeader>
                <CardTitle className="group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 group hover:bg-cyan-50 dark:hover:bg-cyan-900 p-3 rounded-lg transition-all duration-300">
                  <Mail className="h-5 w-5 text-cyan-500 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors" />
                  <div>
                    <p className="text-sm text-muted-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 group hover:bg-cyan-50 dark:hover:bg-cyan-900 p-3 rounded-lg transition-all duration-300">
                  <MapPin className="h-5 w-5 text-cyan-500 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors" />
                  <div>
                    <p className="text-sm text-muted-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      Location
                    </p>
                    <p className="text-sm font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass border-blue-200 dark:border-blue-800 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={`${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 text-blue-600 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors" />
                  <div>
                    <p className="text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                      Professional network
                    </p>
                  </div>
                </a>

                <a
                  href={`${contactInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 group"
                >
                  <Github className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  <div>
                    <p className="text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      GitHub
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                      Code repositories
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 text-green-600 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors" />
                  <div>
                    <p className="text-sm font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      Email
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-green-500 dark:group-hover:text-green-300 transition-colors">
                      Direct contact
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass border-teal-200 dark:border-teal-800 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500">
              <CardHeader>
                <CardTitle className="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 group hover:bg-teal-50 dark:hover:bg-teal-900 p-3 rounded-lg transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-sm font-medium group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      Available for new projects
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    I&apos;m currently open to discussing new opportunities and
                    collaborations. Whether you&apos;re looking for a frontend
                    developer, need help with an existing project, or want to
                    brainstorm ideas, I&apos;d love to hear from you.
                  </p>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground group-hover:text-teal-500 dark:group-hover:text-teal-300 transition-colors">
                      <strong>Response time:</strong> Usually within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
