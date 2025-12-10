import { Card } from "@/components/ui/card"

export function TechnologiesSection() {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "Next.js", icon: "▲" },
    { name: "Vue.js", icon: "💚" },
  ]

  return (
    <section id="technologies" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              Our Tech Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Modern Technologies We Master
          </h2>
          <p className="text-lg text-muted-foreground">
            We use industry-leading technologies to build robust, scalable, and future-proof solutions.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <Card
              key={tech.name}
              className="group p-6 flex flex-col items-center justify-center text-center space-y-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-secondary/50 cursor-pointer"
            >
              <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
                {tech.icon}
              </div>
              <div className="font-semibold text-sm">{tech.name}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
