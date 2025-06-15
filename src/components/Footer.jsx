const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Twitch Integration Plus</h3>
            <p>Interactive Terraria streaming experience with real-time viewer engagement and secure Twitch integration.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features" onClick={() => scrollToSection('features')}>Features</a></li>
              <li><a href="#commands" onClick={() => scrollToSection('commands')}>Commands</a></li>
              <li><a href="#setup" onClick={() => scrollToSection('setup')}>Setup Guide</a></li>
              <li><a href="#security" onClick={() => scrollToSection('security')}>Security</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="#">Discord Server</a></li>
              <li><a href="#">Steam Workshop</a></li>
              <li><a href="#">Bug Reports</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Troubleshooting</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 TwitchIntegrationPlus. Open source project for the Terraria community.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 