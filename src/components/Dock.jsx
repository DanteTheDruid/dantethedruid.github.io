import { useState, useRef } from 'react'
import './Dock.css'

const Dock = ({ items, panelHeight = 68, baseItemSize = 50, magnification = 70 }) => {
  const [mousePosition, setMousePosition] = useState({ x: -1, y: -1 })
  const dockRef = useRef(null)

  const handleMouseMove = (e) => {
    if (dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: -1, y: -1 })
  }

  const calculateItemSize = (index) => {
    if (mousePosition.x === -1) return baseItemSize

    const itemCenter = (index + 0.5) * (baseItemSize + 8) // 8px gap
    const distance = Math.abs(mousePosition.x - itemCenter)
    const maxDistance = baseItemSize * 2
    
    if (distance < maxDistance) {
      const factor = Math.cos((distance / maxDistance) * (Math.PI / 2))
      return baseItemSize + (magnification - baseItemSize) * factor
    }
    
    return baseItemSize
  }

  return (
    <div className="dock-container" style={{ height: panelHeight }}>
      <div
        ref={dockRef}
        className="dock"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ height: panelHeight }}
      >
        {items.map((item, index) => {
          const size = calculateItemSize(index)
          const offset = (size - baseItemSize) / 2

          return (
            <div
              key={index}
              className="dock-item"
              style={{
                width: size,
                height: size,
                transform: `translateY(-${offset}px)`,
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
              onClick={item.onClick}
              title={item.label}
            >
              {item.icon}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dock 