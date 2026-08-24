import { portfolioData } from '../data/portfolioData'
import { GitCommit } from 'lucide-react'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="mx-auto max-w-6xl border-t border-border-soft px-6 py-20">
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-green mb-1.5">
          <span>04.</span>
          <span>TIMELINE_&amp;_MILESTONES</span>
        </div>
        <h2 className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-text">
          Engineering Track Record
        </h2>
        <p className="mt-2 text-sm text-muted max-w-2xl">
          Highlights from architectural implementations, microservice deployments, and JVM performance initiatives.
        </p>
      </div>

      <div className="relative border-l border-border pl-6 ml-3 sm:ml-4 sm:pl-8 space-y-12">
        {experience.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-green bg-panel text-green">
              <GitCommit className="h-3.5 w-3.5" />
            </div>

            {/* Header info */}
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded bg-green/10 border border-green/20 px-2.5 py-0.5 font-mono text-xs font-semibold text-green">
                {exp.period}
              </span>
              <h3 className="font-mono text-lg font-bold text-text">
                {exp.role}
              </h3>
              <span className="font-mono text-xs text-muted-dim">
                // {exp.context}
              </span>
            </div>

            {/* Bullet Points */}
            <div className="rounded-xl border border-border/80 bg-panel p-5 sm:p-6 shadow-sm">
              <ul className="space-y-3">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-sm text-muted">
                    <span className="text-green font-mono text-sm mt-0.5 font-bold">›</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
