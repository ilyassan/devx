import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function AboutSection() {
  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "15+", label: "Countries Served" },
    { number: "24/7", label: "Support Available" },
  ]

  const features = [
    {
      title: "Swiss Quality Standards",
      description: "Precision engineering and attention to detail in every project",
    },
    {
      title: "Global Expertise",
      description: "Experience serving clients across 15+ countries worldwide",
    },
    {
      title: "Agile Methodology",
      description: "Fast, iterative development with continuous client collaboration",
    },
    {
      title: "Scalable Solutions",
      description: "Architecture designed to grow with your business needs",
    },
    {
      title: "Cutting-Edge Technology",
      description: "Latest frameworks and tools for optimal performance",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              About DevX
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Swiss Precision Meets Global Innovation
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine Swiss engineering excellence with cutting-edge technology to deliver world-class IT solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Engineering Excellence Since Day One</h3>
            <p className="text-muted-foreground leading-relaxed">
              Based in Switzerland, DevX brings together a team of passionate engineers, designers, and strategists dedicated to transforming businesses through technology. Our Swiss heritage means we value precision, quality, and reliability in everything we do.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We serve clients across the globe, from startups to enterprise organizations, delivering solutions that scale and adapt to changing business needs. Our agile methodology ensures rapid delivery without compromising on quality.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50"
                >
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground mt-2">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Features List */}
          <div className="space-y-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:translate-x-2 hover:border-secondary/50 group"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-secondary group-hover:to-accent transition-all duration-300">
                    <Check className="w-5 h-5 text-secondary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
