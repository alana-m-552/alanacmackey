"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="min-h-[500px] lg:min-h-[600px] bg-gradient-to-b from-white to-primary-100 pt-24 lg:pt-32 pb-16 lg:pb-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Headshot */}
          <div
            className={cn(
              "flex-shrink-0 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-300 to-accent-400 animate-pulse" />
              <Image
                src="/images/headshot.jpg"
                alt="Alana Mackey - Privacy Researcher and Cybersecurity Professional"
                fill
                className="rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                priority
                sizes="(max-width: 1024px) 280px, 400px"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-[56px] font-bold text-primary-900 leading-tight mb-2 transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "150ms" }}
            >
              <span className="text-balance">Alana Mackey</span>
            </h1>

            <h2
              className={cn(
                "text-xl md:text-2xl font-semibold text-accent-600 mb-6 transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "300ms" }}
            >
              Privacy Researcher
            </h2>

            <p
              className={cn(
                "text-lg text-neutral-700 leading-relaxed max-w-[600px] mb-8 transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "450ms" }}
            >
              <span className="text-pretty">
                I'm passionate about protecting digital privacy and building secure systems that respect user autonomy. 
                With expertise spanning privacy-preserving technologies, AI security, and cyber policy, 
                I work at the intersection of technology and human rights to create a safer digital future for everyone.
              </span>
            </p>

            {/* CTA Buttons */}
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "600ms" }}
            >
              <Link
                href="/writing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-700 text-white font-medium rounded-sm hover:bg-primary-900 hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-primary-700 font-medium rounded-sm border-2 border-primary-700 hover:bg-primary-100 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
