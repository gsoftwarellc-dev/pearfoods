import { useEffect, useState } from 'react'
import logoUrl from '../../logo.png'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#why', label: 'Why Pear Foods' },
  { href: '#science', label: 'The Science' },
  { href: '#ingredient', label: 'The Ingredient' },
  { href: '#comparison', label: 'vs. Isolates' },
  { href: '#applications', label: 'Applications' },
  { href: '#about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

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

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`}>
      <a href="#home" className="nav-logo" onClick={e => handleClick(e, '#home')}>
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
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={active === href.replace('#', '') ? 'nav-link--active' : ''}
              onClick={e => handleClick(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={e => handleClick(e, '#contact')}>
            Request a Meeting
          </a>
        </li>
      </ul>
    </nav>
  )
}
