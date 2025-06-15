import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard, faTimes } from '@fortawesome/free-solid-svg-icons'

const KeyboardShortcutsHelp = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === '?' && !event.ctrlKey && !event.altKey) {
        event.preventDefault()
        setIsVisible(!isVisible)
      }
      if (event.key === 'Escape' && isVisible) {
        setIsVisible(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  if (!isVisible) return null

  const shortcuts = [
    { key: 'Ctrl + F', action: 'Focus Search' },
    { key: 'Alt + 1-5', action: 'Navigate Sections' },
    { key: '↑ ↓', action: 'Navigate Commands' },
    { key: 'Enter', action: 'Select Command' },
    { key: 'Escape', action: 'Exit/Close' },
    { key: '?', action: 'Toggle This Help' }
  ]

  return (
    <div className="keyboard-shortcuts-help">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FontAwesomeIcon icon={faKeyboard} />
          <h4>Keyboard Shortcuts</h4>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <ul>
        {shortcuts.map((shortcut, index) => (
          <li key={index}>
            <span>{shortcut.action}</span>
            <span className="key">{shortcut.key}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default KeyboardShortcutsHelp 