import React from 'react'
import { usePlayerStore } from './store/playerStore.js'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts.js'
import { Sidebar } from './components/Sidebar.jsx'
import { PlayerBar } from './components/PlayerBar.jsx'
import { HomeView } from './components/HomeView.jsx'
import { PlaylistView } from './components/PlaylistView.jsx'
import { SearchView } from './components/SearchView.jsx'
import { LibraryView } from './components/LibraryView.jsx'

function MainContent() {
  const { activeView, activePlaylistId } = usePlayerStore()

  switch (activeView) {
    case 'home':    return <HomeView />
    case 'playlist': return <PlaylistView playlistId={activePlaylistId} />
    case 'search':  return <SearchView />
    case 'library': return <LibraryView />
    default:        return <HomeView />
  }
}

export default function App() {
  useKeyboardShortcuts()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
    }}>
      {/* Top: Sidebar + Main */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar />
        <main style={{
          flex: 1,
          overflow: 'hidden',
          background: 'var(--bg-base)',
          position: 'relative',
        }}>
          {/* Ambient background glow */}
          <div style={{
            position: 'absolute',
            top: -100, right: -100,
            width: 400, height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: -50, left: -50,
            width: 300, height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
            <MainContent />
          </div>
        </main>
      </div>

      {/* Bottom: Player */}
      <PlayerBar />
    </div>
  )
}
