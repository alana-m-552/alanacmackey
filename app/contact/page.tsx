import type { Metadata } from "next"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact | Alana Mackey",
  description: "Get in touch with Alana Mackey for research collaborations, speaking engagements, or cybersecurity consulting.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-100">
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 animate-fade-in-up">
            Get In Touch
          </h1>
          <p className="text-lg text-neutral-700 max-w-[600px] mx-auto animate-fade-in-up animation-delay-150">
            I'm always interested in research collaborations, speaking opportunities, 
            or discussing cybersecurity challenges. Feel free to reach out!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-[600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="animate-fade-in-up animation-delay-300">
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  )
}
