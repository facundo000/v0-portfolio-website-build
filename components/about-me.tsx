"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, MapPin, Calendar, Heart } from "lucide-react"

interface AboutMeProps {
  language: "es" | "en"
}

const translations = {
  es: {
    title: "Sobre Mí",
    description:
      "Soy un desarrollador Full Stack apasionado por crear soluciones digitales innovadoras. Con experiencia en tecnologías modernas, me especializo en desarrollar aplicaciones web escalables y experiencias de usuario excepcionales.",
    location: "Ciudad, País",
    experience: "3+ años de experiencia",
    passion: "Apasionado por la tecnología",
    interests: ["Desarrollo Web", "UI/UX Design", "Inteligencia Artificial", "Open Source"],
    personalNote:
      "Cuando no estoy programando, disfruto aprender nuevas tecnologías, contribuir a proyectos open source y explorar las últimas tendencias en desarrollo web.",
  },
  en: {
    title: "About Me",
    description:
      "I am a Full Stack developer passionate about creating innovative digital solutions. With experience in modern technologies, I specialize in developing scalable web applications and exceptional user experiences.",
    location: "City, Country",
    experience: "3+ years of experience",
    passion: "Passionate about technology",
    interests: ["Web Development", "UI/UX Design", "Artificial Intelligence", "Open Source"],
    personalNote:
      "When I'm not coding, I enjoy learning new technologies, contributing to open source projects, and exploring the latest trends in web development.",
  },
}

export default function AboutMe({ language }: AboutMeProps) {
  const t = translations[language]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-black mb-4 text-balance"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6 text-pretty">{t.description}</p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{t.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{t.experience}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{t.passion}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  {language === "es" ? "Intereses" : "Interests"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground text-pretty">{t.personalNote}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
