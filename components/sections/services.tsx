import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Code, Cloud, Shield, Brain } from "lucide-react"
import { getTranslations } from 'next-intl/server'

export async function ServicesSection() {
  const t = await getTranslations('Services')

  const services = [
    {
      icon: Code,
      title: t('items.softwareDevelopment.title'),
      description: t('items.softwareDevelopment.description'),
      features: [
        t('items.softwareDevelopment.features.webApplications'),
        t('items.softwareDevelopment.features.mobileApplications'),
        t('items.softwareDevelopment.features.desktopApplications'),
      ],
    },
    {
      icon: Brain,
      title: t('items.aiAutomation.title'),
      description: t('items.aiAutomation.description'),
      features: [
        t('items.aiAutomation.features.processAutomation'),
        t('items.aiAutomation.features.chatbots'),
        t('items.aiAutomation.features.dataAnalysis'),
      ],
    },
    {
      icon: Cloud,
      title: t('items.cloudSolutions.title'),
      description: t('items.cloudSolutions.description'),
      features: [
        t('items.cloudSolutions.features.cloudMigration'),
        t('items.cloudSolutions.features.infrastructureSetup'),
        t('items.cloudSolutions.features.devOps'),
      ],
    },
    {
      icon: Shield,
      title: t('items.maintenanceSupport.title'),
      description: t('items.maintenanceSupport.description'),
      features: [
        t('items.maintenanceSupport.features.support247'),
        t('items.maintenanceSupport.features.performanceMonitoring'),
        t('items.maintenanceSupport.features.securityUpdates'),
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
              {t('badge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {t('title')}
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
