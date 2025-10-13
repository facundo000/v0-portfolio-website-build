"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Play } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface ProjectsProps {
  language: "es" | "en"
}

const translations = {
  es: {
    title: "Proyectos",
    viewCode: "Ver Código",
    liveDemo: "Demo en Vivo",
    videoDemo: "Video Demo",
  },
  en: {
    title: "Projects",
    viewCode: "View Code",
    liveDemo: "Live Demo",
    videoDemo: "Video Demo",
  },
}

const projects = [
  {
    id: 1,
    title: {
      es: "Gomería Mitre",
      en: "Mitre Tire Shop",
    },
    description: {
      es: "Resuelve la necesidad de cotizar y comprar neumáticos de forma rápida y directa en Córdoba. Puse especial énfasis en el rendimiento web (Web Performance), implementando carga prioritaria de contenido (LCP) y lazy loading, además de asegurar un código con altos estándares de accesibilidad (a11y) y SEO. El flujo principal culmina en un carrito de compras interactivo que integra la API de WhatsApp para finalizar el pedido, simplificando el contacto con el cliente.",
      en: "It addresses the need for quick and direct tire quotes and purchases in Córdoba. I placed special emphasis on web performance, implementing content priority loading (LCP) and lazy loading, in addition to ensuring the code meets high accessibility (A11y) and SEO standards. The main flow culminates in an interactive shopping cart that integrates the WhatsApp API to complete the order, simplifying customer contact.",
    },
    image: "/gomeria_mitre.webp",
    gif: "/gomeria_mitre_g.gif",
    technologies: [
      { name: "Angular", logo: "/angular-svgrepo-com.svg" },
      { name: "TailwindCSS", logo: "/tailwind-svgrepo-com.svg" },
    ],
    github: "https://github.com/facundo000",
    demo: "https://gomeria-mitre.vercel.app",
    video: "https://youtu.be/jxo0BqN6SPE",
  },
  {
    id: 2,
    title: {
      es: "Bienes Raices",
      en: "Real Estate",
    },
    description: {
      es: "Portal web para buscar y listar propiedades inmobiliarias. Incluye filtros avanzados y un sistema de gestión de usuarios. El proyecto pasó por múltiples migraciones y mejoras de rendimiento.",
      en: "Web portal for searching and listing real estate properties. Includes advanced filters and a user management system. The project underwent multiple migrations and performance improvements.",
    },
    image: "/BR-inicio.webp",
    gif: "/bienesRaices_g.gif",
    technologies: [
      { name: "Angular", logo: "/angular-svgrepo-com.svg" },
      { name: "NestJS", logo: "/nestjs-svgrepo-com.svg" },
      { name: "PostgreSQL", logo: "/postgresql-logo-svgrepo-com.svg" },
      { name: "Docker", logo: "/docker-svgrepo-com.svg" },
    ],
    github: "https://github.com/facundo000/backend-bienesRaices-nest",
    demo: "https://bienesraices-angular.netlify.app",
    video: "https://youtu.be/JY_Sums_t9Y",
  },
  {    
    id: 4,
    title: {
      es: "TechZone E-commerce",
      en: "TechZone E-commerce",
    },
    description: {
      es: "Plataforma de tienda virtual de electrónica con carrito de compras, pagos integrados y panel de administración. Construida bajo la metodología Scrum.",
      en: "Online electronics store platform with a shopping cart, integrated payments, and an administration panel. Built using the Scrum methodology.",
    },
    image: "/techzone.webp",
    gif: "/techzone_gif.gif",
    technologies: [
      { name: "Node.js", logo: "/node-js-svgrepo-com.svg" },
      { name: "PostgreSQL", logo: "/postgresql-logo-svgrepo-com.svg" },
    ],
    github: "https://github.com/No-Country/C15-03-M-NodeReact",
    demo: "https://techzone-nocountry.vercel.app/",
    video: "https://www.youtube.com/watch?v=BBOxw6b5Wrk",
  },
  {
    id: 3,
    title: {
      es: "NEKODE",
      en: "NEKODE",
    },
    description: {
      es: "Nekode es una plataforma edtech gamificada enfocada en la enseñanza de JavaScript. Transforma el aprendizaje en una experiencia interactiva mediante mecánicas de juego como niveles, vidas y ranking competitivo utilzando la API de OpenAI. Los usuarios pueden evaluar sus conocimientos a través de desafíos prácticos y recibir feedback personalizado, que identifica las áreas que deben reforzar.",
      en: "Nekode is a gamified edtech platform focused on teaching JavaScript. It transforms learning into an interactive experience through game mechanics such as levels, lives, and competitive ranking using the OpenAI API. Users can assess their knowledge through practical challenges and receive personalized feedback, which identifies areas that need reinforcement.",
    },
    image: "/nekode.webp",
    gif: "/nekode_g.gif",
    technologies: [
      { name: "NestJS", logo: "/nestjs-svgrepo-com.svg" },
      { name: "PostgreSQL", logo: "/postgresql-logo-svgrepo-com.svg" },      
    ],
    github: "https://github.com//facundo000/NEKODE_FG",
    demo: "https://nekode.vercel.app/",
    video: "https://youtu.be/v_klkqSrgzw",
  },    
]

export default function Projects({ language }: ProjectsProps) {
  const t = translations[language]
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            className={`grid grid-cols-1 gap-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={hoveredProject === project.id ? project.gif : project.image}
                    alt={project.title[language]}
                    width={800}
                    height={450}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Play className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">{language === "es" ? "Ver demo" : "View demo"}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title[language]}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">
                    {project.description[language]}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center gap-1 bg-muted rounded-full px-3 py-1">
                        <Image src={tech.logo || "/placeholder.svg"} alt={`${tech.name} logo`} width={16} height={16} />
                        <span className="text-xs font-medium text-muted-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" asChild className="gap-2 bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        {t.viewCode}
                      </a>
                    </Button>

                    <Button size="sm" asChild className="gap-2">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t.liveDemo}
                      </a>
                    </Button>

                    <Button variant="secondary" size="sm" asChild className="gap-2">
                      <a href={project.video} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4" />
                        {t.videoDemo}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
