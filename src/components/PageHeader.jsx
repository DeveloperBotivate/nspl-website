export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-navy py-10 text-center md:py-16 text-white">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
      </div>
    </section>
  )
}
