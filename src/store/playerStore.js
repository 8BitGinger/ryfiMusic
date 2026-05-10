import { create } from 'zustand'
import { Howl } from 'howler'
import { tracks, playlists } from '../data/library.js'

let howl = null

function createHowl(src, onEnd, onLoad) {
  if (howl) { howl.unload() }
  if (!src) return null
  howl = new Howl({
    src: [src],
    html5: true,
    volume: 0.8,
    onend: onEnd,
    onload: onLoad,
    onloaderror: () => console.warn('RyFi: Could not load audio. Check your src path.'),
  })
  return howl
}

export const usePlayerStore = create((set, get) => ({
  // ── Library ────────────────────────────────────────────────────────────────
  tracks,
  playlists,

  // ── Playback state ─────────────────────────────────────────────────────────
  currentTrack: null,
  currentPlaylist: null,
  isPlaying: false,
  progress: 0,       // 0–1
  duration: 0,
  volume: 0.8,
  isMuted: false,
  shuffle: false,
  repeat: 'none',   // 'none' | 'one' | 'all'
  queue: [],
  queueIndex: 0,
  isLoading: false,

  // ── UI state ───────────────────────────────────────────────────────────────
  activeView: 'home',        // 'home' | 'playlist' | 'search' | 'library'
  activePlaylistId: null,
  isSidebarOpen: true,
  isPlayerExpanded: false,

  // ── Actions ────────────────────────────────────────────────────────────────
  setActiveView: (view, playlistId = null) =>
    set({ activeView: view, activePlaylistId: playlistId }),

  setPlayerExpanded: (v) => set({ isPlayerExpanded: v }),

  playTrack: (track, playlist = null, queueOverride = null) => {
    const state = get()
    const queue = queueOverride || (playlist
      ? playlist.trackIds.map(id => tracks.find(t => t.id === id)).filter(Boolean)
      : [track])
    const queueIndex = queue.findIndex(t => t.id === track.id)

    set({ currentTrack: track, currentPlaylist: playlist, queue, queueIndex, isLoading: true })

    const h = createHowl(
      track.src,
      () => get().handleTrackEnd(),
      () => {
        set({ duration: h.duration(), isLoading: false })
        h.play()
        set({ isPlaying: true })
        startProgressLoop()
        updateMediaSession(track)
      }
    )
    // If no src, still update UI
    if (!track.src) {
      set({ isLoading: false, isPlaying: false, duration: track.duration || 0, progress: 0 })
    }
  },

  togglePlay: () => {
    const { isPlaying } = get()
    if (!howl) return
    if (isPlaying) { howl.pause(); set({ isPlaying: false }) }
    else { howl.play(); set({ isPlaying: true }); startProgressLoop() }
  },

  seekTo: (ratio) => {
    const { duration } = get()
    if (howl && duration) {
      howl.seek(ratio * duration)
      set({ progress: ratio })
    }
  },

  setVolume: (v) => {
    set({ volume: v, isMuted: v === 0 })
    if (howl) howl.volume(v)
  },

  toggleMute: () => {
    const { isMuted, volume } = get()
    const next = !isMuted
    set({ isMuted: next })
    if (howl) howl.volume(next ? 0 : volume)
  },

  toggleShuffle: () => set(s => ({ shuffle: !s.shuffle })),

  cycleRepeat: () => set(s => ({
    repeat: s.repeat === 'none' ? 'all' : s.repeat === 'all' ? 'one' : 'none'
  })),

  skipNext: () => {
    const { queue, queueIndex, shuffle, repeat } = get()
    if (!queue.length) return
    let next
    if (shuffle) {
      next = Math.floor(Math.random() * queue.length)
    } else {
      next = queueIndex + 1
      if (next >= queue.length) next = repeat === 'all' ? 0 : queue.length - 1
    }
    get().playTrack(queue[next], get().currentPlaylist, queue)
    get().setQueueIndex(next)
  },

  skipPrev: () => {
    const { queue, queueIndex, progress } = get()
    if (!queue.length) return
    if (progress > 0.05 && howl) { howl.seek(0); set({ progress: 0 }); return }
    const prev = Math.max(0, queueIndex - 1)
    get().playTrack(queue[prev], get().currentPlaylist, queue)
    get().setQueueIndex(prev)
  },

  setQueueIndex: (i) => set({ queueIndex: i }),

  handleTrackEnd: () => {
    const { repeat, queue, queueIndex, shuffle } = get()
    if (repeat === 'one') { howl && howl.seek(0); howl && howl.play(); return }
    get().skipNext()
  },

  updateProgress: () => {
    if (!howl || !get().isPlaying) return
    const seek = howl.seek()
    const dur = howl.duration()
    if (typeof seek === 'number' && dur) {
      set({ progress: seek / dur })
    }
  },
}))

// ── Progress loop ─────────────────────────────────────────────────────────────
let rafId = null
function startProgressLoop() {
  if (rafId) cancelAnimationFrame(rafId)
  const loop = () => {
    usePlayerStore.getState().updateProgress()
    rafId = requestAnimationFrame(loop)
  }
  rafId = requestAnimationFrame(loop)
}

// ── Media Session API ─────────────────────────────────────────────────────────
function updateMediaSession(track) {
  if (!('mediaSession' in navigator)) return
  navigator.mediaSession.metadata = new MediaMetadata({
    title: track.title,
    artist: track.artist,
    album: track.album,
  })
  navigator.mediaSession.setActionHandler('play', () => usePlayerStore.getState().togglePlay())
  navigator.mediaSession.setActionHandler('pause', () => usePlayerStore.getState().togglePlay())
  navigator.mediaSession.setActionHandler('nexttrack', () => usePlayerStore.getState().skipNext())
  navigator.mediaSession.setActionHandler('previoustrack', () => usePlayerStore.getState().skipPrev())
}
