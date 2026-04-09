import type { Metadata } from "next"
import { WritingGrid } from "@/components/writing-grid"

export const metadata: Metadata = {
  title: "Writing & Research | Alana Mackey",
  description: "Articles, research papers, and publications on privacy, cybersecurity, and AI ethics by Alana Mackey.",
}

const articles = [
  {
    id: "1",
    title: "Privacy-Preserving Machine Learning: A Comprehensive Survey",
    category: "Research Paper",
    publication: "Journal of Privacy Technology",
    date: "December 2025",
    excerpt:
      "An in-depth analysis of differential privacy, federated learning, and secure multi-party computation techniques that enable machine learning while preserving individual privacy rights.",
    href: "#",
  },
  {
    id: "2",
    title: "The Future of Data Governance in the Age of AI",
    category: "Opinion",
    publication: "Tech Policy Review",
    date: "November 2025",
    excerpt:
      "As AI systems become more prevalent, we need new frameworks for data governance that balance innovation with individual rights. This piece explores emerging regulatory approaches.",
    href: "#",
  },
  {
    id: "3",
    title: "Securing Critical Infrastructure: Lessons from Recent Cyber Attacks",
    category: "Analysis",
    publication: "Cybersecurity Today",
    date: "October 2025",
    excerpt:
      "A detailed examination of recent attacks on critical infrastructure and the security measures organizations can implement to protect against sophisticated threat actors.",
    href: "#",
  },
  {
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
  },
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
            through research papers, articles, and opinion pieces.
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
