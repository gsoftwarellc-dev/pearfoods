import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'

const categories = [
  'Functional / Metabolic Nutrition',
  'Sports & Active Nutrition',
  'Plant-Based / Clean-Label CPG',
  'Other',
]

export default function Contact() {
  const sectionRef = useRef(null)
  const navigate = useNavigate()
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
    if (!form.jobTitle.trim()) e.jobTitle = true
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true
    if (!form.phone.trim()) e.phone = true
    if (!form.category) e.category = true
    if (!form.message.trim()) e.message = true
    return e
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSending(true)
    const body = [
      `Name: ${form.firstName} ${form.lastName}`,
      `Company: ${form.company}`,
      `Title: ${form.jobTitle}`,
      `Address: ${form.companyAddress}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Category: ${form.category}`,
      `Message: ${form.message}`,
    ].join('\n')
    const mailto = `mailto:hello@pearfoods.com?subject=${encodeURIComponent('New Meeting Request — Pear Foods')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setTimeout(() => { setSending(false); navigate('/thank-you') }, 500)
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
              Ready to formulate with<br />real whole food protein<br /><em>through Pear Foods Legume Protein Technology?</em>
            </h2>
          </div>
          <p className="contact-sub fade-up">
            Request a meeting with our team or send us a message.
          </p>
          <div className="contact-email-line fade-up">
            <span className="contact-email-label">Email us at:</span>
            <a href="mailto:hello@pearfoods.com">hello@pearfoods.com</a>
          </div>
          <div className="contact-linkedin fade-up">
            <a href="https://www.linkedin.com/company/pearfoods" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              Follow us on LinkedIn
            </a>
          </div>

          <div className="contact-form-card fade-up">
            <form onSubmit={handleSubmit} noValidate>
                <div className="contact-grid">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="firstName">First Name *</label>
                    <input id="firstName" className={inputClass('firstName')} type="text" placeholder="" value={form.firstName} onChange={set('firstName')} onFocus={clearErr('firstName')} required />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="lastName">Last Name *</label>
                    <input id="lastName" className={inputClass('lastName')} type="text" placeholder="" value={form.lastName} onChange={set('lastName')} onFocus={clearErr('lastName')} required />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="company">Company *</label>
                    <input id="company" className={inputClass('company')} type="text" placeholder="" value={form.company} onChange={set('company')} onFocus={clearErr('company')} required />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="jobTitle">Title *</label>
                    <input id="jobTitle" className={inputClass('jobTitle')} type="text" placeholder="" value={form.jobTitle} onChange={set('jobTitle')} onFocus={clearErr('jobTitle')} required />
                  </div>
                  <div className="contact-field full">
                    <label className="contact-label" htmlFor="companyAddress">Company Address</label>
                    <input id="companyAddress" className="contact-input" type="text" placeholder="" value={form.companyAddress} onChange={set('companyAddress')} />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="email">Work Email *</label>
                    <input id="email" className={inputClass('email')} type="email" placeholder="" value={form.email} onChange={set('email')} onFocus={clearErr('email')} required />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="phone">Phone Number *</label>
                    <input id="phone" className={inputClass('phone')} type="tel" placeholder="" value={form.phone} onChange={set('phone')} onFocus={clearErr('phone')} required />
                  </div>
                  <div className="contact-field full">
                    <label className="contact-label" htmlFor="category">Category of Interest *</label>
                    <select id="category" className={`contact-select${errors.category ? ' input-error' : ''}`} value={form.category} onChange={set('category')} onFocus={clearErr('category')} required>
                      <option value="" disabled>Select a category...</option>
                      {categories.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="contact-field full">
                    <label className="contact-label" htmlFor="message">Message *</label>
                    <textarea id="message" className={`contact-textarea${errors.message ? ' input-error' : ''}`} placeholder="" value={form.message} onChange={set('message')} onFocus={clearErr('message')} required />
                  </div>
                </div>

                <div className="contact-submit-row">
                  <button type="submit" className="contact-btn" disabled={sending}>
                    {sending ? 'Sending…' : 'Submit'}
                  </button>
                  <p className="contact-note">We respond within 1–2 business days. All inquiries are confidential.</p>
                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  )
}
