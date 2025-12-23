import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/sections/services"

export const metadata = {
  title: "Services | DevX",
  description: "Explore DevX's comprehensive IT solutions and services. Web development, mobile apps, cloud solutions, and digital transformation tailored to your business needs.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesSection />
      <Footer />
    </main>
  )
}
