import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "Facundo Nicolás Guzmán Olariaga - Desarrollador Full Stack",
  description:
    "Portfolio profesional de Facundo Nicolás Guzmán Olariaga, desarrollador Full Stack especializado en Angular, NestJS, .NET Core y tecnologías web modernas.",
  keywords: ["desarrollador full stack", "angular", "nestjs", "node.js", "portfolio", "web developer", "facundo guzman", ".net core", "postgresql","sql server"],
  authors: [{ name: "Facundo Nicolás Guzmán Olariaga" }],
  creator: "Facundo Nicolás Guzmán Olariaga",
  publisher: "Facundo Nicolás Guzmán Olariaga",
  generator: "v0.app",
  metadataBase: new URL("https://facundoguzman.site"),
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
    url: "https://facundoguzman.site",
    title: "Facundo Nicolás Guzmán Olariaga - Desarrollador Full Stack",
    description:
      "Portfolio profesional de desarrollador Full Stack especializado en Angular, NestJS, .NET Core y tecnologías web modernas.",
    siteName: "Portfolio Facundo Guzmán",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Facundo Nicolás Guzmán Olariaga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facundo Nicolás Guzmán Olariaga - Desarrollador Full Stack",
    description:
      "Portfolio profesional de desarrollador Full Stack especializado en Angular, NestJS, .NET Core y tecnologías web modernas.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable}`}>
        {/* Animated background layers */}
        <div className="animated-bg" aria-hidden="true" />
        <div className="animated-bg-waves" aria-hidden="true" />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
