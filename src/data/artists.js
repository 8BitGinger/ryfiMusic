// ─────────────────────────────────────────────────────────────────────────────
// Artists data — update portfolioUrl, image, and bio as needed.
// For collaborating artists, add a sunoUrl and the tracks you made together.
// ─────────────────────────────────────────────────────────────────────────────

export const featuredArtist = {
  name: '8BitGinger',
  image: '/ryan.jpeg',       // swap for a profile photo in /public/
  logo: '/recordLogo.png',
  bio: 'Genre-bending AI-assisted music producer crafting soundscapes that live at the intersection of human emotion and machine creativity. From dark trap to spiritual hip-hop, country to nu-metal — every track is an experiment in what music can feel like when the rules don\'t apply.',
  portfolioUrl: 'https://8bitginger.com',  // ← update with your portfolio URL
  sunoUrl: 'https://suno.com/@8bitginger', // ← if you have a Suno profile, add the URL here
  stats: { tracks: '425+', streams: '20k' },
}

export const collaborators = [
  {
    id: 'timbaland',
    name: 'Timbaland',
    image: '/timbaland.webp',
    sunoUrl: 'https://suno.com/@timbaland',
    collab: 'Remix Contest - Let\'s Get High',
  },


  
  {
    id: 'arvyn',
    name: 'ARVYN',
    image: '/arvyn.webp',
    sunoUrl: 'https://suno.com/@arvynofficial',
    collab: 'Hard2Move - RyFi Remix',
  },
    {
    id: 'otf',
    name: 'OTF',
    image: '/otf.jpeg',
    sunoUrl: 'https://suno.com/@onthefence',
    collab: 'Gravity Chips - RyFi Remix',
  },
  {
    id: 'sonotzen2',
    name: 'Sonotzen',
    image: '/zen.webp',
    sunoUrl: 'https://music.apple.com/us/artist/sonotzen/1875517537',
    collab: 'Back in Blood - RyFi Remix',
  },




]

export const artistList = [
      {
    id: 'vndal',
    name: 'VNDAL',
    image: '/VNDAL.webp',
    sunoUrl: 'https://music.apple.com/us/artist/vndal/6775072343',
    collab: 'Dank Til I Sank',
  },

  {
    id: 'cashharlan',
    name: 'Cash Harlan',
    image: '/cashHarlan.webp',
    sunoUrl: 'https://music.apple.com/us/artist/cash-harlan/6779032164',
    collab: 'Hollow Roads',
  },

  {
    id: 'auraveil',
    name: 'Auraveil',
    image: '/auraveil.webp',
    sunoUrl: 'https://music.apple.com/us/artist/auraveil/6776076042',
    collab: 'Let Me Fade',
  },

  {
    id: 'blacklistdahlia',
    name: 'Blacklist Dahlia',
    image: '/blacklistDahlia.png',
    sunoUrl: ' ',
    collab: 'Bulletproof',
  },
]
