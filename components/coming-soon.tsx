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
    subtitle: "Lo que viene — proyectos activos que están siendo construidos ahora mismo",
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
    title: { es: "Nombre del SaaS", en: "SaaS Name" },
    tagline: {
      es: "Una línea que resume qué hace tu SaaS",
      en: "One line that summarizes what your SaaS does",
    },
    description: {
      es: "Descripción más detallada del SaaS: qué problema resuelve, a quién va dirigido, cuál es el modelo de negocio y en qué etapa se encuentra actualmente.",
      en: "More detailed description of the SaaS: what problem it solves, who it targets, what the business model is and what stage it is currently in.",
    },
    image: "/placeholder-fr4tr.png",
    technologies: [
      { name: "Next.js", logo: "/nestjs-svgrepo-com.svg" },
      { name: "Node.js", logo: "/node-js-svgrepo-com.svg" },
      { name: "PostgreSQL", logo: "/postgresql-logo-svgrepo-com.svg" },
      { name: "Docker", logo: "/docker-svgrepo-com.svg" },
    ],
    githubUrl: "",
    previewUrl: "",
    features: {
      es: ["Feature 1", "Feature 2", "Feature 3"],
      en: ["Feature 1", "Feature 2", "Feature 3"],
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

        {/* Main card */}
        <div
          ref={cardRef}
          className={`relative rounded-2xl border border-accent/20 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-700 ${
            cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Subtle glow border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 pointer-events-none" />

          {/* Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="flex items-center gap-1.5 bg-accent/20 border border-accent/40 text-accent text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm animate-pulse">
              <Wrench size={11} />
              {t.badge}
            </span>
            <span className="bg-black/40 border border-white/10 text-white/60 text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              {t.status}
            </span>
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
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                  {project.tagline[language]}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {project.title[language]}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {project.description[language]}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {project.features[language].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech logos */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech) => (
                    <Image
                      key={tech.name}
                      src={tech.logo}
                      alt={tech.name}
                      width={22}
                      height={22}
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                      title={tech.name}
                    />
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 flex-wrap">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white/8 border border-white/10 text-white/70 hover:bg-white/15 hover:text-white transition-all duration-200"
                  >
                    <Github size={13} />
                    {t.viewCode}
                  </a>
                )}
                {project.previewUrl && (
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-accent/20 border border-accent/30 text-accent hover:bg-accent/30 transition-all duration-200"
                  >
                    <ExternalLink size={13} />
                    {t.viewProject}
                  </a>
                )}
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white/8 border border-white/10 text-white/50 cursor-default">
                  <Bell size={13} />
                  {t.followProgress}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
