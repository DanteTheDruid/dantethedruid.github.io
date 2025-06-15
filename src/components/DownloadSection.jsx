import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faBook, faBug } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const DownloadSection = () => {
  return (
    <>
      {/* Technical Info Section */}
      <section className="technical-info">
        <div className="container">
          <div className="section-header">
            <h2>Technical Information</h2>
          </div>
          
          <div className="tech-grid">
            <div className="tech-item">
              <strong>Platform:</strong>
              <span>Terraria tModLoader</span>
            </div>
            <div className="tech-item">
              <strong>Compatibility:</strong>
              <span>Multiplayer & Single-player</span>
            </div>
            <div className="tech-item">
              <strong>Requirements:</strong>
              <span>tModLoader 1.4+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Download/CTA Section */}
      <section id="download" className="download-section">
        <div className="container">
          <div className="download-content">
            <h2>Ready to Transform Your Terraria Streams?</h2>
            <p>Join the community of streamers using TwitchIntegrationPlus for interactive gameplay</p>
            <div className="download-buttons">
              <a href="#" className="btn btn-primary btn-large disabled">
                <FontAwesomeIcon icon={faClock} />
                Steam Workshop Coming Soon
              </a>
            </div>
            <div className="community-links">
              <a href="#" className="community-link">
                <FontAwesomeIcon icon={faDiscord} />
                Join Discord
              </a>
              <a href="#" className="community-link">
                <FontAwesomeIcon icon={faBook} />
                Documentation
              </a>
              <a href="#" className="community-link">
                <FontAwesomeIcon icon={faBug} />
                Report Issues
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DownloadSection 