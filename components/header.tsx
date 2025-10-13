"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import Image from "next/image"

interface HeaderProps {
  language: "es" | "en"
  setLanguage: (lang: "es" | "en") => void
}

const translations = {
  es: {
    downloadCV: "Descargar CV",
    contact: "Contacto",
    developer: "Desarrollador Full Stack",
    subtitle: "Creando experiencias digitales de principio a fin",
  },
  en: {
    downloadCV: "Download CV",
    contact: "Contact",
    developer: "Full Stack Developer",
    subtitle: "Creating digital experiences from start to finish",
  },
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const t = translations[language]

  const handleDownloadCV = () => {
    // Aquí puedes agregar la lógica para descargar el CV
     window.open("https://mnf.red/facundo-nicolas_guzman-olariaga", "_blank");
  }

  const handleContact = () => {
    // Aquí puedes agregar la lógica para el contacto
    window.location.href = "mailto:facundo.guzman@mi.unc.edu.ar"
  }

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/50 to-background overflow-hidden"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-bold text-xl text-primary">Portfolio</div>

          {/* Language Switch */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={`text-sm ${language === "es" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                ES
              </span>
              <Switch checked={language === "en"} onCheckedChange={(checked) => setLanguage(checked ? "en" : "es")} />
              <span className={`text-sm ${language === "en" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                EN
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/facundo-nicolas-guzman-olariaga-dev/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />                  
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/facundo000" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center animate-fade-in-up pt-24">
        <div className="mb-8 animate-float">
          <Image
            src="/avatar-perfil.webp"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-primary shadow-2xl"
          />
        </div>

        <h1
          className="text-5xl md:text-7xl font-black mb-4 text-balance"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <span className="text-foreground">Hola, soy </span>
          <span className="text-primary">Facundo Nicolás Guzmán Olariaga</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 text-balance">{t.developer}</h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">{t.subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleDownloadCV} size="lg" className="gap-2">
            <Download className="h-5 w-5" />
            {t.downloadCV}
            
          </Button>
          <Button onClick={handleContact} variant="outline" size="lg" className="gap-2 bg-transparent">
            <Mail className="h-5 w-5" />
            {t.contact}
          </Button>
        </div>
      </div>
    </header>
  )
}
