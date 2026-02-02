"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface Article {
  id: string
  title: string
  category: string
  publication: string
  date: string
  excerpt: string
  href: string
}

interface WritingGridProps {
  articles: Article[]
}

export function WritingGrid({ articles }: WritingGridProps) {
  const { ref, isInView } = useInView({ threshold: 0.05 })

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {articles.map((article, index) => (
        <ArticleCard
          key={article.id}
          article={article}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  )
}

function ArticleCard({
  article,
  index,
  isInView,
}: {
  article: Article
  index: number
  isInView: boolean
}) {
  return (
    <article
      className={cn(
        "bg-white border border-neutral-300 rounded-lg p-8 hover:border-primary-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Category Tag */}
      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-4">
        {article.category}
      </span>

      {/* Title */}
      <h3 className="text-xl font-semibold text-primary-900 mb-2 leading-snug">
        {article.title}
      </h3>

      {/* Publication & Date */}
      <p className="text-sm text-neutral-500 mb-4">
        {article.publication} • {article.date}
      </p>

      {/* Excerpt */}
      <p className="text-neutral-700 leading-relaxed mb-6 line-clamp-3">
        {article.excerpt}
      </p>

      {/* Read More Link */}
      <Link
        href={article.href}
        className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-accent-600 transition-colors duration-300 group"
      >
        Read More
        <ArrowRight
          size={16}
          className="transform group-hover:translate-x-1 transition-transform duration-300"
        />
      </Link>
    </article>
  )
}
