export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid-pattern border-b border-border-soft">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-green"></span>
            <span className="text-muted">OPEN FOR BACKEND ROLES</span>
          </div>
          
          <h1 className="mb-6 font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text leading-tight">
            I architect backend microservices for enterprise-scale platforms.
          </h1>
          
          <p className="mb-8 text-base md:text-lg leading-relaxed text-muted max-w-xl">
            Java &amp; Spring Boot Specialist. Focused on real-time event processing, distributed system boundaries, service discovery, and zero-downtime message orchestration.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded bg-green px-6 py-3 font-mono text-xs font-semibold tracking-wider text-[#06130C] shadow-sm transition-all hover:bg-[#34b860] hover:shadow-green/20 hover:shadow-lg"
            >
              EXPLORE PROJECT LOGS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded border border-border bg-panel px-6 py-3 font-mono text-xs tracking-wider text-text transition-all hover:border-muted hover:bg-panel-hover"
            >
              SEND DIRECT MESSAGE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}