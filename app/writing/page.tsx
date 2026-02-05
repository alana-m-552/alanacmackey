import type { Metadata } from "next"
import { WritingGrid } from "../../components/writing-grid" 

export const metadata: Metadata = {
  title: "Writing & Research | Alana Mackey",
  description: "Essays, research papers, and publications on privacy, AI Safety field building, and politics and security by Alana Mackey.",
}

const articles = [
  {
    id: "1",
    title: "Investigating Moderation Challenges to Combating Hate and Harassment: The Case of {Mod-Admin} Power Dynamics and Feature Misuse on Reddit",
    category: "Research Paper",
    publication: "33rd USENIX Security Symposium",
    date: "August 2024",
    excerpt:
      "An in-depth analysis of differential privacy, federated learning, and secure multi-party computation techniques that enable machine learning while preserving individual privacy rights.",
    href: "https://www.usenix.org/conference/usenixsecurity24/presentation/tabassum",
  },
  {
    id: "2",
    title: "Custodian of Online Communities': How Moderator Mutual Support in Communities Help Fight Hate and Harassment Online.",
    category: "Research Paper",
    publication: "Twentieth Symposium on Usable Privacy and Security (SOUPS 2024)",
    date: "August 2024",
    excerpt:
      "As AI systems become more prevalent, we need new frameworks for data governance that balance innovation with individual rights. This piece explores emerging regulatory approaches.",
    href: "https://www.usenix.org/conference/soups2024/presentation/tabassum-madiha",
  },
  {
    id: "3",
    title: "Mind the (Pipeline) Gap: Retentin and Skills in AI Governance & Safety Fellowships",
    category: "Research Proposal",
    publication: "self",
    date: "August 2025",
    excerpt:
      "A detailed examination of How late-stage AI fellowships improve future retention and skills development of participants",
    href: "https://www.linkedin.com/in/alana-mackey/overlay/1768017926289/single-media-viewer/?profileId=ACoAADQ7m1UBZhJTI9OiYzSfJD3ENxQIMBTLbP4",
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
            through research papers and Essays.
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
