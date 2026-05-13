import React, { useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react'
import { usePlayerStore } from '../store/playerStore.js'
import { AlbumArt } from './AlbumArt.jsx'
import { albumPalettes } from '../data/library.js'

// Parse LRC-style or plain lyrics into an array of { time, text } objects.
// Supports "[mm:ss.xx] line" format or plain newline-separated lines.
function parseLyrics(raw) {
  if (!raw) return []
  const lines = raw.trim().split('\n')
  const timed = []
  const plain = []
  const re = /^\[(\d+):(\d+(?:\.\d+)?)\]\s*(.*)/

  for (const line of lines) {
    const m = line.match(re)
    if (m) {
      timed.push({ time: parseInt(m[1]) * 60 + parseFloat(m[2]), text: m[3] })
    } else if (line.trim()) {
      plain.push({ time: null, text: line.trim() })
    }
  }

  if (timed.length > 0) return timed.sort((a, b) => a.time - b.time)
  return plain
}

// Find index of the current lyric line based on playback position
function currentLineIndex(lines, seek) {
  if (!lines.length) return -1
  if (lines[0].time === null) {
    // Plain lyrics — distribute evenly
    return -1
  }
  let idx = 0
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].time <= seek) idx = i
    else break
  }
  return idx
}

// Draw a radial bar visualizer on the canvas
function drawVisualizer(ctx, w, h, t, isPlaying, bpm, palette) {
  ctx.clearRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2
  const bars = 120
  const beatHz = bpm ? bpm / 60 : 1.0
  const innerR = Math.min(w, h) * 0.22
  const outerRMax = Math.min(w, h) * 0.46

  const c0 = palette?.[0] ?? '#00e5ff'
  const c1 = palette?.[1] ?? '#7c3aed'

  for (let i = 0; i < bars; i++) {
    const angle = (i / bars) * Math.PI * 2 - Math.PI / 2
    const phase = (i / bars) * Math.PI * 6

    let activity
    if (isPlaying) {
      const a = Math.abs(Math.sin(t * beatHz + phase)) * 0.55
      const b = Math.abs(Math.sin(t * beatHz * 2.3 + phase * 1.4)) * 0.28
      const c = Math.abs(Math.sin(t * beatHz * 0.4 + phase * 0.6)) * 0.17
      activity = a + b + c
    } else {
      activity = 0.04 + 0.02 * Math.sin(t * 0.5 + phase)
    }

    const r2 = innerR + (outerRMax - innerR) * activity

    const x1 = cx + Math.cos(angle) * innerR
    const y1 = cy + Math.sin(angle) * innerR
    const x2 = cx + Math.cos(angle) * r2
    const y2 = cy + Math.sin(angle) * r2

    // Alternate color by bar index
    const progress = i / bars
    const hex = interpolateHex(c0, c1, progress)
    ctx.strokeStyle = hex + (isPlaying ? 'cc' : '44')
    ctx.lineWidth = isPlaying ? 2.5 : 1.5
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
  }

  // Subtle center glow
  const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, innerR * 0.9)
  glow.addColorStop(0, c0 + (isPlaying ? '18' : '08'))
  glow.addColorStop(1, 'transparent')
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(cx, cy, innerR * 0.9, 0, Math.PI * 2)
  ctx.fill()
}

function interpolateHex(a, b, t) {
  const ra = parseInt(a.slice(1, 3), 16)
  const ga = parseInt(a.slice(3, 5), 16)
  const ba = parseInt(a.slice(5, 7), 16)
  const rb = parseInt(b.slice(1, 3), 16)
  const gb = parseInt(b.slice(3, 5), 16)
  const bb = parseInt(b.slice(5, 7), 16)
  const r = Math.round(ra + (rb - ra) * t).toString(16).padStart(2, '0')
  const g = Math.round(ga + (gb - ga) * t).toString(16).padStart(2, '0')
  const bx = Math.round(ba + (bb - ba) * t).toString(16).padStart(2, '0')
  return `#${r}${g}${bx}`
}

export function ZenMode() {
  const {
    currentTrack, isPlaying, progress, duration,
    togglePlay, skipNext, skipPrev, setZenMode,
  } = usePlayerStore()

  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const lyricsRef = useRef(null)

  const palette = albumPalettes[currentTrack?.album] ?? ['#00e5ff', '#7c3aed', '#080a0f']

  // Canvas animation loop
  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const w = canvas.width
    const h = canvas.height
    const t = Date.now() / 1000
    drawVisualizer(ctx, w, h, t, isPlaying, currentTrack?.bpm, palette)
    animRef.current = requestAnimationFrame(draw)
  }, [isPlaying, currentTrack?.bpm, palette])

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw)
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [draw])

  // Resize canvas to fill container
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ro = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx => ctx && ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    })
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [])

  // Parse and highlight lyrics
  const lines = parseLyrics(currentTrack?.lyrics)
  const seek = progress * (duration || 1)
  const activeLine = currentLineIndex(lines, seek)

  // Distribute plain lyrics by progress
  const displayLines = lines.length > 0 && lines[0].time === null
    ? lines.map((l, i) => ({ ...l, active: Math.round(progress * lines.length) === i }))
    : lines.map((l, i) => ({ ...l, active: i === activeLine }))

  // Auto-scroll lyrics container to active line
  useEffect(() => {
    if (!lyricsRef.current) return
    const active = lyricsRef.current.querySelector('[data-active="true"]')
    if (active) active.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [activeLine, progress])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 10002,
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', background: '#000',
      }}
    >
      {/* Blurred album art background */}
      {currentTrack?.art && (
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${currentTrack.art})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'blur(90px) brightness(0.18) saturate(1.4)',
          transform: 'scale(1.1)',
        }} />
      )}

      {/* Subtle dark vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Exit button */}
      <button
        onClick={() => setZenMode(false)}
        style={{
          position: 'absolute', top: 20, right: 20, zIndex: 10,
          width: 40, height: 40, borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'rgba(255,255,255,0.6)',
          transition: 'background 0.2s, color 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)'; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
      >
        <X size={18} />
      </button>

      {/* Main layout */}
      <div style={{
        position: 'relative', zIndex: 1,
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '60px 24px 24px',
        gap: 0,
      }}>

        {/* Canvas visualizer — fills the whole background area */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
          }}
        />

        {/* Album art floating over visualizer */}
        <div style={{
          position: 'relative',
          width: 'min(220px, 38vw)',
          aspectRatio: '1/1',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: `0 0 60px ${palette[0]}55, 0 0 0 1px rgba(255,255,255,0.08)`,
          flexShrink: 0,
          animation: isPlaying ? 'growAndShrink 1.5s linear infinite' : 'none',
        }}>
          <AlbumArt track={currentTrack} size={220} style={{ width: '100%', height: '100%', display: 'block' }} />
        </div>

        {/* Track title & artist */}
        <div style={{ position: 'relative', textAlign: 'center', marginTop: 24, marginBottom: lines.length ? 16 : 0 }}>
          <div style={{
            fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 700,
            fontFamily: 'var(--font-display)',
            color: '#fff', letterSpacing: '-0.3px',
          }}>
            {currentTrack?.title}
          </div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>
            {currentTrack?.artist}
          </div>
        </div>

        {/* Lyrics panel */}
        {/* {lines.length > 0 && (
          <div
            ref={lyricsRef}
            style={{
              position: 'relative',
              maxHeight: '28vh',
              overflowY: 'auto',
              width: '100%',
              maxWidth: 580,
              textAlign: 'center',
              maskImage: 'linear-gradient(transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(transparent 0%, black 15%, black 85%, transparent 100%)',
              scrollbarWidth: 'none',
            }}
          >
            <div style={{ padding: '24px 0' }}>
              {displayLines.map((line, i) => (
                <p
                  key={i}
                  data-active={line.active ? 'true' : 'false'}
                  style={{
                    fontSize: line.active ? 'clamp(15px, 2.2vw, 19px)' : 'clamp(13px, 1.8vw, 16px)',
                    fontWeight: line.active ? 600 : 400,
                    color: line.active ? '#fff' : 'rgba(255,255,255,0.28)',
                    lineHeight: 1.6,
                    marginBottom: 10,
                    transition: 'all 0.4s ease',
                    fontFamily: line.active ? 'var(--font-display)' : 'var(--font-body)',
                  }}
                >
                  {line.text}
                </p>
              ))}
            </div>
          </div>
        )}

        {lines.length === 0 && (
          <p style={{
            position: 'relative',
            fontSize: 13, color: 'rgba(255,255,255,0.2)',
            marginTop: 12, fontStyle: 'italic',
          }}>
            No lyrics — add them in library.js
          </p>
        )} */}
      </div>

      {/* Bottom controls */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 24, padding: '16px 24px 32px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
      }}>
        <button
          onClick={skipPrev}
          style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 0, padding: 10, transition: 'color 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
        >
          <SkipBack size={26} fill="currentColor" />
        </button>

        <button
          onClick={togglePlay}
          style={{
            background: 'var(--accent)', color: '#000',
            width: 58, height: 58, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, transition: 'transform 0.1s, filter 0.1s',
          }}
          onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.15)'}
          onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.92)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          {isPlaying ? <Pause size={22} fill="#000" /> : <Play size={22} fill="#000" style={{ marginLeft: 3 }} />}
        </button>

        <button
          onClick={skipNext}
          style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 0, padding: 10, transition: 'color 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
        >
          <SkipForward size={26} fill="currentColor" />
        </button>
      </div>

      <style>{`
        @keyframes zenSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  )
}
