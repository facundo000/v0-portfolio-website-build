"use client"

import Image from "next/image"
import { ExternalLink, Github, Rocket, Wrench, Bell } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface ComingSoonProps {
  language: "es" | "en"
}

const translations = {
  es: {
    title: "En Desarrollo",
    subtitle: "Lo que viene — proyecto activo que está siendo construido ahora mismo",
    badge: "En desarrollo",
    status: "Beta / Pruebas",
    viewCode: "Código",
    viewProject: "Ver avance",
    description: "Descripción del SaaS",
    builtWith: "Construido con",
    followProgress: "Seguir progreso",
  },
  en: {
    title: "In Development",
    subtitle: "What's coming — active projects being built right now",
    badge: "In development",
    status: "Beta / Testing",
    viewCode: "Code",
    viewProject: "Preview",
    description: "SaaS Description",
    builtWith: "Built with",
    followProgress: "Follow progress",
  },
}

const inDevelopment = [
  {
    id: 1,
    title: { es: "NaturStock", en: "SaaS Name" },
    tagline: {
      es: "NaturStock es un sistema integral de punto de venta (TPV) y gestión de inventario en la nube",
      en: "NaturStock is a comprehensive cloud-based point of sale (POS) and inventory management system",
    },
    description: {
      es: "Está diseñado específicamente para tiendas especializadas de alimentos saludables y a granel. Esta solución B2B atiende las necesidades únicas del sector mediante funcionalidades nativas como la venta fraccionada con conversión automática de unidades, el control estricto de lotes por fecha de caducidad (FEFO) y el etiquetado rápido de atributos dietéticos (vegano, sin TACC, etc.). Actualmente,está en fase de MVP (etapa de pruebas).",
      en: "It is specifically designed for specialty health and bulk food stores. This B2B solution addresses the unique needs of the sector with native features such as fractional sales with automatic unit conversion, strict batch control by expiration date (FEFO), and quick labeling of dietary attributes (vegan, gluten-free, etc.). It is currently in the MVP (Minimum Viable Product) phase (testing stage).",
    },
    image: "/dashboard-naturstock.webp",
    technologies: [
      { name: "NestJS", logo: "/nestjs-svgrepo-com.svg" },
      { name: "Angular", logo: "/angular-svgrepo-com.svg" },
      { name: "PostgreSQL", logo: "/postgresql-logo-svgrepo-com.svg" },
      { name: "Docker", logo: "/docker-svgrepo-com.svg" },
    ],
    githubUrl: "",
    previewUrl: "",
    features: {
      es: ["Arquitectura Multi-tenant", "Motor de Venta Fraccionada", "Gestión de Lotes (Algoritmo FEFO)", "Alertas de Vencimiento", "Punto de Venta (TPV) Optimizado", "Auditoría y Trazabilidad"],
      en: ["Multi-tenant Architecture", "Partial Sales Engine", "Batch Management (FEFO Algorithm)", "Expiration Alerts", "Optimized Point of Sale (POS)", "Audit and Traceability"],
    },
    progress: 60,
  },
]

export default function ComingSoon({ language }: ComingSoonProps) {
  const t = translations[language]
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation()

  const project = inDevelopment[0]

  return (
    <section id="coming-soon" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="text-accent w-7 h-7" />
            <h2 className="text-4xl font-bold text-foreground">{t.title}</h2>
          </div>
          <p className="text-white/50 text-base max-w-xl mx-auto">{t.subtitle}</p>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto" />
        </div>

        {/* Main card - macOS Window Style */}
        <div
          ref={cardRef}
          className={`relative rounded-xl border border-white/10 bg-[#1e1e1e] overflow-hidden shadow-2xl transition-all duration-700 ${
            cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* macOS Window Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors cursor-pointer" />
            </div>
            
            {/* Window title */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
              <span className="text-white/50 text-sm font-medium">{project.title[language]}</span>
            </div>

            {/* Status badges */}
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 bg-accent/20 border border-accent/40 text-accent text-xs font-semibold px-2.5 py-0.5 rounded-full animate-pulse">
                <Wrench size={10} />
                {t.badge}
              </span>
              <span className="bg-white/5 border border-white/10 text-white/40 text-xs px-2 py-0.5 rounded-full">
                {t.status}
              </span>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative h-60 md:h-auto overflow-hidden">
              <Image
                src={project.image}
                alt={project.title[language]}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay with grid pattern to suggest "in progress" */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.1) 30px, rgba(255,255,255,0.1) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.1) 30px, rgba(255,255,255,0.1) 31px)",
                }}
              />

              {/* Progress bar at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between text-xs text-white/70 mb-1.5">
                  <span>Progreso</span>
                  <span className="text-accent font-semibold">{project.progress}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-purple-400 rounded-full transition-all duration-1000"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="p-6 md:p-8 flex flex-col justify-between bg-[#1e1e1e]">
              <div>
                <p className="text-accent/80 text-xs font-medium uppercase tracking-wider mb-3">
                  {project.tagline[language]}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {project.title[language]}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  {project.description[language]}
                </p>

                {/* Features list */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {project.features[language].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#28c840] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech logos */}
                <div className="flex flex-wrap items-center gap-4 mb-6 p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-xs text-white/30 font-medium">{t.builtWith}:</span>
                  {project.technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-1.5 group">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={20}
                        height={20}
                        className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap pt-4 border-t border-white/5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[#2d2d2d] border border-white/10 text-white/70 hover:bg-[#3d3d3d] hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    <Github size={15} />
                    {t.viewCode}
                  </a>
                )}
                {project.previewUrl && (
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-accent text-white hover:bg-accent/90 transition-all duration-200"
                  >
                    <ExternalLink size={15} />
                    {t.viewProject}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
