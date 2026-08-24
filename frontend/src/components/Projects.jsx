import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false

    fetch('/api/projects?page=0&size=10')
      .then((res) => {
        if (!res.ok) throw new Error('request failed')
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setProjects(data.content ?? [])
        setStatus('ok')
      })
      .catch(() => {
        if (cancelled) return
        setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-green mb-1">
            <span>01.</span>
            <span>PORTFOLIO_RECORD</span>
          </div>
          <h2 className="font-mono text-2xl font-bold tracking-tight text-text">
            Architectural Implementations
          </h2>
        </div>
        <span className="hidden sm:block font-mono text-xs text-muted-dim">
          PROD_VER // 2.4.0
        </span>
      </div>

      {status === 'loading' && (
        <div className="rounded-lg border border-border-soft bg-panel p-8 text-center font-mono text-xs text-muted">
          <span className="inline-block animate-spin mr-2">⚙</span> Fetching system records...
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-lg border border-red/30 bg-red/5 p-6 font-mono text-xs text-red">
          System notice: Unable to establish API handshake for project logs.
        </div>
      )}

      {status === 'ok' && (
        <div className="grid gap-6">
          {projects.map((p) => (
            <article
              key={p.code}
              className="group relative rounded-lg border border-border-soft bg-panel p-6 md:p-8 transition-all hover:border-border hover:bg-panel-hover hover:shadow-xl"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-border-soft/60 pb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-green/10 border border-green/20 px-2 py-0.5 font-mono text-xs text-green font-medium">
                    {p.code}
                  </span>
                  <h3 className="font-mono text-lg font-semibold text-text group-hover:text-green transition-colors">
                    {p.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
                  <span className="h-2 w-2 rounded-full bg-green"></span>
                  <span>{p.status}</span>
                </div>
              </div>

              <p className="mb-6 text-sm text-muted leading-relaxed max-w-3xl">
                {p.summary}
              </p>

              <div className="mb-6 rounded-md bg-bg/50 p-4 border border-border-soft/40">
                <h4 className="mb-2 font-mono text-xs text-muted-dim uppercase tracking-wider">
                  Key Technical Capabilities
                </h4>
                <ul className="grid gap-2 text-sm text-text">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <span className="text-green font-mono text-xs mt-0.5">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border/80 bg-bg px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-green/40 hover:text-text"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}