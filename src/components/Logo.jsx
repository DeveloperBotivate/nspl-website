export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 md:h-10 md:w-10" aria-hidden="true">
        <rect x="3" y="3" width="34" height="34" rx="3" fill="none" stroke="#cbd5e1" strokeWidth="4" />
        <path d="M14 30 L26 10 L28 12 L16 32 Z" fill="#2dd4bf" />
      </svg>
      <span className="text-2xl font-extrabold tracking-wider text-white md:text-3xl">NSPL</span>
    </span>
  )
}
