import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { AboutSection } from "@/components/sections/about"
import { WhyChooseSection } from "@/components/sections/why-choose"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      {/* <AboutSection /> */}
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
