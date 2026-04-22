"use client"

import Image from "next/image"
import { ExternalLink, Github, Trophy, Clock, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface HackathonsProps {
  language: "es" | "en"
}

const translations = {
  es: {
    title: "Hackathones",
    subtitle: "Proyectos construidos bajo presión, con propósito y en equipo",
    badge: "Hackathon",
    viewCode: "Código",
    viewProject: "Demo",
    viewVideo: "Video",
    teamSize: "Equipo",
    duration: "Duración",
    placement: "Resultado",
  },
  en: {
    title: "Hackathons",
    subtitle: "Projects built under pressure, with purpose and as a team",
    badge: "Hackathon",
    viewCode: "Code",
    viewProject: "Demo",
    viewVideo: "Video",
    teamSize: "Team",
    duration: "Duration",
    placement: "Result",
  },
}

const hackathons = [
  {
    id: 1,
    title: { es: "Bugster Hackathon", en: "Bugster Hackathon" },
    description: {
      es: "Para crear EcoZen, se apunta a personas que quieran meditar. Sabemos que existen múltiples páginas donde hacen esto, pero EcoZen se enfoca en el estado de ánimo del usuario y permite seleccionar una planta que guíe la meditación.",
      en: "EcoZen was created for people who want to meditate. We know there are many websites that do this, but EcoZen focuses on the user's mood and allows them to select a plant to guide their meditation.",
    },
    image: "/ecozen.webp",
    gif: "/gif-ecozen.gif",
    technologies: [
      { name: "Next.js", logo: "/next-dot-js-svgrepo-com.svg" },
      { name: "Vercel", logo: "/vercel-logo-svgrepo-com.svg" },
    ],
    teamSize: 3,
    duration: { es: "10 horas", en: "10 hours" },
    placement: { es: "1er lugar", en: "1st place" },
    githubUrl: "",
    demoUrl: "https://ecozenmindfulness.vercel.app/",
    videoUrl: "",
    event: "Bugster Hackathon 2025",
  },

]

function HackathonCard({
  project,
  language,
  t,
}: {
  project: (typeof hackathons)[0]
  language: "es" | "en"
  t: (typeof translations)["es"]
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:border-accent/30 hover:bg-white/8 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Hackathon badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="flex items-center gap-1.5 bg-yellow-500/20 border border-yellow-500/40 text-yellow-950 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          <Trophy size={11} />
          {t.badge}
        </span>
        <span className="bg-black/40 border border-white/10 text-white/70 text-xs px-2 py-1 rounded-full backdrop-blur-sm">
          {project.event}
        </span>
      </div>

      <div className="md:grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-52 md:h-72 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title[language]}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Image
            src={project.gif}
            alt={`${project.title[language]} demo`}
            fill
            className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            {/* Stats row */}
            <div className="flex items-center gap-4 mb-4 text-xs text-white/50">
              <span className="flex items-center gap-1">
                <Users size={12} />
                {t.teamSize}: {project.teamSize}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {project.duration[language]}
              </span>
              <span className="flex items-center gap-1">
                <Trophy size={12} className="text-yellow-400" />
                <span className="text-yellow-400">{project.placement[language]}</span>
              </span>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
              {project.title[language]}
            </h3>

            <p className="text-sm text-white/60 leading-relaxed mb-4">
              {project.description[language]}
            </p>

            {/* Tech logos */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.technologies.map((tech) => (
                <div key={tech.name} className="flex items-center gap-1.5 group/tech">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 flex-wrap">
            {project.githubUrl && project.githubUrl !== "#" && (
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
            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-accent/20 border border-accent/30 text-accent hover:bg-accent/30 transition-all duration-200"
              >
                <ExternalLink size={13} />
                {t.viewProject}
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white/8 border border-white/10 text-white/70 hover:bg-white/15 hover:text-white transition-all duration-200"
              >
                <ExternalLink size={13} />
                {t.viewVideo}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hackathons({ language }: HackathonsProps) {
  const t = translations[language]
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="hackathons" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="text-yellow-400 w-7 h-7" />
            <h2 className="text-4xl font-bold text-foreground">{t.title}</h2>
          </div>
          <p className="text-white/50 text-base max-w-xl mx-auto">{t.subtitle}</p>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mx-auto" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {hackathons.map((project) => (
            <HackathonCard key={project.id} project={project} language={language} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
