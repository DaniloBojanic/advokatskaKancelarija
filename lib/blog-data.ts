export interface BlogPost {
  id: string
  slug: string
  date: string
  category: { sr: string; en: string }
  title: { sr: string; en: string }
  excerpt: { sr: string; en: string }
  content: { sr: string; en: string }
}

// Intentionally empty for now. The News section and /novosti page
// render an empty state until articles are added back.
export const blogPosts: BlogPost[] = []

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function formatDate(dateString: string, language: "sr" | "en"): string {
  const date = new Date(dateString)
  return date.toLocaleDateString(language === "sr" ? "sr-RS" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
