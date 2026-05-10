import React, { useRef, useState, useCallback } from 'react'
import { motion, useDragControls } from 'framer-motion'
import {
  Play, Pause, SkipBack, SkipForward,
  Shuffle, Repeat, Repeat1,
  Volume2, VolumeX, ChevronDown,
} from 'lucide-react'
import { usePlayerStore } from '../store/playerStore.js'
import { AlbumArt } from './AlbumArt.jsx'
import { EqBars } from './EqBars.jsx'
import { albumPalettes } from '../data/library.js'

function fmt(secs) {
  if (!secs || isNaN(secs)) return '0:00'
  const m = Math.floor(secs / 60)
  const s = Math.floor(secs % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function BigProgressBar({ progress, duration, onSeek }) {
  const barRef = useRef(null)
  const [dragging, setDragging] = useState(false)

  const getRatio = useCallback((clientX) => {
    const rect = barRef.current.getBoundingClientRect()
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <div
        ref={barRef}
        onMouseDown={(e) => { setDragging(true); onSeek(getRatio(e.clientX)) }}
        onMouseMove={(e) => { if (dragging) onSeek(getRatio(e.clientX)) }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchStart={(e) => { setDragging(true); onSeek(getRatio(e.touches[0].clientX)) }}
        onTouchMove={(e) => { if (dragging) onSeek(getRatio(e.touches[0].clientX)) }}
        onTouchEnd={() => setDragging(false)}
        style={{
          width: '100%', height: 6,
          background: 'rgba(255,255,255,0.15)',
          borderRadius: 3, cursor: 'pointer', position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: `${progress * 100}%`,
          background: 'var(--accent)', borderRadius: 3,
          transition: dragging ? 'none' : 'width 0.1s linear',
        }} />
        <div style={{
          position: 'absolute',
          left: `${progress * 100}%`,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 14, height: 14,
          borderRadius: '50%',
          background: '#fff',
          boxShadow: '0 0 8px rgba(0,229,255,0.6)',
        }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{fmt(progress * duration)}</span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{fmt(duration)}</span>
      </div>
    </div>
  )
}

export function FullScreenPlayer() {
  const {
    currentTrack, isPlaying, progress, duration,
    volume, isMuted, shuffle, repeat, isLoading,
    togglePlay, skipNext, skipPrev, seekTo,
    setVolume, toggleMute, toggleShuffle, cycleRepeat,
    setPlayerExpanded,
  } = usePlayerStore()

  const dragControls = useDragControls()

  const palette = albumPalettes[currentTrack?.album] || ['#1e2435', '#0e1118', '#080a0f']
  const RepeatIcon = repeat === 'one' ? Repeat1 : Repeat
  const repeatColor = repeat !== 'none' ? 'var(--accent)' : 'rgba(255,255,255,0.45)'
  const shuffleColor = shuffle ? 'var(--accent)' : 'rgba(255,255,255,0.45)'

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 32, stiffness: 320 }}
      drag="y"
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={{ top: 0 }}
      dragElastic={0.25}
      onDragEnd={(_, info) => {
        if (info.offset.y > 80 || info.velocity.y > 500) setPlayerExpanded(false)
      }}
      style={{
        position: 'fixed', inset: 0, zIndex: 10001,
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
        touchAction: 'none',
      }}
    >
      {/* Layered background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(160deg, ${palette[2]}f0 0%, #080a0ff5 60%, #080a0fff 100%)`,
        backdropFilter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute', top: -150, right: -100,
        width: 600, height: 600, borderRadius: '50%',
        background: `radial-gradient(circle, ${palette[0]}35 0%, transparent 70%)`,
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -100, left: -100,
        width: 450, height: 450, borderRadius: '50%',
        background: `radial-gradient(circle, ${palette[1]}28 0%, transparent 70%)`,
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>

        {/* Drag handle — touch this area to swipe down and dismiss */}
        <div
          onPointerDown={(e) => dragControls.start(e)}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '14px 24px 4px', cursor: 'grab', userSelect: 'none' }}
        >
          <div style={{ width: 40, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.18)' }} />
        </div>

        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 16px 8px' }}>
          <button
            onClick={() => setPlayerExpanded(false)}
            style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 0, padding: 8, borderRadius: 8 }}
          >
            <ChevronDown size={24} />
          </button>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Now Playing
          </span>
          <div style={{ width: 40 }} />
        </div>

        {/* Main layout: art + controls */}
        <div
          className="full-player-layout"
          style={{ flex: 1, overflow: 'auto', padding: '8px 32px 32px', alignItems: 'center', display: 'flex', }}
        >
          {/* Album art */}
          <div className="full-player-art-wrap">
            <div style={{
              borderRadius: 16, overflow: 'hidden',
              boxShadow: `0 24px 80px ${palette[0]}70, 0 0 0 1px rgba(255,255,255,0.07)`,
            }} className="full-player-art">
              <AlbumArt track={currentTrack} size={280} style={{ width: '100%', height: '100%', display: 'block' }} />
            </div>
          </div>

          {/* Info + controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, minWidth: 0 }} className="full-player-controls">

            {/* Track info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                {isPlaying && <EqBars size={14} />}
                <h2 style={{
                  fontSize: 24, fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  color: '#fff', lineHeight: 1.2,
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {currentTrack?.title}
                </h2>
              </div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 12 }}>
                {currentTrack?.artist} · {currentTrack?.album}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {currentTrack?.genre && (
                  <span style={{
                    fontSize: 11, fontWeight: 600,
                    padding: '3px 10px', borderRadius: 100,
                    background: 'rgba(255,255,255,0.09)',
                    color: 'rgba(255,255,255,0.45)',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    {currentTrack.genre}
                  </span>
                )}
                {currentTrack?.bpm && (
                  <span style={{
                    fontSize: 11, fontWeight: 600,
                    padding: '3px 10px', borderRadius: 100,
                    background: 'rgba(255,255,255,0.09)',
                    color: 'rgba(255,255,255,0.45)',
                    letterSpacing: '0.06em',
                  }}>
                    {currentTrack.bpm} BPM
                  </span>
                )}
              </div>
            </div>

            {/* Progress */}
            <BigProgressBar
              progress={progress}
              duration={duration || currentTrack?.duration || 0}
              onSeek={seekTo}
            />

            {/* Transport */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <button
                onClick={toggleShuffle}
                style={{ color: shuffleColor, lineHeight: 0, padding: 10, transition: 'color 0.15s' }}
                title="Shuffle"
              >
                <Shuffle size={19} />
              </button>
              <button
                onClick={skipPrev}
                style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 0, padding: 10, transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              >
                <SkipBack size={30} fill="currentColor" />
              </button>
              <button
                onClick={togglePlay}
                disabled={isLoading}
                style={{
                  background: 'var(--accent)', color: '#000',
                  width: 64, height: 64, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: isLoading ? 0.6 : 1, flexShrink: 0,
                  transition: 'transform 0.1s, filter 0.1s',
                }}
                onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.15)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
                onMouseDown={e => e.currentTarget.style.transform = 'scale(0.93)'}
                onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                {isLoading ? (
                  <div style={{ width: 22, height: 22, border: '2px solid #000', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                ) : isPlaying ? (
                  <Pause size={24} fill="#000" />
                ) : (
                  <Play size={24} fill="#000" style={{ marginLeft: 3 }} />
                )}
              </button>
              <button
                onClick={skipNext}
                style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 0, padding: 10, transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              >
                <SkipForward size={30} fill="currentColor" />
              </button>
              <button
                onClick={cycleRepeat}
                style={{ color: repeatColor, lineHeight: 0, padding: 10, transition: 'color 0.15s' }}
                title="Repeat"
              >
                <RepeatIcon size={19} />
              </button>
            </div>

            {/* Volume */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                onClick={toggleMute}
                style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 0, flexShrink: 0 }}
              >
                {(isMuted || volume === 0) ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <div
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  setVolume(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)))
                }}
                style={{
                  flex: 1, height: 4,
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: 2, cursor: 'pointer', position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  width: `${(isMuted ? 0 : volume) * 100}%`,
                  background: 'var(--accent)', borderRadius: 2,
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
