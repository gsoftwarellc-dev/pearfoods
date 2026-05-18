import { useEffect, useRef } from 'react'
import heroTwoUrl from '../../hero_2.png'
import './Hero.css'

const stats = [
  { num: '100%', label: '100% protein retention', sub: 'All protein preserved' },
  { num: '87%', label: 'PDCAAS digestibility', sub: 'Highly digestible' },
  { num: '94%', label: 'Trypsin inhibitor reduction', sub: 'Barriers eliminated' },
  { num: '75%', label: 'Raffinose reduction', sub: 'Bloating reduced' },
  { num: '100%', label: 'Fiber retained', sub: 'Fiber intact' },
]

export default function Hero() {
  const fadeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    fadeRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ref = i => el => { fadeRefs.current[i] = el }

  const scroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>

      {/* ── Hero 1: Main content ── */}
      <section id="home" className="hero hero-main">
        <div className="hero-main-grid" />
        <div className="hero-inner">
          <div className="hero-label">Legume Protein Technology</div>
          <h1 className="hero-headline fade-up" ref={ref(1)}>
            Protein + Fiber.<br /><em>Preserved.</em><br />Proven.
          </h1>
          <p className="hero-sub fade-up" ref={ref(2)}>
            The first legume protein ingredient with 100% protein retention, preserved fiber, and 87% digestibility — validated by 10 independent methods. No extraction. No additives. Satiety and glycemic response pathway aligned.
          </p>
          <div className="hero-ctas fade-up" ref={ref(3)}>
            <a href="#science" className="btn-primary" onClick={e => scroll(e, '#science')}>Explore the Science →</a>
            <a href="#contact" className="btn-secondary" onClick={e => scroll(e, '#contact')}>Request a Meeting</a>
          </div>
          <div className="hero-stats fade-up" ref={ref(4)}>
            {stats.map(({ num, label, sub }) => (
              <div key={num + label} className="hero-stat">
                <div className="hero-stat-num">{num}</div>
                <div className="hero-stat-label">{label}</div>
                <div className="hero-stat-sub">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero 2: IFT Tradeshow ── */}
      <section className="hero-ift">
        <div className="hero-ift-photo" style={{ backgroundImage: `url(${heroTwoUrl})` }} />
        <div className="hero-ift-grid" />
        <div className="hero-ift-corner" />
        <div className="hero-ift-corner-bl" />

        {/* Main content anchored to bottom */}
        <div className="hero-ift-content">
          <div className="ift-tag fade-up" ref={ref(5)}>You&rsquo;re invited</div>
          <h2 className="ift-headline fade-up" ref={ref(6)}>
            Meet us at<br /><em>booth ST76</em>
          </h2>
          <div className="ift-divider" />
          <p className="ift-body fade-up" ref={ref(7)}>
            Join us for expert consultations, and a first look at our latest innovations — all on the expo floor where science meets real-world solutions.
          </p>
          <div className="ift-actions fade-up" ref={ref(8)}>
            <a href="#contact" className="ift-booth-badge" onClick={e => scroll(e, '#contact')}>
              Reserve a Meeting Slot →
            </a>
            <a href="#science" className="ift-learn-more" onClick={e => scroll(e, '#science')}>
              Our Science
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
