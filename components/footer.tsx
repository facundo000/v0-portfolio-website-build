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
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              {t.credits}
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </p>
          </div>
        
      </div>
    </footer>
  )
}
