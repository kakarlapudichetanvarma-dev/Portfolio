export function BrandEmblemIcon({ className = "w-9 h-9", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="neonGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3ECF6E" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="metalSilver" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>
        <linearGradient id="darkBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#171E29" />
          <stop offset="100%" stopColor="#0B0F15" />
        </linearGradient>
      </defs>

      {/* Outer Rounded Container */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="10"
        fill="url(#darkBgGrad)"
        stroke="#232C3B"
        strokeWidth="1.5"
      />

      {/* Monogram Outer 'C' Arch */}
      <path
        d="M33 13C25 10 13 15 13 24C13 33 25 38 33 35"
        stroke="url(#neonGreenGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Monogram Inner 'V' Chevron */}
      <path
        d="M19 20L24 33L29 20"
        stroke="url(#metalSilver)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central 3D Isometric Microservice Cube / Node */}
      {/* Top Face */}
      <path
        d="M24 14L30 17.5L24 21L18 17.5Z"
        fill="#1E293B"
        stroke="url(#neonGreenGrad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Left Face */}
      <path
        d="M18 17.5V24.5L24 28V21Z"
        fill="#0F172A"
        stroke="url(#neonGreenGrad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Right Face */}
      <path
        d="M24 21V28L30 24.5V17.5Z"
        fill="#131C2E"
        stroke="url(#neonGreenGrad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Code Syntax Bracket '{' on left */}
      <path
        d="M9.5 20.5C8.5 20.5 8 21.5 8 22.5V23.5C8 24 7 24 7 24C7 24 8 24 8 24.5V25.5C8 26.5 8.5 27.5 9.5 27.5"
        stroke="#3ECF6E"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Code Syntax Bracket '}' on right */}
      <path
        d="M38.5 20.5C39.5 20.5 40 21.5 40 22.5V23.5C40 24 41 24 41 24C41 24 40 24 40 24.5V25.5C40 26.5 39.5 27.5 38.5 27.5"
        stroke="#3ECF6E"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Glowing Status Pulse Dot */}
      <circle cx="36" cy="12" r="1.5" fill="#3ECF6E" />
    </svg>
  )
}

export function GithubIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function LinkedinIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
