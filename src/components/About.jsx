import { useEffect, useRef } from 'react'
import semImage from '../assets/PearFoods-SEM1.jpg'
import './About.css'

const claims = [
  '100% protein retention vs raw control',
  '87% PDCAAS digestibility score (red lentils)',
  'Protein and fiber preserved together',
  'Satiety and glycemic response pathway aligned through food structure*',
  'Validated across 10 independent analytical methods',
  'No extraction. No fractionation. No additives.',
]

export default function About() {
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
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <span className="eyebrow">About Pear Foods</span>

        <div className="about-banner fade-up">
          <img
            src={semImage}
            alt="Pear Foods SEM imaging — preserved legume macro structure"
            loading="lazy"
          />
          <div className="about-banner-overlay">
            <blockquote>Where clean label food meets <em>functional science.</em></blockquote>
          </div>
        </div>

        <div className="about-grid">
          <div>
            <h2 className="section-title fade-up">Where clean label food meets<br /><em>functional science.</em></h2>
            <p className="about-body fade-up">Pear Foods is a food innovation and legume protein technology company. We have developed a fundamentally new category of legume-based protein ingredient — one that delivers the protein quality and digestibility of a concentrate, with the metabolic architecture and whole-food integrity that no isolate or concentrate can replicate.</p>
            <p className="about-body fade-up">Our proprietary process preserves the essential macro structure of the whole legume: all essential amino acids intact, antinutritional factors inactivated. The result is a ready-to-consume ingredient validated across ten independent analytical methods.</p>
            <p className="about-body fade-up">Pear Foods occupies the intersection no isolate or concentrate technology can reach: the nutritional completeness of a whole food, the digestibility of a processed ingredient, and the metabolic architecture that mechanistically aligns with pathways known to support satiety and glycemic response — delivered as a minimally processed, clean-label, ready-to-consume ingredient.</p>
            <div className="mission-block fade-up">
              <span className="eyebrow" style={{ color: 'var(--g-400)' }}>Mission</span>
              <p>Pear Foods is creating a new generation of clean-label, matrix-preserved protein ingredients that nourish people while working in harmony with the planet. By unlocking the power of abundant and sustainable legumes, we aim to help build a healthier, more resilient global food system for future generations.</p>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="sidebar-card fade-up">
              <span className="eyebrow" style={{ color: 'var(--g-700)' }}>Company Description</span>
              <p>Pear Foods is a legume protein technology company. Validated by a rigorous suite of analytical methods — the Pear Foods processed legume achieves something the industry has not achieved before: high bioavailability inside a preserved macro structure that mechanistically aligns with pathways known to support satiety and glycemic response. The Pear Foods technology results in a minimally processed, clean-label ingredient that reduces digestive discomfort, to work across sports nutrition, metabolic health, and plant-based clean label CPG.</p>
            </div>
            <div className="sidebar-card sidebar-card-alt fade-up">
              <span className="eyebrow" style={{ color: 'var(--g-700)' }}>Core Claims</span>
              <ul className="core-claims">
                {claims.map((c, i) => (
                  <li key={i}><span className="check">✓</span>{c}</li>
                ))}
              </ul>
              <p className="claims-footnote">* GLP-1 validation needed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
