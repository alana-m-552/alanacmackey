"use client"

import { useState } from "react"
import { Download, ExternalLink, FileText, Briefcase, GraduationCap, Award } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Resume data - in a real app, this could come from a CMS or API
const resumeData = {
  experience: [
    {
      title: "Senior Privacy Researcher",
      company: "TechPrivacy Institute",
      period: "2023 - Present",
      description: "Leading research initiatives on privacy-preserving technologies and contributing to policy frameworks for responsible AI development.",
      highlights: [
        "Published 5 peer-reviewed papers on differential privacy",
        "Advised 3 Fortune 500 companies on privacy architecture",
        "Developed open-source privacy toolkit with 2,000+ GitHub stars",
      ],
    },
    {
      title: "Cybersecurity Consultant",
      company: "SecureNet Solutions",
      period: "2020 - 2023",
      description: "Provided strategic security consulting to enterprise clients, focusing on threat modeling and zero-trust architecture implementation.",
      highlights: [
        "Led security assessments for 20+ organizations",
        "Reduced client security incidents by 40% on average",
        "Developed proprietary threat intelligence framework",
      ],
    },
    {
      title: "Security Engineer",
      company: "DataGuard Corp",
      period: "2018 - 2020",
      description: "Designed and implemented security solutions for cloud infrastructure and developed automated security testing pipelines.",
      highlights: [
        "Built automated vulnerability scanning system",
        "Achieved SOC 2 Type II compliance for the organization",
        "Mentored junior engineers in security best practices",
      ],
    },
  ],
  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Stanford University",
      period: "2015 - 2018",
      focus: "Specialization in Privacy-Preserving Computing",
    },
    {
      degree: "M.S. in Cybersecurity",
      institution: "Carnegie Mellon University",
      period: "2013 - 2015",
      focus: "Focus on Network Security and Cryptography",
    },
    {
      degree: "B.S. in Computer Science",
      institution: "MIT",
      period: "2009 - 2013",
      focus: "Minor in Mathematics",
    },
  ],
  skills: [
    "Privacy Engineering",
    "Threat Modeling",
    "Penetration Testing",
    "Python",
    "Rust",
    "Cloud Security",
    "GDPR Compliance",
    "AI/ML Security",
    "Cryptography",
    "Risk Assessment",
  ],
  certifications: [
    "CISSP (Certified Information Systems Security Professional)",
    "CIPP/US (Certified Information Privacy Professional)",
    "AWS Certified Security - Specialty",
    "Google Cloud Professional Security Engineer",
  ],
}

export function ResumeViewer() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    // Simulate download delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // In a real app, this would trigger an actual PDF download
    setIsDownloading(false)
    alert("In a production environment, this would download the PDF resume.")
  }

  return (
    <div className="animate-fade-in-up animation-delay-300">
      {/* Download Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-600 text-white font-medium rounded-sm hover:bg-accent-600/90 transition-all duration-300 disabled:opacity-50"
        >
          <Download size={18} />
          {isDownloading ? "Downloading..." : "Download PDF"}
        </button>
        <Link
          href="#"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 font-medium rounded-sm border-2 border-primary-700 hover:bg-primary-100 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={18} />
          View on LinkedIn
        </Link>
      </div>

      {/* Resume Content */}
      <div className="bg-neutral-100 rounded-lg shadow-lg p-6 md:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-primary-900 text-white p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Alex Chen</h2>
            <p className="text-xl text-primary-300 mb-4">
              Privacy Researcher & Cybersecurity Professional
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-primary-200">
              <span>alex.chen@example.com</span>
              <span>•</span>
              <span>San Francisco, CA</span>
              <span>•</span>
              <span>linkedin.com/in/alexchen</span>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase size={24} className="text-primary-700" />
                <h3 className="text-2xl font-semibold text-primary-900">
                  Experience
                </h3>
              </div>
              <div className="space-y-8">
                {resumeData.experience.map((job, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative pl-6 border-l-2 border-primary-200",
                      index !== resumeData.experience.length - 1 && "pb-8"
                    )}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-700 rounded-full" />
                    <h4 className="text-lg font-semibold text-primary-900">
                      {job.title}
                    </h4>
                    <p className="text-accent-600 font-medium">{job.company}</p>
                    <p className="text-sm text-neutral-500 mb-3">{job.period}</p>
                    <p className="text-neutral-700 mb-3">{job.description}</p>
                    <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
                      {job.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={24} className="text-primary-700" />
                <h3 className="text-2xl font-semibold text-primary-900">
                  Education
                </h3>
              </div>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-primary-900">
                        {edu.degree}
                      </h4>
                      <p className="text-accent-600 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-neutral-600">{edu.focus}</p>
                    </div>
                    <p className="text-sm text-neutral-500 md:text-right mt-1 md:mt-0">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <FileText size={24} className="text-primary-700" />
                <h3 className="text-2xl font-semibold text-primary-900">
                  Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Award size={24} className="text-primary-700" />
                <h3 className="text-2xl font-semibold text-primary-900">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-2">
                {resumeData.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-neutral-700"
                  >
                    <span className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
