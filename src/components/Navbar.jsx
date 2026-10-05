import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import Logo from './Logo.jsx'
import { categories } from '../data/products.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileProducts, setMobileProducts] = useState(false)
  const cls = ({ isActive }) =>
    `text-sm font-medium transition hover:text-spark ${isActive ? 'text-spark' : 'text-white'}`
  const close = () => { setOpen(false); setMobileProducts(false) }

  return (
    <header className="sticky top-0 z-50 bg-navy shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" onClick={close}><Logo /></Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={cls}>Home</NavLink>
          <NavLink to="/about-us" className={cls}>About Us</NavLink>

          <div className="group relative">
            <NavLink to="/products" className={(s) => `${cls(s)} flex items-center gap-1 py-2`}>
              Products <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </NavLink>
            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 rounded-lg bg-white py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
              {categories.map((c) => (
                <Link key={c.slug} to={`/products/${c.slug}`} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-navy">
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/contact" className="rounded bg-spark px-4 py-2 text-sm font-semibold text-navy hover:bg-amber-400">
            Enquire
          </NavLink>
        </nav>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex max-h-[80vh] flex-col gap-4 overflow-y-auto border-t border-white/10 px-4 py-4 md:hidden">
          <NavLink to="/" end className={cls} onClick={close}>Home</NavLink>
          <NavLink to="/about-us" className={cls} onClick={close}>About Us</NavLink>
          <div>
            <div className="flex items-center justify-between">
              <NavLink to="/products" end className={cls} onClick={close}>Products</NavLink>
              <button onClick={() => setMobileProducts(!mobileProducts)} aria-label="Toggle products" className="text-white">
                <ChevronDown className={`h-5 w-5 transition ${mobileProducts ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {mobileProducts && (
              <div className="mt-3 flex flex-col gap-3 border-l border-white/20 pl-4">
                {categories.map((c) => (
                  <Link key={c.slug} to={`/products/${c.slug}`} onClick={close} className="text-sm text-slate-300 hover:text-spark">{c.name}</Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/contact" onClick={close} className="rounded bg-spark px-4 py-2 text-center text-sm font-semibold text-navy">
            Enquire
          </Link>
        </nav>
      )}
    </header>
  )
}
