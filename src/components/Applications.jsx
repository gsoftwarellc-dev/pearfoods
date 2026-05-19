import { useEffect, useRef } from 'react'
import './Applications.css'

const apps = [
  {
    icon: '🧬',
    title: 'Functional & Metabolic Nutrition',
    body: 'The GLP-1 satiety story is the defining metabolic nutrition narrative of this decade. Pear Foods is the legume protein that mechanistically aligns with pathways known to support satiety and glycemic response — achieved through food structure, not pharmacology.',
  },
  {
    icon: '⚡',
    title: 'Sports & Active Nutrition',
    body: '87% PDCAAS. All essential amino acids preserved like in raw control. 100% protein retention. Oligosaccharides reduced for GI comfort. Matrix-controlled digestion for sustained amino acid release.',
  },
  {
    icon: '🌿',
    title: 'Plant-Based & Clean-Label CPG',
    body: 'An ingredient a consumer can understand, a nutritionist can endorse, and a brand manager can put on a front-of-pack claim. No extraction. No fractionation. No additives. Clean-label.',
  },
]

export default function Applications() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    sectionRef.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="applications" className="applications-section" ref={sectionRef}>
      <div className="container">
        <span className="eyebrow">Platform Applications</span>
        <h2 className="section-title fade-up">One ingredient.<br /><em>Three</em> high-growth categories.</h2>
        <p className="section-lead fade-up">Unique positioning in every channel. The same validated platform — for<br />different applications.</p>

        <div className="apps-grid">
          {apps.map(({ icon, title, body }) => (
            <div key={title} className="app-card fade-up">
              <div className="app-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
