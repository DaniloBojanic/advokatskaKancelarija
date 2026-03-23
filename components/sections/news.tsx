"use client"

import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { blogPosts, formatDate } from "@/lib/blog-data"

export function News() {
  const { language, t } = useLanguage()

  // Get the 3 most recent posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <section id="novosti" className="py-28 bg-background scroll-mt-32 subtle-grid">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">{t.news.subtitle}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            {t.news.title}
          </h2>
          <div className="section-title-rule mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.news.description}
          </p>
        </div>

        {recentPosts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="group surface-panel rounded-xl p-6 hover-lift hover:border-secondary/40"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-secondary/15 text-secondary text-xs font-medium rounded-full">
                      {post.category[language]}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>{formatDate(post.date, language)}</time>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                    {post.title[language]}
                  </h3>

                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 leading-relaxed">
                    {post.excerpt[language]}
                  </p>

                  <Link
                    href={`/novosti/${post.slug}`}
                    className="inline-flex items-center gap-2 text-secondary text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    {t.news.readMore} <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/novosti"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {language === "sr" ? "Pogledajte sve članke" : "View All Articles"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </>
        ) : (
          <div className="surface-panel rounded-2xl p-8 md:p-10 text-center">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              {t.news.emptyTitle}
            </h3>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              {t.news.emptyDescription}
            </p>
            <div className="mt-8">
              <Link
                href="/#zakazite-konsultacije"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {t.news.emptyCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
