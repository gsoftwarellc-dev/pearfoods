import { Link } from 'react-router-dom'
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
              <li><a href="#applications" onClick={e => scroll(e, '#applications')}>Applications</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about" onClick={e => scroll(e, '#about')}>About</a></li>
              <li><Link to="/global-impact">Global Impact</Link></li>
              <li><a href="#contact" onClick={e => scroll(e, '#contact')}>Request a Meeting</a></li>
              <li><a href="mailto:hello@pearfoods.com">hello@pearfoods.com</a></li>
              <li>
                <a href="https://www.linkedin.com/company/pearfoods" target="_blank" rel="noopener noreferrer" className="footer-linkedin">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Pear Foods. Proprietary &amp; Confidential. All rights reserved.</p>
        </div>
        <p className="footer-disclaimer">
          * GLP-1 validation needed. No statements on this website are intended to diagnose, treat, cure, or prevent any disease. All analytical data is from independent laboratory testing.
        </p>
      </div>
    </footer>
  )
}
