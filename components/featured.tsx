"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Chrome, ExternalLink, Github, Star, Download } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import promoImage from "@/app/taskdown-logo.png"

interface FeaturedProps {
  language: "es" | "en"
}

const translations = {
  es: {
    title: "Destacado",
    subtitle: "Producto publicado",
    badge: "Chrome Web Store",
    installButton: "Instalar Extensión",
    viewCode: "Ver Código",
    description: "Extensión de Chrome que mejora tu productividad al navegar. Disponible en la Chrome Web Store.",
  },
  en: {
    title: "Featured",
    subtitle: "Published Product",
    badge: "Chrome Web Store",
    installButton: "Install Extension",
    viewCode: "View Code",
    description: "Chrome extension that improves your productivity while browsing. Available on the Chrome Web Store.",
  },
}

// Datos de la extension - actualiza estos valores con tu extension real
const featuredExtension = {
  name: {
    es: "TaskDown, Mi Extensión de Chrome",
    en: "TaskDown, My Chrome Extension",
  },
  description: {
    es: "Es una extensión minimalista para gestionar tareas mediante contadores descendentes. Permite crear tareas con una cantidad inicial y descontarlas con un solo clic desde el popup. Está pensada para objetivos repetitivos o cuantificables —como ejercicios, páginas por leer o rutinas de entrenamiento— guardando todos los datos localmente en el navegador. Una herramienta ligera y sin distracciones para visualizar tu progreso y completar metas paso a paso.",
    en: "It's a minimalist extension for managing tasks using countdown timers. It lets you create tasks with an initial amount and count them down with a single click from the popup. It's designed for repetitive or quantifiable goals—like exercises, pages to read, or workout routines—saving all the data locally in your browser. A lightweight and distraction-free tool for visualizing your progress and completing goals step by step.",
  },
  image: promoImage, 
  chromeStoreUrl: "https://chromewebstore.google.com/detail/taskdown/eanfldhnkogfbnmedcpackmjbdinigcg", // URL de tu extension en Chrome Web Store
  githubUrl: "https://github.com/facundo000/TaskDown-offline", // URL del repositorio (opcional)
  stats: {
    users: "100+",
    rating: "5.0",
  },
}

export default function Featured({ language }: FeaturedProps) {
  const t = translations[language]
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="featured" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">{t.subtitle}</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* Logo/Image Section */}
                  <div className="md:col-span-2 relative bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8 md:p-12">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                      <div className="relative bg-card rounded-2xl p-6 shadow-2xl border border-primary/20">
                        <Image
                          src={featuredExtension.image}
                          alt={featuredExtension.name[language]}
                          width={120}
                          height={120}
                          className="w-24 h-24 md:w-32 md:h-32 object-contain"
                        />
                      </div>
                    </div>
                    {/* Chrome Web Store Badge */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                      <div className="flex items-center justify-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
                        <Chrome className="h-4 w-4 text-primary" />
                        <span className="text-xs font-semibold text-foreground">{t.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                        {featuredExtension.name[language]}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                        {featuredExtension.description[language]}
                      </p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-4 py-2">
                          <Download className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{featuredExtension.stats.users} {language === "es" ? "usuarios" : "users"}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-4 py-2">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-medium">{featuredExtension.stats.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button size="lg" asChild className="gap-2 bg-primary hover:bg-primary/90">
                        <a href={featuredExtension.chromeStoreUrl} target="_blank" rel="noopener noreferrer">
                          <Chrome className="h-5 w-5" />
                          {t.installButton}
                        </a>
                      </Button>
                      {featuredExtension.githubUrl && (
                        <Button variant="outline" size="lg" asChild className="gap-2 bg-transparent">
                          <a href={featuredExtension.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                            {t.viewCode}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
