"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { useTranslations } from 'next-intl'

export function ContactSection() {
  const t = useTranslations('Contact')
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
      title: t('info.email.title'),
      details: ["contact@devx.ch"],
    },
    {
      icon: MapPin,
      title: t('info.location.title'),
      details: [t('info.location.country'), t('info.location.global')],
    },
    {
      icon: Clock,
      title: t('info.businessHours.title'),
      details: [t('info.businessHours.hours'), t('info.businessHours.support')],
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
        setResult(t('form.successMessage'))
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setResult(t('form.errorMessage'))
      }
    } catch (error) {
      setResult(t('form.failedMessage'))
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
              {t('badge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('description')}
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
                <Label htmlFor="name">{t('form.fullName')} *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t('form.namePlaceholder')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('form.email')} *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('form.emailPlaceholder')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">{t('form.subject')} *</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder={t('form.subjectPlaceholder')}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('form.message')} *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t('form.messagePlaceholder')}
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
                {loading ? t('form.sending') : t('form.sendButton')}
              </Button>

              {result && (
                <div className={`p-4 rounded-lg text-sm ${
                  result.includes(t('form.successMessage').substring(0, 10))
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
