import { useEffect, useRef } from 'react'
import './Stats.css'

const highlights = [
  { num: '100%', name: 'Protein Retention', sub: 'vs raw control (Dumas)' },
  { num: '87%',  name: 'PDCAAS Digestibility', sub: 'Red lentils, whole-food range' },
  { num: '6.4g', name: 'Crude Fiber / 100g', sub: 'Unchanged from raw control' },
  { num: '93.6%',name: 'Trypsin Inhibitor ↓', sub: 'No chemical treatment' },
  { num: '75%',  name: 'Raffinose Reduction', sub: 'Less bloating & GI discomfort' },
]

const rows = [
  { num: '100%',     name: 'Protein Retention',          desc: 'Near-zero protein loss vs raw control — confirmed independently by Dumas nitrogen analysis and proximate analysis.' },
  { num: '87%',      name: 'PDCAAS Digestibility',       desc: 'Top of the whole-food legume digestibility range — achieved inside a preserved food matrix, without extraction. This combination is rare.' },
  { num: '6.4g/100g',name: 'Crude Fiber',                desc: 'Unchanged from the raw control. While every isolate strips fiber out, Pear Foods preserves it entirely.' },
  { num: '93.6%',    name: 'Trypsin Inhibitor Reduction',desc: 'Near-complete inactivation of the primary legume digestibility barrier. The mechanistic foundation beneath the 87% PDCAAS score. No chemical treatment required.' },
  { num: '75%',      name: 'Raffinose Reduction',        desc: 'Reduction in gas-forming oligosaccharides — raffinose (−75%), stachyose (−39.2%), verbascose (−58.3%). Less bloating and GI discomfort for consumers.' },
]

export default function Stats() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    sectionRef.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" className="stats-section" ref={sectionRef}>
      <div className="container">
        <span className="eyebrow">The Numbers</span>
        <h2 className="section-title fade-up">Validated performance<br /><em>at every level.</em></h2>

        <div className="stat-cards-row fade-up">
          {highlights.map(({ num, name, sub }) => (
            <div key={num + name} className="stat-hl-card">
              <div className="stat-hl-num">{num}</div>
              <div className="stat-hl-name">{name}</div>
              <div className="stat-hl-sub">{sub}</div>
            </div>
          ))}
        </div>

        <div className="stats-table-wrap fade-up">
          <table className="stats-table">
            <thead>
              <tr>
                <th>Result</th>
                <th>Metric</th>
                <th>What It Means</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ num, name, desc }) => (
                <tr key={num + name}>
                  <td><span className="stat-number">{num}</span></td>
                  <td className="stat-name">{name}</td>
                  <td className="stat-desc">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
