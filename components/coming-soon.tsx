"use client";

import Image from "next/image";
import { ExternalLink, Github, Rocket, Wrench, Bell } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

interface ComingSoonProps {
  language: "es" | "en";
}

const translations = {
  es: {
    title: "En Desarrollo",
    subtitle:
      "Lo que viene — proyecto activo que está siendo construido ahora mismo",
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
};

const inDevelopment = [
  {
    id: 1,
    title: { es: "NaturStock", en: "SaaS Name" },
    tagline: {
      es: "Sistema integral de punto de venta (TPV) y gestión de inventario en la nube",
      en: "Is a comprehensive cloud-based point of sale (POS) and inventory management system",
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
      es: [
        "Arquitectura Multi-tenant",
        "Motor de Venta Fraccionada",
        "Gestión de Lotes (Algoritmo FEFO)",
        "Alertas de Vencimiento",
        "Punto de Venta (TPV) Optimizado",
        "Auditoría y Trazabilidad",
      ],
      en: [
        "Multi-tenant Architecture",
        "Partial Sales Engine",
        "Batch Management (FEFO Algorithm)",
        "Expiration Alerts",
        "Optimized Point of Sale (POS)",
        "Audit and Traceability",
      ],
    },
    progress: 60,
  },
];

export default function ComingSoon({ language }: ComingSoonProps) {
  const t = translations[language];
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();
  const [expanded, setExpanded] = useState(false);

  const project = inDevelopment[0];

  return (
    <section id="coming-soon" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="text-accent w-7 h-7" />
            <h2 className="text-4xl font-bold text-foreground">{t.title}</h2>
          </div>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            {t.subtitle}
          </p>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto" />
        </div>

        {/* Main card - macOS Window Style - Horizontal Layout */}
        <div
          ref={cardRef}
          className={`relative rounded-xl border border-white/10 bg-[#1e1e1e] overflow-hidden shadow-2xl transition-all duration-700 ${
            cardVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          {/* macOS Window Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#2d2d2d] border-b border-white/5">
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>

            {/* Window title */}
            <span className="text-white/50 text-sm font-medium">
              {project.title[language]}
            </span>

            {/* Status badges */}
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 bg-accent/20 border border-accent/40 text-accent text-xs font-semibold px-2.5 py-0.5 rounded-full animate-pulse">
                <Wrench size={10} />
                {t.badge}
              </span>
            </div>
          </div>

          {/* Content - Horizontal layout */}
          <div className="flex flex-col">
            {/* Image - Left side, smaller */}
            <div className="relative w-full h-56 md:h-64 lg:h-72">
              <Image
                src={project.image}
                alt={project.title[language]}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] to-transparent" />

              {/* Progress bar overlay */}
              <div className="absolute bottom-3 left-3 right-3 lg:bottom-4 lg:left-4 lg:right-4">
                <div className="flex items-center justify-between text-xs text-white/80 mb-1">
                  <span>Progreso</span>
                  <span className="text-accent font-semibold">
                    {project.progress}%
                  </span>
                </div>
                <div className="h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-purple-400 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Content - Right side */}
            <div className="p-5 lg:p-6 flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                      {project.title[language]}
                    </h3>
                    <p className="text-white text-xs  font-medium leading-snug">
                      {project.tagline[language]}
                    </p>
                  </div>
                  <span className="bg-white/5 border border-white/10 text-white/40 text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                    {t.status}
                  </span>
                </div>

                <div className="relative mb-4">
                  <p
                    className={`text-sm text-white/50 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out
                    ${expanded ? "max-h-[500px]" : "max-h-[3rem]"}`}
                  >
                    {project.description[language]}
                  </p>

                  {!expanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#1e1e1e] to-transparent pointer-events-none" />
                  )}

                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-1 text-fuchsia-300 text-xs hover:underline"
                  >
                    {expanded
                      ? language === "es"
                        ? "Ver menos"
                        : "Show less"
                      : language === "es"
                        ? "Ver más"
                        : "Show more"}
                  </button>
                </div>

                {/* Features - Compact horizontal */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features[language].slice(0, 6).map((feature, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 px-2 py-1 rounded"
                    >
                      <div className="w-1 h-1 rounded-full bg-[#28c840]" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer - Tech + Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/5">
                {/* Tech logos */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/30">{t.builtWith}:</span>
                  <div className="flex items-center gap-2">
                    {project.technologies.map((tech) => (
                      <Image
                        key={tech.name}
                        src={tech.logo}
                        alt={tech.name}
                        width={18}
                        height={18}
                        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                        title={tech.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#2d2d2d] border border-white/10 text-white/70 hover:bg-[#3d3d3d] hover:text-white transition-all"
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
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-accent text-white hover:bg-accent/90 transition-all"
                    >
                      <ExternalLink size={13} />
                      {t.viewProject}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
