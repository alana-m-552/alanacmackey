import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '../components/navigation'
import { Footer } from '../components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Alana Mackey | Tech Governance Researcher',
  description: 'Personal website of Alana Mackey, a privacy researcher specializing in tech governance, AI security, and cyber policy.',
  keywords: ['privacy', 'cybersecurity', 'AI security', 'data governance', 'researcher', "community organizer"],
  authors: [{ name: 'Alana Mackey' }],
  openGraph: {
    title: 'Alana Mackey | Tech Governance Researcher',
    description: 'Personal website of Alana Mackey, a privacy researcher and community organizer specializing in tech governance, AI security, and cyber policy.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#6D28D9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-700 focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
