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

  return createPageMetadata({
    title: post.title.sr,
    description: post.excerpt.sr,
    path: `/novosti/${post.slug}`,
    keywords: [post.category.sr, "pravni članak", "advokat Novi Sad"],
  })
}

export default function BlogPostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
