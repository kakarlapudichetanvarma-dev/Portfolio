import { portfolioData } from '../data/portfolioData'
import { ShieldCheck, Zap, Server, Database, GitBranch } from 'lucide-react'

export default function ArchitecturePillars() {
  const { architecturalPillars } = portfolioData

  const icons = [ShieldCheck, Zap, GitBranch, Database]

  return (
    <section id="architecture" className="mx-auto max-w-6xl border-t border-border-soft px-6 py-20">
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-green mb-1.5">
          <span>02.</span>
          <span>SYSTEM_DESIGN_PHILOSOPHY</span>
        </div>
        <h2 className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-text">
          Core Architectural Principles
        </h2>
        <p className="mt-2 text-sm text-muted max-w-2xl">
          Engineering principles applied across services to guarantee uptime, low latency, and deterministic fault tolerance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {architecturalPillars.map((pillar, idx) => {
          const IconComponent = icons[idx % icons.length] || Server
          return (
            <div
              key={pillar.code}
              className="rounded-xl border border-border/80 bg-panel p-6 sm:p-7 transition-all duration-300 hover:border-green/40 hover:bg-panel-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green/30 bg-green/10 text-green">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="font-mono text-base font-semibold text-text">
                    {pillar.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-green/70 bg-bg px-2 py-0.5 rounded border border-border-soft">
                  {pillar.code}
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
