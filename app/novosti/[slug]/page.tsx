"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag, User, Clock3 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/i18n/context"
import { getBlogPost, formatDate, blogPosts } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = getBlogPost(slug)
  const { language, t } = useLanguage()

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category.sr === post.category.sr)
    .slice(0, 2)
  const readingTime = estimateReadingTime(post.content[language])
  const trafficFaqSchema =
    post.slug === "kako-osporiti-saobracajnu-kaznu-u-srbiji"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Da li ima smisla angažovati advokata zbog saobraćajne kazne?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "U mnogim slučajevima ima. Često je moguće smanjiti kaznu, izbeći zabranu upravljanja vozilom ili u potpunosti izbeći kaznu.",
              },
            },
            {
              "@type": "Question",
              name: "Dobio sam poziv iz prekršajnog suda – šta to zapravo znači?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Poziv znači da je pokrenut prekršajni postupak i da sud želi da se izjasnite o prekršaju koji vam se stavlja na teret. Važno je reagovati na vreme.",
              },
            },
            {
              "@type": "Question",
              name: "Da li je moguće osporiti kaznu koju je izdala kamera?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "U određenim situacijama jeste, naročito ako postoje proceduralne nepravilnosti ili nedovoljno dokaza.",
              },
            },
          ],
        }
      : null

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary pt-40 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          <div className="pointer-events-none absolute -top-32 right-12 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
          <div className="container mx-auto px-4 relative">
            <Link
              href="/novosti"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 mb-8 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              {language === "sr" ? "Nazad na novosti" : "Back to news"}
            </Link>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date, language)}
              </span>
              <span className="flex items-center gap-1">
                <Clock3 className="h-4 w-4" />
                {language === "sr" ? `${readingTime} min čitanja` : `${readingTime} min read`}
              </span>
              <span className="flex items-center gap-1 bg-secondary/20 text-secondary px-2 py-1 rounded">
                <Tag className="h-4 w-4" />
                {language === "sr" ? "Blog" : "Blog"}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-bold max-w-4xl">
              {post.title[language]}
            </h1>
            <div className="flex items-center gap-2 mt-6 text-primary-foreground/80">
              <User className="h-4 w-4" />
              <span>Arsenije Tomanović</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="surface-panel rounded-2xl p-6 md:p-8 lg:p-10">
                  <div
                    className="news-content"
                    dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content[language]) }}
                  />
                </article>

                {/* Share & Back */}
                <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <Link
                    href="/novosti"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {language === "sr" ? "Nazad na sve članke" : "Back to all articles"}
                  </Link>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/#zakazite-konsultacije">
                      {t.nav.schedule}
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Author Card */}
                  <div className="surface-panel-soft p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                      {language === "sr" ? "O autoru" : "About the Author"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === "sr"
                        ? "Arsenije Tomanović je advokat sa sedištem u Novom Sadu, specijalizovan za građansko, sportsko i prekršajno pravo."
                        : "Arsenije Tomanović is an attorney based in Novi Sad, specialized in civil, sports, and misdemeanor law."}
                    </p>
                  </div>

                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <div className="surface-panel p-6">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                        {language === "sr" ? "Povezani članci" : "Related Articles"}
                      </h3>
                      <div className="space-y-4">
                        {relatedPosts.map(related => (
                          <Link
                            key={related.id}
                            href={`/novosti/${related.slug}`}
                            className="block group"
                          >
                            <p className="text-sm text-muted-foreground mb-1">
                              {formatDate(related.date, language)}
                            </p>
                            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {related.title[language]}
                            </h4>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contact CTA */}
                  <div className="bg-primary rounded-xl p-6 text-primary-foreground shadow-[0_14px_34px_-24px_rgba(0,0,0,0.45)]">
                    <h3 className="font-serif text-lg font-semibold mb-3">
                      {language === "sr" ? "Potrebna vam je pomoć?" : "Need Help?"}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm mb-4">
                      {language === "sr"
                        ? "Kontaktirajte nas za besplatne inicijalne konsultacije."
                        : "Contact us for free initial consultations."}
                    </p>
                    <Button
                      asChild
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      <Link href="/#zakazite-konsultacije">
                        {t.nav.schedule}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {trafficFaqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(trafficFaqSchema) }}
        />
      )}
    </>
  )
}

// Lightweight markdown formatter for local article content.
function formatMarkdown(text: string): string {
  const lines = text.trim().split("\n")
  const html: string[] = []
  let currentList: "ul" | "ol" | null = null
  const paragraphBuffer: string[] = []

  const closeListIfOpen = () => {
    if (currentList) {
      html.push(`</${currentList}>`)
      currentList = null
    }
  }

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) return
    const paragraph = paragraphBuffer.join(" ")
    html.push(`<p>${applyInlineFormatting(paragraph)}</p>`)
    paragraphBuffer.length = 0
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line) {
      flushParagraph()
      closeListIfOpen()
      continue
    }

    if (line.startsWith("## ")) {
      flushParagraph()
      closeListIfOpen()
      html.push(`<h2>${applyInlineFormatting(line.slice(3))}</h2>`)
      continue
    }

    if (line.startsWith("### ")) {
      flushParagraph()
      closeListIfOpen()
      html.push(`<h3>${applyInlineFormatting(line.slice(4))}</h3>`)
      continue
    }

    if (line.startsWith("- ")) {
      flushParagraph()
      if (currentList !== "ul") {
        closeListIfOpen()
        currentList = "ul"
        html.push("<ul>")
      }
      html.push(`<li>${applyInlineFormatting(line.slice(2))}</li>`)
      continue
    }

    const orderedMatch = line.match(/^(\d+)\.\s+(.*)$/)
    if (orderedMatch) {
      flushParagraph()
      if (currentList !== "ol") {
        closeListIfOpen()
        currentList = "ol"
        html.push("<ol>")
      }
      html.push(`<li>${applyInlineFormatting(orderedMatch[2])}</li>`)
      continue
    }

    closeListIfOpen()
    paragraphBuffer.push(line)
  }

  flushParagraph()
  closeListIfOpen()
  return html.join("")
}

function applyInlineFormatting(value: string): string {
  const safe = escapeHtml(value)
  return safe
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-primary underline underline-offset-4 hover:text-secondary transition-colors">$1</a>',
    )
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}
