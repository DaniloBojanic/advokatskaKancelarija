# Advokatska kancelarija Tomanovic

Marketing website for a law office, built with Next.js.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Radix UI components
- Resend (contact form email delivery)

## Features

- Multi-section landing page
- Practice area subpages:
  - Naknada stete
  - Prekrsajno pravo
  - Privredno pravo
  - Sportsko pravo
  - Nekretnine
  - Radno pravo
- News/blog pages
- Contact form with server-side validation
- Email sending via `/api/contact`
- Google Maps embed in contact section
- SR/ENG language switch

## Project Structure

- `app/` - Next.js app router pages and API routes
- `components/` - UI and page sections
- `lib/` - i18n, contact constants, blog data, utilities
- `public/` - static assets (including logo images)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create environment file

Create `.env.local` in project root:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_inbox@example.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

Notes:

- `CONTACT_TO_EMAIL`: where site inquiries are received.
- `CONTACT_FROM_EMAIL`: sender address used by Resend.
- For production, use a verified domain sender (for example `kontakt@yourdomain.rs`) instead of `onboarding@resend.dev`.

### 3. Run development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - lint project

## Contact Form / Email Setup

API route: `app/api/contact/route.ts`

Form sends POST request to `/api/contact`, validates payload, and forwards email through Resend API.

If you get:

- `403 ... You can only send testing emails to your own email address`

It means Resend is in test/sandbox mode. To send to real client inboxes:

1. Verify your domain in Resend.
2. Set `CONTACT_FROM_EMAIL` to an address on that verified domain.
3. Keep `CONTACT_TO_EMAIL` as the destination inbox.

## Deployment

Recommended: Vercel (native Next.js support).

1. Push project to GitHub.
2. Import repository in Vercel.
3. Add environment variables in Vercel project settings:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
4. Deploy.

## Security Notes

- Do not commit `.env.local`.
- If any API key was exposed in git history, rotate it immediately.

## License

Private project.

