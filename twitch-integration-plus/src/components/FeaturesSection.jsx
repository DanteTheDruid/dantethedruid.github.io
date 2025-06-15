import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPlug, 
  faComments, 
  faCoins, 
  faSlidersH, 
  faGamepad, 
  faCrown, 
  faCode 
} from '@fortawesome/free-solid-svg-icons'

const FeaturesSection = () => {
  const features = [
    {
      icon: faPlug,
      title: "Simple Setup",
      description: "Easy setup, simple configuration settings, no technical knowledge required"
    },
    {
      icon: faComments,
      title: "Real-time Chat",
      description: "Live Twitch chat monitoring with instant command processing and responses"
    },
    {
      icon: faCoins,
      title: "Token Rewards",
      description: "Virtual currency system that rewards viewers for watching and participating. Options to grant tokens for bit donations and to give subscribers 1.5x token earnings, both of which are fully configurable."
    },
    {
      icon: faSlidersH,
      title: "Fully Configurable",
      description: "Every redemption in the mod can have its price changed and can be enabled or disabled entirely in the mod settings."
    },
    {
      icon: faGamepad,
      title: "Interactive Commands",
      description: "Many viewer commands for checking stats, redeeming rewards, and affecting gameplay"
    },
    {
      icon: faCrown,
      title: "Admin Controls",
      description: "Comprehensive streamer and moderator tools for managing the experience"
    },
    {
      icon: faCode,
      title: "Custom Coded",
      description: "Every feature, system, and integration is custom coded from the ground up specifically for this mod—no generic plugins or copy-paste solutions."
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Empower your terraria streams with real-time viewer interaction!</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 