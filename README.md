# RyFi Records

A personal music streaming app built with React — designed to showcase AI-assisted music produced with [Suno](https://suno.com). Stream tracks directly from Suno's CDN or your own hosted audio files, with a full-featured player, artist profile, and collaborative credits.

## Features

- **Full music player** — play/pause, skip, volume, scrubbing, queue
- **Fullscreen & Zen mode** — distraction-free listening
- **Library & playlist views** — browse by album, genre, or search
- **Artist page** — featured artist hero, stats, collaborator cards, top tracks
- **Keyboard shortcuts** — `Space` play/pause · `Ctrl+→/←` skip · `↑/↓` volume · `M` mute
- **Mobile responsive** — bottom nav, touch-friendly controls
- **PWA ready** — installable on mobile and desktop
- **Suno integration** — use Suno CDN URLs directly as audio sources

## Tech Stack

| Library | Purpose |
|---|---|
| React 18 | UI |
| Vite 5 | Build / dev server |
| Zustand | Player state |
| Howler.js | Audio engine |
| Framer Motion | Animations |
| Lucide React | Icons |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Making It Yours

### Add tracks — [src/data/library.js](src/data/library.js)

```js
{
  id: 't1',
  title: 'My Track',
  artist: 'YourName',
  album: 'My Album',
  duration: 180,          // seconds
  src: '/audio/my-track.mp3',          // local file in /public/audio/
  // or: src: 'https://cdn1.suno.ai/...',  // Suno CDN URL
  art: '/art/my-cover.webp',
  genre: 'Lo-Fi',
  bpm: 90,
}
```

### Update artist profile — [src/data/artists.js](src/data/artists.js)

- Swap `image`, `logo`, `bio`, `portfolioUrl`, and `sunoUrl` in `featuredArtist`
- Add collaborators to the `collaborators` array with their Suno profile URL

### Add cover art & audio

Place files in `/public/art/` and `/public/audio/` respectively, then reference them with `/art/filename.webp` or `/audio/filename.mp3`.

## Build & Deploy

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
```

The `/dist` folder can be deployed to any static host (Vercel, Netlify, GitHub Pages, etc.).
