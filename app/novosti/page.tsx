"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Tag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/i18n/context"
import { blogPosts, formatDate } from "@/lib/blog-data"

export default function NovostiPage() {
  const { language, t } = useLanguage()
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const [featuredPost, ...otherPosts] = sortedPosts

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          <div className="container mx-auto px-4 relative">
            <span className="text-secondary font-medium">{t.news.subtitle}</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold mt-2">
              {t.news.title}
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 max-w-2xl">
              {t.news.description}
            </p>
            <p className="mt-4 text-sm text-primary-foreground/70">
              {language === "sr"
                ? `${sortedPosts.length} objavljena članka`
                : `${sortedPosts.length} published articles`}
            </p>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="pt-16 lg:pt-20">
            <div className="container mx-auto px-4">
              <article className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary/15 px-3 py-1 text-secondary">
                    <Tag className="h-4 w-4" />
                    {featuredPost.category[language]}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(featuredPost.date, language)}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
                  <Link href={`/novosti/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                    {featuredPost.title[language]}
                  </Link>
                </h2>
                <p className="mt-4 max-w-3xl text-muted-foreground text-lg leading-relaxed">
                  {featuredPost.excerpt[language]}
                </p>
                <Link
                  href={`/novosti/${featuredPost.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  {t.news.readMore}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </div>
          </section>
        )}

        {/* Article Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                {language === "sr" ? "Svi članci" : "All Articles"}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date, language)}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1">
                      <Tag className="h-4 w-4" />
                      {post.category[language]}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    <Link href={`/novosti/${post.slug}`}>{post.title[language]}</Link>
                  </h2>
                  <p className="text-muted-foreground mb-5 line-clamp-3 leading-relaxed">
                    {post.excerpt[language]}
                  </p>
                  <Link
                    href={`/novosti/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    {t.news.readMore}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-4">
              {language === "sr" ? "Imate pitanje?" : "Have a Question?"}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {language === "sr"
                ? "Kontaktirajte nas za besplatne inicijalne konsultacije o vašem pravnom pitanju."
                : "Contact us for free initial consultations about your legal matter."}
            </p>
            <Link
              href="/#zakazite-konsultacije"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {t.nav.schedule}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
