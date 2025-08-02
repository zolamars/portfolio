import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutMe, skills, education, certificates } from "@/lib/data";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 dark:from-emerald-950 dark:via-green-950 dark:to-lime-950 animate-gradient relative overflow-hidden">
      {/* Floating Nature Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-48 h-48 bg-lime-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        {/* Nature-like elements */}
        <div
          className="absolute top-1/3 right-1/3 text-emerald-400/20 text-2xl animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          🌱
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 text-green-400/20 text-xl animate-pulse"
          style={{ animationDelay: "3s" }}
        >
          🌿
        </div>
        <div
          className="absolute top-2/3 right-1/4 text-lime-400/20 text-lg animate-spin"
          style={{ animationDelay: "5s" }}
        >
          🍃
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-bounce-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 dark:from-emerald-400 dark:via-green-400 dark:to-lime-400 bg-clip-text text-transparent animate-gradient">
            About Me
          </h1>
          <p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed animate-slide-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {aboutMe.intro}
          </p>
        </div>

        {/* Description */}
        <div
          className="mb-16 animate-slide-in-left"
          style={{ animationDelay: "0.4s" }}
        >
          <Card className="glass border-emerald-200 dark:border-emerald-800 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 animate-glow-pulse">
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
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold mb-8 text-center animate-slide-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            Skills & Technologies
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {["frontend", "backend", "tools"].map((category, categoryIndex) => {
              const categorySkills = skills.filter(
                (skill) => skill.category === category
              );
              return (
                <Card
                  key={category}
                  className="animate-slide-in-up glass border-green-200 dark:border-green-800 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group"
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
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold mb-8 text-center animate-slide-in-up"
            style={{ animationDelay: "1.4s" }}
          >
            Education
          </h2>
          <Card
            className="animate-slide-in-up glass border-lime-200 dark:border-lime-800 hover:shadow-2xl hover:shadow-lime-500/20 transition-all duration-500"
            style={{ animationDelay: "1.6s" }}
          >
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
        </div>

        {/* Certificates */}
        <div>
          <h2
            className="text-3xl font-bold mb-8 text-center animate-slide-in-up"
            style={{ animationDelay: "1.8s" }}
          >
            Certifications
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((cert, index) => (
              <Card
                key={cert.id}
                className="animate-slide-in-up glass border-emerald-200 dark:border-emerald-800 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
