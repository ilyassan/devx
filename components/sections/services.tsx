import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Code, Cloud, Shield, Brain } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom web, mobile, and desktop applications built with modern technologies. Scalable, secure, and tailored solutions designed to support your business growth.",
      features: [
        "Web Applications",
        "Mobile Applications",
        "Desktop Applications",
      ],
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description:
        "AI-powered solutions that automate repetitive tasks, streamline operations, and help your business work faster and smarter with minimal manual effort.",
      features: [
        "Business Process Automation",
        "Intelligent Chatbots & Assistants",
        "Data Analysis & Insights",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable and reliable cloud infrastructure services to enhance performance, improve security, and reduce operational costs.",
      features: [
        "Cloud Migration / Optimization",
        "Infrastructure Setup",
        "DevOps & CI/CD",
      ],
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance and proactive support to ensure system stability, security, and peak performance around the clock.",
      features: [
        "24/7 Support",
        "Performance Monitoring",
        "Security Updates / Bug Fixes",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Software Development and IT Consulting
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-secondary/50 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:from-secondary group-hover:to-accent">
                  <service.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
