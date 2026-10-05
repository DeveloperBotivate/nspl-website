import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// crumbs: [{ label, to? }] – last item is the current page
export default function PageHeader({ title, subtitle, crumbs = [] }) {
  return (
    <section className="bg-navy py-10 text-center text-white md:py-16">
      <div className="mx-auto max-w-3xl px-4">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center justify-center gap-1 text-sm text-slate-300">
            <Link to="/" className="hover:text-spark">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1">
                <ChevronRight className="h-4 w-4" />
                {c.to ? <Link to={c.to} className="hover:text-spark">{c.label}</Link> : <span className="text-spark">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
      </div>
    </section>
  )
}
