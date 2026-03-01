# Resume Online Portfolio

A modern resume/portfolio website built with Next.js 14, React, TypeScript, Tailwind CSS, and interactive 3D keyboard visuals.

## Tech Stack

- Next.js 14
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion + GSAP
- Spline Runtime (3D keyboard)
- Resend (contact email API)

## Requirements

- Node.js 18+ (recommended: Node 20+)
- npm (project is configured and tested with npm)

## Quick Start

1. Clone repo:

```bash
git clone https://github.com/kydunguyen196/resume-online.git
cd resume-online
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

macOS/Linux:

```bash
cp .env.example .env.local
```

4. Configure `.env.local`:

```env
# Optional but recommended for production metadata
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Required if you want contact form to actually send emails
RESEND_API_KEY=

# Optional realtime features
NEXT_PUBLIC_WS_URL=

# Optional analytics
UMAMI_DOMAIN=
UMAMI_SITE_ID=
```

5. Run development server:

```bash
npm run dev
```

Open: `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start local development server
- `npm run lint` - Run ESLint
- `npm run build` - Build production bundle
- `npm run start` - Start production server (after build)
- `npm run test` - Run `lint` + `build`
- `npm run clean` - Remove `.next` cache/build output
- `npm run rebuild` - Clean and build again

## Recover From Build/Runtime Cache Issues

If you see random runtime/build issues (for example from stale `.next` cache), run:

```bash
npm run clean
npm run build
npm run start
```

## Customize Your Resume Content

Main files you should edit:

- `src/data/config.ts` - Name, title, email, social links, SEO
- `src/data/profile.ts` - Summary, value proposition, education, languages
- `src/data/constants.ts` - Skills + experience timeline
- `src/data/projects.tsx` - Project list, descriptions, links, skill tags

## Update Project Images

Project screenshots:

- `public/assets/projects-screenshots/`

Navigation preview thumbnails:

- `public/assets/nav-link-previews/`

After replacing images, update image paths in:

- `src/data/projects.tsx`
- `src/components/header/config.ts`

## 3D Keyboard Skill Mapping

Keyboard scene file:

- `public/assets/skills-keyboard.spline`

Important:

- Skill key names in `src/data/constants.ts` must match object names in Spline for hover/click interactions to work.

## Deployment

Recommended: Vercel

1. Push code to GitHub
2. Import repository into Vercel
3. Add environment variables in Vercel Project Settings
4. Deploy

## License

This project is for personal resume/portfolio use. Update content and branding for your own profile.
