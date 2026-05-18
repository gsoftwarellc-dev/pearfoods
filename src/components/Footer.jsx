import logoUrl from '../../logo.png'
import './Footer.css'

const scroll = (e, href) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={e => scroll(e, '#home')}>
              <img src={logoUrl} alt="Pear Foods" />
            </a>
            <p>Legume Protein Technology — preserving nature's nutritional integrity to nourish people and build a more resilient, sustainable food system for the planet.</p>
          </div>
          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><a href="#why" onClick={e => scroll(e, '#why')}>Why Pear Foods</a></li>
              <li><a href="#science" onClick={e => scroll(e, '#science')}>The Science</a></li>
              <li><a href="#ingredient" onClick={e => scroll(e, '#ingredient')}>The Ingredient</a></li>
              <li><a href="#comparison" onClick={e => scroll(e, '#comparison')}>vs. Isolates &amp; Concentrates</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#applications" onClick={e => scroll(e, '#applications')}>Applications</a></li>
              <li><a href="#about" onClick={e => scroll(e, '#about')}>About</a></li>
              <li><a href="#contact" onClick={e => scroll(e, '#contact')}>Request a Meeting</a></li>
              <li><a href="mailto:hello@pearfoods.com">hello@pearfoods.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Pear Foods. Proprietary &amp; Confidential. All rights reserved.</p>
        </div>
        <p className="footer-disclaimer">
          * GLP-1 validation needed. No statements on this website are intended to diagnose, treat, cure, or prevent any disease. All analytical data is from independent laboratory testing. Pear Foods — Proprietary &amp; Confidential.
        </p>
      </div>
    </footer>
  )
}
