import React, { lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import { usePlayerStore } from './store/playerStore.js'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts.js'
import { Sidebar } from './components/Sidebar.jsx'
import { PlayerBar } from './components/PlayerBar.jsx'
import { FullScreenPlayer } from './components/FullScreenPlayer.jsx'
import { ZenMode } from './components/ZenMode.jsx'

const HomeView = lazy(() => import('./components/HomeView.jsx').then(m => ({ default: m.HomeView })))
const PlaylistView = lazy(() => import('./components/PlaylistView.jsx').then(m => ({ default: m.PlaylistView })))
const SearchView = lazy(() => import('./components/SearchView.jsx').then(m => ({ default: m.SearchView })))
const LibraryView = lazy(() => import('./components/LibraryView.jsx').then(m => ({ default: m.LibraryView })))
const Artists = lazy(() => import('./components/Artists.jsx').then(m => ({ default: m.Artists })))

function MainContent() {
  const { activeView, activePlaylistId } = usePlayerStore()

  return (
    <Suspense fallback={<div style={{ height: '100%' }} />}>
      {activeView === 'home'     && <HomeView />}
      {activeView === 'playlist' && <PlaylistView playlistId={activePlaylistId} />}
      {activeView === 'search'   && <SearchView />}
      {activeView === 'library'  && <LibraryView />}
      {activeView === 'artists' && <Artists />}
      {!['home','playlist','search','library','artists'].includes(activeView) && <HomeView />}
    </Suspense>
  )
}

export default function App() {
  useKeyboardShortcuts()
  const { isPlayerExpanded, isZenMode, currentTrack } = usePlayerStore()

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

      {/* Full-screen player overlay */}
      <AnimatePresence>
        {isPlayerExpanded && currentTrack && !isZenMode && (
          <FullScreenPlayer key="fullscreen-player" />
        )}
      </AnimatePresence>

      {/* Zen mode overlay */}
      <AnimatePresence>
        {isZenMode && currentTrack && (
          <ZenMode key="zen-mode" />
        )}
      </AnimatePresence>
    </div>
  )
}
