"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, MapPin, Calendar, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AboutMeProps {
  language: "es" | "en"
}

const translations = {
  es: {
    title: "Sobre Mí",
    description:
      "Desarrollo aplicaciones web completas, desde el diseño del mockoup para el Front-End, hasta el diseño de la base de datos y la lógica del servidor para el Back-End. Pero, me gusta más el back-end y me estoy especializando en ello.",
    location: "Ciudad, País",
    experience: "2+ años de experiencia",
    passion: "Apasionado por la tecnología",
    interests: ["Desarrollo Web", "back-end", "Inteligencia Artificial", "front-end"],
    personalNote:
      "Cuando no estoy programando, disfruto aprender nuevas tecnologías, ir a eventos tecnológicos o hackatones y resolver retos de programación.",
  },
  en: {
    title: "About Me",
    description:
      "I develop complete web applications, from designing the mockup for the front end to designing the database and server logic for the back end. However, I prefer the back end and am specializing in it.",
    location: "City, Country",
    experience: "2+ years of experience",
    passion: "Passionate about technology",
    interests: ["Web Development", "back-end", "Artificial Intelligence", "front-end"],
    personalNote:
      "When I'm not coding, I enjoy learning new technologies, attending tech events or hackathons, and solving coding challenges.",
  },
}

export default function AboutMe({ language }: AboutMeProps) {
  const t = translations[language]
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

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
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
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
      </div>
    </section>
  )
}
