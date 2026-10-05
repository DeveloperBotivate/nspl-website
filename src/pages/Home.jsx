import { Link } from 'react-router-dom'
import hero from '../assets/hero.jpg'
import CategoryCard from '../components/CategoryCard.jsx'
import { categories } from '../data/products.js'

const stats = [
  ['2011', 'Founded'],
  ['500,000+', 'Chemicals accessible'],
  ['10+ yrs', 'Leadership experience'],
  ['Global', 'Supply reach'],
]

export default function Home() {
  return (
    <>
      <section className="relative">
        <img src={hero} alt="Chemical storage tanks" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:py-28 md:py-40">
          <p className="mb-3 font-medium uppercase tracking-widest text-spark">Every trade a promise</p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
            Fulfilling chemical requirements across industries, around the world.
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-200">
            Global leaders in chemical supply—meeting every need, anywhere.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link to="/products" className="rounded bg-spark px-6 py-3 text-center font-semibold text-navy hover:bg-amber-400">Explore Products</Link>
            <Link to="/contact" className="rounded border border-white px-6 py-3 text-center font-semibold hover:bg-white hover:text-navy">Enquire Now</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 text-center md:py-16">
        <h2 className="text-2xl font-bold text-navy md:text-3xl">Our Mission</h2>
        <p className="mt-4 text-base leading-relaxed md:text-lg text-slate-600">
          With deep expertise in international trade, we connect industries with the most reliable manufacturing
          sources. Rooted in integrity and expertise, we offer the entire range of chemicals from India, tailored to
          meet the dynamic needs of industries worldwide.
        </p>
      </section>

      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold text-navy md:text-3xl">Product Categories</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 md:gap-6 lg:grid-cols-3">
            {categories.map((c) => <CategoryCard key={c.slug} category={c} />)}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center md:gap-8 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l}>
              <div className="text-2xl font-bold text-spark md:text-3xl">{n}</div>
              <div className="mt-1 text-sm text-slate-300">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 text-center md:py-16">
        <h2 className="text-2xl font-bold text-navy md:text-3xl">Looking for a specific chemical?</h2>
        <p className="mt-3 text-slate-600">Tell us your requirement and our team will get back to you.</p>
        <Link to="/contact" className="mt-6 inline-block rounded bg-navy px-8 py-3 font-semibold text-white hover:bg-navy-light">Send an Enquiry</Link>
      </section>
    </>
  )
}
