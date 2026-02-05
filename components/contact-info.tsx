import { Mail, Linkedin, Github, Calendar } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "alanacmackey@proton.me",
    href: "mailto:alanacmackey@proton.me",
    description: "Best for discussing collaborations",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/alexchen",
    href: "https://www.linkedin.com/in/alana-mackey/",
    description: "Connect professionally",
  },
  //{
    //icon: Github,
    //label: "GitHub",
    //value: "github.com/alexchen",
    //href: "https://github.com/alexchen",
    //description: "Check out my projects",
  //},
  /* {
    icon: Calendar,
    label: "Schedule a Call",
    value: "Book a 30-min chat",
    href: "#",
    description: "For anything you saw here that sparked joy or interest",
  }, */
]

export function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
      <h2 className="text-xl font-semibold text-primary-900 mb-6">
        Other Ways to Reach Me
      </h2>

      <div className="space-y-6">
        {contactMethods.map((method) => {
          const Icon = method.icon
          return (
            <Link
              key={method.label}
              href={method.href}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-100/50 transition-colors duration-300 group"
              target={method.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            >
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors duration-300">
                <Icon size={20} className="text-primary-700" />
              </div>
              <div>
                <p className="font-medium text-primary-900 group-hover:text-primary-700 transition-colors">
                  {method.label}
                </p>
                <p className="text-sm text-neutral-700">{method.value}</p>
                <p className="text-xs text-neutral-500 mt-1">
                  {method.description}
                </p>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Response Time Notice */}
      <div className="mt-8 pt-6 border-t border-neutral-200">
        <p className="text-sm text-neutral-600">
          <span className="font-medium text-neutral-700">Response time:</span>{" "}
          I typically respond within 24-48 hours during weekdays.
        </p>
      </div>
    </div>
  )
}
