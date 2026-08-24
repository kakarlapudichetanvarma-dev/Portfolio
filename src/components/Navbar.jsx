import { useState, useEffect } from 'react'
import { portfolioData } from '../data/portfolioData'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'PROJECTS', href: '#projects', num: '01' },
    { name: 'ARCHITECTURE', href: '#architecture', num: '02' },
    { name: 'STACK', href: '#skills', num: '03' },
    { name: 'EXPERIENCE', href: '#experience', num: '04' },
    { name: 'CONTACT', href: '#contact', num: '05' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-bg/40 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5 sm:py-3">
        {/* Brand with High-Definition Custom Logo */}
        <a
          href="#"
          className="group flex items-center gap-3.5 font-mono tracking-wider text-text transition-colors"
        >
          <div className="relative flex items-center justify-center">
            {/* Ambient subtle green neon background glow */}
            <div className="absolute -inset-1 rounded-xl bg-green/20 blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="/logo.jpg"
              alt="Chetan Varma Logo"
              className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl border-2 border-green/60 object-cover object-top shadow-[0_0_20px_rgba(62,207,110,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:border-green group-hover:shadow-[0_0_25px_rgba(62,207,110,0.6)]"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <div className="flex flex-col">
            <span className="flex items-center gap-1 text-base sm:text-lg font-bold tracking-tight text-text group-hover:text-white transition-colors">
              <span>CHETAN VARMA</span>
              <span className="text-green font-bold">.</span>
            </span>
            <span className="text-[11px] font-mono text-green/90 tracking-widest uppercase -mt-0.5 font-semibold">
              BACKEND // DISTRIBUTED
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted transition-colors hover:text-green"
            >
              <span className="text-[10px] text-green/60 group-hover:text-green">
                {link.num}.
              </span>
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Socials & CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={portfolioData.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-8 w-8 items-center justify-center rounded border border-border bg-panel text-muted transition-all hover:border-border-soft hover:text-text hover:bg-panel-hover"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={portfolioData.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-8 w-8 items-center justify-center rounded border border-border bg-panel text-muted transition-all hover:border-border-soft hover:text-text hover:bg-panel-hover"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded border border-green/30 bg-green/10 px-3 py-1.5 font-mono text-xs font-medium tracking-wider text-green transition-all hover:bg-green/20 hover:border-green/60"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden h-9 w-9 items-center justify-center rounded border border-border bg-panel text-text"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-panel px-6 py-5 shadow-2xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-border-soft pb-2 font-mono text-sm tracking-wider text-text hover:text-green"
              >
                <span>{link.name}</span>
                <span className="text-xs text-green">{link.num}</span>
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded border border-border bg-bg text-muted hover:text-text"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded border border-border bg-bg text-muted hover:text-text"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded border border-green/40 bg-green/10 px-4 py-2 font-mono text-xs font-medium text-green"
              >
                CONNECT
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}