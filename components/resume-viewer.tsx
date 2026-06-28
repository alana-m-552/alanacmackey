import { FileText, Briefcase, GraduationCap, Award } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Resume data - in a real app, this could come from a CMS or API
const resumeData = {
  experience: [
    {
      title: "AI Governance Researcher",
      company: "Arcadia Impact, London, UK",
      period: "June 2025 - Sept. 2025",
      description: "",
      highlights: [
        "Designed and led a qualitative interview study of AI governance professionals to identify common talent gaps and inform changes to the Orion AI Policy upskilling program.",
        "Conducted research in the AI Governance stream of the Impact Research Group Progamme, as part of a team project titled \"Mind the (Pipeline) Gap: Retention and Skills in AI Governance & Safety Fellowships\", supervised by Karolina Korgul.",
      ],
    },
    {
      title: "Research Associate",
      company: "Cybersecurity and Data Privacy Institute, Boston, MA",
      period: "June 2023 - Sept. 2024",
      description: "",
      highlights: [
        "Co-authored 2 peer-reviewed papers accepted at USENIX Security and SOUPS by conducting qualitative coding on moderator interviews and platform artifacts, which identified 4 recurring feature-misuse vectors and led to several policy recommendations.",
        "Developed a reproducible methodology for evaluating whether emerging US privacy policies address marginalized communities, which I presented at the 2024 Privacy Law Scholars Conference.",
      ],
    },
    {
      title: "HHMI Intern",
      company: "Wellesley College Science Center, Wellesley, MA",
      period: "January 2022 - May 2023",
      description: "",
      highlights: [
        "Gathered over one hundred resources on coding practice and emotional well-being for programmers and used these resources to deploy an online resource bank for cs undergraduate students",
        "Increased community within the CS department by running skill-building events, emotional wellbeing check-ins, and talks.",
        "Ran a long-form qualitative interview study with over 15% of the CS department student body that culminated in concrete recommendations for the Computer Science department to make curriculum more effective and impactful.",
      ],
    },
    {
      title: "Software Development Engineering Intern",
      company: "GoDaddy, remote",
      period: "July 2021 - August 2022",
      description: "",
      highlights: [
        "Collaborated on 2 week sprints with 9 other full-time engineers on my team",
        "Created, tested and deployed react components for the Search Engine Results Page",
        "Interacted with the following tech stack daily: HTML/CSS, JavaScript, React, Mocha, Amazon Web Services, Visual Studio Code, Linux, Jira, Github, and Slack",
      ],
    },
  ],
  education: [
    {
      degree: "B.A. Computer Science",
      institution: "Wellesley College",
      period: "December 2025",
      focus: "Minors: Economics, Spanish · Relevant Coursework: Decolonial Research Strategies, International Politics of Security, AI Systems Research, Introduction to ML, Statistics, Systems Architecture, Data Structures and Algorithm",
    },
  ],
  skills: [
    "Java",
    "Python",
    "React",
    "Mocha (testing)",
    "GitHub",
    "Claude Code",
    "VS Code",
    "Jira",
    "Linux",
    "Microsoft Copilot",
    "Project management",
    "Event logistics",
    "Research coordination",
    "Budget tracking",
    "Stakeholder communications",
    "Qualitative research design",
    "User interviews",
    "Thematic coding",
    "Data synthesis",
    "Policy analysis",
    "LaTeX",
    "Overleaf",
  ],
  awards: [
    "The IO Foundation Internet Engineering Task Force Fellowship – July 2025",
    "Computer Science Department Community Leadership Award – May 2025",
    "Susan Rappaport Knafel '52 Internship – March 2025",
    "Impact Fellowship – Jan. 2025",
    "Clare Booth Luce Undergraduate Research Award – Sept. 2022 - May 2024",
    "Camellia Student Leadership Award – April 2022",
    "Feminist Futures Fellow @ MIT Media Lab – May 2021",
  ],
}

const resumeButtons = [
  {
    label: "Engineering Resume",
    href: "/resumes/engineering-resume.pdf",
  },
  {
    label: "Operations Resume",
    href: "/resumes/operations-resume.pdf",
  },
  {
    label: "Research Resume",
    href: "/resumes/research-resume.pdf",
  },
]

export function ResumeViewer() {
  return (
    <div className="animate-fade-in-up animation-delay-300">
      {/* Resume Type Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        {resumeButtons.map((button) => (
          <Link
            key={button.label}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 text-white font-medium rounded-sm hover:bg-primary-900 hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FileText size={18} />
            {button.label}
          </Link>
        ))}
      </div>

      {/* Resume Content */}
      <div className="bg-neutral-100 rounded-lg shadow-lg p-6 md:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-primary-900 text-white p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Alana Mackey</h2>
            <p className="text-xl text-primary-300 mb-4">
              Researcher · Technologist · Community Organizer
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-primary-200">
              <span>alanacmackey@proton.me</span>
              <span>•</span>
              <span>New York, NY</span>
              <span>•</span>
              <span>linkedin.com/in/alana-mackey</span>
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

            {/* Awards & Fellowships Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Award size={24} className="text-primary-700" />
                <h3 className="text-2xl font-semibold text-primary-900">
                  Select Awards & Fellowships
                </h3>
              </div>
              <ul className="space-y-2">
                {resumeData.awards.map((award, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-neutral-700"
                  >
                    <span className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0" />
                    {award}
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
