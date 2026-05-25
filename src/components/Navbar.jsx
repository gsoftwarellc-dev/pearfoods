import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoUrl from '../../logo.png'
import './Navbar.css'

const linksBeforeGlobal = [
  { href: '#home', label: 'Home' },
  { href: '#why', label: 'Why Pear Foods' },
  { href: '#science', label: 'The Science' },
  { href: '#ingredient', label: 'The Ingredient' },
  { href: '#comparison', label: 'vs. Isolates' },
  { href: '#applications', label: 'Applications' },
]

const linksAfterGlobal = [
  { href: '#about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id')
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`}>
      <a href="#home" className="nav-logo" onClick={e => handleAnchorClick(e, '#home')}>
        <img src={logoUrl} alt="Pear Foods" />
      </a>
      <button
        type="button"
        className="nav-toggle"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(open => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className="nav-links">
        {linksBeforeGlobal.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={isHome && active === href.replace('#', '') ? 'nav-link--active' : ''}
              onClick={e => handleAnchorClick(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <Link
            to="/global-impact"
            className={`${location.pathname === '/global-impact' ? 'nav-link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Global Impact
          </Link>
        </li>
        {linksAfterGlobal.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={isHome && active === href.replace('#', '') ? 'nav-link--active' : ''}
              onClick={e => handleAnchorClick(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={e => handleAnchorClick(e, '#contact')}>
            Request a Meeting
          </a>
        </li>
      </ul>
    </nav>
  )
}
