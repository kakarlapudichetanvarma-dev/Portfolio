import { useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import {
  ArrowRight,
  Copy,
  Check,
  Cpu,
  Layers,
  Activity
} from 'lucide-react'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const { profile, stats } = portfolioData

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="relative overflow-hidden bg-grid-pattern bg-radial-glow border-b border-border-soft">
      {/* Decorative ambient gradients */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-green/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 rounded-full bg-blue/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Main Hero Content (7 cols) */}
          <div className="lg:col-span-7">
            {/* Live Status Pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-panel/90 px-3.5 py-1.5 font-mono text-xs backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
              </span>
              <span className="text-text font-medium">{profile.statusText}</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text leading-[1.15]">
              Architecting <span className="text-green underline decoration-green/30 underline-offset-8">scalable</span> backend microservices &amp; event pipelines.
            </h1>

            {/* Bio summary */}
            <p className="mb-8 text-base sm:text-lg leading-relaxed text-muted max-w-2xl">
              {profile.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded bg-green px-5 py-3 font-mono text-xs font-semibold tracking-wider text-[#06130C] shadow-sm transition-all hover:bg-[#34b860] hover:shadow-green/20 hover:shadow-lg cursor-pointer"
              >
                <span>EXPLORE ARCHITECTURE LOGS</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded border border-border bg-panel px-5 py-3 font-mono text-xs tracking-wider text-text transition-all hover:border-muted hover:bg-panel-hover"
              >
                <span>SEND DIRECT MESSAGE</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded border border-border-soft bg-panel/60 px-4 py-3 font-mono text-xs text-muted transition-all hover:border-green/50 hover:text-green hover:bg-panel cursor-pointer"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green" />
                    <span className="text-green font-medium">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-border-soft/80">
              {stats.map((s, idx) => (
                <div key={idx} className="rounded border border-border-soft bg-panel/50 p-3">
                  <div className="font-mono text-lg font-bold text-green">{s.value}</div>
                  <div className="font-mono text-[11px] text-text font-medium">{s.label}</div>
                  <div className="text-[10px] text-muted-dim truncate">{s.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Terminal / System Telemetry Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg border border-border bg-panel shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-border bg-bg/80 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red/80"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-amber/80"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green/80"></div>
                  <span className="ml-2 text-[11px] text-muted-dim">sys_telemetry.jvm</span>
                </div>
                <span className="rounded bg-green/10 px-2 py-0.5 text-[10px] text-green border border-green/20">
                  LIVE
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-3.5 text-muted leading-relaxed">
                <div className="flex items-center gap-2 text-text">
                  <span className="text-green font-bold">&gt;</span>
                  <span>handshake --target=portfolio-system</span>
                </div>

                <div className="rounded bg-bg/70 p-3 space-y-1.5 border border-border-soft text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-muted-dim">ENGINEER:</span>
                    <span className="text-text font-semibold">{profile.preferredName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-dim">SPECIALIZATION:</span>
                    <span className="text-green">Java 21 / Microservices</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-dim">EVENT STREAM:</span>
                    <span className="text-text">Kafka &amp; RabbitMQ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-dim">STATE STORE:</span>
                    <span className="text-text">Redis &amp; PostgreSQL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-dim">DEPLOY TARGET:</span>
                    <span className="text-blue font-medium">Vercel (Edge Client)</span>
                  </div>
                </div>

                <div className="space-y-1 text-[11px]">
                  <div className="flex items-center gap-2 text-green">
                    <Activity className="h-3 w-3 animate-pulse" />
                    <span>[OK] Active service registry: 9 microservices online</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <Cpu className="h-3 w-3 text-amber" />
                    <span>[OK] Virtual Threads (Loom): high concurrency active</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <Layers className="h-3 w-3 text-blue" />
                    <span>[OK] Event broker: Kafka partition streams nominal</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-border-soft/60 flex items-center justify-between text-[11px] text-muted-dim">
                  <span>LATENCY: 18ms</span>
                  <span>SECURITY: JWT / TLS 1.3</span>
                </div>
              </div>

              {/* Bottom Glow bar */}
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-green to-transparent opacity-50"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}