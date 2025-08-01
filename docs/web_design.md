Of course. Here is a comprehensive markdown design document for the initial version of the Cogentalyst website. This document is designed to be a practical guide for a developer, focusing on quality, best practices, and a streamlined MVP approach suitable for a Vercel deployment.

---

```markdown
# Cogentalyst.com - Website Design & Technical Specification

| | |
|---|---|
| **Version** | 1.0 |
| **Date** | August 1, 2025 |
| **Status** | Initial Draft |
| **Author** | Gemini AI |

## 1. Project Overview & Goal

The primary goal of the Cogentalyst website is to establish a professional and credible online presence that clearly communicates our unique "Swarm Intelligence" (SI) approach to AI-powered business process automation.

The initial version of the site (MVP) will be focused on quality over quantity. It must be modern, performant, and perfectly reflect our identity as a forward-thinking technology consultancy. The site will serve as a foundational platform to attract initial clients and will be expanded with more detailed content over time.

## 2. Technical Requirements & Guidance

This section outlines the technology stack and the mandatory best practices that must be followed during development.

### 2.1. Technology Stack

The website will be built using a Jamstack architecture to ensure optimal performance, security, and scalability.

*   **Front-End Framework: [Next.js](https://nextjs.org/) (with React)**
    *   **Reasoning:** Enables Static Site Generation (SSG) for incredibly fast page loads, which is crucial for user experience and SEO. It has a robust ecosystem and is the industry standard for performant React applications.

*   **Content Management: [Headless CMS](https://sanity.io)** (Sanity.io is recommended, but Contentful or Strapi are also acceptable)
    *   **Reasoning:** Decouples content from code, allowing non-technical team members to update website text and images without developer intervention. This is critical for keeping content fresh and agile. Sanity offers a great developer experience and a flexible, real-time content studio.

*   **Deployment & Hosting: [Vercel](https://vercel.com/)**
    *   **Reasoning:** Vercel offers a seamless, Git-based workflow perfectly optimized for Next.js. It provides automatic builds, deployments, a global CDN, and HTTPS out-of-the-box.

### 2.2. Mandatory Best Practices

Adherence to the following best practices is non-negotiable to ensure a high-quality, professional-grade website.

*   **Performance:**
    *   The site must achieve a **Google Lighthouse score of 95+** in Performance, Accessibility, Best Practices, and SEO.
    *   Images must be optimized for the web (e.g., using WebP format) and lazy-loaded.
    *   Leverage Next.js features like `next/image` and `next/font` for automatic optimization.

*   **Accessibility (a11y):**
    *   The website must be compliant with **WCAG 2.1 AA** standards.
    *   Use semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`).
    *   Ensure all images have descriptive `alt` tags and all interactive elements are keyboard-navigable with clear focus states.

*   **Responsive Design:**
    *   A **mobile-first** approach is required. The website must be perfectly usable and visually appealing across all common device viewports, from small mobile phones to large desktops.

*   **SEO:**
    *   Each page must have unique and descriptive `<title>` and `<meta name="description">` tags, managed via the Headless CMS.
    *   A `robots.txt` and a dynamically generated `sitemap.xml` must be included.

*   **Code Quality & Version Control:**
    *   All code will be managed in a **Git repository** (e.g., on GitHub).
    *   The codebase must be formatted with **Prettier** and linted with **ESLint** to ensure consistency and prevent common errors.

### 2.3. Deployment Workflow

*   The `main` branch of the Git repository will be connected to the Vercel project.
*   Every push to the `main` branch will automatically trigger a new production deployment on Vercel.
*   Preview deployments will be automatically generated for all pull requests.
*   All sensitive keys and API endpoints (e.g., for the Headless CMS) must be stored as **Environment Variables** in Vercel, not hardcoded in the repository.

---

## 3. Website Structure & Pages (MVP)

The initial site will be kept simple and focused. It will consist of the following pages:

### 3.1. Homepage (`/`)
*   **Purpose:** To capture the visitor's attention, briefly explain the problem with mainstream AI, and introduce Cogentalyst's Swarm Intelligence solution as the superior alternative.
*   **Key Components:**
    *   **Hero Section:** A powerful headline, a sub-headline explaining the value proposition, and a primary Call to Action (CTA) button ("Our Approach").
    *   **Problem/Solution Section:** A concise, high-level overview of the drawbacks of prompt engineering vs. the benefits of your fine-tuning approach.
    *   **"How It Works" Snippet:** A very brief, 3-step visual graphic explaining the "Deconstruct -> Fine-Tune -> Swarm" process.

### 3.2. Our Approach (`/our-approach`)
*   **Purpose:** To provide a more detailed explanation of the Swarm Intelligence methodology. This is the core educational piece of the site.
*   **Key Components:**
    *   **Introduction:** A paragraph reinforcing why a different approach is needed.
    *   **The Cogentalyst Method (Numbered Steps):**
        1.  **Process Deconstruction:** Explain how you map business processes to their atomic decision nodes.
        2.  **Right-Sized Model Selection:** Mention using the right tool for the job, from encoders to small LLMs.
        3.  **Data-Driven Fine-Tuning:** Emphasize the value of fine-tuning for accuracy and cost-efficiency.
        4.  **The Intelligent Swarm:** Describe how the individual models work in concert.

### 3.3. Contact (`/contact`)
*   **Purpose:** To provide a clear and simple way for potential clients to get in touch.
*   **Key Components:**
    *   **Simple Contact Form:** Name, Company, Email, Message.
    *   **Direct Contact Information:** A professional email address (e.g., `contact@cogentalyst.com`).

---

## 4. Content Architecture (Headless CMS)

The following content models should be created in the Headless CMS to allow for easy management of the website's content.

*   **`Page` Model:**
    *   `title` (Text)
    *   `slug` (URL identifier)
    *   `metaDescription` (Text, for SEO)
    *   `content` (Rich Text Block, for simple pages like a future Privacy Policy)

*   **`Homepage` Model (Singleton Document):**
    *   `heroHeadline` (Text)
    *   `heroSubheadline` (Text Area)
    *   `heroCtaText` (Text)
    *   `problemHeadline` (Text)
    *   `problemText` (Rich Text)
    *   `solutionHeadline` (Text)
    *   `solutionText` (Rich Text)

*   **`ApproachPage` Model (Singleton Document):**
    *   `pageTitle` (Text)
    *   `introduction` (Rich Text)
    *   `methodologySteps` (A repeatable list of objects, where each object contains a `stepTitle`, `stepDescription`, and an optional `icon`).

---

## 5. Design & UI/UX Guidance

The visual design should be clean, professional, and tech-oriented, inspiring confidence and trust.

*   **Visual Style:** Modern, minimalist, spacious, and sharp. Avoid clutter.
*   **Color Palette:**
    *   **Primary:** A dark, sophisticated blue or charcoal (e.g., `#1A202C`).
    *   **Accent:** A bright, tech-forward color for CTAs and highlights (e.g., a vibrant blue or teal).
    *   **Neutral:** White (`#FFFFFF`) and light grays for backgrounds.
*   **Typography:**
    *   **Headings:** Use a modern, clean sans-serif font like **Inter** or **Manrope** (available on Google Fonts).
    *   **Body Text:** Use a highly readable sans-serif font like **Inter** or **Source Sans Pro**.
*   **UI Components to Design:**
    *   **Header:** Logo, Navigation Links (Home, Our Approach, Contact).
    *   **Footer:** Copyright, links to social media (if any), and privacy policy.
    *   **Buttons:** Primary CTA and secondary button styles with clear hover and active states.
    *   **Forms:** Clean and simple input fields, labels, and validation messages.

---

## 6. Future Enhancements (Post-MVP)

The following pages and features are planned for future releases once the core MVP is live and stable:

*   **Blog / Insights Section:** To establish thought leadership.
*   **Case Studies:** To provide social proof and tangible results.
*   **"Fine-Tuning vs. Prompt Engineering" Page:** A detailed, side-by-side comparison page.
*   **About Us Page:** To introduce the team and company mission.
```