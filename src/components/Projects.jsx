import { useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import {
  CheckCircle2,
  ChevronRight,
  X,
  Workflow,
  Server
} from 'lucide-react'
import { GithubIcon } from './Icons'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [activeModalProject, setActiveModalProject] = useState(null)

  const categories = [
    'ALL',
    'Real-Time / Event-Driven',
    'Microservices Architecture',
    'Distributed Systems'
  ]

  const filteredProjects =
    selectedCategory === 'ALL'
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        )

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-soft pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-green mb-1.5">
            <span>01.</span>
            <span>PORTFOLIO_SYSTEM_RECORDS</span>
          </div>
          <h2 className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-text">
            Architectural Implementations
          </h2>
          <p className="mt-2 text-sm text-muted max-w-xl">
            Production-grade microservices, real-time message streams, and distributed system architectures.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded px-3 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-green text-[#06130C] font-semibold shadow-sm'
                  : 'bg-panel border border-border-soft text-muted hover:text-text hover:border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8">
        {filteredProjects.map((p) => (
          <article
            key={p.code}
            className="group relative rounded-xl border border-border/80 bg-panel p-6 md:p-8 transition-all duration-300 hover:border-green/40 hover:bg-panel-hover hover:shadow-xl hover:shadow-black/40"
          >
            {/* Top Bar: Code, Name, Status, Links */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-border-soft pb-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded bg-green/10 border border-green/20 px-2.5 py-1 font-mono text-xs text-green font-semibold">
                  {p.code}
                </span>
                <h3 className="font-mono text-xl font-bold text-text group-hover:text-green transition-colors">
                  {p.name}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-mono text-xs text-muted">
                  <span className="h-2 w-2 rounded-full bg-green animate-pulse"></span>
                  <span className="text-[11px] uppercase tracking-wider">{p.status}</span>
                </div>

                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub code for ${p.name}`}
                  className="flex items-center gap-1.5 rounded border border-border bg-bg/80 px-2.5 py-1 font-mono text-xs text-muted transition-all hover:text-text hover:border-green/40"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">REPO</span>
                </a>
              </div>
            </div>

            {/* Subtitle & Summary */}
            <p className="mb-2 font-mono text-xs text-green/80 font-medium">
              {p.subtitle}
            </p>
            <p className="mb-6 text-sm sm:text-base text-muted leading-relaxed max-w-4xl">
              {p.summary}
            </p>

            {/* Architecture Highlights Box */}
            <div className="mb-6 rounded-lg bg-bg/60 p-4 sm:p-5 border border-border-soft">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="flex items-center gap-2 font-mono text-xs text-muted-dim uppercase tracking-wider font-semibold">
                  <Server className="h-3.5 w-3.5 text-green" />
                  Key Architectural Capabilities
                </h4>
                <span className="font-mono text-[11px] text-green/70">
                  {p.architectureType}
                </span>
              </div>

              <ul className="grid gap-2.5 text-sm text-text">
                {p.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-green font-mono text-sm mt-0.5 select-none font-bold">›</span>
                    <span className="leading-snug">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Flow Banner */}
            {p.architectureFlow && (
              <div className="mb-6 rounded border border-border/70 bg-panel-elevated/40 px-4 py-3 font-mono text-xs text-muted flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-green font-semibold shrink-0 flex items-center gap-1.5">
                  <Workflow className="h-3.5 w-3.5" />
                  DATA FLOW:
                </span>
                <span className="text-text/90 text-[11px] overflow-x-auto whitespace-nowrap py-1">
                  {p.architectureFlow}
                </span>
              </div>
            )}

            {/* Tech Stack & Deep Dive CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border-soft/60">
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border/90 bg-bg px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-green/50 hover:text-text"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveModalProject(p)}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-green hover:underline cursor-pointer"
              >
                <span>DEEP DIVE SPECS</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal / Deep Dive Details Drawer */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl rounded-xl border border-border bg-panel p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded border border-border bg-bg text-muted hover:text-text cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 border-b border-border-soft pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-green mb-1">
                <span>{activeModalProject.code}</span>
                <span>// ARCHITECTURE SPECIFICATION</span>
              </div>
              <h3 className="font-mono text-2xl font-bold text-text">
                {activeModalProject.name}
              </h3>
              <p className="mt-1 text-sm text-muted font-mono">
                {activeModalProject.architectureType}
              </p>
            </div>

            {/* System Metrics */}
            {activeModalProject.metrics && (
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(activeModalProject.metrics).map(([key, val]) => (
                  <div key={key} className="rounded border border-border-soft bg-bg p-3">
                    <div className="font-mono text-[10px] uppercase text-muted-dim">{key}</div>
                    <div className="font-mono text-sm font-semibold text-green mt-0.5">{val}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Architecture Flow Diagram Box */}
            <div className="mb-6 rounded-lg bg-bg p-4 border border-border-soft">
              <h4 className="font-mono text-xs text-muted-dim uppercase mb-2 font-semibold flex items-center gap-2">
                <Workflow className="h-3.5 w-3.5 text-green" />
                System Flow Pipeline
              </h4>
              <div className="font-mono text-xs text-text/90 leading-relaxed bg-panel/70 p-3 rounded border border-border-soft">
                {activeModalProject.architectureFlow}
              </div>
            </div>

            {/* Full Technical Breakdown */}
            <div className="mb-6 space-y-3">
              <h4 className="font-mono text-xs text-muted-dim uppercase font-semibold">
                Technical Highlights &amp; Guarantees
              </h4>
              <ul className="space-y-2">
                {activeModalProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="h-4 w-4 text-green mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-border-soft">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-green px-4 py-2 font-mono text-xs font-semibold text-[#06130C] hover:bg-[#34b860]"
              >
                <GithubIcon className="h-4 w-4" />
                <span>VIEW REPOSITORY</span>
              </a>
              <button
                onClick={() => setActiveModalProject(null)}
                className="rounded border border-border bg-panel px-4 py-2 font-mono text-xs text-muted hover:text-text cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}