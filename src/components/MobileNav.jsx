import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, Home, Search, Library, Music2 } from 'lucide-react'
import { usePlayerStore } from '../store/playerStore.js'

const navItems = [
  { icon: Home,    label: 'Home',    view: 'home' },
  { icon: Search,  label: 'Search',  view: 'search' },
  { icon: Library, label: 'Library', view: 'library' },
  { icon: Music2,  label: 'Artists', view: 'artists' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const { activeView, setActiveView } = usePlayerStore()
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  function navigate(view) {
    setActiveView(view)
    setOpen(false)
  }

  return (
    <div className="mobile-nav" ref={ref}>
      <button
        className="mobile-nav-btn"
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="mobile-nav-dropdown">
          {navItems.map(({ icon: Icon, label, view }) => {
            const active = activeView === view
            return (
              <button
                key={view}
                className={`mobile-nav-item${active ? ' mobile-nav-item--active' : ''}`}
                onClick={() => navigate(view)}
              >
                <Icon size={18} strokeWidth={active ? 2.5 : 1.8} />
                {label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
