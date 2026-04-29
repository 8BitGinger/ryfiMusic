import React from 'react'

export function EqBars({ size = 14, color = 'var(--accent)' }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'flex-end',
        gap: '2px',
        height: size,
        paddingBottom: 1,
      }}
    >
      {[0.6, 1.0, 0.75, 0.45, 0.9].map((h, i) => (
        <span
          key={i}
          className="eq-bar"
          style={{
            height: size,
            background: color,
            '--dur': `${0.5 + i * 0.15}s`,
            transformOrigin: 'bottom',
          }}
        />
      ))}
    </span>
  )
}
