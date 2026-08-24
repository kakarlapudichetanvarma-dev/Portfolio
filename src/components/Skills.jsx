import { portfolioData } from '../data/portfolioData'
import { Server, Radio, Database, Cpu } from 'lucide-react'

export default function Skills() {
  const { skillCategories } = portfolioData

  const iconMap = {
    Server: Server,
    Radio: Radio,
    Database: Database,
    Cpu: Cpu
  }

  return (
    <section id="skills" className="mx-auto max-w-6xl border-t border-border-soft px-6 py-20">
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-green mb-1.5">
          <span>03.</span>
          <span>TECHNICAL_STACK_REGISTRY</span>
        </div>
        <h2 className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-text">
          Technical Capabilities &amp; Ecosystem
        </h2>
        <p className="mt-2 text-sm text-muted max-w-2xl">
          Core toolchain, JVM frameworks, message brokers, caching tiers, and distributed infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => {
          const IconComponent = iconMap[category.icon] || Server

          return (
            <div
              key={category.title}
              className="rounded-xl border border-border/80 bg-panel p-6 sm:p-7 transition-all hover:border-green/30"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded border border-green/30 bg-green/10 text-green">
                  <IconComponent className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-mono text-base font-semibold text-text">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-dim">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Matrix */}
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-border-soft">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded border border-border-soft bg-bg/80 px-3 py-2 text-xs transition-colors hover:border-border hover:bg-bg"
                  >
                    <span className="font-mono text-text truncate mr-1">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] text-green/80 bg-green/5 border border-green/10 px-1.5 py-0.5 rounded shrink-0">
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
