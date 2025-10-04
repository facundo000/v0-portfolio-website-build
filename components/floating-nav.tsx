"use client"

import { useState, useEffect } from "react"
import { Home, User, Code, Monitor, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const navigationSections = [
  {
    id: "home",
    icon: Home,
    label: { es: "Inicio", en: "Home" },
  },
  {
    id: "about",
    icon: User,
    label: { es: "Sobre mí", en: "About" },
  },
  {
    id: "skills",
    icon: Code,
    label: { es: "Habilidades", en: "Skills" },
  },
  {
    id: "projects",
    icon: Monitor,
    label: { es: "Proyectos", en: "Projects" },
  },
  {
    id: "contact",
    icon: Mail,
    label: { es: "Contacto", en: "Contact" },
  },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationSections
        .map((section) => {
          const element = document.getElementById(section.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            return {
              id: section.id,
              top: rect.top,
              bottom: rect.bottom,
              height: rect.height,
            }
          }
          return null
        })
        .filter(Boolean)

      const viewportHeight = window.innerHeight
      const scrollThreshold = viewportHeight * 0.3

      let currentSection = "home"

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          if (section.top <= scrollThreshold && section.bottom > scrollThreshold) {
            currentSection = section.id
            break
          }
        }
      }

      const documentHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop + windowHeight >= documentHeight - 100) {
        currentSection = "contact"
      }

      if (scrollTop < 100) {
        currentSection = "home"
      }

      setActiveSection(currentSection)

      const distanceFromBottom = documentHeight - (scrollTop + windowHeight)
      setIsVisible(distanceFromBottom > 400)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
      }`}
    >
      <div className="bg-primary/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-primary/20">
        <div className="flex items-center space-x-4">
          {navigationSections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative p-3 rounded-full transition-all duration-300 group ${
                  isActive
                    ? "bg-background text-primary shadow-md"
                    : "text-secondary hover:text-accent hover:bg-primary/20"
                }`}
                title={section.label[language]}
              >
                <Icon size={20} />

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-background text-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {section.label[language]}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
