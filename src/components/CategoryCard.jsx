import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/products/${category.slug}`}
      className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-spark hover:shadow-lg"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-navy text-3xl">{category.icon}</div>
      <h3 className="text-lg font-semibold text-navy group-hover:text-spark">{category.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{category.summary}</p>
      <span className="mt-4 inline-block text-sm font-medium text-navy-light">View range →</span>
    </Link>
  )
}
