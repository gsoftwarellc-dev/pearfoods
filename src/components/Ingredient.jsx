import { useEffect, useRef } from 'react'
import './Ingredient.css'

const attrs = [
  'Ready-to-consume format — no further processing required',
  '100% protein retention — 26.1g per 100g dry weight, near-identical to raw control',
  'Crude fiber preserved at 6.4g / 100g — unchanged from raw',
  'All essential amino acids preserved as in raw control, including lysine',
  'Non-protein nitrogen reduced 16.7% — improved true protein quality',
  'Oligosaccharides reduced 39–75% — less bloating and GI discomfort',
  'No chemical extraction, no fractionation, no additives, no isolating agents',
  'Minimally processed — aligned with clean-label principles',
]

const tableRows = [
  ['Total Protein (g/100g)',       '26.1 ± 0.46',  '26.6 ± 0.5'],
  ['Crude Fiber (g/100g)',         '6.4 ± 0.11',   '6.3 ± 0.13'],
  ['PDCAAS Digestibility',         '87%',           'Baseline'],
  ['Trypsin Inhibitor (TIU/mg)',   '0.18 ± 0.10',  '2.83 ± 0.10'],
  ['Raffinose (g/100g)',           '0.10 ± 0.05',  '0.40 ± 0.05'],
  ['Stachyose (g/100g)',           '1.10 ± 0.05',  '1.81 ± 0.07'],
]

export default function Ingredient() {
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
    <section id="ingredient" className="ingredient-section" ref={sectionRef}>
      <div className="container">
        <span className="eyebrow">The Ingredient</span>
        <h2 className="section-title fade-up">A whole food that performs<br /><em>like a functional ingredient.</em></h2>
        <p className="section-lead fade-up">Ready-to-use. Clean label. Preserved fiber. Proven digestibility. The metabolic architecture of a whole food — delivered in a format the food industry can use.</p>

        <div className="ingredient-grid fade-up">
          <div className="ingredient-copy">
            <p className="ingredient-body">The result of our proprietary process is an ingredient that is compositionally near-identical to the whole raw legume — protein, fiber, starch, essential amino acids, micronutrients, all present — with the antinutritional barriers removed, the digestive tolerability dramatically improved, and the clean-label status intact.</p>
            <ul className="attr-list">
              {attrs.map((a, i) => (
                <li key={i}>
                  <span className="attr-check">✓</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="ingredient-table-col">
            <div className="nutrient-card">
              <div className="nutrient-card-header">
                <h4>Compositional Data</h4>
                <p>Based on Red Lentil — Pear Foods vs Raw Control</p>
              </div>
              <div className="nutrient-table-scroll">
                <table className="nutrient-table">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Pear Foods</th>
                      <th className="align-right">Raw Control</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map(([param, pear, raw]) => (
                      <tr key={param}>
                        <td>{param}</td>
                        <td className="pear-val">{pear}</td>
                        <td className="raw-val">{raw}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
