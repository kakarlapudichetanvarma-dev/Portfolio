export default function Footer() {
  return (
    <footer className="border-t border-border-soft bg-bg py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-center font-mono text-xs text-muted-dim sm:flex-row sm:text-left">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-green"></span>
          <span>Backend Microservices Portfolio</span>
        </div>
        <span>Spring Boot API + React / Tailwind UI</span>
      </div>
    </footer>
  )
}