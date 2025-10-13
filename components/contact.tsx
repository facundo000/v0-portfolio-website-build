"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Youtube, Send, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface ContactProps {
  language: "es" | "en"
}

const translations = {
  es: {
    title: "Contacto",
    subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar mensaje",
      namePlaceholder: "Tu nombre completo",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
    },
    info: {
      title: "Información de contacto",
      email: "Correo electrónico",
      location: "Ubicación",
      locationValue: "Argentina",
      social: "Redes sociales",
    },
    success: "¡Mensaje enviado correctamente!",
    error: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
  },
  en: {
    title: "Contact",
    subtitle: "Have a project in mind? Let's talk!",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project...",
    },
    info: {
      title: "Contact information",
      email: "Email",
      location: "Location",
      locationValue: "Argentina",
      social: "Social media",
    },
    success: "Message sent successfully!",
    error: "There was an error sending the message. Please try again.",
  },
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const formRef = useScrollAnimation({ threshold: 0.2 })
  const infoRef = useScrollAnimation({ threshold: 0.2 })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowError(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xgebjaad", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setShowSuccess(true)
        form.reset()
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        setShowError(true)
        setTimeout(() => setShowError(false), 5000)
      }
    } catch (error) {
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            ref={formRef.ref}
            className={`transition-all duration-1000 ${
              formRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input name="name" placeholder={t.form.namePlaceholder} required className="h-12" />
                  </div>
                  <div>
                    <Input name="email" type="email" placeholder={t.form.emailPlaceholder} required className="h-12" />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder={t.form.messagePlaceholder}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        {language === "es" ? "Enviando..." : "Sending..."}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        {t.form.send}
                      </div>
                    )}
                  </Button>
                  {showSuccess && <div className="text-center text-accent font-medium">{t.success}</div>}
                  {showError && <div className="text-center text-destructive font-medium">{t.error}</div>}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div
            ref={infoRef.ref}
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              infoRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">{t.info.title}</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{t.info.location}</p>
                  <p className="text-muted-foreground">{t.info.locationValue}</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">{t.info.social}</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/facundo-nicolas-guzman-olariaga-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:facundo.guzman@mi.unc.edu.ar"
                  className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition-colors group"
                >
                  <Mail className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.youtube.com/@prototipoFreelance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition-colors group"
                >
                  <Youtube className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
