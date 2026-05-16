import { useEffect, useRef, useState } from 'react'
import './Contact.css'

const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'

const categories = [
  'Functional / Metabolic Nutrition',
  'Sports & Active Nutrition',
  'Plant-Based / Clean-Label CPG',
  'Other',
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    firstName: '', lastName: '', company: '', jobTitle: '',
    companyAddress: '', email: '', phone: '', category: '', message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    sectionRef.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = true
    if (!form.lastName.trim()) e.lastName = true
    if (!form.company.trim()) e.company = true
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true
    return e
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSending(true)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: 'New Meeting Request — Pear Foods',
          _replyto: form.email,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        throw new Error()
      }
    } catch {
      alert('Something went wrong. Please email us directly at hello@pearfoods.com')
    } finally {
      setSending(false)
    }
  }

  const inputClass = field => `contact-input${errors[field] ? ' input-error' : ''}`
  const clearErr = field => () => setErrors(e => { const n = { ...e }; delete n[field]; return n })

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="contact-layout">
          <div className="contact-heading fade-up">
            <span className="eyebrow">Request a Meeting</span>
            <h2 className="section-title">
              Ready to formulate with<br />real whole food protein<br /><em>through Pear Foods?</em>
            </h2>
          </div>
          <p className="contact-sub fade-up">
            Request a meeting or schedule a technical conversation with our team. You can also email us at:
          </p>
          <div className="contact-email-line fade-up">
            <a href="mailto:hello@pearfoods.com">hello@pearfoods.com</a>
          </div>

          <div className="contact-form-card fade-up">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <h4>Message Sent!</h4>
                <p>Thank you — we'll be in touch within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-grid">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="firstName">First Name *</label>
                    <input id="firstName" className={inputClass('firstName')} type="text" placeholder="Jane" value={form.firstName} onChange={set('firstName')} onFocus={clearErr('firstName')} required />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="lastName">Last Name *</label>
                    <input id="lastName" className={inputClass('lastName')} type="text" placeholder="Smith" value={form.lastName} onChange={set('lastName')} onFocus={clearErr('lastName')} required />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="company">Company *</label>
                    <input id="company" className={inputClass('company')} type="text" placeholder="Acme Nutrition Co." value={form.company} onChange={set('company')} onFocus={clearErr('company')} required />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="jobTitle">Title</label>
                    <input id="jobTitle" className="contact-input" type="text" placeholder="R&D Director" value={form.jobTitle} onChange={set('jobTitle')} />
                  </div>
                  <div className="contact-field full">
                    <label className="contact-label" htmlFor="companyAddress">Company Address</label>
                    <input id="companyAddress" className="contact-input" type="text" placeholder="123 Innovation Blvd, Chicago, IL 60601" value={form.companyAddress} onChange={set('companyAddress')} />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="email">Work Email *</label>
                    <input id="email" className={inputClass('email')} type="email" placeholder="jane@company.com" value={form.email} onChange={set('email')} onFocus={clearErr('email')} required />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="phone">Phone Number</label>
                    <input id="phone" className="contact-input" type="tel" placeholder="+1 (312) 555-0000" value={form.phone} onChange={set('phone')} />
                  </div>
                  <div className="contact-field full">
                    <label className="contact-label" htmlFor="category">Category of Interest</label>
                    <select id="category" className="contact-select" value={form.category} onChange={set('category')}>
                      <option value="" disabled>Select a category...</option>
                      {categories.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="contact-field full">
                    <label className="contact-label" htmlFor="message">Message</label>
                    <textarea id="message" className="contact-textarea" placeholder="Tell us about your project or what you'd like to discuss..." value={form.message} onChange={set('message')} />
                  </div>
                </div>

                <div className="contact-submit-row">
                  <button type="submit" className="contact-btn" disabled={sending}>
                    {sending ? 'Sending…' : 'Request a Meeting →'}
                  </button>
                  <p className="contact-note">We respond within 1–2 business days. All inquiries are confidential.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
