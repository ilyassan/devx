import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Cloud, Rocket, Palette, Shield } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern frameworks. Responsive, fast, and user-friendly experiences that drive results.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "CMS Development",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android. Seamless user experiences that engage your audience.",
      features: [
        "iOS & Android Apps",
        "Cross-Platform Solutions",
        "Mobile-First Design",
        "App Maintenance",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services. Optimize performance, reduce costs, and ensure reliability.",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "DevOps & CI/CD",
        "Cloud Optimization",
      ],
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description:
        "Strategic consulting to modernize your business processes and technology stack for the digital age.",
      features: [
        "Technology Strategy",
        "Process Automation",
        "Legacy Modernization",
        "Digital Innovation",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that delight users. Data-driven design decisions that improve conversion and engagement.",
      features: ["User Research", "Interface Design", "Prototyping", "Usability Testing"],
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description:
        "24/7 technical support and maintenance services. Keep your systems running smoothly with proactive monitoring.",
      features: [
        "24/7 Support",
        "Performance Monitoring",
        "Security Updates",
        "Bug Fixes",
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
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, we provide end-to-end technology solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-secondary/50 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-br group-hover:from-secondary group-hover:to-accent">
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
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
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
