import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/products', label: 'Products' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const cls = ({ isActive }) =>
    `text-sm font-medium transition hover:text-spark ${isActive ? 'text-spark' : 'text-white'}`

  return (
    <header className="sticky top-0 z-50 bg-navy shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Sparkyug" className="h-9 w-auto md:h-10" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={cls}>{l.label}</NavLink>
          ))}
          <Link to="/contact" className="rounded bg-spark px-4 py-2 text-sm font-semibold text-navy hover:bg-amber-400">
            Enquire
          </Link>
        </nav>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 md:hidden">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={cls} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="rounded bg-spark px-4 py-2 text-center text-sm font-semibold text-navy">
            Enquire
          </Link>
        </nav>
      )}
    </header>
  )
}
