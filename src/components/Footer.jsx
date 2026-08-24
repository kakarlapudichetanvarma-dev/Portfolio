import { portfolioData } from '../data/portfolioData'
import { ArrowUp, Zap } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border-soft bg-bg py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        
        {/* Left side */}
        <div className="flex flex-col sm:flex-row items-center gap-3 font-mono text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green animate-pulse"></span>
            <span className="font-semibold text-text">
              {portfolioData.profile.name}
            </span>
          </div>
          <span className="hidden sm:inline text-muted-dim">|</span>
          <span className="text-muted-dim">
            Backend &amp; Distributed Systems Engineer
          </span>
        </div>

        {/* Center / Right side: Vercel badge + Scroll to top */}
        <div className="flex items-center gap-4 font-mono text-xs text-muted-dim">
          <div className="inline-flex items-center gap-1.5 rounded border border-border-soft bg-panel px-2.5 py-1 text-[11px] text-muted">
            <Zap className="h-3 w-3 text-green" />
            <span>Vercel Edge Ready</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex h-8 w-8 items-center justify-center rounded border border-border bg-panel text-muted hover:text-text hover:border-green/40 transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  )
}