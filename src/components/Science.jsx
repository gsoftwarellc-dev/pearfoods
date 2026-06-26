import { useEffect, useRef } from 'react'
import './Science.css'

const methods = [
  { num: '01 · Dumas Nitrogen Analysis', title: '100% Protein Retention', badge: 'Zero processing loss', body: 'The global regulatory standard for protein quantification confirms zero protein loss during processing. Independently corroborated by proximate analysis.' },
  { num: '02 · PDCAAS In Vitro Digestibility', title: '87% Digestibility Score', badge: 'Top of whole-food range', body: '87% PDCAAS for red lentils — at the top of the in vitro digestibility scores for whole legumes, achieved inside a preserved food matrix without extraction.' },
  { num: '03 · PDCAAS Amino Acid Profile', title: 'All Essential Amino Acids Intact', badge: 'Including lysine', body: 'Every essential amino acid — including lysine, the first casualty of heat processing — is preserved identically to the raw control. Leucine and arginine remain intact.' },
  { num: '04 · Antinutritional Factor (ANF) Panel', title: 'Near-Complete ANF Inactivation', badge: '93.6% Trypsin inhibitor reduction', body: 'Trypsin inhibitor −93.6%. All without chemical treatment. Primary bioavailability barriers eliminated. Clean-label standard maintained.' },
  { num: '05 · Carbohydrate Fraction', title: 'Oligosaccharide Reduction', badge: 'Raffinose −75%', body: 'Raffinose −75%. Gas-forming fraction dramatically reduced. Matrix preserved; bloating reduced.' },
]

const mechs = [
  { title: 'Delayed Gastric Emptying', body: 'Confirmed with FTIR' },
  { title: 'Distal Nutrient Delivery', body: 'Confirmed with less solubilization' },
  { title: 'Intact Secretagogue Amino Acids', body: 'Confirmed with PDCAAS Analysis' },
  { title: 'Structured Carbohydrate Presentation', body: 'Confirmed with Scanning Electron Microscopy' },
]

export default function Science() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    sectionRef.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scroll = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="science" className="science-section" ref={sectionRef}>
      <div className="container">
        <span className="eyebrow">The Science</span>

        <div className="science-intro">
          <div>
            <h2 className="section-title fade-up">Ten methods.<br />One <em>preserved</em><br />macro structure.</h2>
            <p className="science-body">The global protein market has optimized for extraction efficiency — and lost what matters most. Concentrates and isolates destroy the food matrix: the physical co-structure of protein, fiber, starch, and micronutrients that controls how nutrients are released and absorbed in the gut.</p>
            <p className="science-body">Pear Foods preserves it. Our proprietary process creates a co-gel matrix in which all macronutrients remain physically bound together — behaving in the gut like a structured whole food, not a dissolved powder.</p>
            <div className="science-callout fade-up">
              <p>"Protein isolates are absorbed within the proximal 30–50 cm of the small intestine. L-cells are concentrated in the distal <em>200+ cm</em>. The nutrient signal never reaches them."</p>
            </div>
          </div>
          <div className="science-action-col">
            <div className="science-action-bar fade-up">
              <span className="science-action-eyebrow">Test-by-Test Summary</span>
              <h3>The Ten<br />Tests</h3>
              <div className="science-action-divider" />
              <p>Ten independent analytical methods. One coherent conclusion. Request a meeting to receive the complete test-by-test summary.</p>
              <a href="#contact" className="science-action-button" onClick={scroll}>Request a Meeting →</a>
            </div>
          </div>
        </div>

        {/* Methods grid */}
        <div className="methods-grid">
          {methods.map(({ num, title, badge, body }) => (
            <div key={num} className="method-card fade-up">
              <div className="method-num">{num}</div>
              <h3>{title}</h3>
              <span className="method-result">{badge}</span>
              <p>{body}</p>
            </div>
          ))}
          <div className="method-card method-card-cta fade-up">
            <div className="method-card-cta-icon">🔬</div>
            <h3>5 More Methods</h3>
            <p>SEM imaging, FTIR spectroscopy, water extraction, proximate analysis &amp; more. Full summary available on request.</p>
            <a href="#contact" className="btn-primary btn-sm" onClick={scroll}>Request a Meeting →</a>
          </div>
        </div>

        {/* Satiety section */}
        <div className="satiety-section fade-up">
          <div className="satiety-header">
            <div>
              <span className="eyebrow" style={{ color: 'var(--g-400)' }}>Satiety &amp; GLP-1 Pathway Support*</span>
              <h3>The metabolic differentiator no isolate can replicate.</h3>
              <p>GLP-1 is the biological target of the fastest-growing class of pharmaceutical interventions in metabolic health. Pear Foods delivers Satiety and GLP-1* pathway alignment through food architecture, not pharmacology — through four structural mechanisms that are architecturally not possible in any extracted protein format.</p>
            </div>
          </div>
          <div className="satiety-mechs">
            {mechs.map(({ title, body }, i) => (
              <div key={i} className="satiety-mech">
                <h4>{i + 1}. {title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <p className="satiety-disclaimer">* Satiety and glycemic response pathway alignment is mechanistically supported by structural and compositional data. GLP-1 validation needed.</p>
        </div>
      </div>
    </section>
  )
}
