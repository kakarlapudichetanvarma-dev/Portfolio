import { useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import {
  Mail,
  Send,
  Check,
  Copy,
  Clock,
  ShieldCheck,
  MessageSquare
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [copiedEmail, setCopiedEmail] = useState(false)
  const { profile } = portfolioData

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Prepare mailto fallback URL
    const subject = encodeURIComponent(
      form.subject || `Portfolio Contact from ${form.name}`
    )
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    const mailtoUrl = `mailto:${profile.email}?subject=${subject}&body=${body}`

    try {
      // Simulate client dispatch latency
      await new Promise((resolve) => setTimeout(resolve, 600))
      
      // Open user's default email client with pre-filled details
      window.location.href = mailtoUrl
      
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl border-t border-border-soft px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Col: Contact Info & Direct Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-green mb-1.5">
              <span>05.</span>
              <span>COMMUNICATION_PIPELINE</span>
            </div>
            <h2 className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-text">
              Initiate Contact
            </h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Seeking a backend engineer for distributed systems, microservices architecture, or high-throughput JVM platforms? Let's connect.
            </p>
          </div>

          {/* Quick Channels Card */}
          <div className="rounded-xl border border-border/80 bg-panel p-6 space-y-4">
            <h3 className="font-mono text-xs text-muted-dim uppercase font-semibold">
              Direct Communication Channels
            </h3>

            {/* Email pill */}
            <div className="flex items-center justify-between rounded-lg border border-border-soft bg-bg p-3">
              <div className="flex items-center gap-3 overflow-hidden mr-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-green/10 text-green shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="truncate font-mono text-xs text-text">
                  {profile.email}
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 rounded border border-border bg-panel px-2.5 py-1 font-mono text-xs text-muted hover:text-green hover:border-green/40 cursor-pointer shrink-0"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3 w-3 text-green" />
                    <span className="text-green text-[11px]">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span className="text-[11px]">COPY</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-lg border border-border-soft bg-bg p-3 font-mono text-xs text-muted hover:text-text hover:border-border transition-colors"
              >
                <GithubIcon className="h-4 w-4 text-text" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-lg border border-border-soft bg-bg p-3 font-mono text-xs text-muted hover:text-text hover:border-border transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 text-blue" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Availability Guarantees */}
            <div className="pt-3 border-t border-border-soft space-y-2 text-xs font-mono text-muted">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-green" />
                <span>Average response window: &lt; 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-green" />
                <span>Status: {profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Dispatch Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-border/80 bg-panel p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-border-soft pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-text font-semibold">
                <MessageSquare className="h-4 w-4 text-green" />
                <span>DISPATCH_MESSAGE_PAYLOAD</span>
              </div>
              <span className="font-mono text-[11px] text-muted-dim">
                ENCRYPTED // TLS 1.3
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block font-mono text-xs text-muted"
                  >
                    SENDER_NAME *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 font-mono text-xs text-text placeholder-muted-dim outline-none transition-all focus:border-green focus:ring-1 focus:ring-green"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block font-mono text-xs text-muted"
                  >
                    EMAIL_ADDRESS *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="s.jenkins@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 font-mono text-xs text-text placeholder-muted-dim outline-none transition-all focus:border-green focus:ring-1 focus:ring-green"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block font-mono text-xs text-muted"
                >
                  TOPIC / ROLE *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Backend Engineer Opportunity / Architectural Consultation"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 font-mono text-xs text-text placeholder-muted-dim outline-none transition-all focus:border-green focus:ring-1 focus:ring-green"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-mono text-xs text-muted"
                >
                  PAYLOAD_DETAILS *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Details regarding the team, tech stack (Spring Boot / Kafka / AWS), or role scope..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-y rounded-lg border border-border bg-bg px-4 py-2.5 font-mono text-xs text-text placeholder-muted-dim outline-none transition-all focus:border-green focus:ring-1 focus:ring-green"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 rounded bg-green px-6 py-3 font-mono text-xs font-semibold tracking-wider text-[#06130C] transition-all hover:bg-[#34b860] hover:shadow-lg hover:shadow-green/20 disabled:opacity-50 cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#06130C] border-t-transparent"></span>
                      <span>DISPATCHING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>DISPATCH MESSAGE</span>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 font-mono text-xs text-green">
                    <Check className="h-4 w-4" />
                    <span>Mail client opened. I will respond within 24 hours!</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}