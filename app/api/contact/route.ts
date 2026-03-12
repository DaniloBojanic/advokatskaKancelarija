import { NextResponse } from "next/server"

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 })
  }

  const name = payload.name?.trim() ?? ""
  const email = payload.email?.trim() ?? ""
  const phone = payload.phone?.trim() ?? ""
  const subject = payload.subject?.trim() ?? ""
  const message = payload.message?.trim() ?? ""

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Required fields are missing" },
      { status: 400 }
    )
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"

  if (!resendApiKey || !toEmail) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    )
  }

  const text = [
    `Ime: ${name}`,
    `Email: ${email}`,
    `Telefon: ${phone || "-"}`,
    `Tema: ${subject}`,
    "",
    "Poruka:",
    message,
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
      reply_to: email,
      subject: `Upit sa sajta: ${subject}`,
      text,
    }),
  })

  if (!resendResponse.ok) {
    const details = await resendResponse.text()
    return NextResponse.json(
      { error: `Email delivery failed: ${details}` },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
