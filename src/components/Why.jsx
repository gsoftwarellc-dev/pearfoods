import { useEffect, useRef } from 'react'
import './Why.css'

const cards = [
  {
    num: '01',
    title: 'Protein and Fiber. Together. Always.',
    body: 'Every isolate and concentrate separates protein from fiber — it is an inevitable consequence of extraction. Pear Foods never extracts. Protein and fiber stay co-located in the same preserved macro structure, like the whole legume holds them.',
  },
  {
    num: '02',
    title: 'Satiety and Glycemic Response Support Through Food Structure',
    body: 'The Pear Foods Legume Protein Technology processed legume achieves something that the industry has not achieved: high bioavailability inside a preserved macro structure that mechanistically aligned with pathways known to support satiety and glycemic response. GLP-1 effects require direct human validation.',
  },
  {
    num: '03',
    title: 'Clean Label by Design, Not Exception',
    body: 'No chemical extraction. No fractionation. No isolating agents. No additives. Aligned with clean label, minimally processed principles.',
  },
  {
    num: '04',
    title: 'Validated Across 10 Independent Methods',
    body: 'Dumas nitrogen analysis, PDCAAS, Scanning Electron Microscopy, FTIR spectroscopy, water extraction, proximate analysis, antinutritional factor profiling, amino acid profile, carbohydrate fraction, oligosaccharide panel. Ten methods. One coherent conclusion.',
  },
]

export default function Why() {
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
    <section id="why" className="why-section" ref={sectionRef}>
      <div className="container">
        <span className="eyebrow">Why Pear Foods</span>
        <h2 className="section-title fade-up">Nothing removed.<br /><em>Everything</em> delivered.</h2>
        <p className="section-lead fade-up">The global legume protein market is built on a flawed trade-off: extract the protein, destroy everything else. Pear Foods ends that trade-off.</p>

        <div className="why-grid fade-up">
          {cards.map(({ num, title, body }) => (
            <div key={num} className="why-card">
              <div className="why-card-num">{num}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <div className="callout-block fade-up">
          <p>"The nutritional completeness of a whole food, the digestibility of a processed ingredient, and the metabolic architecture that aligns mechanistically with pathways known to support satiety and glycemic response — delivered as a minimally processed, clean-label, ready-to-consume ingredient."</p>
        </div>
      </div>
    </section>
  )
}
