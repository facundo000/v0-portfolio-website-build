"use client"

import { Heart } from "lucide-react"

interface FooterProps {
  language: "es" | "en"
}

const translations = {
  es: {
    navigation: "Navegación",
    sections: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    credits: "Creado por Facundo Nicolás Guzmán Olariaga con ayuda de V0",
  },
  en: {
    navigation: "Navigation",
    sections: {
      home: "Home",
      about: "About me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    credits: "Created by Facundo Nicolás Guzmán Olariaga with help from V0",
  },
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t.navigation}</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-muted-foreground hover:text-accent transition-colors text-left"
              >
                {t.sections.home}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-muted-foreground hover:text-accent transition-colors text-left"
              >
                {t.sections.about}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block text-muted-foreground hover:text-accent transition-colors text-left"
              >
                {t.sections.skills}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-muted-foreground hover:text-accent transition-colors text-left"
              >
                {t.sections.projects}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover:text-accent transition-colors text-left"
              >
                {t.sections.contact}
              </button>
            </nav>
          </div>

          {/* Logo/Brand */}
          <div className="flex items-start">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Facundo Guzmán</h3>
              <p className="text-muted-foreground">Full Stack Developer</p>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              {t.credits}
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
