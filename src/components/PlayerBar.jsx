import React, { useRef, useState, useCallback } from 'react'
import {
  Play, Pause, SkipBack, SkipForward,
  Volume2, VolumeX, Shuffle, Repeat, Repeat1,
  ChevronUp,
} from 'lucide-react'
import { usePlayerStore } from '../store/playerStore.js'
import { AlbumArt } from './AlbumArt.jsx'
import { EqBars } from './EqBars.jsx'


function fmt(secs) {
  if (!secs || isNaN(secs)) return '0:00'
  const m = Math.floor(secs / 60)
  const s = Math.floor(secs % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function ProgressBar({ progress, duration, onSeek }) {
  const barRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [hoverRatio, setHoverRatio] = useState(0)
  const [dragging, setDragging] = useState(false)

  const getRatio = useCallback((e) => {
    const rect = barRef.current.getBoundingClientRect()
    return Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
  }, [])

  const handleMouseMove = (e) => {
    if (dragging) onSeek(getRatio(e))
    setHoverRatio(getRatio(e))
  }

  const handleMouseDown = (e) => {
    setDragging(true)
    onSeek(getRatio(e))
  }

  const handleMouseUp = () => setDragging(false)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }}>
      <span style={{ fontSize: 11, color: 'var(--text-muted)', minWidth: 36, textAlign: 'right' }}>
        {fmt(progress * duration)}
      </span>
      <div
        ref={barRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => { setHovering(false); setDragging(false) }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          flex: 1,
          height: hovering ? 6 : 4,
          background: 'var(--bg-hover)',
          borderRadius: 3,
          cursor: 'pointer',
          position: 'relative',
          transition: 'height 0.15s',
        }}
      >
        {/* Fill */}
        <div style={{
          position: 'absolute',
          left: 0, top: 0, bottom: 0,
          width: `${progress * 100}%`,
          background: 'var(--accent)',
          borderRadius: 3,
          transition: dragging ? 'none' : 'width 0.1s linear',
        }} />
        {/* Thumb */}
        {hovering && (
          <div style={{
            position: 'absolute',
            left: `${progress * 100}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 12, height: 12,
            borderRadius: '50%',
            background: '#fff',
            boxShadow: '0 0 6px rgba(0,229,255,0.5)',
          }} />
        )}
      </div>
      <span style={{ fontSize: 11, color: 'var(--text-muted)', minWidth: 36 }}>
        {fmt(duration)}
      </span>
    </div>
  )
}

function VolumeControl({ volume, isMuted, setVolume, toggleMute }) {
  const [hovering, setHovering] = useState(false)
  const barRef = useRef(null)

  const handleClick = (e) => {
    const rect = barRef.current.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    setVolume(ratio)
  }

  const displayVol = isMuted ? 0 : volume

  return (
    <div className='hide-small volume' >
      <button
        onClick={toggleMute}
        style={{ color: 'var(--text-secondary)', lineHeight: 0, padding: 4, transition: 'color 0.15s' }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
      >
        {displayVol === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
      <div
        ref={barRef}
        onClick={handleClick}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        
        style={{
          width: 80,
          height: hovering ? 6 : 4,
          background: 'var(--bg-hover)',
          borderRadius: 3,
          cursor: 'pointer',
          position: 'relative',
          transition: 'height 0.15s',
        }}
      >
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: `${displayVol * 100}%`,
          background: hovering ? 'var(--accent)' : 'var(--text-secondary)',
          borderRadius: 3, transition: 'background 0.15s',
        }} />
      </div>
    </div>
  )
}

export function PlayerBar() {
  const {
    currentTrack, isPlaying, progress, duration,
    volume, isMuted, shuffle, repeat, isLoading,
    togglePlay, skipNext, skipPrev, seekTo,
    setVolume, toggleMute, toggleShuffle, cycleRepeat,
    setPlayerExpanded,
  } = usePlayerStore()

  if (!currentTrack) {
    return (
      <div style={{
        height: 'var(--player-height)',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>
          Select a track to begin ✦
        </p>
      </div>
    )
  }

  const RepeatIcon = repeat === 'one' ? Repeat1 : Repeat
  const repeatColor = repeat !== 'none' ? 'var(--accent)' : 'var(--text-secondary)'
  const shuffleColor = shuffle ? 'var(--accent)' : 'var(--text-secondary)'

  return (
    <div style={{
      height: 'var(--player-height)',
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border)',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr',
      alignItems: 'center',
      padding: '0 24px',
      gap: 16,
      flexShrink: 0,
      backdropFilter: 'blur(20px)',
    }}>

      {/* Left: Track info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
        <div
          className="album-art-clickable"
          onClick={() => setPlayerExpanded(true)}
          title="Expand player"
          style={{
            width: 52, height: 52, borderRadius: 8,
            overflow: 'hidden', flexShrink: 0,
            boxShadow: isPlaying ? `0 0 20px var(--accent-glow)` : 'none',
            transition: 'box-shadow 0.5s',
            position: 'relative',
          }}
        >
          <AlbumArt track={currentTrack} size={52} />
          {isPlaying && (
            <div style={{
              position: 'absolute', inset: 0,
              border: '2px solid #00e5ffb2',
              borderRadius: 8,
              animation: 'pulse-ring 3s ease-out infinite',
              pointerEvents: 'none',
            }} />
          )}
          <div className="album-expand-hint">
            <ChevronUp size={16} color="#fff" />
          </div>
        </div>
        <div style={{ minWidth: 0 }}>
          <div className="eq-container">
            {isPlaying && <EqBars size={12} />}
            <span className='hideSmall' style={{
              fontSize: 13, fontWeight: 600,
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              color: 'var(--text-primary)',
            }}>
              {currentTrack.title}
            </span>
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {currentTrack.artist} · {currentTrack.album}
          </div>
        </div>
      </div>

      {/* Center: Controls + progress */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        {/* Transport */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={toggleShuffle}
            style={{ color: shuffleColor, lineHeight: 0, padding: 6, transition: 'color 0.15s' }}
            title="Shuffle (S)"
          >
            <Shuffle size={15} />
          </button>
          <button
            onClick={skipPrev}
            style={{ color: 'var(--text-secondary)', lineHeight: 0, padding: 6, transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            title="Previous (Ctrl+←)"
          >
            <SkipBack size={19} fill="currentColor" />
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            disabled={isLoading}
            style={{
              background: 'var(--accent)',
              color: '#000',
              width: 40, height: 40, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'transform 0.1s, filter 0.1s',
              flexShrink: 0,
              opacity: isLoading ? 0.6 : 1,
            }}
            onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.15)'}
            onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.93)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            title="Play/Pause (Space)"
          >
            {isLoading ? (
              <div style={{ width: 16, height: 16, border: '2px solid #000', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
            ) : isPlaying ? (
              <Pause size={17} fill="#000" />
            ) : (
              <Play size={17} fill="#000" style={{ marginLeft: 2 }} />
            )}
          </button>

          <button
            onClick={skipNext}
            style={{ color: 'var(--text-secondary)', lineHeight: 0, padding: 6, transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            title="Next (Ctrl+→)"
          >
            <SkipForward size={19} fill="currentColor" />
          </button>

          <button
            onClick={cycleRepeat}
            style={{ color: repeatColor, lineHeight: 0, padding: 6, transition: 'color 0.15s' }}
            title="Repeat"
          >
            <RepeatIcon size={15} />
          </button>
        </div>

        {/* Progress */}
        <ProgressBar
          progress={progress}
          duration={duration || currentTrack.duration}
          onSeek={seekTo}
        />
      </div>

      {/* Right: Volume */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <VolumeControl
          volume={volume}
          isMuted={isMuted}
          setVolume={setVolume}
          toggleMute={toggleMute}
        />
      </div>
    </div>
  )
}
