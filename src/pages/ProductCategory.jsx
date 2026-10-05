import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import NotFound from './NotFound.jsx'
import { categories } from '../data/products.js'

export default function ProductCategory() {
  const { slug } = useParams()
  const cat = categories.find((c) => c.slug === slug)
  if (!cat) return <NotFound />

  return (
    <>
      <PageHeader title={cat.name} subtitle={cat.summary} />
      <section className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <Link to="/products" className="text-sm text-navy-light hover:text-spark">← All products</Link>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {cat.groups.map(([title, detail]) => (
            <div key={title} className="rounded-lg border border-slate-200 p-5">
              <h3 className="font-semibold text-navy">{title}</h3>
              {detail && <p className="mt-1 text-sm text-slate-600">{detail}</p>}
            </div>
          ))}
        </div>
        <Link to="/contact" className="mt-8 block rounded text-center md:inline-block bg-spark px-6 py-3 font-semibold text-navy hover:bg-amber-400">
          Enquire about {cat.name}
        </Link>
      </section>
    </>
  )
}
