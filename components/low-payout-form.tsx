"use client"

import { useMemo, useRef, useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { CheckCircle2, FileText, Loader2, Paperclip, ShieldCheck, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useLanguage } from "@/lib/i18n/context"

const ACCEPTED_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx"]
const MAX_FILES = 5
const MAX_FILE_SIZE_MB = 8
const MAX_TOTAL_FILE_SIZE_MB = 18

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 1024)} KB`
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function LowPayoutForm() {
  const { language } = useLanguage()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState<string | null>(null)

  const copy = {
    sr: {
      eyebrow: "Preliminarna procena slučaja",
      title: "Pošaljite podatke za proveru mogućnosti doplate",
      description:
        "Popunite osnovne podatke i po potrebi priložite dokumentaciju. Dostavljene informacije koristimo isključivo radi preliminarnog razmatranja vašeg slučaja.",
      payoutAmount: "Koliko vam je osiguranje isplatilo? (opciono)",
      payoutAmountPlaceholder: "Na primer: 120.000 din ili ne znam tačno",
      repairCostEstimate: "Koliko košta ili bi okvirno koštala popravka? (opciono)",
      repairCostEstimatePlaceholder: "Na primer: 185.000 din ili nemam predračun",
      insurerName: "Koje osiguranje je izvršilo isplatu? (opciono)",
      insurerNamePlaceholder: "Naziv osiguravajućeg društva",
      problemSummary: "Ukratko opišite problem",
      problemSummaryPlaceholder:
        "Navedite kako je tekao postupak, šta je procenjeno i zbog čega smatrate da isplaćeni iznos nije dovoljan.",
      fullName: "Ime i prezime",
      fullNamePlaceholder: "Unesite ime i prezime",
      phone: "Telefon",
      email: "Email",
      emailPlaceholder: "Poželjno radi lakše komunikacije",
      documents: "Upload dokumentacije",
      documentsDescription:
        "Opcionalno. Možete priložiti procenu osiguranja, predračun servisa, fotografije oštećenja, zapisnik ili drugu relevantnu dokumentaciju.",
      documentsAction: "Izaberite fajlove",
      documentsEmpty: "Nijedan fajl nije dodat",
      documentsSelected: "izabrana dokumenta",
      consent: "Saglasan/saglasna sam da kancelarija koristi dostavljene podatke isključivo radi odgovora i preliminarnog razmatranja slučaja.",
      privacyNote:
        "Dostavljene podatke koristimo isključivo radi odgovora i preliminarne procene da li postoji osnov za dalje razmatranje slučaja.",
      submit: "Pošaljite zahtev za proveru",
      submitting: "Slanje u toku...",
      successTitle: "Zahtev je uspešno poslat",
      successDescription:
        "Primili smo vaše podatke i javićemo vam se nakon preliminarnog uvida u dostavljene informacije i dokumentaciju.",
      newInquiry: "Pošaljite novi zahtev",
      required: "Ovo polje je obavezno.",
      invalidEmail: "Unesite ispravnu email adresu ili ostavite polje prazno.",
      maxSummary: "Opis problema može imati najviše 500 karaktera.",
      minSummary: "Molimo unesite kratak opis problema kako bismo razumeli situaciju.",
      consentRequired: "Saglasnost za obradu podataka je obavezna.",
      fileLimit: `Možete priložiti najviše ${MAX_FILES} dokumenata.`,
      fileType: `Dozvoljeni formati su: ${ACCEPTED_EXTENSIONS.join(", ")}.`,
      fileSize: `Pojedinačni fajl može imati najviše ${MAX_FILE_SIZE_MB} MB.`,
      totalFileSize: `Ukupna veličina priloga može biti najviše ${MAX_TOTAL_FILE_SIZE_MB} MB.`,
      acceptedFormats: `PDF, JPG, PNG, DOC i DOCX, do ${MAX_FILES} fajlova.`,
    },
    en: {
      eyebrow: "Preliminary case review",
      title: "Send details for a review of a possible additional claim",
      description:
        "Complete the basic information and, if useful, attach documents. We use the submitted information solely for a preliminary review of your case.",
      payoutAmount: "How much did the insurer pay you? (optional)",
      payoutAmountPlaceholder: "For example: RSD 120,000 or I do not know exactly",
      repairCostEstimate: "How much does or would the repair approximately cost? (optional)",
      repairCostEstimatePlaceholder: "For example: RSD 185,000 or I do not have an estimate",
      insurerName: "Which insurer made the payment? (optional)",
      insurerNamePlaceholder: "Name of the insurance company",
      problemSummary: "Briefly describe the issue",
      problemSummaryPlaceholder:
        "Explain how the procedure unfolded, what was assessed and why you believe the paid amount is not sufficient.",
      fullName: "Full name",
      fullNamePlaceholder: "Enter your full name",
      phone: "Phone",
      email: "Email",
      emailPlaceholder: "Optional but useful for easier communication",
      documents: "Upload documents",
      documentsDescription:
        "Optional. You can attach the insurer's assessment, workshop estimate, photographs of the damage, police report or other relevant documentation.",
      documentsAction: "Choose files",
      documentsEmpty: "No files selected",
      documentsSelected: "selected documents",
      consent: "I agree that the law office may use the submitted data exclusively to respond and perform a preliminary review of the case.",
      privacyNote:
        "The submitted data is used solely to respond and make a preliminary assessment of whether there may be grounds for further review.",
      submit: "Send request for review",
      submitting: "Sending...",
      successTitle: "Your request has been sent",
      successDescription:
        "We have received your details and will get back to you after a preliminary review of the submitted information and documentation.",
      newInquiry: "Send another request",
      required: "This field is required.",
      invalidEmail: "Enter a valid email address or leave the field blank.",
      maxSummary: "The issue description can have up to 500 characters.",
      minSummary: "Please enter a short description of the issue so that we can understand the situation.",
      consentRequired: "Consent to data processing is required.",
      fileLimit: `You can attach up to ${MAX_FILES} documents.`,
      fileType: `Allowed formats are: ${ACCEPTED_EXTENSIONS.join(", ")}.`,
      fileSize: `Each file can be up to ${MAX_FILE_SIZE_MB} MB.`,
      totalFileSize: `The total attachment size can be up to ${MAX_TOTAL_FILE_SIZE_MB} MB.`,
      acceptedFormats: `PDF, JPG, PNG, DOC and DOCX, up to ${MAX_FILES} files.`,
    },
  }[language]

  const formSchema = useMemo(
    () =>
      z.object({
        payoutAmount: z.string().trim(),
        repairCostEstimate: z.string().trim(),
        insurerName: z.string().trim(),
        problemSummary: z
          .string()
          .trim()
          .min(20, copy.minSummary)
          .max(500, copy.maxSummary),
        fullName: z.string().trim().min(1, copy.required),
        phone: z.string().trim().min(1, copy.required),
        email: z.union([z.literal(""), z.string().trim().email(copy.invalidEmail)]),
        consent: z.boolean().refine((value) => value, copy.consentRequired),
      }),
    [copy],
  )

  type FormValues = z.infer<typeof formSchema>

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      payoutAmount: "",
      repairCostEstimate: "",
      insurerName: "",
      problemSummary: "",
      fullName: "",
      phone: "",
      email: "",
      consent: false,
    },
  })

  const validateFiles = (files: File[]) => {
    if (files.length > MAX_FILES) {
      return copy.fileLimit
    }

    const totalSize = files.reduce((sum, file) => sum + file.size, 0)
    if (totalSize > MAX_TOTAL_FILE_SIZE_MB * 1024 * 1024) {
      return copy.totalFileSize
    }

    for (const file of files) {
      const lowerName = file.name.toLowerCase()
      const hasValidExtension = ACCEPTED_EXTENSIONS.some((extension) => lowerName.endsWith(extension))

      if (!hasValidExtension) {
        return copy.fileType
      }

      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        return copy.fileSize
      }
    }

    return null
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? [])
    const validationError = validateFiles(files)

    setFileError(validationError)
    setSelectedFiles(validationError ? [] : files)
  }

  const onSubmit = async (values: FormValues) => {
    const validationError = validateFiles(selectedFiles)
    if (validationError) {
      setFileError(validationError)
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)
    setFileError(null)

    try {
      const payload = new FormData()
      payload.append("payoutAmount", values.payoutAmount)
      payload.append("repairCostEstimate", values.repairCostEstimate)
      payload.append("insurerName", values.insurerName)
      payload.append("problemSummary", values.problemSummary)
      payload.append("fullName", values.fullName)
      payload.append("phone", values.phone)
      payload.append("email", values.email)
      payload.append("consent", String(values.consent))
      payload.append("language", language)

      for (const file of selectedFiles) {
        payload.append("documents", file)
      }

      const response = await fetch("/api/low-payout-inquiry", {
        method: "POST",
        body: payload,
      })

      if (!response.ok) {
        const body = (await response.json()) as { error?: string }
        throw new Error(body.error || "Failed to submit request")
      }

      form.reset()
      setSelectedFiles([])
      setSubmitted(true)
    } catch (error) {
      setSubmitError(
        error instanceof Error && error.message
          ? error.message
          : language === "sr"
            ? "Došlo je do greške prilikom slanja. Pokušajte ponovo kasnije."
            : "There was an error while sending your request. Please try again later.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClassName = "placeholder:text-muted-foreground/55"
  const textareaClassName = "min-h-36 placeholder:text-muted-foreground/55"

  return (
    <section id="provera-doplate" className="scroll-mt-32 rounded-3xl border border-border/80 bg-background px-6 py-8 shadow-sm md:px-10 md:py-12">
      <div className="max-w-3xl">
        <span className="text-secondary font-medium tracking-wider uppercase text-sm">{copy.eyebrow}</span>
        <h2 className="mt-4 font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
          {copy.title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">{copy.description}</p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          {submitted ? (
            <Alert className="border-secondary/40 bg-secondary/10 text-foreground">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              <AlertTitle>{copy.successTitle}</AlertTitle>
              <AlertDescription>
                <p>{copy.successDescription}</p>
                <Button className="mt-4" variant="outline" onClick={() => setSubmitted(false)}>
                  {copy.newInquiry}
                </Button>
              </AlertDescription>
            </Alert>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 overflow-x-hidden">
                {submitError && (
                  <Alert variant="destructive">
                    <AlertTitle>{language === "sr" ? "Slanje nije uspelo" : "Submission failed"}</AlertTitle>
                    <AlertDescription>{submitError}</AlertDescription>
                  </Alert>
                )}

                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="payoutAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{copy.payoutAmount}</FormLabel>
                        <FormControl>
                          <Input className={inputClassName} placeholder={copy.payoutAmountPlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="repairCostEstimate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{copy.repairCostEstimate}</FormLabel>
                        <FormControl>
                          <Input className={inputClassName} placeholder={copy.repairCostEstimatePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="insurerName"
                  render={({ field }) => (
                  <FormItem>
                    <FormLabel>{copy.insurerName}</FormLabel>
                    <FormControl>
                        <Input className={inputClassName} placeholder={copy.insurerNamePlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="problemSummary"
                  render={({ field }) => (
                  <FormItem>
                    <FormLabel>{copy.problemSummary}</FormLabel>
                    <FormControl>
                        <Textarea maxLength={500} className={textareaClassName} placeholder={copy.problemSummaryPlaceholder} {...field} />
                    </FormControl>
                      <FormDescription>{`${field.value.length}/500`}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{copy.fullName}</FormLabel>
                        <FormControl>
                          <Input className={inputClassName} placeholder={copy.fullNamePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{copy.phone}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                  <FormItem>
                    <FormLabel>{copy.email}</FormLabel>
                    <FormControl>
                        <Input className={inputClassName} type="email" placeholder={copy.emailPlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="documents">
                    {copy.documents}
                  </label>
                  <input
                    ref={fileInputRef}
                    id="documents"
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="rounded-2xl border border-border/80 bg-background/80 p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full sm:w-auto"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        {copy.documentsAction}
                      </Button>
                      <p className="min-w-0 text-sm text-muted-foreground">
                        {selectedFiles.length > 0
                          ? `${selectedFiles.length} ${copy.documentsSelected}`
                          : copy.documentsEmpty}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{copy.documentsDescription}</p>
                  {selectedFiles.length > 0 && (
                    <div className="overflow-hidden rounded-xl border border-border/70 bg-muted/40 p-4">
                      <ul className="space-y-2 text-sm text-foreground">
                        {selectedFiles.map((file) => (
                          <li
                            key={`${file.name}-${file.size}`}
                            className="flex min-w-0 flex-col gap-1 rounded-xl border border-border/60 bg-background/80 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                          >
                            <span className="flex min-w-0 items-start gap-2">
                              <Paperclip className="h-4 w-4 text-secondary shrink-0" />
                              <span className="min-w-0 break-all">{file.name}</span>
                            </span>
                            <span className="text-muted-foreground whitespace-nowrap">{formatFileSize(file.size)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {fileError && <p className="text-sm text-destructive">{fileError}</p>}
                </div>

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="rounded-2xl border border-border/80 bg-muted/30 p-4">
                      <div className="flex items-start gap-3">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={(checked) => field.onChange(Boolean(checked))} />
                        </FormControl>
                        <div className="space-y-2">
                          <FormLabel className="leading-6">{copy.consent}</FormLabel>
                          <FormDescription>{copy.privacyNote}</FormDescription>
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 md:w-auto" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isSubmitting ? copy.submitting : copy.submit}
                </Button>
              </form>
            </Form>
          )}
        </div>

        <aside className="surface-panel-soft rounded-2xl p-6 md:p-8">
          <h3 className="font-serif text-2xl font-semibold text-foreground">
            {language === "sr" ? "Šta je korisno pripremiti" : "What is useful to prepare"}
          </h3>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
            <li className="flex gap-3">
              <FileText className="mt-1 h-4 w-4 shrink-0 text-secondary" />
              <span>{language === "sr" ? "Procenu štete i odluku osiguravajućeg društva, ukoliko ih imate." : "The insurer's damage assessment and decision, if you have them."}</span>
            </li>
            <li className="flex gap-3">
              <FileText className="mt-1 h-4 w-4 shrink-0 text-secondary" />
              <span>{language === "sr" ? "Dokaz o izvršenoj isplati, ukoliko ga imate." : "Proof of the payment made, if available."}</span>
            </li>
            <li className="flex gap-3">
              <FileText className="mt-1 h-4 w-4 shrink-0 text-secondary" />
              <span>{language === "sr" ? "Fotografije oštećenja, zapisnik o nezgodi i komunikaciju sa osiguranjem." : "Damage photographs, the accident report and communication with the insurer."}</span>
            </li>
          </ul>

          <div className="mt-8 rounded-2xl border border-secondary/30 bg-secondary/10 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <div>
                <h4 className="font-medium text-foreground">
                  {language === "sr" ? "Procena na osnovu dokumentacije" : "Document-based preliminary review"}
                </h4>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {language === "sr"
                    ? "Svakom slučaju pristupamo pojedinačno. Tek nakon uvida u dokumentaciju može se proceniti da li postoji osnov za dalje postupanje i u kom pravcu."
                    : "Each case is assessed individually. Only after reviewing the documents can one estimate whether there is a basis for further action and in which direction."}
                </p>
              </div>
            </div>
          </div>

        </aside>
      </div>
    </section>
  )
}
