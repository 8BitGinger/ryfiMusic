import React, { useMemo, useRef, useState, useEffect } from 'react'
import { albumPalettes } from '../data/library.js'

export function AlbumArt({ track, size = 48, style = {}, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px' } // preload well before scroll reaches it
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const palette = useMemo(() => {
    if (!track) return ['#1a1a2e', '#16213e', '#0f3460']
    return albumPalettes[track.album] || ['#1e2435', '#0e1118', '#080a0f']
  }, [track?.album])

  // Placeholder shown until element scrolls near viewport
  if (!visible) {
    return (
      <div
        ref={ref}
        style={{
          width: size, height: size,
          borderRadius: 'inherit',
          background: `linear-gradient(135deg, ${palette[1]}, ${palette[2]})`,
          flexShrink: 0,
          ...style,
        }}
        className={className}
      />
    )
  }

  if (track?.art) {
    return (
      <img
        src={track.art}
        alt={track?.title}
        width={size}
        height={size}
        loading="lazy"
        style={{ width: size, height: size, objectFit: 'cover', borderRadius: 'inherit', ...style }}
        className={className}
      />
    )
  }

  // Generative gradient art
  const id = `grad-${track?.id || 'none'}`
  const initial = track?.title?.[0] || '♪'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: 'inherit', flexShrink: 0, ...style }}
      className={className}
    >
      <defs>
        <radialGradient id={`${id}-rg`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor={palette[0]} />
          <stop offset="60%" stopColor={palette[1]} />
          <stop offset="100%" stopColor={palette[2]} />
        </radialGradient>
        <filter id={`${id}-blur`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="3" in="noise" result="colorNoise" />
          <feComposite in="colorNoise" in2="SourceGraphic" operator="in" />
          <feBlend in="SourceGraphic" mode="overlay" />
        </filter>
      </defs>
      <rect width="100" height="100" fill={`url(#${id}-rg)`} />
      <circle cx="65" cy="35" r="30" fill={palette[0]} opacity="0.3" />
      <circle cx="20" cy="75" r="20" fill={palette[1]} opacity="0.25" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontSize="36"
        fontWeight="700"
        fill="rgba(255,255,255,0.6)"
        fontFamily="Syne, sans-serif"
      >
        {initial}
      </text>
    </svg>
  )
}
