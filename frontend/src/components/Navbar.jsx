export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-2.5 font-mono text-sm font-semibold tracking-widest text-text">
          <span className="flex h-2 w-2 rounded-full bg-green animate-pulse"></span>
          <span>CHETAN<span className="text-green">.</span>VARMA</span>
        </a>
        <nav className="flex items-center gap-6">
          <a href="#projects" className="font-mono text-xs tracking-wider text-muted transition-colors hover:text-green">
            LOGS
          </a>
          <a href="#skills" className="font-mono text-xs tracking-wider text-muted transition-colors hover:text-green">
            STACK
          </a>
          <a href="#contact" className="rounded border border-green/30 bg-green/5 px-3 py-1.5 font-mono text-xs tracking-wider text-green transition-all hover:bg-green/10 hover:border-green/60">
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  )
}