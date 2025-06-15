import { useState, useEffect } from 'react'
import './styles.css'
import Dock from './components/Dock'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import CommandsSection from './components/CommandsSection'
import SetupGuideSection from './components/SetupGuideSection'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton'
import LoadingScreen from './components/LoadingScreen'
import KeyboardShortcutsHelp from './components/KeyboardShortcutsHelp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faStar, faTerminal, faCog, faDownload } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const dockItems = [
    { 
      icon: <FontAwesomeIcon icon={faHome} size="lg" />, 
      label: 'Home', 
      onClick: () => scrollToSection('home') 
    },
    { 
      icon: <FontAwesomeIcon icon={faStar} size="lg" />, 
      label: 'Features', 
      onClick: () => scrollToSection('features') 
    },
    { 
      icon: <FontAwesomeIcon icon={faTerminal} size="lg" />, 
      label: 'Commands', 
      onClick: () => scrollToSection('commands') 
    },
    { 
      icon: <FontAwesomeIcon icon={faCog} size="lg" />, 
      label: 'Setup', 
      onClick: () => scrollToSection('setup') 
    },
    { 
      icon: <FontAwesomeIcon icon={faDownload} size="lg" />, 
      label: 'Download', 
      onClick: () => scrollToSection('download') 
    },
  ]

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="App">
      <HeroSection />
      <FeaturesSection />
      <CommandsSection />
      <SetupGuideSection />
      <DownloadSection />
      <Footer />
      <Dock 
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      <BackToTopButton />
      <KeyboardShortcutsHelp />
    </div>
  )
}

export default App
