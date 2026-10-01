# RG Portfolio

A modern, content-driven personal portfolio for Ronit, built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS.

The site brings together Ronit’s profile, selected work, professional experience, skills, education, writing, and contact information in a responsive portfolio experience with animated interactions and media-rich project highlights.

## Features

- Responsive portfolio homepage with hero, highlights, experience, skills, and education sections
- Dedicated sections for:
  - About
  - Art
  - Blogs
  - Contact
  - Development
  - Film
  - UI/UX
- Sanity Studio mounted at `/studio` for managing portfolio content
- CMS-powered highlights, experience, skills, education, site metadata, and media
- Support for images hosted by Sanity CDN
- Animated UI using Framer Motion and Motion
- Portable Text rendering for rich content
- PDF viewing support with `pdfjs-dist`
- Responsive navigation with desktop and bottom navigation experiences
- Vercel Analytics integration
- Open Graph and Twitter metadata generated from Sanity content
- Multilingual font support for Latin, Devanagari, and Malayalam scripts

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS 4, styled-components
- **Content management:** Sanity, `next-sanity`, GROQ
- **Animation:** Framer Motion and Motion
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics
- **Linting:** ESLint with Next.js configuration

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm
- A Sanity project, if you want to use live CMS content

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/RonitARK/RG_Portfolio.git
cd RG_Portfolio
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-01
```

`NEXT_PUBLIC_SANITY_DATASET` defaults to `production`, and `NEXT_PUBLIC_SANITY_API_VERSION` defaults to `2026-03-01` when omitted. A Sanity project ID is required to connect the application to a live Sanity dataset.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```text
.
├── public/                 # Static assets, fonts, images, and social preview assets
├── src/
│   ├── app/                # Next.js routes and global application styles
│   │   ├── about/
│   │   ├── art/
│   │   ├── blogs/
│   │   ├── contact/
│   │   ├── dev/
│   │   ├── film/
│   │   ├��─ studio/         # Sanity Studio route
│   │   └── uiux/
│   ├── components/         # Reusable portfolio UI components
│   ├── lib/                # Shared application utilities
│   ├── sanity/             # Sanity client, schemas, queries, and metadata helpers
│   └── types/              # Shared TypeScript types
├── next.config.ts          # Next.js image configuration
├── sanity.config.ts        # Sanity Studio configuration
└── package.json            # Scripts and dependencies
```

## Content Management with Sanity

The homepage loads portfolio content from Sanity using GROQ queries. The current content model includes documents such as:

- Highlights
- Experience
- Skills
- Education
- Site metadata

To edit content locally:

1. Configure `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`.
2. Start the application with `npm run dev`.
3. Open `/studio`.
4. Use the Sanity Studio interface to create or update content.

The Sanity schema definitions are located in `src/sanity/schemaTypes`.

## Image Configuration

Images served from Sanity are enabled in `next.config.ts` for the `cdn.sanity.io` host. If you add images from another remote host, update the `images.remotePatterns` configuration before using them with Next.js Image components.

## Production Build

Validate the application with a production build:

```bash
npm run lint
npm run build
npm run start
```

The project can be deployed to platforms that support Next.js, including Vercel. Make sure the Sanity environment variables are configured in the deployment environment.

## Contributing

1. Create a feature branch.
2. Make your changes.
3. Run `npm run lint` and `npm run build`.
4. Open a pull request with a clear description of the changes.

## License

No license has been specified for this repository yet. Unless a license is added, the repository contents remain under the repository owner’s default copyright.

## Author

**Ronit**

- GitHub: [@RonitARK](https://github.com/RonitARK)
