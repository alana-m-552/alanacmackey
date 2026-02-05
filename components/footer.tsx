import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"

const socialLinks = [
  {
    href: "mailto:alanacmackey@proton.me",
    label: "Email",
    icon: Mail,
  },
  /* {
    href: "https://github.com/alexchen",
    label: "GitHub profile",
    icon: Github,
  }, */
  {
    href: "https://linkedin.com/in/alexchen",
    label: "LinkedIn profile",
    icon: Linkedin,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-300 hover:text-accent-400 transition-colors duration-300"
                  aria-label={link.label}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                >
                  <Icon size={24} />
                </Link>
              )
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-neutral-500">
            © {currentYear} Alana Mackey. All rights reserved.
          </p>

          {/* Built with */}
          <p className="text-xs text-neutral-500">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
