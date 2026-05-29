import React, { useState, useMemo } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { usePlayerStore } from '../store/playerStore.js'
import { TrackRow } from './TrackRow.jsx'

export function SearchView() {
  const { tracks, playlists } = usePlayerStore()
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return tracks.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.artist.toLowerCase().includes(q) ||
      t.album.toLowerCase().includes(q) ||
      t.genre.toLowerCase().includes(q)
    )
  }, [query, tracks])

  const allPlaylist = playlists.find(p => p.id === 'pl5')

  const genres = [...new Set(tracks.map(t => t.genre))]

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '40px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, letterSpacing: '-1px', marginBottom: 24 }}>
        Search
      </h1>

      {/* Search input */}
      <div style={{ position: 'relative', maxWidth: 480, marginBottom: 32 }}>
        <SearchIcon size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
        <input
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search tracks, albums, genres..."
          style={{
            width: '100%',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '12px 16px 12px 40px',
            color: 'var(--text-primary)',
            fontSize: 14,
            outline: 'none',
            transition: 'border-color 0.15s',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
      </div>

      {/* Results */}
      {query.trim() ? (
        results.length > 0 ? (
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 12 }}>
              {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
            </p>
            {results.map((track, i) => (
              <TrackRow key={track.id} track={track} index={i} playlist={allPlaylist} showAlbum />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', paddingTop: 60 }}>
            <SearchIcon size={32} style={{ margin: '0 auto 8px', display: 'block', color: 'var(--text-muted)' }} />
            <p style={{ fontSize: 16 }}>No results for "{query}"</p>
          </div>
        )
      ) : (
        /* Browse by genre */
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginBottom: 16, letterSpacing: '-0.5px' }}>
            Browse by Genre
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {genres.map((genre, i) => {
              const colors = ['#00e5ff', '#7c3aed', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6']
              const c = colors[i % colors.length]
              return (
                <button
                  key={genre}
                  onClick={() => setQuery(genre)}
                  style={{
                    background: `${c}18`,
                    border: `1px solid ${c}33`,
                    color: c,
                    padding: '8px 18px',
                    borderRadius: 50,
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 13,
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${c}30`; e.currentTarget.style.borderColor = `${c}66` }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${c}18`; e.currentTarget.style.borderColor = `${c}33` }}
                >
                  {genre}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
