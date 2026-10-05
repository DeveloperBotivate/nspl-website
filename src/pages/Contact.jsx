import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { company } from '../data/products.js'

const input = 'w-full rounded border border-slate-300 px-3 py-2 text-base focus:border-spark focus:outline-none'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')}\nCompany: ${f.get('company')}\n\n${f.get('message')}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Enquiry from website')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHeader title="Enquire" subtitle="Tell us what you need – we'll get back to you." />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2 md:gap-12 md:py-16">
        <form onSubmit={submit} className="space-y-4">
          <input name="name" required placeholder="Your name" className={input} />
          <input name="email" type="email" required placeholder="Email" className={input} />
          <input name="phone" placeholder="Phone" className={input} />
          <input name="company" placeholder="Company" className={input} />
          <textarea name="message" required rows="5" placeholder="Your requirement" className={input} />
          <button className="w-full rounded bg-navy px-8 sm:w-auto py-3 font-semibold text-white hover:bg-navy-light">Send Enquiry</button>
          {sent && <p className="text-sm text-green-700">Your email app should open with the enquiry ready to send.</p>}
        </form>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-navy">Registered Address</h3>
            <p className="text-slate-600">{company.address}</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy">Phone</h3>
            {company.phones.map((p) => <p key={p} className="text-slate-600">{p}</p>)}
          </div>
          <div>
            <h3 className="font-semibold text-navy">Email</h3>
            <a href={`mailto:${company.email}`} className="text-slate-600 hover:text-spark">{company.email}</a>
          </div>
        </div>
      </section>
    </>
  )
}
