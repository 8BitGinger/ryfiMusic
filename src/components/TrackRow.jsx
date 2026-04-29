import React, { useState } from 'react'
import { Play, Pause, MoreHorizontal, Heart } from 'lucide-react'
import { usePlayerStore } from '../store/playerStore.js'
import { AlbumArt } from './AlbumArt.jsx'
import { EqBars } from './EqBars.jsx'

function formatTime(secs) {
  if (!secs) return '--:--'
  const m = Math.floor(secs / 60)
  const s = Math.floor(secs % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function TrackRow({ track, index, playlist, showAlbum = false }) {
  const { currentTrack, isPlaying, playTrack, togglePlay } = usePlayerStore()
  const isActive = currentTrack?.id === track.id
  const [hovered, setHovered] = useState(false)
  const [liked, setLiked] = useState(false)

  const handlePlay = () => {
    if (isActive) {
      togglePlay()
    } else {
      playTrack(track, playlist)
    }
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onDoubleClick={handlePlay}
      style={{
        display: 'grid',
        gridTemplateColumns: '40px 1fr auto auto auto',
        alignItems: 'center',
        gap: 12,
        padding: '8px 16px',
        borderRadius: 'var(--radius-sm)',
        background: isActive ? 'var(--accent-dim)' : hovered ? 'var(--bg-hover)' : 'transparent',
        cursor: 'default',
        transition: 'background 0.15s',
        userSelect: 'none',
        animation: 'fadeIn 0.3s ease both',
        animationDelay: `${index * 0.04}s`,
      }}
    >
      {/* Index / play button / eq */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24 }}>
        {isActive && isPlaying ? (
          hovered ? (
            <button onClick={handlePlay} style={{ color: 'var(--accent)', lineHeight: 0 }}>
              <Pause size={16} fill="currentColor" />
            </button>
          ) : (
            <EqBars size={14} />
          )
        ) : hovered ? (
          <button onClick={handlePlay} style={{ color: 'var(--text-primary)', lineHeight: 0 }}>
            <Play size={16} fill="currentColor" />
          </button>
        ) : (
          <span style={{ fontSize: 13, color: isActive ? 'var(--accent)' : 'var(--text-muted)', width: 16, textAlign: 'center' }}>
            {index + 1}
          </span>
        )}
      </div>

      {/* Track info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
          <AlbumArt track={track} size={40} />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontSize: 14,
            fontWeight: 500,
            color: isActive ? 'var(--accent)' : 'var(--text-primary)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {track.title}
          </div>
          <div style={{
            fontSize: 12,
            color: 'var(--text-secondary)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {track.artist}
            {showAlbum && <span style={{ color: 'var(--text-muted)' }}> · {track.album}</span>}
          </div>
        </div>
      </div>

      {/* Genre */}
      <div style={{
        fontSize: 12,
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: 120,
        display: window.innerWidth < 900 ? 'none' : 'block',
      }}>
        {track.genre}
      </div>

      {/* Like */}
      <button
        onClick={() => setLiked(l => !l)}
        style={{
          color: liked ? 'var(--accent)' : 'var(--text-muted)',
          opacity: hovered || liked ? 1 : 0,
          transition: 'opacity 0.15s, color 0.15s',
          lineHeight: 0,
          padding: 4,
        }}
      >
        <Heart size={15} fill={liked ? 'currentColor' : 'none'} />
      </button>

      {/* Duration */}
      <div style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'right', minWidth: 38 }}>
        {formatTime(track.duration)}
      </div>
    </div>
  )
}
