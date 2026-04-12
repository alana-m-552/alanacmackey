"use client"

import { Eye, Network, Landmark, ShieldAlert, Users, HeartHandshake, MessageCircle } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const interests = [
  {
    icon: Eye,
    title: "Data Privacy and Surveillance",
    description:
      "I am particularly interested in how marginalized communities are simultaneously over-surveilled and underrepresented in the datasets that shape policy decisions affecting their lives. How do administrative data systems, social media platforms, and AI training datasets codify and amplify structural inequalities?",
  },
  {
    icon: Network,
    title: "Decentralized technology",
    description:
      "Peer-to-peer protocols and decentralized social media platforms have the potential to redistribute power away from centralized institutions. I’m curious as to whether these technologies meaningfully democratize access or simply relocate centralized control to a smaller, less accountable set of actors. I am still actively navigating these questions so please send me any insights you find valuable or shoot me an email if you want to learn with me. ",
  },
  /* {
    icon: ShieldAlert,
    title: "Cybersecurity",
    description:
      "Developing robust security architectures and threat models to protect critical infrastructure. Expertise in penetration testing, vulnerability assessment, and security compliance frameworks.",
  }, */
  {
    icon: Landmark,
    title: "Democracy + AI",
    description:
      "AI systems are increasingly dictating how individuals participate in democracy. Automated systems that determine voter eligibility, generative tools that flood public spaces with misinformation, and more are impacting political participation around the globe. I’m interested in investigating how AI reshapes democratic participation? Can democracy survive the pace of AI development, and if so, what institutional, legal, and technical conditions make that survival possible?",
  },
  {
    icon: ShieldAlert,
    title: "Public Protection Technologies",
    description:
      "I have a vested interest in the technologies deployed in the name of public safety. Systems like ShotSpotter, deployed across hundreds of police departments in the U.S., or predictive policing algorithms embedded in federal and state law enforcement pipelines, are technologies that shape the lives of millions of people. I’m interested in the technical validity of these technologies, the systems we can build to audit them, and the community based alternatives that may perform better than any tech we could make.",
  },
  {
    icon: Users,
    title: "Participatory Action Research",
    description:
      "The communities most affected by surveillance technologies are rarely the ones who design the studies that examine those harms. I want to change that. For a long time, formal research institutions have used extractive research models instead of models of care and reparations. I am interested in emerging research methodologies that seek justice and care through everything from interview protocols to citation practices.",
  },
  {
    icon: HeartHandshake,
    title: "Growing Older",
    description:
      "Living in the United States, I have often been struck by the lack of infrastructure implemented to ensure individuals can age with dignity. We commonly hear echoes of older individuals suffering from loneliness, lack of physical infrastructure for disabled individuals, and rising cost of healthcare. I am interested in the research and companies working to address all of these concerns as building a better society for our elderly creates a better society for us all.",
  },
  {
    icon: MessageCircle,
    title: "Community Building",
    description:
      "Whether coding, writing, reading, or scouring the internet for new sewing techniques, I do everything I can in community. No matter my role, I am always looking for new ways to build meaningful relationships.",
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
