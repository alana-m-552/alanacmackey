import type { Metadata } from "next"
import { ResumeViewer } from "../../components/resume-viewer"

export const metadata: Metadata = {
  title: "Resume | Alana Mackey",
  description: "Professional resume of Alana Mackey - Privacy Researcher and Cybersecurity Professional.",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-100">
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 animate-fade-in-up">
            Resume
          </h1>
          <p className="text-lg text-neutral-700 max-w-[600px] mx-auto animate-fade-in-up animation-delay-150">
            My professional experience, education, and skills in privacy research, technology policy, and community organizing.
          </p>
        </div>
      </section>

      {/* Resume Viewer */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-[900px] mx-auto px-4 md:px-8 lg:px-12">
          <ResumeViewer />
        </div>
      </section>
    </div>
  )
}
