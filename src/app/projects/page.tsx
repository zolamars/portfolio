import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <Calendar className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      default:
        return "Planned";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950 dark:via-red-950 dark:to-pink-950 animate-gradient relative overflow-hidden">
      {/* Floating Tech Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-red-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-48 h-48 bg-pink-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        {/* Code-like elements */}
        <div
          className="absolute top-1/3 right-1/3 text-orange-400/20 text-2xl font-mono animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          &lt;/&gt;
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 text-red-400/20 text-xl font-mono animate-pulse"
          style={{ animationDelay: "3s" }}
        >{`{}`}</div>
        <div
          className="absolute top-2/3 right-1/4 text-pink-400/20 text-lg font-mono animate-spin"
          style={{ animationDelay: "5s" }}
        >
          []
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-orange-400 dark:via-red-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
            My Projects
          </h1>
          <p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-slide-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A showcase of web applications and systems I&apos;ve built, focusing
            on user experience, performance, and scalable solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div
          className="mb-16 animate-slide-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={project.id}
                  className="overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105 animate-slide-in-up glass border-orange-200 dark:border-orange-800"
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          {getStatusIcon(project.status)}
                          <span>{getStatusText(project.status)}</span>
                          <span>•</span>
                          <Badge
                            variant="outline"
                            className="capitalize group-hover:bg-orange-100 dark:group-hover:bg-orange-900 transition-colors"
                          >
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.longDescription || project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs group-hover:bg-orange-100 dark:group-hover:bg-orange-900 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button
                          asChild
                          size="sm"
                          className="group-hover:bg-orange-600 group-hover:text-white transition-all duration-300"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="group-hover:border-orange-600 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-all duration-300"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="animate-slide-in-up" style={{ animationDelay: "0.8s" }}>
          <h2 className="text-2xl font-bold mb-8 text-center">All Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105 animate-slide-in-up glass border-red-200 dark:border-red-800"
                style={{ animationDelay: `${1.0 + index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(project.status)}
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="w-fit capitalize text-xs group-hover:bg-red-100 dark:group-hover:bg-red-900 transition-colors"
                  >
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack - Limited */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs group-hover:bg-red-100 dark:group-hover:bg-red-900 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="text-xs group-hover:bg-red-100 dark:group-hover:bg-red-900 transition-colors"
                        >
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="group-hover:border-red-600 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-300"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="group-hover:border-red-600 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-300"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16 animate-slide-in-up"
          style={{ animationDelay: "1.4s" }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Interested in working together?
          </h3>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss how I can help bring your ideas to life.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-0 px-8 py-3 text-lg font-semibold rounded-xl button-hover"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
