"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/lib/i18n/context"
import { CONTACT } from "@/lib/contact"

export function Contact() {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const mapQuery = encodeURIComponent(CONTACT.location)
  const mapEmbedUrl =
    process.env.NEXT_PUBLIC_MAP_EMBED_URL ||
    `https://www.google.com/maps?q=${mapQuery}&z=14&output=embed`
  const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phone,
      value: CONTACT.phoneDisplay,
      href: CONTACT.phoneHref,
    },
    {
      icon: Mail,
      title: t.contact.email,
      value: CONTACT.email,
      href: CONTACT.emailHref,
    },
    {
      icon: MapPin,
      title: t.contact.address,
      value: CONTACT.location,
      href: null,
    },
    {
      icon: Clock,
      title: t.contact.workingHours,
      value: t.contact.workingHoursValue,
      href: null,
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const body = (await response.json()) as { error?: string }
        throw new Error(body.error || "Failed to send message")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    } catch {
      setSubmitError(
        language === "sr"
          ? "Došlo je do greške prilikom slanja. Pokušajte ponovo ili nas kontaktirajte emailom."
          : "There was an error while sending your message. Please try again or contact us by email."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="py-28 bg-muted scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">{t.contact.subtitle}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            {t.contact.title}
          </h2>
          <div className="section-title-rule mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="surface-panel p-7 md:p-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
              {t.contact.info}
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded map */}
            <div className="mt-10 bg-card border border-border rounded-xl overflow-hidden">
              <iframe
                title="Mapa lokacije kancelarije"
                src={mapEmbedUrl}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between gap-4 border-t border-border bg-background px-4 py-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{CONTACT.location}</span>
                </div>
                <a
                  href={mapOpenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:text-secondary transition-colors"
                >
                  {language === "sr" ? "Otvori u mapama" : "Open in maps"}
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div id="zakazite-konsultacije" className="scroll-mt-32 surface-panel p-7 md:p-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
              {t.contact.form}
            </h3>

            {submitted ? (
              <div className="bg-card border border-secondary rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {t.contact.successTitle}
                </h4>
                <p className="text-muted-foreground">
                  {t.contact.successMessage}
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                >
                  {t.contact.newMessage}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {submitError}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.name} *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.email} *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.contact.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.phonePlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t.contact.subject} *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t.contact.subjectPlaceholder}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.message} *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.contact.submitting : t.contact.submit}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {t.contact.privacy}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
