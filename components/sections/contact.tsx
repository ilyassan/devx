"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["contact@devx.ch"],
    },
    // {
    //   icon: Phone,
    //   title: "Phone",
    //   details: ["+41 XX XXX XX XX", "Available 24/7"],
    // },
    {
      icon: MapPin,
      title: "Location",
      details: ["Switzerland", "Serving clients globally"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM CET", "24/7 Support Available"],
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setResult("")

    const form = e.currentTarget
    const formDataObj = new FormData(form)
    formDataObj.append("access_key", "b1c6fdf8-f92a-44b3-bb17-bb78983a3aa1")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      })

      const data = await response.json()

      if (data.success) {
        setResult("Thank you for your message! We'll get back to you soon.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setResult("Something went wrong. Please try again.")
      }
    } catch (error) {
      setResult("Failed to send message. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Let's Start Your Project
          </h2>
          <p className="text-lg text-muted-foreground">
            Contact us today to discuss your project requirements and get a free consultation.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <Card
                key={info.title}
                className="p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">{info.title}</h4>
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90"
                size="lg"
                disabled={loading}
              >
                <Send className="w-5 h-5 mr-2" />
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {result && (
                <div className={`p-4 rounded-lg text-sm ${
                  result.includes("Thank you")
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}>
                  {result}
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
