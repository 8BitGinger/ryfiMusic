// ─────────────────────────────────────────────────────────────────────────────
// Artists data — update portfolioUrl, image, and bio as needed.
// For collaborating artists, add a sunoUrl and the tracks you made together.
// ─────────────────────────────────────────────────────────────────────────────

export const featuredArtist = {
  name: 'RyFi',
  image: '/ryan.jpeg',       // swap for a profile photo in /public/
  logo: '/recordLogo.png',
  bio: 'Genre-bending AI-assisted music producer crafting soundscapes that live at the intersection of human emotion and machine creativity. From dark trap to spiritual hip-hop, country to nu-metal — every track is an experiment in what music can feel like when the rules don\'t apply.',
  portfolioUrl: 'https://8bitginger.com',  // ← update with your portfolio URL
  sunoUrl: 'https://suno.com/@8bitginger', // ← if you have a Suno profile, add the URL here
  stats: { tracks: '365+', playlists: '10', genres: '50+' },
}

export const collaborators = [
  
  {
    id: 'arvyn',
    name: 'ARVYN',
    image: '/arvyn.webp',
    sunoUrl: 'https://suno.com/@arvynofficial',
    collab: 'Hard2Move - RyFi Remix',
  },
  {
    id: 'sonotzen2',
    name: 'ZEN',
    image: '/zen.webp',
    sunoUrl: 'https://suno.com/@sonotzen2',
    collab: 'Back in Blood - RyFi Remix',
  },
  // {
  //   id: 'not8DJ',
  //   name: 'NOT8DJ',
  //   image: '/not8dj.webp',
  //   sunoUrl: 'https://suno.com/@not8DJ',
  //   collab: 'Contained',
  // },
  {
    id: 'otf',
    name: 'OTF',
    image: '/otf.jpeg',
    sunoUrl: 'https://suno.com/@onthefence',
    collab: 'Gravity Chips - RyFi Remix',
  },
]
