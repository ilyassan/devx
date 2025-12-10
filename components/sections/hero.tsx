import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Rocket, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Engineering IT Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                That Scale Globally
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Transform your business with Swiss-precision technology. We deliver cutting-edge web development, cloud solutions, and digital transformation services to clients worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base bg-secondary hover:bg-secondary/90">
                <Link href="#contact">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Your Project
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base border-secondary text-secondary">
                <Link href="#services">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated Gradient Card */}
              <div className="absolute inset-0 bg-linear-to-br from-secondary via-accent to-secondary/50 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative bg-linear-to-br from-secondary to-accent rounded-3xl p-8 shadow-2xl">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Browser Window */}
                  <rect
                    x="50"
                    y="50"
                    width="300"
                    height="200"
                    rx="10"
                    fill="rgba(255,255,255,0.1)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                  />
                  {/* Browser Dots */}
                  <circle cx="70" cy="70" r="4" fill="rgba(255,255,255,0.5)" />
                  <circle cx="85" cy="70" r="4" fill="rgba(255,255,255,0.5)" />
                  <circle cx="100" cy="70" r="4" fill="rgba(255,255,255,0.5)" />
                  {/* Content Lines */}
                  <rect
                    x="70"
                    y="100"
                    width="260"
                    height="8"
                    rx="4"
                    fill="rgba(255,255,255,0.3)"
                  />
                  <rect
                    x="70"
                    y="130"
                    width="200"
                    height="8"
                    rx="4"
                    fill="rgba(255,255,255,0.3)"
                  />
                  <rect
                    x="70"
                    y="160"
                    width="220"
                    height="8"
                    rx="4"
                    fill="rgba(255,255,255,0.3)"
                  />
                  <rect
                    x="70"
                    y="190"
                    width="180"
                    height="8"
                    rx="4"
                    fill="rgba(255,255,255,0.3)"
                  />
                  {/* Floating Chart Line */}
                  <path
                    d="M150 20 L200 50 L250 30 L300 60"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse"
                  />
                  <circle cx="150" cy="20" r="5" fill="rgba(255,255,255,0.8)" />
                  <circle cx="200" cy="50" r="5" fill="rgba(255,255,255,0.8)" />
                  <circle cx="250" cy="30" r="5" fill="rgba(255,255,255,0.8)" />
                  <circle cx="300" cy="60" r="5" fill="rgba(255,255,255,0.8)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
