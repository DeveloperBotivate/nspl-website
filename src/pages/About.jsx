import PageHeader from '../components/PageHeader.jsx'

const strengths = [
  'Direct procurement from certified manufacturers',
  'Customer-centric approach with global infrastructure',
  'Network connecting Western businesses to Asian suppliers',
  'Export market access for Indian manufacturers',
]

export default function About() {
  return (
    <>
      <PageHeader crumbs={[{ label: "About Us" }]} title="About Us" subtitle="In business, a promise is the bridge between trust and opportunity." />
      <section className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <p className="text-base leading-relaxed md:text-lg text-slate-600">
          NSPL is a global chemical trading organization headquartered in Nagpur, India, positioning itself as a
          bridge between Asian manufacturers and international markets. Our leadership team brings over a decade of
          experience across global industries—including oil and lubricants, fire safety, cosmetics, and food.
        </p>
        <div className="mt-8 grid gap-5 md:mt-12 md:gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-navy">Sourcing</h2>
            <p className="mt-3 text-slate-600">
              We connect clients with trusted suppliers, leveraging access to over 500,000 chemicals powering
              industries worldwide. We facilitate procurement from audited, globally certified manufacturers across
              India and Southeast Asia.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-navy">Marketing</h2>
            <p className="mt-3 text-slate-600">
              We serve as a marketing partner for international companies entering Indian markets and help Indian
              manufacturers access export opportunities globally, handling bulk exports, imports, and indenting.
            </p>
          </div>
        </div>
        <h2 className="mt-14 text-2xl font-semibold text-navy">Key Strengths</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {strengths.map((s) => (
            <li key={s} className="flex items-start gap-3 rounded-lg bg-slate-50 p-4">
              <span className="text-spark">✔</span><span>{s}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
