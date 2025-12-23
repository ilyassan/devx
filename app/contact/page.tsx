import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/sections/contact"

export const metadata = {
  title: "Contact Us | DevX",
  description: "Get in touch with DevX. We're here to discuss your project requirements and provide a free consultation for your IT solutions and digital transformation needs.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactSection />
      <Footer />
    </main>
  )
}
