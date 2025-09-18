"use client"

import { useState } from "react"
import Header from "@/components/header"
import AboutMe from "@/components/about-me"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingNav from "@/components/floating-nav"
import { LanguageProvider } from "@/contexts/language-context"

export default function Portfolio() {
  const [language, setLanguage] = useState<"es" | "en">("es")

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Header language={language} setLanguage={setLanguage} />
        <AboutMe language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Contact language={language} />
        <Footer language={language} />
        <FloatingNav />
      </main>
    </LanguageProvider>
  )
}
