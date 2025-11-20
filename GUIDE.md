# Project Context: Next.js Portfolio

## 1. Project Overview
**Name:** next-portfolio
**Type:** Personal Portfolio & Blog
**Core Goal:** Achieve a perfect 100/100 PageSpeed Insights score while maintaining strict code quality.

## 2. Tech Stack
* **Framework:** Next.js 14.2.7 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (v3.4), `clsx`, `tailwind-merge`, `tailwindcss-animate`
* **UI Components:** Radix UI Primitives (headless), lucide-react (icons), Custom UI components (Shadcn-like structure in `components/ui`)
* **Content:** MDX (`next-mdx-remote`, `gray-matter`) stored locally in `content/`
* **Forms:** React Hook Form, Zod Validation (`@hookform/resolvers`), Server Actions
* **Email:** Resend API
* **Monitoring:** Sentry

## 3. Architecture & Directory Structure
The project follows a modular Feature-First and Component-Based architecture.

### `/app` (App Router)
* **Route Groups:** Standard file-system routing.
* **Dynamic Routes:** `[slug]` used for both `posts` and `projects` to render MDX content.
* **Global Layout:** `layout.tsx` wraps the application with providers (Theme, etc.).

### `/components`
* **`/ui`**: Reusable, atomic UI components (Button, Card, Input). Adheres to the **Open/Closed Principle**—open for extension via props, closed for modification.
* **Feature Components:** Specific business logic components (e.g., `contact-form.tsx`, `posts-with-search.tsx`).

### `/lib`
* **`content.ts`**: Logic for reading/parsing MDX files (likely using `fs` and `gray-matter`).
* **`actions.ts`**: Next.js Server Actions for form submissions (Contact/Newsletter).
* **`utils.ts`**: Contains the `cn()` helper for Tailwind class merging.

### `/content`
* **Source of Truth:** Flat file storage for MDX content (`posts/`, `projects/`).

## 4. Key Development Patterns

### A. Data Fetching
* **Static Content:** Blog posts and projects are static. They should be fetched on the server using Node.js `fs` APIs (in `lib/content.ts`) and rendered via Server Components.
* **Images:** Images are stored locally in `public/images`. Usage of `<Image />` component from `next/image` is mandatory for optimization.

### B. Styling
* **Utility First:** Use Tailwind CSS for all styling.
* **Class Merging:** Always use the `cn()` utility (clsx + tailwind-merge) when allowing `className` overrides in custom components.

### C. Forms
* **Pattern:** Client-side form handling (React Hook Form) -> Zod Validation -> Server Action (`lib/actions.ts`).

## 5. Optimization Guidelines (Strict)
* **Images:** All images must be sized correctly and use `.webp` or AVIF where possible. Lazy loading is default.
* **Bundles:** Avoid large dependencies. Use dynamic imports (`next/dynamic`) for heavy UI interactions if necessary.
* **Fonts:** Use `next/font` to prevent Layout Shift (CLS).

## 6. Current Focus
* **Metric:** 100 PageSpeed Score.
* **Priorities:**
    1.  Largest Contentful Paint (LCP) optimization.
    2.  Cumulative Layout Shift (CLS) reduction.
    3.  Code Maintainability (DRY/SOLID).

## 7. Tree like structure
```
.
├── app
│   ├── contact
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── global-error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── posts
│   │   ├── page.tsx
│   │   └── [slug]
│   │       └── page.tsx
│   └── projects
│       ├── page.tsx
│       └── [slug]
│           └── page.tsx
├── components
│   ├── contact-form.tsx
│   ├── counter.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── intro.tsx
│   ├── mdx-content.tsx
│   ├── newsletter-form.tsx
│   ├── posts.tsx
│   ├── posts-with-search.tsx
│   ├── projects.tsx
│   ├── providers.tsx
│   ├── recent-posts.tsx
│   ├── recent-projects.tsx
│   ├── theme-toggle.tsx
│   └── ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── sonner.tsx
│       └── textarea.tsx
├── components.json
├── content
│   ├── posts
│   │   └── welcome.mdx
│   └── projects
│       ├── dp-snake-game.mdx
│       ├── figma-clone.mdx
│       ├── issue-tracker.mdx
│       └── rawg-clone.mdx
├── emails
│   ├── contact-form-email.tsx
│   └── new-subscriber-email.tsx
├── instrumentation-client.ts
├── instrumentation.ts
├── lib
│   ├── actions.ts
│   ├── content.ts
│   ├── schemas.ts
│   └── utils.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
│   ├── images
│   │   ├── authors
│   │   │   ├── keyvan-bw.png
│   │   │   ├── keyvan-face.jpg
│   │   │   └── keyvan.jpg
│   │   ├── posts
│   │   │   ├── introduction-to-mdx.webp
│   │   │   └── welcome.webp
│   │   └── projects
│   │       ├── dp-snake-game.jpg
│   │       ├── ecommerce-store.jpg
│   │       ├── figma-clone.jpg
│   │       ├── issue-tracker.jpg
│   │       ├── next-mdx-portfolio.jpg
│   │       └── rawg-clone.jpg
│   ├── next.svg
│   ├── resume
│   │   └── Seyed Keyvan Hosseini - Resume.pdf
│   └── vercel.svg
├── README.md
├── sentry.edge.config.ts
├── sentry.server.config.ts
├── tailwind.config.ts
└── tsconfig.json
```