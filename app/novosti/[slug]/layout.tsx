import type { Metadata } from "next"
import { getBlogPost } from "@/lib/blog-data"
import { createPageMetadata } from "@/lib/seo"

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = getBlogPost(params.slug)

  if (!post) {
    return createPageMetadata({
      title: "Pravni članak",
      description:
        "Stručni pravni sadržaj advokatske kancelarije Tomanović iz Novog Sada.",
      path: `/novosti/${params.slug}`,
    })
  }

  const metadata = createPageMetadata({
    title: post.title.sr,
    description: post.excerpt.sr,
    path: `/novosti/${post.slug}`,
    keywords: [post.category.sr, "pravni članak", "advokat Novi Sad", "saobraćajna kazna", "prekršajni sud"],
  })

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: `${post.date}T09:00:00+02:00`,
      authors: ["Arsenije Tomanović"],
      section: post.category.sr,
    },
  }
}

export default function BlogPostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
