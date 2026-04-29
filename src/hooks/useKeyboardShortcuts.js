import { useEffect } from 'react'
import { usePlayerStore } from '../store/playerStore.js'

export function useKeyboardShortcuts() {
  const { togglePlay, skipNext, skipPrev, setVolume, volume, toggleMute } = usePlayerStore()

  useEffect(() => {
    const handler = (e) => {
      // Don't fire if user is typing in an input
      if (e.target.tagName === 'INPUT') return

      switch (e.code) {
        case 'Space':
          e.preventDefault()
          togglePlay()
          break
        case 'ArrowRight':
          if (e.metaKey || e.ctrlKey) { e.preventDefault(); skipNext() }
          break
        case 'ArrowLeft':
          if (e.metaKey || e.ctrlKey) { e.preventDefault(); skipPrev() }
          break
        case 'ArrowUp':
          e.preventDefault()
          setVolume(Math.min(1, volume + 0.05))
          break
        case 'ArrowDown':
          e.preventDefault()
          setVolume(Math.max(0, volume - 0.05))
          break
        case 'KeyM':
          toggleMute()
          break
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [togglePlay, skipNext, skipPrev, setVolume, volume, toggleMute])
}
