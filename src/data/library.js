// ─────────────────────────────────────────────────────────────────────────────
// RyFi Music Library
// To add your Suno songs:
//   1. Upload your .mp3 files to /audio/
//   2. Replace the `src` field with the path e.g. '/audio/my-track.mp3'
//   3. Replace `art` with your own cover art in /art/
//   4. Suno also gives you a direct CDN link — you can use that URL directly!
// ─────────────────────────────────────────────────────────────────────────────

export const tracks = [
  {
    id: 't1',
    title: 'Ghost Frequency',
    artist: 'RyFi',
    album: 'Flow Lab',
    duration: 228,
    src: 'https://cdn1.suno.ai/d40a4722-7f2e-40ca-a3d8-f84e35c13832.mp3',            // 👈 replace with your .mp3 path or Suno URL
    art: '/art/ghostFrequency.jpeg',
    genre: 'Noir Country-Trap',
    bpm: 145,
  },
  {
    id: 't2',
    title: 'Whiskey Wolf - Club Cover',
    artist: 'RyFi',
    album: 'Flow Lab',
    duration: 262,
    src: 'https://cdn1.suno.ai/e30861b3-6651-41fe-8e7d-761c6b714544.mp3',            // 👈 replace with your .mp3 path or Suno URL
    art: '/art/whiskeyWolf.png', // 👈 replace with your cover art path or Suno URL
    genre: 'UK Drill',
    bpm: 144,
  },
  {
    id: 't3',
    title: 'Cello\'s Grudge',
    artist: 'RyFi',
    album: 'Flow Lab',
    duration: 194,
    src: 'https://cdn1.suno.ai/8122412c-fbf7-4362-a21c-30eda18e8e2d.mp3',            // 👈 replace with your .mp3 path or Suno URL
    art: '/art/cellosGrudge.png', // 👈 replace with your cover art path or Suno URL
    genre: 'Hardcord Lo-Fi',
    bpm: null,
  },
  {
    id: 't4',
    title: 'Your Last Song - Bagpipe Breakdown',
    artist: 'RyFi',
    album: 'Heart & Break',
    duration: 311,
    src: 'https://cdn1.suno.ai/6b3e6388-e996-4dd0-986c-5e35435c67ea.mp3',            // 👈 replace with your .mp3 path or Suno URL
    art: '/art/yourLastSong.png', // 👈 replace with your cover art path or Suno URL
    genre: 'Dark Celtic Trap',
    bpm: 72,
  },
  {
    id: 't5',
    title: 'I am Infinite',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 323,
    src: 'https://cdn1.suno.ai/afa7021b-7f2a-4076-ac6a-842951504cde.mp3',            // 👈 replace with your .mp3 path or Suno URL
    art: '/art/iamInfinite.png', // 👈 replace with your cover art path or Suno URL
    genre: 'Spiritual Hip-Hop',
    bpm: 95,
  },
  {
    id: 't6',
    title: 'Final Sound',
    artist: 'RyFi',
    album: 'Alt Waves',
    duration: 268,
    src: 'https://cdn1.suno.ai/19c2111b-4f21-40b9-851d-ce8c96877c47.mp3',            // 👈 replace with your .mp3 path or Suno URL
    art: 'https://cdn1.suno.ai/image_19c2111b-4f21-40b9-851d-ce8c96877c47.jpeg', // 👈 replace with your cover art path or Suno URL
    genre: '90\'s Alternative',
    bpm: null,
  },
  {
    id: 't7',
    title: 'Walking in my Power',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 178,
    src: 'https://cdn1.suno.ai/ed4bfdf6-9bca-446b-bdcb-b39cfc2ae9fc.mp3',            // 👈 replace with your .mp3 path or Suno URL
    art: 'https://cdn1.suno.ai/image_ed4bfdf6-9bca-446b-bdcb-b39cfc2ae9fc.jpeg', // 👈 replace with your cover art path or Suno URL
    genre: 'Drum & Bass',
    bpm: 174,
  },
  {
    id: 't8',
    title: 'Trust Fall',
    artist: 'RyFi',
    album: 'Alt Waves',
    duration: 224,
    src: 'https://cdn1.suno.ai/f0ed06e4-2bd0-485e-b226-3471731c6589.mp3',
    art: '/art/trustfall.png',
    genre: 'Midwest Emo',
    bpm: 140,
  },
  {
    id: 't9',
    title: 'Burn the Blueprint',
    artist: 'RyFi',
    album: 'Alt Waves',
    duration: 215,
    src: 'https://cdn1.suno.ai/8ce74465-2da5-487d-a484-c30cc23e418e.mp3',
    art: '/art/burntheBlueprint.png',
    genre: 'Chillwave',
    bpm: 140,
  },
  {
    id: 't10',
    title: 'Back in Blood - RyFi Remix',
    artist: 'RyFi',
    album: 'Flow Lab',
    duration: 244,
    src: 'https://cdn1.suno.ai/6485b372-0c27-46ba-add2-44b46330ef8c.mp3',
    art: '/art/backinBlood.png',
    genre: 'Dark Soul Trap',
    bpm: 138,
  },
  {
    id: 't11',
    title: 'Slow Burn',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 274,
    src: 'https://cdn1.suno.ai/1a30ba32-847b-4c81-99e1-43b5712f37b4.mp3',
    art: '/art/slowburn.png',
    genre: 'Dark Soul Trap',
    bpm: 92,
  },
  {
    id: 't12',
    title: 'Mirror & the Ocean',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 387,
    src: 'https://cdn1.suno.ai/2a5c130c-c43d-47f4-8c25-1e4276b2ae58.mp3',
    art: '/art/mirrorAndTheOcean.png',
    genre: 'Spiritual Hip-Hop',
    bpm: 90,
  },

  {
    id: 't13',
    title: 'Ocean Again',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 183,
    src: 'https://cdn1.suno.ai/b03a6bf1-02d3-40f0-a6e7-2b7a7d895a5e.mp3',
    art: '/art/oceanAgain.png',
    genre: 'Lo-Fi Trap',
    bpm: 85,
  },
  {
    id: 't14',
    title: 'Certified Pyscho',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 172,
    src: 'https://cdn1.suno.ai/525c512b-a967-48d8-a43f-04136f6cc9c7.mp3',
    art: '/art/certifiedPyscho.jpeg',
    genre: 'Contemporary Country',
    bpm: 85,
  }
];

// Gradient palettes per album (used as cover art fallback)
export const albumPalettes = {
  'Flow Lab':           ['#7c3aed', '#4c0870', '#0f0219'],
  'Dirt Road':          ['#c7c427', '#a3a30d', '#1c1408'],
  'Synergy':            ['#0b8cf5', '#064d8c', '#021519'],
  'Heart & Break':      ['#db0e07', '#7f0a05', '#2c0000'],
  'Alt Waves':         ['#36c236', '#1e7a1e', '#051904'],
  'Pulse':             ['#ff4081', '#c60055', '#2c0014'],
  'High Gain':         ['#ed6d3a', '#a83f1e', '#2c0f00'],
  'Silk Sheets':       ['#b642d3', '#6f1e7a', '#1c0519'],
};

export const playlists = [
  {
    id: 'pl1',
    name: 'Flow Lab',
    description: 'Trap beats, Raps, and experimental vibes',
    trackIds: ['t2', 't1', 't9'],
    color: '#871cdf',
  },
  {
    id: 'pl2',
    name: 'Dirt Road',
    description: 'Country and Dirt Road Anthems',
    trackIds: ['t14', 't4', 't10'],
    color: '#c7c427',
  },
  {
    id: 'pl3',
    name: 'Synergy',
    description: 'Manifestation, Simulation Theory, and Music collide',
    trackIds: ['t13', 't6', 't11'],
    color: '#0b8cf5',
  },
  {
    id: 'pl4',
    name: 'Heart & Break',
    description: 'Love, Heartbreak, and Toxicity in the Digital Age',
    trackIds: ['t4', 't8', 't12'],
    color: '#e2231c',
  },
  {    id: 'pl6',
    name: 'Alt Waves',
    description: 'Alternative vibes for late night coding sessions',
    trackIds: ['t5', 't6', 't11'],
    color: '#36c236',
  },
  {
    id: 'pl9',
    name: 'Pulse',
    description: 'Pop hits and high-energy tracks to keep you moving',
    trackIds: ['t1', 't7', 't9'],
    color: '#ff4081',
  },
  {
    id: 'pl7',
    name: 'High Gain',
    description: 'Rock, Metal, and everything with a high gain distortion',
    trackIds: ['t9', 't10', 't12'],
    color: '#ed6d3a',
  },
  {
    id: 'pl8',
    name: 'Silk Sheets',
    description: 'Smooth, sensual, and perfect for late night vibes',
    trackIds: ['t11', 't4', 't2'],
    color: '#b642d3',
  },








  {
    id: 'pl5',
    name: 'Mixtape - All Tracks',
    description: 'Everything in the RyFi universe',
    trackIds: tracks.map(t => t.id),
    color: '#00e5ff',
  },
];
