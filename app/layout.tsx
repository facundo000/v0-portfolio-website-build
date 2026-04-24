import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title:
    "Desarrollador Fullstack | Especialista en Angular | Técnico Universitario en Programación",
  description:
    "Desarrollador argentino apasionado por la arquitectura limpia y el tipado fuerte. Especializado en la creación de aplicaciones escalables dentro del ecosistema Angular.",

  keywords: [
    "facundo guzmán",
    "desarrollador angular",
    "angular developer",
    "arquitectura limpia",
    "clean architecture",
    "typescript",
    "full stack developer",
    "portfolio developer",
    "nestjs",
    "node.js",
    ".net core",
  ],

  authors: [{ name: "Facundo Nicolás Guzmán Olariaga" }],
  creator: "Facundo Nicolás Guzmán Olariaga",
  publisher: "Facundo Nicolás Guzmán Olariaga",

  metadataBase: new URL("https://facundo-nicolas-guzman-olariaga.vercel.app"),

  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en-US": "/en",
    },
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://facundo-nicolas-guzman-olariaga.vercel.app/",
    title:
      "Desarrollador Fullstack | Especialista en Angular | Técnico Universitario en Programación",
    description:
      "Desarrollador argentino enfocado en arquitectura limpia y tipado fuerte. Creación de aplicaciones escalables con Angular.",
    siteName: "Portfolio Facundo Guzmán",
    images: [
      {
        url: "https://res.cloudinary.com/di5ron95z/image/upload/v1776889197/Facundo_Nicol%C3%A1s_Guzm%C3%A1n_Olariaga.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Facundo Nicolás Guzmán Olariaga",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Facundo Nicolás Guzmán Olariaga",
    description:
      "Desarrollador argentino especializado en Angular, clean architecture y aplicaciones escalables.",
    images: [
      "https://res.cloudinary.com/di5ron95z/image/upload/v1776889197/Facundo_Nicol%C3%A1s_Guzm%C3%A1n_Olariaga.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  manifest: "/manifest.json",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`font-sans ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Animated background layers */}
        <div className="animated-bg" aria-hidden="true" />
        <div className="animated-bg-waves" aria-hidden="true" />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
