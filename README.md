# Portfolio

A modern, content-driven personal portfolio of Ronit, built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS.

The site brings together Ronit’s profile, selected work, professional experience, skills, education, writing, and contact information in a responsive portfolio experience with animated interactions and media-rich project highlights.

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

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

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
│   │   ├��─ studio/         # Sanity Studio route
│   ├── components/         # Reusable portfolio UI components
│   ├── lib/                # Shared application utilities
│   ├── sanity/             # Sanity client, schemas, queries, and metadata helpers
│   └── types/              # Shared TypeScript types
├── next.config.ts          # Next.js image configuration
├── sanity.config.ts        # Sanity Studio configuration
└── package.json            # Scripts and dependencies
```

## License

No license has been specified for this repository yet. Unless a license is added, the repository contents remain under the repository owner’s default copyright.

## Author

**Ronit Gupta**

- GitHub: [@RonitARK](https://github.com/RonitARK)
