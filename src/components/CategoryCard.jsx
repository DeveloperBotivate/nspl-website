import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CategoryIcon from './CategoryIcon.jsx'

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/products/${category.slug}`}
      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-spark hover:shadow-lg"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-navy text-spark transition group-hover:bg-spark group-hover:text-navy">
        <CategoryIcon name={category.icon} className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-semibold text-navy">{category.name}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-600">{category.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-navy-light group-hover:text-spark">
        View range <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
