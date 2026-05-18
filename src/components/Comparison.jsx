import { useEffect, useRef } from 'react'
import './Comparison.css'

const rows = [
  ['Food matrix preserved',             '✓ Confirmed',      '✗ Destroyed',      '✗ Destroyed'],
  ['Fiber retained',                    '✓ 6.4g / 100g',    '✗ Stripped',       '✗ Stripped'],
  ['Satiety & GLP-1 pathway support*',  '✓ Structural',     '✗ Absent',         '✗ Absent'],
  ['Clean label / no additives',        '✓ Confirmed',      '✗ Often no',       '✗ Often no'],
  ['Minimally processed',               '✓ Confirmed',      '✗ No',             '✗ No'],
  ['Oligosaccharide reduction',         '✓ 39–75%',         'Variable',         'Variable'],
  ['Antinutrient inactivation',         '✓ 93.6% trypsin',  'Variable',         'Variable'],
  ['Macronutrient content',             '✓ <2% variance',   'Partial loss',     'Significant loss'],
  ['Essential amino acids',             '✓ All intact',     'Partial',          'Variable'],
]

export default function Comparison() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    sectionRef.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const cellClass = val => val.startsWith('✓') ? 'comp-yes' : val.startsWith('✗') ? 'comp-no' : 'comp-neutral'

  return (
    <section id="comparison" className="comparison-section" ref={sectionRef}>
      <div className="container">
        <span className="eyebrow">Competitive Comparison</span>
        <h2 className="section-title fade-up">Isolates can&rsquo;t do this. <em>Ours can.</em></h2>

        <div className="comp-table-wrap fade-up">
          <table className="comp-table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th className="pear-col">Pear Foods</th>
                <th>Concentrate</th>
                <th>Isolate</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([attr, pear, conc, iso]) => (
                <tr key={attr}>
                  <td className="attr-col">{attr}</td>
                  <td><span className={cellClass(pear)}>{pear}</span></td>
                  <td><span className={cellClass(conc)}>{conc}</span></td>
                  <td><span className={cellClass(iso)}>{iso}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="comp-footnote">* Satiety and GLP-1 pathway alignment is mechanistically supported by structural and compositional data. GLP-1 validation needed.</p>

        <div className="comp-callout fade-up">
          <p>"Pear Foods occupies the intersection no isolate or concentrate can reach: the nutritional completeness of a whole food, the digestibility of a processed ingredient, and the metabolic architecture of a <em>satiety-supporting functional food.</em>"</p>
        </div>
      </div>
    </section>
  )
}
