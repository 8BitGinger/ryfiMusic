import React from 'react'
import { Home, Search, Library, Radio, Music2, ChevronRight } from 'lucide-react'
import { usePlayerStore } from '../store/playerStore.js'
import { AlbumArt } from './AlbumArt.jsx'

import logo from '/recordLogo.png'

const navItems = [
  { icon: Home, label: 'Home', view: 'home' },
  { icon: Search, label: 'Search', view: 'search' },
  { icon: Library, label: 'Library', view: 'library' },
  { icon: Music2, label: 'Artists', view: 'artists' },
]

export function Sidebar() {
  const { activeView, activePlaylistId, playlists, setActiveView, currentTrack, playTrack } = usePlayerStore()

  return (
    <aside className='sidebar'>
      {/* Logo */}
      <div style={{ padding: '28px 24px 20px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logo} alt="RyFi Logo" className='nav-logo' />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: '-0.5px',
            background: 'linear-gradient(135deg, #fff 40%, var(--accent))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            RyFi
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: '0 12px', flexShrink: 0 }}>
        {navItems.map(({ icon: Icon, label, view }) => {
          const active = activeView === view
          return (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                width: '100%',
                padding: '10px 12px',
                borderRadius: 'var(--radius-md)',
                background: active ? 'var(--bg-active)' : 'transparent',
                color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-display)',
                fontWeight: active ? 600 : 400,
                fontSize: 14,
                transition: 'all 0.15s',
                marginBottom: 2,
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--bg-hover)'; e.currentTarget.style.color = 'var(--text-primary)' }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; if (!active) e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              <Icon size={18} strokeWidth={active ? 2.5 : 1.8} />
              {label}
              {active && <ChevronRight size={12} style={{ marginLeft: 'auto', opacity: 0.5 }} />}
            </button>
          )
        })}
      </nav>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border)', margin: '16px 24px' }} />

      {/* Playlists */}
      <div style={{ padding: '0 12px', flex: 1, overflowY: 'auto', backgroundColor: '#12141f' }}>
        <p style={{
          padding: '0 12px',
          marginBottom: 8,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-display)',
          
        }}>
          Playlists
        </p>
        {playlists.map(pl => {
          const active = activePlaylistId === pl.id
          const track = pl.trackIds.length > 0
            ? usePlayerStore.getState().tracks.find(t => t.id === pl.trackIds[0])
            : null
          return (
            <button
              key={pl.id}
              onClick={() => setActiveView('playlist', pl.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                background: active ? 'var(--bg-active)' : 'transparent',
                textAlign: 'left',
                transition: 'background 0.15s',
                marginBottom: 2,
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--bg-hover)' }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
            >
              <div style={{

                width: 36, height: 36, borderRadius: 6, overflow: 'hidden', flexShrink: 0,
                boxShadow: active ? `0 0 10px ${pl.color}44` : 'none',
                border: active ? `1px solid ${pl.color}44` : '1px solid transparent',
              }}>
                <AlbumArt track={track} size={36} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{
                  fontSize: 13,
                  fontWeight: active ? 600 : 400,
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-body)',
                }}>
                  {pl.name}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                  {pl.trackIds.length} tracks
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Currently playing mini */}
      {currentTrack && (
        <div style={{
          padding: '12px 16px',
          borderTop: '1px solid var(--border)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
              <AlbumArt track={currentTrack} size={38} />
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentTrack.title}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentTrack.artist}
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}

function RyFiLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#00e5ff" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      {/* Stylized RF waveform mark */}
      <path d="M7 20 L7 12 L11 12 C13 12 14 13 14 15 C14 17 13 18 11 18 L10 18 L14 22" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17 12 L17 22 M17 16 L22 12 M19 17.5 L23 22" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
