import { Trophy, Zap, Lock, MessageSquare } from "lucide-react"
import { getTranslations } from 'next-intl/server'

export async function WhyChooseSection() {
  const t = await getTranslations('WhyChoose')

  const features = [
    {
      icon: Zap,
      title: t('features.rapidDelivery.title'),
      description: t('features.rapidDelivery.description'),
    },
    {
      icon: Lock,
      title: t('features.securityFirst.title'),
      description: t('features.securityFirst.description'),
    },
    {
      icon: MessageSquare,
      title: t('features.clearCommunication.title'),
      description: t('features.clearCommunication.description'),
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
            <span className="text-xs font-bold uppercase tracking-wider">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-primary-foreground/80">
            {t('description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
