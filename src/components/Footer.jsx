import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { company, categories } from '../data/products.js'

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 md:py-12 lg:grid-cols-3">
        <div>
          <img src={logo} alt="Sparkyug" className="mb-4 h-10" />
          <p className="text-sm">{company.tagline}</p>
          <p className="mt-2 text-sm">Fulfilling chemical requirements across industries, around the world.</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Products</h4>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}><Link className="hover:text-spark" to={`/products/${c.slug}`}>{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Contact</h4>
          <address className="space-y-2 text-sm not-italic">
            <p>{company.address}</p>
            {company.phones.map((p) => (
              <p key={p}><a className="hover:text-spark" href={`tel:${p.replace(/\s/g, '')}`}>{p}</a></p>
            ))}
            <p><a className="hover:text-spark" href={`mailto:${company.email}`}>{company.email}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} Sparkyug. All rights reserved.
      </div>
    </footer>
  )
}
