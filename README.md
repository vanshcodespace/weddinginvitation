# Akshit & Aarushi - Cinematic Wedding Invitation

A premium, highly interactive Next.js wedding invitation template built for WhatsApp and mobile viewing.

## Setup
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`

## Customizing the Invitation
All invitation details are managed centrally in `src/config/wedding.ts`. Update this file to change names, dates, venues, events, stories, and family details. No need to touch component code.

## Media Assets
- **Music:** Place the background music file at `public/music/wedding-song.mp3`
- **Gallery:** Place gallery images in `public/images/gallery/` and list them in `wedding.ts`.

## Backend Integration
RSVP and Guestbook submissions currently go to local Next.js API routes (`src/app/api/rsvp/route.ts` and `src/app/api/wishes/route.ts`).
To switch to a real database (like Firebase or Supabase), simply edit `src/lib/dataClient.ts` as explained in the file comments. You don't need to change any component code.

## Deployment
Built on Next.js App Router and optimized for Vercel.
`npm run build` will produce a production-ready bundle.
