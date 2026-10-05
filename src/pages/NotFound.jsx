import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="px-4 py-24 text-center">
      <h1 className="text-5xl font-bold text-navy">404</h1>
      <p className="mt-3 text-slate-600">Page not found.</p>
      <Link to="/" className="mt-6 inline-block text-spark hover:underline">Back to home</Link>
    </section>
  )
}
