import React from 'react'
import { Play, Pause, Shuffle, MoreHorizontal, Clock } from 'lucide-react'
import { usePlayerStore } from '../store/playerStore.js'
import { AlbumArt } from './AlbumArt.jsx'
import { TrackRow } from './TrackRow.jsx'

function formatDuration(secs) {
  const h = Math.floor(secs / 3600)
  const m = Math.floor((secs % 3600) / 60)
  return h > 0 ? `${h} hr ${m} min` : `${m} min`
}

export function PlaylistView({ playlistId }) {
  const { playlists, tracks, playTrack, currentTrack, isPlaying, togglePlay } = usePlayerStore()
  const playlist = playlists.find(p => p.id === playlistId)
  if (!playlist) return null

  const playlistTracks = playlist.trackIds
    .map(id => tracks.find(t => t.id === id))
    .filter(Boolean)

  const totalDuration = playlistTracks.reduce((acc, t) => acc + (t.duration || 0), 0)
  const isThisPlaying = currentTrack && playlistTracks.some(t => t.id === currentTrack.id) && isPlaying

  const handlePlayAll = () => {
    if (isThisPlaying) { togglePlay(); return }
    if (playlistTracks.length > 0) playTrack(playlistTracks[0], playlist)
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{
        padding: '40px 40px 32px',
        background: `linear-gradient(180deg, ${playlist.color}22 0%, transparent 100%)`,
        flexShrink: 0,
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', gap: 28, alignItems: 'flex-end' }}>
          {/* Cover */}
          <div style={{
            width: 180,
            height: 180,
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            flexShrink: 0,
            boxShadow: `0 20px 60px ${playlist.color}33, 0 4px 20px rgba(0,0,0,0.5)`,
          }}>
            <AlbumArt track={playlistTracks[0] || null} size={180} />
          </div>

          {/* Meta */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>
              Playlist
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 4vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 12,
              letterSpacing: '-1px',
            }}>
              {playlist.name}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 16 }}>
              {playlist.description}
            </p>
            <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>RyFi</span>
              {' · '}{playlistTracks.length} songs
              {' · '}{formatDuration(totalDuration)}
            </p>
          </div>
        </div>
        

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 28 }}>
          <button
            onClick={handlePlayAll}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: playlist.color,
              color: '#000',
              padding: '12px 28px',
              borderRadius: 50,
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 14,
              transition: 'transform 0.1s, filter 0.1s',
            }}
            onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.15)'}
            onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {isThisPlaying ? <Pause size={16} fill="#000" /> : <Play size={16} fill="#000" />}
            &nbsp;{isThisPlaying ? 'Pause' : 'Play'}
          </button>

        </div>
      </div>
      
      <button className='back-btn' 
      onClick={() => usePlayerStore.getState().setActiveView('home')}
      >
        ←
      </button>
      {/* Track list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px 24px' }}>
        {/* Column headers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '40px 1fr auto auto auto',
          gap: 12,
          padding: '0 16px 8px',
          borderBottom: '1px solid var(--border)',
          marginBottom: 8,
        }}>
          <span style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'center' }}>#</span>
          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>TITLE</span>
          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>GENRE</span>
          <span></span>
          <span style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'right' }}><Clock size={11} /></span>
        </div>
        {playlistTracks.map((track, i) => (
          <TrackRow key={track.id} track={track} index={i} playlist={playlist} />
        ))}
      </div>
    </div>
  )
}
