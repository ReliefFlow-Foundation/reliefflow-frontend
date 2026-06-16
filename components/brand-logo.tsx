export function BrandLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="120" height="120" rx="28" fill="rgba(30,26,58,0.94)" />
      <path
        d="M28 78 Q44 44 60 52 Q76 44 92 78"
        stroke="url(#rf)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M34 88 Q60 68 86 88" stroke="#7ee8fa" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.85" />
      <circle cx="60" cy="52" r="11" fill="#baa7ff" />
      <defs>
        <linearGradient id="rf" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#baa7ff" />
          <stop offset="100%" stopColor="#7ee8fa" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// patch: 2026-06-10T18:56:28.235288

// patch: 2026-06-16T17:52:56.470580
