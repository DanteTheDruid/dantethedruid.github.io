import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [focusedLinkIndex, setFocusedLinkIndex] = useState(-1)

  const navLinks = [
    { href: '#home', label: 'Home', section: 'home' },
    { href: '#features', label: 'Features', section: 'features' },
    { href: '#commands', label: 'Commands', section: 'commands' },
    { href: '#setup', label: 'Setup', section: 'setup' },
    { href: '#download', label: 'Download', section: 'download' }
  ]

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.altKey && event.key >= '1' && event.key <= '5') {
        event.preventDefault()
        const linkIndex = parseInt(event.key) - 1
        if (linkIndex < navLinks.length) {
          scrollToSection(navLinks[linkIndex].section)
        }
        return
      }

      if (isMenuOpen) {
        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault()
            setFocusedLinkIndex(prev => 
              prev < navLinks.length - 1 ? prev + 1 : 0
            )
            break
          case 'ArrowUp':
            event.preventDefault()
            setFocusedLinkIndex(prev => 
              prev > 0 ? prev - 1 : navLinks.length - 1
            )
            break
          case 'Enter':
            if (focusedLinkIndex >= 0 && focusedLinkIndex < navLinks.length) {
              scrollToSection(navLinks[focusedLinkIndex].section)
            }
            break
          case 'Escape':
            setIsMenuOpen(false)
            setFocusedLinkIndex(-1)
            break
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen, focusedLinkIndex])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setFocusedLinkIndex(-1)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
    setFocusedLinkIndex(-1)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <FontAwesomeIcon icon={faGamepad} />
          <span>Twitch Integration Plus</span>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          {navLinks.map((link, index) => (
            <a 
              key={link.section}
              href={link.href} 
              className={`nav-link ${index === focusedLinkIndex ? 'focused' : ''} ${link.section === 'download' ? 'download-btn' : ''}`}
              onClick={() => scrollToSection(link.section)}
              onFocus={() => setFocusedLinkIndex(index)}
              onBlur={() => setFocusedLinkIndex(-1)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 