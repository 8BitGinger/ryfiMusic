import React from 'react'
import { ExternalLink, Music, Users, Disc } from 'lucide-react'
import { featuredArtist, collaborators, artistList } from '../data/artists.js'
import { usePlayerStore } from '../store/playerStore.js'

function StatBadge({ value, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontSize: 22, fontWeight: 800,
        fontFamily: 'var(--font-display)',
        background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        {value}
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 }}>
        {label}
      </div>
    </div>
  )
}

function AvatarPlaceholder({ name, size = 80 }) {
  const initials = name.replace('@', '').slice(0, 2).toUpperCase()
  return (
    <div style={{
      width: size, height: size,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, var(--accent2), var(--accent))',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.35, fontWeight: 700,
      color: '#fff', fontFamily: 'var(--font-display)',
      flexShrink: 0,
    }}>
      {initials}
    </div>
  )
}

function CollabCard({ artist }) {
  return (
    <a
      href={artist.sunoUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '16px 20px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'background 0.15s, border-color 0.15s, transform 0.15s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--bg-elevated)'
        e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--bg-surface)'
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateY(0)'        

      }}
    >
      {artist.image
        ? <img src={artist.image} alt={artist.name} style={{ width: 56, filter: 'brightness(1.3)', border: '1px solid rgba(255,255,255,0.3)', height: 56, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
        : <AvatarPlaceholder name={artist.name} size={56} />
      }
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: 3 }}>
          {artist.name}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {artist.collab}
        </div>
      </div>
      <ExternalLink size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
    </a>
  )
}

export function Artists() {
  const { tracks, playTrack } = usePlayerStore()
  const ryfiTracks = tracks.filter(t => t.artist === featuredArtist.name || t.artist?.startsWith(featuredArtist.name))

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '0 0 40px' }}>

      {/* ── Featured Artist Hero ──────────────────────────────────────────── */}
      <div style={{
        position: 'relative',
        minHeight: 360,
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        padding: '0 40px 40px',
      }}>
        {/* Hero background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${featuredArtist.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'brightness(0.45) saturate(0.8)',
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(8,10,15,0) 0%, rgba(8,10,15,0.5) 50%, rgba(8,10,15,0.95) 100%)',
        }} />
        {/* Accent glow */}
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        {/* Artist info */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 720 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--accent)',
              background: 'rgba(0,229,255,0.1)',
              padding: '4px 10px', borderRadius: 100,
              border: '1px solid rgba(0,229,255,0.2)',
              marginTop: '20px',
            }}>
              Featured Artist
            </div>
          </div>

          <div>
            <h1 style={{
              fontSize: 'clamp(48px, 8vw, 80px)',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              color: '#fff',
              lineHeight: 0.95,
              letterSpacing: '-2px',
              marginBottom: 16,
            }}>
              {featuredArtist.name}
            </h1>
            <p style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.65,
              maxWidth: 540,
            }}>
              {featuredArtist.bio}
            </p>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: 32, flexWrap: 'wrap',
            padding: '16px 20px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255,255,255,0.07)',
            width: 'fit-content',
          }}>
            <StatBadge value={featuredArtist.stats.tracks} label="Tracks" />
            <div style={{ width: 1, background: 'var(--border)' }} />
            <StatBadge value={featuredArtist.stats.streams} label="Streams" />
            {/* <div style={{ width: 1, background: 'var(--border)' }} />
            <StatBadge value={featuredArtist.stats.genres} label="Genres" /> */}
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href={featuredArtist.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 22px',
                background: 'var(--accent)',
                color: '#000',
                borderRadius: 100,
                fontWeight: 700,
                fontSize: 14,
                fontFamily: 'var(--font-display)',
                textDecoration: 'none',
                transition: 'filter 0.15s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.1)'; e.currentTarget.style.transform = 'scale(1.03)' }}
              onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ExternalLink size={14} />
              Apple Music
            </a>
            {/* <a
              href={featuredArtist.sunoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 22px',
                background: 'rgba(255,255,255,0.08)',
                color: 'var(--text-primary)',
                borderRadius: 100,
                fontWeight: 600,
                fontSize: 14,
                fontFamily: 'var(--font-display)',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.12)',
                transition: 'background 0.15s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.transform = 'scale(1.03)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              <Music size={14} />
              Suno Profile
            </a> */}
          </div>
        </div>
      </div>

       {/* ── Artists ─────────────────────────────────────────────────── */}
      <div style={{ padding: '40px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <Users size={18} style={{ color: 'var(--accent)' }} />
          <h2 style={{
            fontSize: 18, fontWeight: 700,
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)',
          }}>
            Artists
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          {artistList.map(artist => (
            <CollabCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>

      {/* ── Collaborators ─────────────────────────────────────────────────── */}
      <div style={{ padding: '40px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <Users size={18} style={{ color: 'var(--accent)' }} />
          <h2 style={{
            fontSize: 18, fontWeight: 700,
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)',
          }}>
            Collaborators
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          {collaborators.map(artist => (
            <CollabCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>

      {/* ── Quick-play tracks ─────────────────────────────────────────────── */}
      <div style={{ padding: '40px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <Disc size={18} style={{ color: 'var(--accent)' }} />
          <h2 style={{
            fontSize: 18, fontWeight: 700,
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)',
          }}>
            Top Tracks
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {ryfiTracks.slice(0, 10).map((track, i) => (
            <button
              key={track.id}
              onClick={() => playTrack(track, null, ryfiTracks)}
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '10px 12px',
                borderRadius: 'var(--radius-sm)',
                background: 'transparent',
                textAlign: 'left',
                width: '100%',
                transition: 'background 0.12s',
                color: 'inherit',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{ width: 20, fontSize: 12, color: 'var(--text-muted)', textAlign: 'right', flexShrink: 0 }}>
                {i + 1}
              </span>
              <img
                src={track.art}
                alt={track.title}
                style={{ width: 40, height: 40, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }}
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {track.title}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                  {track.genre}
                </div>
              </div>
              {track.bpm && (
                <span style={{ fontSize: 11, color: 'var(--text-muted)', flexShrink: 0 }}>
                  {track.bpm} BPM
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Artists
