import PageHeader from '../components/PageHeader.jsx'
import CategoryCard from '../components/CategoryCard.jsx'
import { categories } from '../data/products.js'

export default function Products() {
  return (
    <>
      <PageHeader title="Our Products" subtitle="The entire range of chemicals from India, for every industry." />
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 md:gap-6 md:py-16 lg:grid-cols-3">
        {categories.map((c) => <CategoryCard key={c.slug} category={c} />)}
      </section>
    </>
  )
}
