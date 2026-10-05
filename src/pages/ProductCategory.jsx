import { Link, NavLink, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CategoryIcon from '../components/CategoryIcon.jsx'
import NotFound from './NotFound.jsx'
import { categories } from '../data/products.js'

export default function ProductCategory() {
  const { slug } = useParams()
  const i = categories.findIndex((c) => c.slug === slug)
  if (i < 0) return <NotFound />
  const cat = categories[i]
  const prev = categories[(i - 1 + categories.length) % categories.length]
  const next = categories[(i + 1) % categories.length]

  const side = ({ isActive }) =>
    `flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition ${
      isActive ? 'bg-navy text-white' : 'text-slate-700 hover:bg-slate-100'
    }`

  return (
    <>
      <PageHeader
        title={cat.name}
        subtitle={cat.summary}
        crumbs={[{ label: 'Products', to: '/products' }, { label: cat.name }]}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:py-14 lg:grid-cols-[260px_1fr]">
        <aside className="min-w-0">
          <div className="lg:sticky lg:top-24">
            <h2 className="mb-3 hidden text-xs font-semibold uppercase tracking-wider text-slate-500 lg:block">Categories</h2>
            <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {categories.map((c) => (
                <NavLink key={c.slug} to={`/products/${c.slug}`} className={side}>
                  <CategoryIcon name={c.icon} className="h-4 w-4" />
                  {c.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0">
          <div className="grid gap-4 md:grid-cols-2">
            {cat.groups.map(([title, detail]) => (
              <div key={title} className="rounded-lg border border-slate-200 border-l-4 border-l-spark p-5">
                <h3 className="font-semibold text-navy">{title}</h3>
                {detail && <p className="mt-1 text-sm text-slate-600">{detail}</p>}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-navy p-6 text-white md:flex md:items-center md:justify-between">
            <p className="font-medium">Need a specific grade or bulk quote for {cat.name}?</p>
            <Link to="/contact" className="mt-4 block rounded bg-spark px-6 py-3 text-center font-semibold text-navy hover:bg-amber-400 md:mt-0 md:inline-block">
              Enquire Now
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link to={`/products/${prev.slug}`} className="group flex items-center gap-3 rounded-lg border border-slate-200 p-4 hover:border-spark">
              <ArrowLeft className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-spark" />
              <span className="min-w-0"><span className="block text-xs text-slate-500">Previous</span><span className="block truncate font-medium text-navy">{prev.name}</span></span>
            </Link>
            <Link to={`/products/${next.slug}`} className="group flex items-center justify-end gap-3 rounded-lg border border-slate-200 p-4 text-right hover:border-spark">
              <span className="min-w-0"><span className="block text-xs text-slate-500">Next</span><span className="block truncate font-medium text-navy">{next.name}</span></span>
              <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-spark" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
