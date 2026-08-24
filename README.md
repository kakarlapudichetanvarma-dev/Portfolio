# Kakarlapudi Chetan Varma — Portfolio

A high-performance, dark-themed portfolio web application engineered for a **Backend & Distributed Systems Engineer**. Built with **React 19**, **Vite**, and **Tailwind CSS v4**, configured for zero-configuration, instant deployment on **Vercel**.

---

## ⚡ Features

- **Zero-Backend Architecture**: 100% client-side data layer (`src/data/portfolioData.js`) — fast, reliable, and completely serverless.
- **Architectural Implementations**: Interactive project logs showcasing distributed chat platforms (WebSocket/Kafka/Redis), modular microservices (Eureka/RabbitMQ), event-driven CQRS engines, and Java 21 virtual thread schedulers.
- **Deep-Dive Specifications Modal**: Inspect system data flow diagrams, concurrency throughput, latency stats, and architecture patterns for every project.
- **System Design Principles**: Interactive breakdown of fault tolerance, stateless auth, event-driven scalability, and low-latency caching strategies.
- **Technical Stack Registry**: Categorized matrices covering JVM ecosystems (Java 21/17, Spring Boot 3), distributed messaging (Kafka, RabbitMQ, Redis Pub/Sub), databases, and cloud infrastructure.
- **Client-Side Communication Pipeline**: Encrypted payload theme with direct 1-click clipboard copy, pre-formatted `mailto:` client invocation, and direct GitHub/LinkedIn channels.
- **Dark Cyber Engineering Aesthetics**: Glassmorphism, IBM Plex typography, subtle matrix grid patterns, and cyber green `#3ECF6E` accents.

---

## 🚀 Deploy to Vercel

This repository is structured for **1-click / zero-config deployment to Vercel**:

### Option 1: Vercel Dashboard (Recommended)
1. Push this repository to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Vercel will automatically detect **Vite** framework settings (`npm run build` -> `dist`).
5. Click **Deploy**.

### Option 2: Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from repository root
vercel
```

---

## 💻 Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Commands

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:5173)
npm run dev

# Build production bundle (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
├── public/                 # Static assets (favicons, SVG icons)
├── src/
│   ├── components/         # React UI Components
│   │   ├── ArchitecturePillars.jsx  # System design principles
│   │   ├── ContactForm.jsx          # Zero-backend client contact dispatch
│   │   ├── Experience.jsx           # Engineering timeline & milestones
│   │   ├── Footer.jsx               # Footer & Vercel status badge
│   │   ├── Hero.jsx                 # Hero & interactive telemetry card
│   │   ├── Navbar.jsx               # Navigation bar & social links
│   │   ├── Projects.jsx             # Filterable projects & deep-dive modal
│   │   └── Skills.jsx               # Technical stack matrices
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for all content
│   ├── App.jsx             # Main application layout
│   ├── index.css           # Tailwind v4 theme & custom utilities
│   └── main.jsx            # React root entry point
├── .gitignore              # Standard git ignore rules
├── index.html              # HTML shell & SEO metadata
├── package.json            # Dependencies & scripts
├── vercel.json             # Vercel SPA deployment configuration
└── vite.config.js          # Vite build configuration
```

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + PostCSS
- **Icons**: Lucide React
- **Typography**: IBM Plex Mono & IBM Plex Sans
- **Deployment**: Vercel Edge Network
