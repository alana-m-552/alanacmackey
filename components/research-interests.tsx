"use client"

import { Lock, Shield, Brain } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const interests = [
  {
    icon: Lock,
    title: "Privacy & Data Governance",
    description:
      "Researching privacy-preserving technologies, data protection frameworks, and building systems that empower users with control over their personal information while enabling responsible data use.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Developing robust security architectures and threat models to protect critical infrastructure. Expertise in penetration testing, vulnerability assessment, and security compliance frameworks.",
  },
  {
    icon: Brain,
    title: "AI Security & Ethics",
    description:
      "Exploring AI safety, algorithmic accountability, and bias mitigation strategies. Working to ensure AI systems are transparent, fair, and aligned with human values and societal well-being.",
  },
]

export function ResearchInterests() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <h2
          className={cn(
            "text-2xl md:text-[32px] font-semibold text-primary-900 text-center mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          Research Interests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => {
            const Icon = interest.icon
            return (
              <article
                key={interest.title}
                className={cn(
                  "bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-neutral-100",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <Icon size={48} className="text-accent-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {interest.title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {interest.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
