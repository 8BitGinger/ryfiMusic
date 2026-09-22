import React from 'react'
import { Play } from 'lucide-react'
import { usePlayerStore } from '../store/playerStore.js'
import { AlbumArt } from './AlbumArt.jsx'
import logo from '/recordLogo.png'

function PlaylistCard({ playlist, onClick }) {
  const { tracks, playTrack, currentTrack, isPlaying } = usePlayerStore()
  const firstTrack = tracks.find(t => t.id === playlist.trackIds[0])
  const isActive = currentTrack && playlist.trackIds.includes(currentTrack.id)

  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        background: 'var(--bg-elevated)',
        borderRadius: 'var(--radius-lg)',
        padding: 16,
        cursor: 'pointer',
        transition: 'all 0.2s',
        border: `1px solid ${isActive ? playlist.color + '44' : 'var(--border)'}`,
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${playlist.color}22` : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: 'absolute', top: -20, right: -20, width: 80, height: 80,
        borderRadius: '50%', background: playlist.color, opacity: 0.07,
        filter: 'blur(20px)', pointerEvents: 'none',
      }} />

      <div style={{
        width: '100%', paddingBottom: '100%', position: 'relative',
        borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: 14,
      }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <AlbumArt track={firstTrack} size="100%" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Play overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s',
        }}>
          <button
            onClick={e => { e.stopPropagation(); if (firstTrack) playTrack(firstTrack, playlist) }}
            style={{
              background: playlist.color,
              color: '#000',
              width: 52, height: 52, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: hovered ? 'scale(1)' : 'scale(0.8)',
              transition: 'transform 0.2s',
              boxShadow: `0 4px 20px ${playlist.color}88`,
            }}
          >
            <Play size={22} fill="#000" />
          </button>
        </div>
      </div>

      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        marginBottom: 4,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        color: isActive ? playlist.color : 'var(--text-primary)',
      }}>
        {playlist.name}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {playlist.description}
      </div>
    </div>
  )
}

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

export function HomeView() {
  const { playlists, tracks, setActiveView, playTrack } = usePlayerStore()
  const recentTracks = tracks.slice(0, 6)

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '20px' }}>
      {/* Hero */}
      <div className='hero' style={{ marginBottom: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="hero-cover">
        <img src={logo} alt="RyFi Logo"  />
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: 800,
          letterSpacing: '-2px',
          lineHeight: 1,
          marginBottom: 8,
          background: 'linear-gradient(135deg, #fff 30%, var(--accent) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {getGreeting()}.
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>
          Welcome to the RyFi Records universe
        </p>
        </div>
      </div>

      {/* Featured playlists */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 20,
          marginBottom: 20,
          letterSpacing: '-0.5px',
        }}>
          Playlists
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 20,
        }}>
          {playlists.filter(p => p.id !== 'pl5').map(pl => (
            <PlaylistCard
              key={pl.id}
              playlist={pl}
              onClick={() => setActiveView('playlist', pl.id)}
            />
          ))}
        </div>
      </section>

      {/* Recently added */}
      <section>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 20,
          marginBottom: 16,
          letterSpacing: '-0.5px',
        }}>
          Explore
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 12,
        }}>
          {recentTracks.map(track => (
            <button
              key={track.id}
              onClick={() => playTrack(track, playlists.find(p => p.id === 'pl5'))}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 14px',
                textAlign: 'left',
                transition: 'all 0.15s',
                overflow: 'hidden',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-hover)'; e.currentTarget.style.borderColor = 'var(--border-bright)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-elevated)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
                <AlbumArt track={track} size={40} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {track.title}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{track.genre}</div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
