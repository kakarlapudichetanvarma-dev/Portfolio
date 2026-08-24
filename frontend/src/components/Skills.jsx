const groups = [
  {
    title: 'Language & backend',
    items: ['Java', 'Spring Boot', 'Microservices'],
  },
  {
    title: 'Data & messaging',
    items: ['Kafka', 'Redis', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Frontend & real-time',
    items: ['React.js', 'WebSocket'],
  },
  {
    title: 'Infra & desktop',
    items: ['Docker', 'Kubernetes', 'JavaFX'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl border-t border-border-soft px-6 py-16">
      <h2 className="mb-8 flex items-center gap-3 font-mono text-[22px] font-semibold">
        <span className="rounded-sm border border-border px-2 py-0.5 text-[11px] tracking-widest text-green">
          STACK
        </span>
        Working set
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3.5 font-mono text-[13px] tracking-wide text-green">
              {group.title}
            </h3>
            <ul>
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-border-soft py-1.5 text-sm text-text last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
