import type { Project } from "@/components/portfolio/ProjectCard";
import samsungGalaxyHero from "@/assets/samsung-galaxy-s-hero.png";
import creativeTestingHero from "@/assets/creative-testing-os-hero.png";
import kpisForDummiesHero from "@/assets/kpis-for-dummies-hero.png";
import starbucksSpainHero from "@/assets/starbucks-spain-hero.png";
import practoCareCompanionHero from "@/assets/practo-care-companion-hero.png";
import instagramHero from "@/assets/instagram-hero.png";
import linkedinHero from "@/assets/linkedin-hero.png";
import facebookHero from "@/assets/facebook-hero.png";
import seoExpertiseHero from "@/assets/seo-expertise-hero.png";
import prExpertiseHero from "@/assets/pr-expertise-hero.png";
import rcCeltaHero from "@/assets/rc-celta/rc-celta-hero.png";
import rcCeltaN8nWorkflow from "@/assets/rc-celta/n8n-workflow.png";

import strike01 from "@/assets/strike/01-cam-strike.jpg";
import strike02 from "@/assets/strike/02-box-textured.jpg";
import strike03 from "@/assets/strike/03-box-flat.jpg";
import strike04 from "@/assets/strike/04-box-lit-match.jpg";
import strike05 from "@/assets/strike/05-poster-watch-before.jpg";
import strike06 from "@/assets/strike/06-pink-box-and-matches.jpg";
import strike07 from "@/assets/strike/07-ignition-event-logged.jpg";
import strike08 from "@/assets/strike/08-rec-crowd-poster.jpg";
import strike09 from "@/assets/strike/09-poster-cam-overlay.jpg";
import strike10 from "@/assets/strike/10-strike-crowd-rec.jpg";

import judwa01 from "@/assets/judwa/01-logo.png";
import judwa02 from "@/assets/judwa/02-color-swatches.png";
import judwa03 from "@/assets/judwa/03-jaali.jpg";
import judwa04 from "@/assets/judwa/04-jaali-pink.jpg";
import judwa05 from "@/assets/judwa/05-animal-border.jpg";
import judwa06 from "@/assets/judwa/06-ikat.jpg";
import judwa07 from "@/assets/judwa/07-box-seal.jpg";
import judwa08 from "@/assets/judwa/08-open-box.jpg";
import judwa09 from "@/assets/judwa/09-weaving-tools.jpg";
import judwa10 from "@/assets/judwa/10-box-collections.jpg";
import judwa11 from "@/assets/judwa/11-collections-ikat.jpg";

export interface ProjectImage {
  src: string;
  caption?: string;
  alt?: string;
}

export interface ProjectLink {
  label: string;
  href?: string;
  to?: string;
  note?: string;
}

export interface ProjectSection {
  heading: string;
  body?: string;
  bullets?: string[];
  table?: { columns: string[]; rows: string[][] };
  images?: ProjectImage[];
  links?: ProjectLink[];
}

export interface ProjectDetailData extends Project {
  slug: string;
  externalLink?: { label: string; url: string };
  heroImage?: ProjectImage;
  gallery?: ProjectImage[];
  sections: ProjectSection[];
}

export const projectDetails: ProjectDetailData[] = [
  // ============ AI-DEVELOPED MARKETING ============
  {
    slug: "samsung-galaxy-kpi",
    title: "Samsung Galaxy S · KPI System & Dashboard",
    category: "AI-Developed Marketing",
    year: "2025",
    description:
      "Designed a KPI measurement architecture and interactive dashboard to evaluate a two-wave global launch campaign for Samsung Galaxy S, linking media exposure to brand outcomes and financial impact.",
    metric: { value: "14", label: "KPI System" },
    tags: ["KPI Design", "Dashboard", "Brand Equity", "ROMI", "Campaign Eval"],
    details:
      "Built a full objective cascade (Business → Marketing → Communication → Media), a 14-KPI system with formative vs summative separation, ex-ante targets, and a causal model linking reach, perception, consideration, switching, market share, and ROMI — operationalized as an interactive decision dashboard with post-mortem analysis.",
    link: "https://sancharib-ship-it.github.io/KPI-/",
    cardImage: samsungGalaxyHero,
    externalLink: {
      label: "Open live dashboard",
      url: "https://sancharib-ship-it.github.io/KPI-/",
    },
    sections: [
      {
        heading: "Project Description",
        body: "An interactive KPI system and decision dashboard built to evaluate a two-wave global launch campaign for Samsung Galaxy S. The work links media exposure to brand outcomes and financial impact through a formal objective cascade and a causal measurement model.",
      },
      {
        heading: "Objective Cascade",
        bullets: [
          "Business objectives → Marketing objectives → Communication objectives → Media objectives",
          "Each layer translates into measurable KPIs with ex-ante targets",
          "Formative vs. summative metrics separated to distinguish in-flight optimization from outcome evaluation",
        ],
      },
      {
        heading: "14-KPI System",
        body: "The framework spans the full funnel — from media reach and frequency to perception lift, consideration, switching intent, market share, and ROMI — with explicit thresholds for success on each.",
      },
      {
        heading: "Causal Model",
        body: "A directional model that connects media exposure to perception → consideration → switching → market share → ROMI, enabling diagnostic post-mortems when results deviate from targets.",
      },
      {
        heading: "Outcome",
        body: "Operationalized as an interactive decision dashboard with a built-in post-mortem layer that traces every commercial result back to its upstream drivers.",
      },
    ],
  },
  {
    slug: "creative-testing-os",
    title: "Creative Testing OS · Meta & TikTok",
    category: "AI-Developed Marketing",
    year: "2025",
    description:
      "An AI-assisted Creative Testing System that brings structure, speed, and scalability to paid social experimentation on Meta and TikTok — turning creative optimization into a repeatable growth engine.",
    metric: { value: "5", label: "Layer System" },
    tags: [
      "Paid Social",
      "Experimentation",
      "AI Workflow",
      "Creative Strategy",
      "Fatigue Monitoring",
    ],
    details:
      "Built a 5-layer OS: creative taxonomy, hypothesis-driven backlog (20+ hypotheses, 50-hook bank), clean experiment design with guardrails, AI integration for auto-tagging and insight synthesis, and a fatigue monitoring system. Designed in Figma with executive dashboard, scorecards, test planner, AI copilot, and learnings vault.",
    link: "https://blob-cel-33501410.figma.site/",
    cardImage: creativeTestingHero,
    externalLink: {
      label: "View Figma prototype",
      url: "https://blob-cel-33501410.figma.site/",
    },
    sections: [
      {
        heading: "The Problem",
        body: "Paid social creative testing is usually ad-hoc — every team reinvents the test, the taxonomy, and the readout. The OS replaces that with a repeatable system.",
      },
      {
        heading: "5-Layer System",
        bullets: [
          "Creative taxonomy — shared vocabulary for hooks, formats, and angles",
          "Hypothesis-driven backlog — 20+ hypotheses and a 50-hook bank ready to deploy",
          "Clean experiment design — guardrails for sample size, runtime, and significance",
          "AI integration — auto-tagging of creatives and synthesis of test learnings",
          "Fatigue monitoring — early-warning signals before performance breaks",
        ],
      },
      {
        heading: "Designed in Figma",
        bullets: [
          "Executive dashboard for leadership",
          "Per-test scorecards",
          "Test planner with hypothesis library",
          "AI copilot for brief generation and insight synthesis",
          "Learnings vault — every test outcome searchable",
        ],
      },
    ],
  },
  {
    slug: "kpis-for-dummies",
    title: "KPIs for Dummies · Interactive Study Portal",
    category: "AI-Developed Marketing",
    year: "2025",
    description:
      "An AI-built study portal that turns dense marketing theory (Aaker, Keller, North Star Metrics) into a Dummies-style interactive learning experience with quizzes, case simulators, and instant search.",
    metric: { value: "9", label: "Modules" },
    tags: [
      "AI-Assisted Build",
      "EdTech UX",
      "Brand Equity",
      "Prompt Engineering",
      "Vanilla JS",
    ],
    details:
      "Architected with LLM agents (Gemini/Antigravity): 9 modular learning paths, 25+ MCQ assessment engine with instant grading, real-world case simulators (Heineken, Nike, Coca-Cola), client-side search, dual-theme glassmorphic UI, and scroll-based progress tracking — deployed via GitHub + here.now.",
    link: "https://ancient-fresco-atyp.here.now/",
    cardImage: kpisForDummiesHero,
    externalLink: {
      label: "Open the study portal",
      url: "https://ancient-fresco-atyp.here.now/",
    },
    sections: [
      {
        heading: "Project Description",
        body: "A high-performance, interactive web app developed with AI-assisted coding to simplify complex marketing concepts for students. Dense academic material (PDFs, lecture notes) is transformed into a digestible Dummies-style digital experience with modular paths, assessments, and case simulations.",
      },
      {
        heading: "Modular Learning Engine",
        bullets: [
          "9 specialized modules — Brand Equity (Aaker / Keller), Share of Voice, Revenue & Cost, North Star Metrics",
          "Micro-learning format — complex data distilled into visual cards and glassmorphic blocks",
        ],
      },
      {
        heading: "AI-Powered Assessment (Modules 8 & 9)",
        bullets: [
          "MCQ Test Suite — 25+ dynamic questions with instant grading and reasoning",
          "Case Study Simulator — Heineken, Nike, Coca-Cola walkthroughs plus simplified Dummies cases",
        ],
      },
      {
        heading: "Premium Experience",
        bullets: [
          "Dual-theme interface with high-contrast accessibility",
          "Custom client-side search engine",
          "Scroll-based progress bar and dynamic sidebar",
        ],
      },
      {
        heading: "Stack",
        bullets: [
          "AI: Gemini / Antigravity agents for architecture, logic, and content synthesis",
          "Frontend: Modern HTML5 + CSS3 (Flexbox, Grid, Glassmorphism, CSS variables)",
          "Logic: Vanilla JS (ES6+) for quiz engines, search, DOM manipulation",
          "Deploy: GitHub + Cloudflare-backed here.now",
        ],
      },
    ],
  },
  {
    slug: "rc-celta-seat-alert",
    title: "RC Celta · Seat Availability Alert Platform",
    category: "AI-Developed Marketing",
    year: "2026",
    description:
      "An automated demand-recovery platform for RC Celta de Vigo: it captures fan interest while sections are sold out, watches ONEBOX inventory, and emails a purchase deep-link the instant a seat frees up — built entirely with tools a marketing team already owns.",
    metric: { value: "24/7", label: "Inventory Watch" },
    tags: [
      "Marketing Automation",
      "n8n",
      "API Integration",
      "GDPR",
      "Claude Code",
    ],
    details:
      "A demand-recovery system that converts sold-out moments into captured demand: fans register interest on a waitlist, an automation continuously polls ONEBOX ticketing inventory, and the instant a seat is released it emails the interested fan a deep-link straight to checkout — built on n8n and existing marketing tooling, with GDPR-compliant consent capture.",
    link: "https://marketinglabgroup2-spec.github.io/rc-celta-vigo/",
    cardImage: rcCeltaHero,
    externalLink: {
      label: "Open live platform",
      url: "https://marketinglabgroup2-spec.github.io/rc-celta-vigo/",
    },
    sections: [
      {
        heading: "Project Description",
        body: "Branded MEMORIA — 'Balaídos remembers.' — this is an AI-powered fan reconnection platform for RC Celta de Vigo. When a section sells out, the fan journey normally ends in a dead-end, yet empty seats still appear from cancellations and last-minute releases. MEMORIA turns that dead-end into a marketing channel: it captures fan interest while sections are sold out, watches ONEBOX ticketing inventory in the background, and emails a purchase deep-link the moment a seat frees up — making sure no memory opportunity goes unused, built entirely with tools a marketing team already owns.",
      },
      {
        heading: "The Problem — Every Empty Seat Is a Missed Memory",
        body: "On matchdays, Balaídos is sold out — but in reality, empty seats still exist. Fans miss opportunities and the club loses value. An empty seat is not just lost revenue; it is a lost memory.",
        bullets: [
          "Empty seats — released and cancelled inventory goes unfilled",
          "Fans miss out — no way to be notified when a seat opens up",
          "Revenue lost — last-minute availability never converts",
          "Secondary market wins — resale platforms capture value the club should",
          "Data lost — high-intent demand signals are never captured",
        ],
      },
      {
        heading: "The Opportunity",
        body: "MEMORIA turns technology into connection, and connection into loyalty — meeting how Celta fans actually behave today.",
        bullets: [
          "Fans expect personalization",
          "Last-minute attendance is real",
          "Mobile-first behavior",
          "Experiences over transactions",
        ],
      },
      {
        heading: "The Solution — How MEMORIA Works",
        body: "We detect released seats in real time and invite the right fans first — before anyone else. Every alert turns an unused seat into a created memory.",
        bullets: [
          "Fan joins — registers interest and consents to be notified",
          "AI monitors — the system continuously watches ONEBOX inventory",
          "Seat found — a released or cancelled seat is detected in real time",
          "Fan alerted — a personalized email with a purchase deep-link goes out instantly",
          "Memory created — the fan completes checkout and is back in the stadium",
        ],
      },
      {
        heading: "The Email Experience — More Than an Alert, an Invitation",
        body: "MEMORIA turns every email into a personal, contextual and emotional experience — not just a notification.",
        bullets: [
          "Personalized emails — personalized, contextual, local & relevant, timely & emotional",
          "Welcome journey — a branded onboarding email when a fan joins",
          "Match alert email — '¡Hay entradas disponibles!' with the fixture and a one-tap ticket link",
        ],
      },
      {
        heading: "Refer-a-Friend & Viral Growth",
        body: "Fans don't just join MEMORIA — they bring others with them. The refer-a-friend system turns passion into connection: easy to share, built to grow, ready to reward.",
        bullets: [
          "Share instantly — invite friends in one click via WhatsApp, email, Telegram, or link",
          "Friends join — a simple, personalized, trusted sign-up",
          "The club tracks — every referral is attributed, so the club knows who brings others in",
          "We all grow — more fans, stronger community, bigger impact",
        ],
      },
      {
        heading: "Technical Architecture — Always On, Built Responsibly",
        body: "MEMORIA connects real-time data, smart automation and privacy-by-design to deliver the best experience for fans and the club.",
        bullets: [
          "Live infrastructure — real-time data & sync, live seat-availability updates, AI monitoring",
          "Automation system — smart tagging, personalized journeys, referral tracking",
          "Privacy & compliance — privacy by design, age verification (14+), transparent & legal",
        ],
        images: [
          {
            src: rcCeltaN8nWorkflow,
            alt: "n8n automation workflow for MEMORIA",
            caption:
              "The n8n pipeline on a schedule trigger: pull Mailchimp members → authenticate with ONEBOX → fetch sessions → filter by event → check seat availability by stand (gradas) → match interested leads → fire the alert.",
          },
        ],
      },
      {
        heading: "Data & CRM Strategy — Data With Permission, Personalization With Purpose",
        body: "Every interaction helps MEMORIA create meaningful fan experiences.",
        bullets: [
          "Data collection — behavioral data, referral data, conversion data",
          "CRM intelligence — segmentation, personalized journeys, loyalty",
          "Continuous optimization — funnel analysis, demand insights, price-point retargeting",
        ],
      },
      {
        heading: "Growth & Community Strategy",
        body: "Build awareness. Ignite interest. Grow together. MEMORIA transforms fans into the club's biggest advocates.",
        bullets: [
          "Launch campaign — social launch, early access, matchday countdown, email teasers",
          "Community strategy — fan content, engagement, referral sharing, user-generated content",
          "Viral growth engine — share instantly, double opt-in, measurable growth",
        ],
      },
      {
        heading: "Built With What You Already Own",
        bullets: [
          "Orchestrated in n8n — no new infrastructure or engineering team required",
          "API integration with the ONEBOX ticketing system for live inventory signals",
          "Assembled with Claude Code, so a marketing team can own and extend it",
        ],
      },
      {
        heading: "Privacy & Compliance",
        body: "Fan interest is captured with GDPR-compliant consent, so the demand-recovery channel is built on a clean, permission-based contact base from day one. The platform meets the following regulatory standards:",
        bullets: [
          "🇪🇺 GDPR (RGPD) — General Data Protection Regulation · EU 2016/679",
          "🇪🇸 LOPDGDD — Spanish Organic Law 3/2018",
          "📧 LSSI-CE — Spanish Law 34/2002 · Information Society Services",
        ],
      },
      {
        heading: "Tools & Stack",
        bullets: [
          "Claude Code (on VS Code) — used to build the platform",
          "n8n — orchestrates the automation workflow",
          "Mailchimp — sends the seat-availability email notifications",
          "ONEBOX — sandbox API used for testing; swappable for the live production API",
          "GA4 — analytics and event tracking",
          "Looker Studio — performance dashboard and reporting",
        ],
      },
      {
        heading: "Links & Dashboards",
        body: "Explore the live platform and the measurement layer behind it.",
        links: [
          {
            label: "Live platform — RC Celta Seat Alert",
            href: "https://marketinglabgroup2-spec.github.io/rc-celta-vigo/",
            note: "The fan-facing waitlist and alert experience.",
          },
          {
            label: "GA4 — Analytics reporting (internal)",
            href: "https://analytics.google.com/analytics/web/#/a395505275p538631993/reports/reportinghub?params=_u..nav%3Dmaui&restoreUserState=true&collectionId=business-objectives",
            note: "Behavioural and conversion tracking — requires Google Analytics access.",
          },
          {
            label: "Looker Studio — Performance dashboard (internal)",
            href: "https://datastudio.google.com/reporting/74ec38d5-4545-4ac6-a478-94150ad80bd8",
            note: "Visual reporting on demand capture and seat-recovery performance — requires access.",
          },
        ],
      },
    ],
  },

  // ============ BRANDING IDEATIONS ============
  {
    slug: "judwa-socks",
    title: "JŪDWĀ — Indian Craft Sock Brand",
    category: "Branding Ideations",
    year: "2025",
    description:
      "A conceptual sock brand that reimagines an everyday essential as a canvas for Indian visual culture — built end-to-end as a complete brand ecosystem in a 36-hour sprint.",
    metric: { value: "3", label: "Collections" },
    tags: [
      "Brand Strategy",
      "Visual Identity",
      "Packaging",
      "Cultural Design",
      "Web Design",
    ],
    details:
      "Built JŪDWĀ around 'Two sides. One story.' — positioning, wordmark, palette, three pattern collections, gift-worthy drawer-box packaging, IG grid, and a landing page.",
    link: "https://www.canva.com/design/DAG9_OqH86c/OdtSzYjwlirNxrC6cSuA3A/view",
    cardImage: judwa08,
    externalLink: {
      label: "View Canva case study",
      url: "https://www.canva.com/design/DAG9_OqH86c/OdtSzYjwlirNxrC6cSuA3A/view",
    },
    heroImage: {
      src: judwa07,
      alt: "JŪDWĀ drawer-style box with ornamental border",
      caption: "Packaging inspired by Indian wedding invitation boxes",
    },
    gallery: [
      { src: judwa01, alt: "JŪDWĀ logo with decorative elements", caption: "Two sides. One story." },
      { src: judwa02, alt: "Colour swatches" },
      { src: judwa03, alt: "JAALI collection on indigo" },
      { src: judwa05, alt: "JĀNVAR animal border on rani pink" },
      { src: judwa06, alt: "IKAT FIELD collection" },
      { src: judwa08, alt: "Open box with three collections" },
      { src: judwa09, alt: "Weaving tools and packaging" },
      { src: judwa10, alt: "Box with collections display" },
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "JŪDWĀ is a conceptual sock brand that reimagines an everyday product as a canvas for Indian visual culture — exploring how a functional, often overlooked product can be elevated through cultural storytelling, pattern-led design, and a cohesive brand system. Built end-to-end as if ready to launch.",
      },
      {
        heading: "The Problem",
        bullets: [
          "Everyday essentials are branded with minimal differentiation, generic patterns, and little cultural context",
          "Indian craft traditions are rich and symbolic — but rarely translated into modern lifestyle products that feel contemporary and premium",
          "Challenge: bring Indian craft into daily-wear without turning it into costume",
        ],
      },
      {
        heading: "The Insight",
        bullets: [
          "Repetition signals value",
          "Ornamentation signals care",
          "Symmetry signals intention",
          "Unlike Western minimalism, richness here implies meaning, not excess",
        ],
      },
      {
        heading: "Brand Idea",
        body: "Name: JŪDWĀ — meaning pair / twin, a natural fit for socks. Core idea: Two sides. One story. Each pair is a complete narrative where both sides carry the same design language.",
        images: [{ src: judwa01, alt: "JŪDWĀ logo", caption: "Two sides. One story." }],
      },
      {
        heading: "Positioning",
        bullets: [
          "Category: Lifestyle / Fashion Essentials",
          "Audience: Urban, design-aware consumers who value craft, culture, and intentional products",
          "Statement: A sock brand that transforms everyday wear through Indian craft, pattern, and storytelling",
        ],
      },
      {
        heading: "Visual Identity",
        body: "Wordmark balances editorial serif typography, ornamental Indian detailing, and strong horizontal symmetry — ceremonial yet modern, drawing from Indian wedding cards and textile catalogues.",
      },
      {
        heading: "Colour Palette",
        bullets: [
          "Deep Indigo — structure, calm, heritage",
          "Rani Pink — celebration, warmth",
          "Haldi Yellow — ritual, accent, energy",
          "Peacock Green — richness, depth",
          "Ivory / Beige — textile neutrality",
        ],
        images: [{ src: judwa02, alt: "JŪDWĀ colour palette swatches", caption: "Indigo · Rani Pink · Haldi · Peacock · Ivory" }],
      },
      {
        heading: "Collections",
        bullets: [
          "JAALI — Mughal latticework on deep indigo with marigold dots; regal, architectural, calm",
          "JĀNVAR (Animal Border) — animal motifs on rani pink, framed in vermillion and gold; festive, ornamental",
          "IKAT FIELD — handloom ikat reinterpreted digitally; off-white base with indigo and rust motifs, denser toward the calf",
        ],
        images: [
          { src: judwa03, alt: "JAALI collection on deep indigo", caption: "JAALI — Regal, architectural, calm" },
          { src: judwa04, alt: "JAALI in pink tones" },
          { src: judwa05, alt: "JĀNVAR animal border collection", caption: "JĀNVAR — Festive, ornamental" },
          { src: judwa06, alt: "IKAT FIELD collection", caption: "IKAT FIELD — Contemporary craft, grounded" },
        ],
      },
      {
        heading: "Packaging",
        body: "Fixed rigid drawer-style box designed as a keepsake — ivory outer sleeve with deep indigo ornamental border, centered logo, deep indigo inner tray with fabric pull tab. Inspired by Indian wedding invitation boxes and archival textile packaging.",
        images: [
          { src: judwa07, alt: "JŪDWĀ box seal with ornamental border" },
          { src: judwa08, alt: "Open box with three collections inside" },
        ],
      },
      {
        heading: "Digital Presence",
        body: "Instagram grid follows a 3-column rhythm (brand statements, product heroes, detail / texture). Website mirrors the physical brand — calm hierarchy, large product visuals, expressive UI inspired by print design.",
        images: [
          { src: judwa09, alt: "Weaving tools and packaging detail", caption: "Instagram texture shots and product heroes" },
          { src: judwa10, alt: "Box with three collections display" },
          { src: judwa11, alt: "Collections page — IKAT FIELD" },
        ],
      },
      {
        heading: "Why It Works",
        bullets: [
          "Translates Indian craft into modern lifestyle design",
          "Balances maximalism with discipline",
          "Treats socks as storytelling objects, not commodities",
          "Demonstrates a complete branding system, not just visuals",
        ],
      },
    ],
  },
  {
    slug: "strike-matchbox",
    title: "STRIKE — Matchbox Under Surveillance",
    category: "Branding Ideations",
    year: "2025",
    description:
      "A conceptual matchbox brand that reframes ignition as a monitored, logged event — using branding as cultural commentary on surveillance, permission, and femininity under watch.",
    metric: { value: "1", label: "Concept Brand" },
    tags: [
      "Concept Branding",
      "Cultural Critique",
      "Packaging",
      "OOH",
      "System Design",
    ],
    details:
      "Tagline: Ignition is not permission. An institutional visual system borrowing from CCTV overlays, evidence labels, and metadata hierarchies.",
    cardImage: strike06,
    heroImage: {
      src: strike01,
      alt: "STRIKE camera surveillance frame",
      caption: "CAM 03 · ID 753941 — STRIKE under observation",
    },
    sections: [
      {
        heading: "Problem Framing",
        body: "The matchbox is designed for instant action — strike, ignite, discard. But in contemporary society, acts that carry risk are rarely allowed to remain neutral. They are monitored, logged, discouraged, or reframed as regulated behaviour. Surveillance has become ambient, normalised, aestheticised. The brief: what happens when ignition is treated as an event that must be observed before it is allowed?",
      },
      {
        heading: "Strategic Insight",
        bullets: [
          "Surveillance does not prevent action — it redefines permission",
          "Action is recorded before it is understood",
          "Authority is implied through monitoring",
          "Risk is tolerated only when systems can account for it",
          "Through a feminine lens: behaviour is aestheticised, restraint rewarded, autonomy conditional",
        ],
      },
      {
        heading: "Brand Idea",
        body: "Ignition is not permission. STRIKE reframes ignition as a monitored trigger, a logged event, a deviation that must be contextualised. The brand does not sell safety or rebellion — it exposes the logic of control around even the smallest actions.",
      },
      {
        heading: "Positioning",
        bullets: [
          "Category: Conceptual everyday object",
          "Role: Cultural commentary through branding systems",
          "Tone: Institutional, restrained, observational",
          "Statement: A matchbox brand that treats ignition as a recorded event rather than an assumed right",
        ],
      },
      {
        heading: "Naming & Verbal System",
        body: "STRIKE works on two levels — the literal (striking a match) and the systemic (a decisive, logged event). Neutral, authoritative, emotionally flat. Tagline 'Ignition is not permission.' functions as a warning, a policy statement, and a cultural observation — instructional, not persuasive.",
      },
      {
        heading: "Visual System",
        body: "Identity borrows from CCTV overlays, evidence labelling, UI framing, and metadata hierarchies. The logo is always framed, timestamped, contextualised — never decorative.",
        images: [
          { src: strike02, alt: "STRIKE matchbox on textured surface" },
          { src: strike03, alt: "STRIKE matchbox flat" },
          { src: strike04, alt: "STRIKE matchbox with lit match" },
        ],
      },
      {
        heading: "Colour Strategy — Soft Under Watch",
        bullets: [
          "Soft Layer: Dusty Rose, Warm Ivory — restrained femininity, visual calm",
          "System Layer: Charcoal Black, Cold Grey — structure, frame, control",
          "Ignition Accent: Warning Red — restricted use, signals consequence",
          "Strategic rule: red is never background",
        ],
      },
      {
        heading: "Typography",
        bullets: [
          "League Spartan — authority and clarity",
          "Space Mono / IBM Plex Mono — system language",
        ],
      },
      {
        heading: "Product as System",
        body: "The matchbox is treated as an evidence container, not packaging — surveillance-style front graphic, framed STRIKE mark, metadata elements (CAM, ID, resolution). Matchsticks: natural wood, uniform length, heads in muted red, wine, deep rose — risk without spectacle.",
        images: [
          {
            src: strike06,
            alt: "Pink STRIKE box with matches in muted red, wine, deep rose",
          },
        ],
      },
      {
        heading: "Back-of-Box Strategy",
        body: "The back panel is written as a system log — observation, discouragement, monitoring, analysis. No marketing language. The tone mimics institutional documentation, reinforcing the brand's critique through form, not explanation.",
        images: [
          {
            src: strike07,
            alt: "STRIKE back panel reading 'IGNITION EVENT — LOGGED'",
            caption: "IGNITION EVENT — LOGGED",
          },
        ],
      },
      {
        heading: "Communication — Posters & OOH",
        body: "Public-facing communication adopts the same logic. Lines like 'Ignition is not permission.', 'Watch before it burns.', and 'Every spark is recorded.' Placed in environments already saturated with surveillance — streets, transit — the messaging feels less like advertising and more like ambient instruction.",
        images: [
          { src: strike05, alt: "STRIKE OOH poster — Watch before it burns" },
          {
            src: strike09,
            alt: "STRIKE poster with camera recording overlay",
          },
          {
            src: strike08,
            alt: "STRIKE poster — REC bracket over street crowd",
          },
          {
            src: strike10,
            alt: "STRIKE — REC ACTIVE / CAM 01 / Every spark is recorded",
          },
        ],
      },
      {
        heading: "Design Principles",
        bullets: [
          "Restraint over expression",
          "Hierarchy over decoration",
          "Systems over aesthetics",
          "Legibility over emotion",
          "Action is tolerated only when it can be observed",
        ],
      },
      {
        heading: "Outcome",
        body: "STRIKE demonstrates how branding can function as cultural analysis, system critique, and conceptual object design — using branding not to persuade, but to reveal. It does not ask whether ignition is dangerous. It asks who gets to decide when danger is allowed.",
      },
    ],
  },

  // ============ MARKETING STRATEGY ============
  {
    slug: "starbucks-spain-ecosystem",
    title: "Starbucks Spain — App to Ecosystem",
    category: "Marketing Strategy",
    year: "2025",
    description:
      "A transactional growth strategy turning Starbucks Spain from a coffee retailer into a culturally embedded, multi-occasion ecosystem — anchored on a redesigned mobile app and a 'Digital Third Space.'",
    metric: { value: "3.2x", label: "Group Basket" },
    tags: [
      "Growth Strategy",
      "CX Redesign",
      "Behavioural Design",
      "Loyalty",
      "Lifecycle",
    ],
    details:
      "Mapped the full feature inventory across smart ordering, group carts, rewards, sustainability, and a Coffee Personality system — tied to transactional levers and Nir Eyal's Hook Model.",
    link: "https://starbucks-redesigned.lovable.app/",
    cardImage: starbucksSpainHero,
    externalLink: {
      label: "Open redesigned app",
      url: "https://starbucks-redesigned.lovable.app/",
    },
    sections: [
      {
        heading: "Project Description",
        body: "A strategy to accelerate transactional growth for Starbucks Spain by transforming the brand from a coffee retailer into a culturally embedded, multi-occasion ecosystem. Built on a redesigned mobile app and a Digital Third Space, it activates physical stores, social rituals, and time-based consumption — driving frequency, dayparts, basket size, and incremental traffic.",
      },
      {
        heading: "Home & Smart Ordering",
        bullets: [
          "Smart 'Your Usual' panel — one-tap reorder, ~5s vs ~2min, up to 35% impulse lift",
          "Order Again carousel — visual memory cues drive repeats",
          "Quick / Explore mode toggle — habitual vs discovery segments",
          "Contextual greeting + Coffee Personality badge — emotional warmth, curiosity",
          "Nearby Store card — open status, distance, ETA",
        ],
      },
      {
        heading: "Menu & Customisation",
        bullets: [
          "Categorized menu, real-time search",
          "Item customisation with live price/calorie updates — premium upsell",
          "Quick presets, allergen badges, reusable cup toggle",
          "Save as profile — highest-converting UX pattern",
        ],
      },
      {
        heading: "Cart & Checkout",
        bullets: [
          "Quantity controls with auto-removal",
          "Pickup vs Delivery toggle (with validation)",
          "Automatic 8.1% IVA, transparent pricing, single-tap checkout",
        ],
      },
      {
        heading: "Order Tracking & Group Ordering",
        bullets: [
          "4-step status timeline, dynamic ETA, fulfilment-specific messaging",
          "Group order: host invites, real-time shared cart, split-bill calculator, host-only submit",
          "Group multiplier: 3.2x basket size",
        ],
      },
      {
        heading: "Rewards & Gamification",
        bullets: [
          "Stars balance — sunk-cost effect",
          "Progress bar — endowed progress effect",
          "Milestone ladder (25★–400★)",
          "Time-limited challenges, streak counter (loss aversion)",
          "Tier system Green → Gold — status signalling",
        ],
      },
      {
        heading: "Social, Sustainability & Personality",
        bullets: [
          "Friends Nearby feed + real-time popups — social proof, interrupt-driven conversion",
          "Personality sharing — organic acquisition at zero CAC",
          "Eco Champion badge, impact dashboard, Plant a Tree (150★) — alternative star sink",
          "5-axis Coffee Personality with 7 archetypes — identity-based loyalty",
        ],
      },
      {
        heading: "Spanish Market Context",
        table: {
          columns: ["Market Factor", "Strategic Implication"],
          rows: [
            ["Strong social coffee culture", "App digitises 'café con amigos' ritual"],
            [">90% smartphone penetration", "High readiness for mobile-first ordering"],
            ["€4.2B delivery market (2025)", "Major expansion opportunity"],
            ["Sustainability awareness growth", "ESG positioning strengthens loyalty"],
          ],
        },
      },
      {
        heading: "Revenue Growth Levers",
        table: {
          columns: ["Lever", "Mechanism", "Estimated Impact"],
          rows: [
            ["Reduced Friction", "One-tap reorder + stored payment", "+20–30% repeat conversion lift"],
            ["AOV Uplift", "Premium add-ons + upsized defaults", "+€0.90–€1.40 per transaction"],
            ["Visit Frequency", "Streaks + challenges", "+1.5–2 visits/month per active user"],
            ["Group Multiplier", "Shared cart dynamics", "3.2x basket size"],
            ["Delivery Expansion", "€3.99 fee + new segments", "Access to 35% non-walking population"],
            ["Organic Acquisition", "Social sharing + invites", "0.3–0.5 new users / active user / quarter"],
            ["Star Economy", "Accumulated reward lock-in", "40–60% churn reduction among members"],
          ],
        },
      },
      {
        heading: "Behavioural Loop (Hook Model)",
        bullets: [
          "Trigger — friend popup, morning greeting, challenge deadline",
          "Action — frictionless one-tap reorder of 'Your Usual'",
          "Variable Reward — stars earned, personality evolves, archetype unlocks",
          "Investment — saved profiles, accumulated stars, social graph",
          "Each cycle makes the next purchase more likely",
        ],
      },
      {
        heading: "Conclusion",
        body: "The app is not a menu viewer. It is a transaction engine disguised as a delightful coffee experience — addressing three imperatives: digitise Spain's social coffee ritual, create switching costs through stars, profiles and social graphs, and expand the addressable market via delivery and group ordering.",
      },
    ],
  },
  {
    slug: "practo-care-companion",
    title: "Practo — From Booking Tool to Care Companion",
    category: "Marketing Strategy",
    year: "2025",
    description:
      "A research-led CX redesign of India's largest doctor booking app — turning Practo from a one-off appointment tool into a continuous care companion across discovery, consult, prescription, and follow-up.",
    metric: { value: "5", label: "Journey Phases" },
    tags: [
      "CX Strategy",
      "Service Design",
      "Healthcare",
      "Retention",
      "Systems Thinking",
    ],
    details:
      "Audited App Store, Trustpilot and UX case studies. Redesigned 5 broken journey phases with emotion curves and KPI levers tied to each fix.",
    link: "https://www.figma.com/design/E7fUSE9WohwFnAQh3tQCiK/PRACTO---APP-CX?node-id=0-1",
    cardImage: practoCareCompanionHero,
    externalLink: {
      label: "View Figma redesign",
      url: "https://www.figma.com/design/E7fUSE9WohwFnAQh3tQCiK/PRACTO---APP-CX?node-id=0-1",
    },
    sections: [
      {
        heading: "Project Brief",
        body: "Practo is one of India's oldest digital health platforms — 100,000+ verified doctors across 50+ cities. Despite its scale, the app experience has fallen behind: a broken post-consultation flow, unclear online vs. clinic distinction, and no health continuity. This self-initiated portfolio redesign rethinks the patient journey from first search through to ongoing care, using App Store reviews, Trustpilot complaints, UX case studies, and Practo's own help docs.",
      },
      {
        heading: "Design Goal",
        body: "Transform Practo from a one-off appointment booking tool into a continuous care companion — one that understands a user's health context, guides them to the right doctor, and supports them from the moment a consultation ends through recovery and beyond.",
      },
      {
        heading: "Core Problem",
        body: "Users arrive at Practo with a health concern, but the platform serves multiple needs (instant video, clinic appointments, medicine, lab tests). The navigation doesn't reflect how users actually think — 'I have a fever' vs. 'I need a dermatologist.'",
      },
      {
        heading: "Key Pain Points",
        bullets: [
          "Clinic vs. Online consult confusion — no hierarchy, no rationale for price difference, no real-time availability",
          "Weak doctor discovery — generic filters, sparse trust signals, no live status",
          "Broken follow-up — prescriptions buried, no re-booking nudge, chat history disappears, lab tests not linked",
          "No health context — every consult starts from scratch, family management is hidden",
          "Post-consult dead end — static PDF prescription, no medicine reminders, rating prompt feels transactional",
        ],
      },
      {
        heading: "Personas",
        table: {
          columns: ["Persona", "Need", "Frustration"],
          rows: [
            ["Priya, 28, working professional", "Quick online consult", "Can't tell if doctor is online now"],
            ["Ramesh, 55, semi-tech-savvy", "Clinic visit for chronic condition", "Overwhelmed; doesn't trust online"],
            ["Neha, 35, parent", "Consult for child + manage family", "Adding dependents is hard"],
            ["Arjun, 22, first-timer", "Doesn't know what consult he needs", "No homepage triage"],
          ],
        },
      },
      {
        heading: "Redesign — Before vs. After",
        table: {
          columns: ["Area", "Before", "After"],
          rows: [
            ["Entry point", "Specialty grid requiring medical literacy", "Symptom search 'What's bothering you today?' + AI specialty routing"],
            ["Urgency routing", "No distinction between urgent and scheduled", "Urgency selector (Urgent / Schedule / Follow-up) above the fold"],
            ["Doctor availability", "No real-time signal", "Live badge: Online now / ~X min wait / Available [date]"],
            ["Consult type", "Single buttons, no rationale for price gap", "Side-by-side Online vs Clinic tiles with price + next slot"],
            ["Pre-consult", "Pay then wait. Doctor has zero context", "3-step booking: confirm → symptom brief + records → pay"],
            ["Prescription", "Static PDF, hard to read, no actions", "Interactive cards: name, dose, frequency + 'Order all medicines' CTA"],
            ["Follow-up", "Invisible feature", "Follow-up card in Care Hub with '7-day follow-up free' label"],
            ["Health records", "List of PDFs, no structure", "Health Story timeline + conditions tracker + family profiles"],
            ["Returning user", "Re-explain history every time", "Past conditions pre-fill into pre-consult brief"],
          ],
        },
      },
      {
        heading: "Emotion Curve — Before → After",
        bullets: [
          "Search: Frustrated → Guided (symptom-first search)",
          "Discovery: Confused → Informed (consult type split)",
          "Booking: Anxious → Prepared (pre-consult brief)",
          "Consultation: Let down → Heard (doctor arrives informed)",
        ],
      },
      {
        heading: "KPI Levers",
        table: {
          columns: ["Metric", "Design Lever", "Why It Should Move"],
          rows: [
            ["Search-to-booking conversion", "Online vs clinic split + availability badge", "Decision paralysis resolved"],
            ["Post-consult medicine order rate", "Care Hub 'Order all medicines' CTA", "1 tap replaces 5-step manual re-entry"],
            ["Follow-up booking rate", "Follow-up card with 'free' label", "Surfaces a benefit users didn't know existed"],
            ["30-day retention", "Health Story + reminders + follow-up prompts", "Reasons to return between consults"],
            ["App store rating", "Cart fix + refund path + notification throttle", "Top 3 one-star complaint themes addressed"],
          ],
        },
      },
      {
        heading: "What This Demonstrates",
        bullets: [
          "Research rigour — every decision sourced, not assumed",
          "Systems thinking — info architecture, siloed features reconnected",
          "Strategic awareness — competitive position and assets to build on",
          "Visual craft — full Figma system: colour, components, typography, states",
          "Communication — weeks of work synthesised into a readable narrative",
        ],
      },
    ],
  },

  // ============ SOCIAL MEDIA ============
  {
    slug: "instagram",
    title: "Instagram",
    category: "Social Media",
    year: "2025",
    description:
      "Managed and executed Instagram content strategies for multiple brands — end-to-end planning of reels and static posts across sustainability, finance, and nutrition.",
    metric: { value: "4", label: "Content Tracks" },
    tags: ["Reels", "On-Camera", "Carousels", "Page Management"],
    details:
      "Responsibilities included content research, scriptwriting, on-camera presentation, shooting coordination, editing guidance, and performance-driven optimisation across brand accounts in sustainability, finance, and nutrition — with a focus on audience engagement, consistency, and platform-specific best practices.",
    cardImage: instagramHero,
    sections: [
      {
        heading: "Project Description",
        body: "Managed and executed Instagram content strategies for multiple brands, including end-to-end planning of reels and static posts. Responsibilities included content research, scriptwriting, on-camera presentation, shooting coordination, editing guidance, and performance-driven optimisation. Experience spans brand accounts across sustainability, finance, and nutrition, with a focus on audience engagement, consistency, and platform-specific best practices.",
      },
      {
        heading: "Content Tracks",
        body: "Click into any track to see the live posts and reels.",
        links: [
          {
            label: "Instagram Reels — On-Camera Content",
            to: "/projects/instagram-on-camera",
            note: "Scriptwriter, On-Camera Talent · 14 reels",
          },
          {
            label: "Instagram Reels — Script & Shoot",
            to: "/projects/instagram-script-shoot",
            note: "Scriptwriter, Creator · 9 reels",
          },
          {
            label: "Instagram — Research & Carousels",
            to: "/projects/instagram-research-carousels",
            note: "Research, Content · 6 posts",
          },
          {
            label: "Instagram Page Management",
            to: "/projects/instagram-page-management",
            note: "Manager, Strategist · 5 brand accounts",
          },
        ],
      },
    ],
  },

  // ===== Instagram sub-projects =====
  {
    slug: "instagram-on-camera",
    title: "Instagram Reels — On-Camera Content",
    category: "Social Media · Instagram",
    year: "2024–2025",
    description:
      "Reels where I wrote the script, shot the video, and appeared on camera as the talent.",
    metric: { value: "14", label: "Reels" },
    tags: ["Scriptwriting", "On-Camera", "Shoot"],
    details:
      "End-to-end ownership: concept, script, shoot, and on-camera delivery for 14 reels across brand accounts.",
    sections: [
      {
        heading: "Role",
        body: "Scriptwriter, On-Camera Talent.",
      },
      {
        heading: "Script, Shoot & On-Camera Talent",
        links: [
          { label: "Reel — DATTi_ByZ7U", href: "https://www.instagram.com/p/DATTi_ByZ7U/" },
          { label: "Reel — DAbXQK7SBwQ", href: "https://www.instagram.com/p/DAbXQK7SBwQ/" },
          { label: "Reel — DAgPlPvyN3f", href: "https://www.instagram.com/p/DAgPlPvyN3f/" },
          { label: "Reel — DAppI21SJMw", href: "https://www.instagram.com/p/DAppI21SJMw/" },
          { label: "Reel — DADQeLpS2-k", href: "https://www.instagram.com/p/DADQeLpS2-k/" },
        ],
      },
      {
        heading: "Script & On-Camera Talent",
        links: [
          { label: "Reel — C4vJ8C6yglv", href: "https://www.instagram.com/reel/C4vJ8C6yglv/" },
          { label: "Reel — C3fbBd4PvI3", href: "https://www.instagram.com/reel/C3fbBd4PvI3/" },
          { label: "Reel — C3Xzf1wPueO", href: "https://www.instagram.com/reel/C3Xzf1wPueO/" },
          { label: "Reel — C3VP3TKvwc1", href: "https://www.instagram.com/reel/C3VP3TKvwc1/" },
          { label: "Reel — C3sLBPsyrvP", href: "https://www.instagram.com/reel/C3sLBPsyrvP/" },
          { label: "Reel — C4IpGbxiq5n", href: "https://www.instagram.com/reel/C4IpGbxiq5n/" },
          { label: "Reel — CzfsxZvShZ6", href: "https://www.instagram.com/reel/CzfsxZvShZ6/" },
          { label: "Reel — C0os_48SVEN", href: "https://www.instagram.com/reel/C0os_48SVEN/" },
        ],
      },
    ],
  },
  {
    slug: "instagram-script-shoot",
    title: "Instagram Reels — Script & Shoot",
    category: "Social Media · Instagram",
    year: "2024–2025",
    description:
      "Reels where I owned the script and shoot — concept to camera — without appearing on screen.",
    metric: { value: "9", label: "Reels" },
    tags: ["Scriptwriting", "Direction", "Shoot"],
    details:
      "Wrote scripts, directed shoots, supplied edit cues, and quality-checked reel concepts for partner creators.",
    sections: [
      {
        heading: "Role",
        body: "Scriptwriter, Creator.",
      },
      {
        heading: "Script & Shoot",
        links: [
          { label: "Reel — DA0v1qIy3ag", href: "https://www.instagram.com/p/DA0v1qIy3ag/" },
          { label: "Reel — DBQ_wfaSdNc", href: "https://www.instagram.com/p/DBQ_wfaSdNc/" },
          { label: "Reel — DBYDxP_SL_0", href: "https://www.instagram.com/p/DBYDxP_SL_0/" },
          { label: "Reel — DByotVwSYhE", href: "https://www.instagram.com/p/DByotVwSYhE/" },
          { label: "Reel — DCEjU2_SPod", href: "https://www.instagram.com/p/DCEjU2_SPod/" },
          { label: "Reel — C5u7AH2SRMW", href: "https://www.instagram.com/reel/C5u7AH2SRMW/" },
        ],
      },
      {
        heading: "Edit Cues",
        links: [
          { label: "Reel — C038-HZyPMv", href: "https://www.instagram.com/reel/C038-HZyPMv/" },
        ],
      },
      {
        heading: "Concept & Script QC (Feb–Aug 2025)",
        links: [
          {
            label: "@ryan_nutrition_coach — reel concepts & script QC",
            href: "https://www.instagram.com/ryan_nutrition_coach/",
          },
        ],
      },
    ],
  },
  {
    slug: "instagram-research-carousels",
    title: "Instagram — Research & Carousels",
    category: "Social Media · Instagram",
    year: "2023–2024",
    description:
      "Static posts and carousels where I drove the underlying research and wrote the on-slide content.",
    metric: { value: "6", label: "Posts" },
    tags: ["Research", "Content", "Carousels"],
    details:
      "Researched topics and wrote carousel content for a mix of static and reel posts.",
    sections: [
      {
        heading: "Role",
        body: "Research, Content.",
      },
      {
        heading: "Research & Carousel Content",
        links: [
          { label: "Carousel — C4pXzSUqKqH", href: "https://www.instagram.com/p/C4pXzSUqKqH/", note: "Research and content" },
          { label: "Carousel — C09K5UJytgk", href: "https://www.instagram.com/p/C09K5UJytgk/", note: "Research and content" },
          { label: "Post — Cz6MBYZSfKN", href: "https://www.instagram.com/p/Cz6MBYZSfKN/", note: "Content research" },
          { label: "Carousel — Cz3pz-SS5Ry", href: "https://www.instagram.com/p/Cz3pz-SS5Ry/", note: "Carousel content & research" },
          { label: "Carousel — Czofgq3S52k", href: "https://www.instagram.com/p/Czofgq3S52k/", note: "Carousel content & research" },
          { label: "Reel — CzQOhv9STbt", href: "https://www.instagram.com/reel/CzQOhv9STbt/", note: "Content" },
        ],
      },
    ],
  },
  {
    slug: "instagram-page-management",
    title: "Instagram Page Management",
    category: "Social Media · Instagram",
    year: "2023–2025",
    description:
      "End-to-end page management and content strategy for brand and university accounts.",
    metric: { value: "5", label: "Accounts" },
    tags: ["Page Management", "Strategy", "Brand Social"],
    details:
      "Owned page strategy, content calendars, and execution across sustainability, finance, nutrition, and university accounts.",
    sections: [
      {
        heading: "Role",
        body: "Manager, Strategist.",
      },
      {
        heading: "Accounts Managed",
        links: [
          {
            label: "@treetology_india",
            href: "https://www.instagram.com/treetology_india/",
            note: "Management and strategy",
          },
          {
            label: "@mysustainology",
            href: "https://www.instagram.com/mysustainology/",
            note: "Management and strategy",
          },
          {
            label: "@the.grey.network",
            href: "https://www.instagram.com/the.grey.network/",
            note: "University account — 1-week competition; designed and managed the page",
          },
          {
            label: "@stackwealth.in",
            href: "https://www.instagram.com/stackwealth.in/",
            note: "Managed the page",
          },
          {
            label: "@ryan_nutrition_coach",
            href: "https://www.instagram.com/ryan_nutrition_coach/",
            note: "Page content strategy",
          },
        ],
      },
    ],
  },
  {
    slug: "linkedin",
    title: "LinkedIn",
    category: "Social Media",
    year: "2024–2025",
    description:
      "Planned and executed LinkedIn content strategies for brand and personal profiles — ideation, copywriting, creative coordination, scheduling, and lead-gen ad campaigns.",
    metric: { value: "3", label: "Profiles Managed" },
    tags: ["Content Strategy", "Lead Gen Ads", "Newsletters", "Thought Leadership"],
    details:
      "Owned LinkedIn content for brand and personal profiles: ideation, copywriting, creative coordination, scheduling, plus lead-gen ad campaigns with performance tracking and optimisation that converted into qualified meetings. Built thought leadership via consistent posting and newsletter writing.",
    cardImage: linkedinHero,
    sections: [
      {
        heading: "Project Description",
        body: "Planned and executed LinkedIn content strategies for brand and personal profiles, including content ideation, copywriting, creative coordination, and scheduling. Managed LinkedIn ad campaigns focused on lead generation, performance tracking, and optimisation, resulting in qualified leads and conversion into meetings. Experience includes building thought leadership through consistent posting, newsletter writing, and platform-specific content strategy.",
      },
      {
        heading: "Profiles & Work",
        links: [
          {
            label: "Sustainology — Company Page",
            href: "https://www.linkedin.com/company/sustainology/posts/?feedView=all",
            note: "Managed page; designed creatives to company template; led content research & writing; ran LinkedIn Ads that generated leads converting to meetings.",
          },
          {
            label: "Treetology — Company Page",
            href: "https://www.linkedin.com/company/treetology/posts/?feedView=all",
            note: "Ideated content for this page.",
          },
          {
            label: "Ryan Fernando — Personal Profile",
            href: "https://www.linkedin.com/in/ryanfernando/",
            note: "Ideated content, worked on strategy, and wrote newsletters.",
          },
        ],
      },
    ],
  },
  {
    slug: "facebook",
    title: "Facebook",
    category: "Social Media",
    year: "2024–2025",
    description:
      "Static and video content for Facebook pages aligned to communication goals for Celebrity Nutritionist Ryan Fernando — built to generate organic leads.",
    metric: { value: "2", label: "Pages" },
    tags: ["Content Creation", "Video", "Organic Leads", "Quality Control"],
    details:
      "Created static and video content for Facebook pages in alignment with communication goals for Celebrity Nutritionist Ryan Fernando to generate organic leads. Owned content layout, visual consistency, and quality checks to support presence and messaging.",
    cardImage: facebookHero,
    sections: [
      {
        heading: "Project Description",
        body: "Created static and video content for Facebook pages in alignment with communication goals for Celebrity Nutritionist Ryan Fernando to generate organic leads. Worked on content layout, visual consistency, and quality checks to support presence and messaging.",
      },
      {
        heading: "Pages",
        links: [
          {
            label: "Ryan Fernando — Facebook Page",
            href: "https://www.facebook.com/ryanfernando/",
            note: "Static + video content; layout and visual consistency.",
          },
          {
            label: "Celebrity Nutritionist Ryan — Facebook Page",
            href: "https://www.facebook.com/celebritynutritionistryan/?locale=pt_PT",
            note: "Content creation and quality checks for organic lead generation.",
          },
        ],
      },
    ],
  },

  // ============ SEO ============
  {
    slug: "seo-expertise",
    title: "SEO Expertise",
    category: "SEO",
    year: "2023–2025",
    description:
      "On-page SEO and content optimisation across sustainability, finance, and nutrition brands — keyword research, SEO blogs, metadata, and schema markup.",
    metric: { value: "7", label: "Web Properties" },
    tags: ["On-Page SEO", "Schema Markup", "SEO Blogs", "Metadata"],
    details:
      "Executed on-page SEO and content optimisation initiatives across multiple websites — keyword research, SEO-friendly blog writing, metadata optimisation, and schema markup implementation. Improved content structure, search visibility, and website quality in alignment with search engine best practices. Strong emphasis on data-driven content and long-form SEO strategy.",
    cardImage: seoExpertiseHero,
    sections: [
      {
        heading: "Project Description",
        body: "Executed on-page SEO and content optimisation initiatives across multiple websites, including keyword research, SEO-friendly blog writing, metadata optimisation, and schema markup implementation. Worked on improving content structure, search visibility, and website quality in alignment with search engine best practices. Experience spans sustainability, finance, and nutrition-focused brands, with a strong emphasis on data-driven content and long-form SEO strategy.",
      },
      {
        heading: "Websites & Scope",
        links: [
          {
            label: "sustainology.life",
            href: "https://sustainology.life/",
            note: "SEO-optimised website content and schema markup.",
          },
          {
            label: "sustainology.life/blog",
            href: "https://sustainology.life/blog",
            note: "SEO blogs.",
          },
          {
            label: "treetology.com",
            href: "https://treetology.com/",
            note: "SEO-optimised website content and schema markup.",
          },
          {
            label: "theplanetreserve.com",
            href: "https://theplanetreserve.com/",
            note: "SEO-optimised website content and schema markup.",
          },
          {
            label: "theplanetreserve.com/blog-list",
            href: "https://theplanetreserve.com/blog-list",
            note: "SEO blogs.",
          },
          {
            label: "stackwealth.in",
            href: "https://stackwealth.in/",
            note: "Schema markup and SEO blogs for the website (Oct 2023 – April 2024).",
          },
          {
            label: "ryanfernando.in/blog",
            href: "https://www.ryanfernando.in/blog",
            note: "Schema markup, SEO check, wrote content, and quality-checked all blogs.",
          },
        ],
      },
    ],
  },

  // ============ PUBLIC RELATIONS ============
  {
    slug: "pr-expertise",
    title: "PR Expertise",
    category: "Public Relations",
    year: "2022–2024",
    description:
      "Public relations and stakeholder engagement — guest outreach, media coordination, and event communications across conferences and institutional events.",
    metric: { value: "8", label: "High-Profile Guests" },
    tags: ["Guest Relations", "Media Coordination", "Event PR", "Outreach"],
    details:
      "Supported PR and stakeholder engagement initiatives through guest outreach, media coordination, and event-related communications. Managed end-to-end guest relations — contact sourcing, outreach, follow-ups, and confirmations for high-profile speakers and industry professionals. Experience spans PR support for conferences and institutional events with a focus on relationship management, coordination, and brand representation.",
    cardImage: prExpertiseHero,
    sections: [
      {
        heading: "Project Description",
        body: "Supported public relations and stakeholder engagement initiatives through guest outreach, media coordination, and event-related communications. Managed end-to-end guest relations, including contact sourcing, outreach, follow-ups, and confirmation for high-profile speakers and industry professionals. Experience includes PR support for conferences and institutional events, with a focus on relationship management, coordination, and brand representation.",
      },
      {
        heading: "Christ University — Guest Relations Head",
        body: "Sourced contacts and led the conversion process to confirm the following high-profile guests:",
        links: [
          {
            label: "Sanober Pardiwalla",
            href: "https://www.instagram.com/sanoberpardiwalla/",
            note: "Bollywood's biggest stunt woman.",
          },
          {
            label: "Gurmeet Singh",
            href: "https://www.instagram.com/gurmmeetsingh/?hl=en",
            note: "Director — Mirzapur (Indian film).",
          },
          {
            label: "Avanti Nagral",
            href: "https://www.instagram.com/avantinagral/",
            note: "Indian influencer and singer.",
          },
          {
            label: "Jasvinder Bath",
            href: "https://www.imdb.com/name/nm2330238/",
            note: "Indian screenplay writer.",
          },
          {
            label: "Naezy",
            href: "https://www.instagram.com/naezythebaa/",
            note: "Indian hip-hop rapper.",
          },
          {
            label: "Nagarjun Dwarakanath",
            href: "https://in.linkedin.com/in/nagarjun-dwarakanath-64b04a25",
            note: "India Today — Editor and Pilot.",
          },
          {
            label: "DP Satish",
            note: "Group Editorial Advisor, South — Network18.",
          },
          {
            label: "Moon",
            href: "https://www.instagram.com/moonkovers/",
            note: "Indian K-pop dancer and influencer.",
          },
        ],
      },
      {
        heading: "EVUpdateMedia — Conference Anchoring & PR",
        bullets: [
          "Hosted/anchored 3 EV conferences: Maharashtra, Karnataka, and Tamil Nadu.",
          "Maharashtra Conference — PR handled end-to-end.",
        ],
      },
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projectDetails.find((p) => p.slug === slug);
