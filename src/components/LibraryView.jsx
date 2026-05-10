import React from 'react'
import { usePlayerStore } from '../store/playerStore.js'
import { TrackRow } from './TrackRow.jsx'

export function LibraryView() {
  const { tracks, playlists } = usePlayerStore()
  const allPlaylist = playlists.find(p => p.id === 'pl5')

  const albums = [...new Set(tracks.map(t => t.album))]


  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '40px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, letterSpacing: '-1px', marginBottom: 8 }}>
        Library
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>
        {tracks.length} tracks across {albums.length} playlists
      </p>

      {albums.map(album => {
        const albumTracks = tracks.filter(t => t.album === album)
        return (
          <section key={album} style={{ marginBottom: 40 }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 12,
              letterSpacing: '-0.5px',
              paddingBottom: 10,
              borderBottom: '1px solid var(--border)',
            }}>
              {album}
            </h2>
            {albumTracks.map((track, i) => (
              <TrackRow key={track.id} track={track} index={i} playlist={allPlaylist} />
            ))}
          </section>
        )
      })}
    </div>
  )
}
