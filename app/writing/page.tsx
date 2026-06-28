import type { Metadata } from "next"
import { WritingGrid } from "@/components/writing-grid"

export const metadata: Metadata = {
  title: "Writing & Research | Alana Mackey",
  description: "Articles, research papers, and publications on privacy, cybersecurity, and AI ethics by Alana Mackey.",
}

const articles = [
  {
    id: "1",
    title: "Investigating moderation challenges to combating hate and harassment: The case of {Mod-Admin} power dynamics and feature misuse on reddit",
    category: "Research Paper",
    publication: "USENIX Security",
    date: "August 2024",
    excerpt:
      "We also present the first systematization of how social media platform features (including especially security, privacy, and safety features) are misused for online abuse, and drawing on this systematization we articulate design themes for platforms that want to resist such misuse.",
    href: "https://www.usenix.org/conference/usenixsecurity24/presentation/tabassum",
  },
  {
    id: "2",
    title: "'Custodian of Online Communities': How Moderator Mutual Support in Communities Help Fight Hate and Harassment Online",
    category: "Research Paper",
    publication: "Symposium on Usable Privacy and Security (SOUPS)",
    date: "August 2024",
    excerpt:
      "Volunteer moderation has long been adopted by social media companies as a means to combat hate and harassment. But as these moderators are supporting their communities, they are also exposed to the very same content they are trying to prevent. In this paper, we explore how moderators support each other in their work and how this support can be leveraged to improve moderation practices.",
    href: "https://www.usenix.org/conference/soups2024/presentation/tabassum-madiha",
  },
  {
    id: "3",
    title: "ICE'Procurement: Tracking ICE's procurement actions",
    category: "Analysis",
    publication: "CORDA Democracy Fellowship",
    date: "June 2026",
    excerpt:
      "A proof-of-concept web application that tracks and visualizes procurement actions by the U.S. Immigration and Customs Enforcement (ICE) agency, providing transparency into government spending and contracts.",
    href: "https://ice-procurement.vercel.app/",
  },
  /* {
    id: "4",
    title: "Algorithmic Accountability: Who's Responsible When AI Goes Wrong?",
    category: "Research Paper",
    publication: "AI Ethics Quarterly",
    date: "September 2025",
    excerpt:
      "This paper examines the complex web of accountability when AI systems make harmful decisions, proposing a new framework for assigning responsibility across the AI development lifecycle.",
    href: "#",
  },
  {
    id: "5",
    title: "Zero-Trust Architecture: Implementation Guide for Enterprise",
    category: "Technical Guide",
    publication: "Enterprise Security Magazine",
    date: "August 2025",
    excerpt:
      "A practical guide to implementing zero-trust security architecture in enterprise environments, covering identity verification, micro-segmentation, and continuous monitoring.",
    href: "#",
  },
  {
    id: "6",
    title: "The Ethics of Surveillance Technology in Democratic Societies",
    category: "Opinion",
    publication: "Digital Rights Forum",
    date: "July 2025",
    excerpt:
      "Exploring the tension between security and privacy in democratic societies, and proposing principles for the ethical deployment of surveillance technologies.",
    href: "#",
  }, */
]

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-100">
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 animate-fade-in-up">
            Writing & Research
          </h1>
          <p className="text-lg text-neutral-700 max-w-[600px] mx-auto animate-fade-in-up animation-delay-150">
            Exploring the intersection of privacy, security, and technology policy 
            through research papers, articles, and projects.
          </p>
        </div>
      </section>

      {/* Writing Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
          <WritingGrid articles={articles} />
        </div>
      </section>
    </div>
  )
}
