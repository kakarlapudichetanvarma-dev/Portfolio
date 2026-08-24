import { useState } from 'react'

const initialForm = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | ok | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        const firstFieldError = data?.fields
          ? Object.values(data.fields)[0]
          : null
        throw new Error(firstFieldError || 'Transmission rejected');
      }

      setStatus('ok')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 border-t border-border-soft">
      <div className="max-w-xl">
        <div className="flex items-center gap-2 font-mono text-xs text-green mb-1">
          <span>02.</span>
          <span>DISPATCH_MESSAGE</span>
        </div>
        <h2 className="mb-2 font-mono text-2xl font-bold text-text">
          Get in Touch
        </h2>
        <p className="mb-8 text-sm text-muted">
          Looking for a backend engineer or team member? Drop a message directly into my pipeline.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block font-mono text-xs tracking-wider text-muted">
              FULL_NAME *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="e.g. Sarah Jenkins"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded border border-border bg-panel px-4 py-3 text-sm text-text placeholder-muted-dim outline-none transition-all focus:border-green focus:ring-1 focus:ring-green"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-mono text-xs tracking-wider text-muted">
              EMAIL_ADDRESS *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="s.jenkins@enterprise.com"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded border border-border bg-panel px-4 py-3 text-sm text-text placeholder-muted-dim outline-none transition-all focus:border-green focus:ring-1 focus:ring-green"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-mono text-xs tracking-wider text-muted">
              PAYLOAD_MESSAGE *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Details regarding role, tech stack, or engagement..."
              value={form.message}
              onChange={handleChange}
              className="w-full resize-y rounded border border-border bg-panel px-4 py-3 text-sm text-text placeholder-muted-dim outline-none transition-all focus:border-green focus:ring-1 focus:ring-green"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded bg-green px-6 py-3.5 font-mono text-xs font-semibold tracking-wider text-[#06130C] transition-all hover:bg-[#34b860] disabled:opacity-50 cursor-pointer"
          >
            {status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
          </button>

          <p
            role="status"
            aria-live="polite"
            className={`font-mono text-xs ${
              status === 'ok' ? 'text-green' : status === 'error' ? 'text-red' : 'text-muted'
            }`}
          >
            {status === 'ok' && "[SUCCESS] Payload received. I will respond within 24 hours."}
            {status === 'error' && `[ERROR] ${errorMsg || 'Transmission failed. Try again.'}`}
          </p>
        </form>
      </div>
    </section>
  )
}