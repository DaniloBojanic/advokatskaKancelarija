import { NextResponse } from "next/server"

export const runtime = "nodejs"

const MAX_FILES = 5
const MAX_FILE_SIZE = 8 * 1024 * 1024
const MAX_TOTAL_FILE_SIZE = 18 * 1024 * 1024

const allowedExtensions = new Set([".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx"])
const allowedMimeTypes = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/octet-stream",
  "",
])

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getExtension(filename: string) {
  const lastDotIndex = filename.lastIndexOf(".")
  return lastDotIndex === -1 ? "" : filename.slice(lastDotIndex).toLowerCase()
}

function normalizeField(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const language = normalizeField(formData.get("language")) === "en" ? "en" : "sr"
  const messages = {
    sr: {
      required: "Obavezna polja nisu pravilno popunjena",
      summaryLength: "Opis problema može imati najviše 500 karaktera",
      invalidEmail: "Email adresa nije ispravna",
      consent: "Saglasnost za obradu podataka je obavezna",
      fileCount: `Možete priložiti najviše ${MAX_FILES} dokumenata`,
      fileSize: "Pojedinačni fajl može imati najviše 8 MB",
      fileType: "Dozvoljeni formati priloga su PDF, JPG, PNG, DOC i DOCX",
      totalSize: "Ukupna veličina priloga može biti najviše 18 MB",
      notConfigured: "Email servis nije podešen",
      deliveryFailed: "Slanje emaila nije uspelo",
    },
    en: {
      required: "Required fields are missing",
      summaryLength: "Problem summary can contain up to 500 characters",
      invalidEmail: "Invalid email address",
      consent: "Consent is required",
      fileCount: `You can attach up to ${MAX_FILES} documents`,
      fileSize: "Each file can be up to 8 MB",
      fileType: "Allowed attachment formats are PDF, JPG, PNG, DOC and DOCX",
      totalSize: "Total attachment size can be up to 18 MB",
      notConfigured: "Email service is not configured",
      deliveryFailed: "Email delivery failed",
    },
  }[language]

  const payoutAmount = normalizeField(formData.get("payoutAmount"))
  const repairCostEstimate = normalizeField(formData.get("repairCostEstimate"))
  const insurerName = normalizeField(formData.get("insurerName"))
  const problemSummary = normalizeField(formData.get("problemSummary"))
  const fullName = normalizeField(formData.get("fullName"))
  const phone = normalizeField(formData.get("phone"))
  const email = normalizeField(formData.get("email"))
  const consent = normalizeField(formData.get("consent"))

  if (!payoutAmount || !repairCostEstimate || !insurerName || !problemSummary || !fullName || !phone) {
    return NextResponse.json({ error: messages.required }, { status: 400 })
  }

  if (problemSummary.length > 500) {
    return NextResponse.json({ error: messages.summaryLength }, { status: 400 })
  }

  if (email && !emailRegex.test(email)) {
    return NextResponse.json({ error: messages.invalidEmail }, { status: 400 })
  }

  if (consent !== "true") {
    return NextResponse.json({ error: messages.consent }, { status: 400 })
  }

  const documents = formData
    .getAll("documents")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0)

  if (documents.length > MAX_FILES) {
    return NextResponse.json({ error: messages.fileCount }, { status: 400 })
  }

  let totalSize = 0
  for (const document of documents) {
    totalSize += document.size

    if (document.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: messages.fileSize }, { status: 400 })
    }

    const extension = getExtension(document.name)
    if (!allowedExtensions.has(extension) || !allowedMimeTypes.has(document.type)) {
      return NextResponse.json({ error: messages.fileType }, { status: 400 })
    }
  }

  if (totalSize > MAX_TOTAL_FILE_SIZE) {
    return NextResponse.json({ error: messages.totalSize }, { status: 400 })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"

  if (!resendApiKey || !toEmail) {
    return NextResponse.json({ error: messages.notConfigured }, { status: 500 })
  }

  const attachments = await Promise.all(
    documents.map(async (document) => ({
      filename: document.name,
      content: Buffer.from(await document.arrayBuffer()).toString("base64"),
    })),
  )

  const text = [
    "Nova procena slučaja: premala isplata štete na vozilu",
    "",
    `Ime i prezime: ${fullName}`,
    `Telefon: ${phone}`,
    `Email: ${email || "-"}`,
    `Isplaćeni iznos: ${payoutAmount}`,
    `Procena troška popravke: ${repairCostEstimate}`,
    `Osiguravajuće društvo: ${insurerName}`,
    `Broj priloga: ${attachments.length}`,
    "",
    "Opis problema:",
    problemSummary,
  ].join("\n")

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      ...(email ? { reply_to: email } : {}),
      subject: "Upit sa sajta: premala isplata štete na vozilu",
      text,
      attachments,
    }),
  })

  if (!resendResponse.ok) {
    const details = await resendResponse.text()
    return NextResponse.json({ error: `${messages.deliveryFailed}: ${details}` }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
