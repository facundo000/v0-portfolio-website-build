"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface SkillsProps {
  language: "es" | "en"
}

const translations = {
  es: {
    title: "Habilidades",
    technicalSkills: "Habilidades Técnicas",
    softSkills: "Habilidades Blandas",
    softSkillsList: [
      "Trabajo en equipo",
      "Comunicación efectiva",
      "Resolución de problemas",
      "Pensamiento crítico",
      "Adaptabilidad",
      "Gestión del tiempo",
      "Creatividad",
    ],
  },
  en: {
    title: "Skills",
    technicalSkills: "Technical Skills",
    softSkills: "Soft Skills",
    softSkillsList: [
      "Teamwork",
      "Effective communication",
      "Problem solving",
      "Critical thinking",
      "Adaptability",
      "Time management",
      "Creativity",
    ],
  },
}

const technicalSkills = [
  { name: "Angular", logo: "/angular-svgrepo-com.svg" },
  { name: "NestJS", logo: "/nestjs-svgrepo-com.svg" },
  { name: "PostgreSQL", logo: "/postgresql-logo-svgrepo-com.svg" },
  { name: "Docker", logo: "/docker-svgrepo-com.svg" },
  { name: "TailwindCSS", logo: "/tailwind-svgrepo-com.svg" },
  { name: "MongoDB", logo: "/mongo-svgrepo-com.svg" },
  { name: "SQL Server", logo: "/microsoftsqlserver-svgrepo-com.svg" },
  { name: ".NET Core", logo: "/dotnet-svgrepo-com_wt.svg" },
  { name: "Figma", logo: "/figma-svgrepo-com.svg" },
]

export default function Skills({ language }: SkillsProps) {
  const t = translations[language]
  const technicalRef = useScrollAnimation({ threshold: 0.1 })
  const softSkillsRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="skills" className="py-20 bg-background">
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

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">{t.technicalSkills}</h3>
            <div
              ref={technicalRef.ref}
              className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 transition-all duration-1000 ${
                technicalRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {technicalSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <Image
                        src={skill.logo || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        width={60}
                        height={60}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">{t.softSkills}</h3>
            <div
              ref={softSkillsRef.ref}
              className={`transition-all duration-1000 delay-200 ${
                softSkillsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {t.softSkillsList.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="p-3 text-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
