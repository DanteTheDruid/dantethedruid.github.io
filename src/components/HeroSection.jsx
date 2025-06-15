import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <FontAwesomeIcon icon={faTwitch} />
            <span>Terraria × Twitch Integration</span>
          </div>
          <h1 className="hero-title">Twitch Integration Plus</h1>
          <p className="hero-subtitle">Interactive Terraria Streaming Experience</p>
          <p className="hero-description">
            Transform your Terraria streams with real-time viewer interaction, token rewards, and an extensive spawn system. 
            Let your viewers control the game through chat commands, spawn creatures, and earn rewards for watching!
          </p>
          <div className="hero-buttons">
            <a href="#setup" className="btn btn-primary" onClick={() => scrollToSection('setup')}>
              <FontAwesomeIcon icon={faRocket} />
              Get Started
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">45+</span>
              <span className="stat-label">Commands</span>
            </div>
            <div className="stat">
              <span className="stat-number">25+</span>
              <span className="stat-label">Redemptions</span>
            </div>
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Spawnable Mobs</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-header">
              <FontAwesomeIcon icon={faTerminal} />
              <span>Live Chat Commands</span>
            </div>
            <div className="card-content">
              <div className="chat-example">
                <div className="chat-message viewer">
                  <span className="username">GamerViewer123:</span>
                  <span className="message">!health</span>
                </div>
                <div className="chat-message bot">
                  <span className="username">TwitchBot:</span>
                  <span className="message">@GamerViewer123 Player health: 450/500 (90%)</span>
                </div>
                <div className="chat-message viewer">
                  <span className="username">StreamFan:</span>
                  <span className="message">!redeem heal</span>
                </div>
                <div className="chat-message bot">
                  <span className="username">TwitchBot:</span>
                  <span className="message">@StreamFan Redeemed 'heal' for 50 tokens! 💚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 