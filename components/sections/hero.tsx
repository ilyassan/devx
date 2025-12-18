import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Rocket, ArrowRight } from "lucide-react"

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
              We deliver cutting-edge web development, cloud solution 
              and digital transformation services to clients worldwide.
              Our expertise in the financial and industrial sector enables
              us to elevate your business to the next level.
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
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-secondary/50 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/key tiles mountains image.png"
                  alt="Mountain landscape representing our global reach and elevated solutions"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
