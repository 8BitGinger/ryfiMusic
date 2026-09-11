// ─────────────────────────────────────────────────────────────────────────────
// RyFi Music Library - How to make it Yours!
// To add your Suno songs:
//   1. Upload your .mp3 files to /audio/
//   2. Replace the `src` field with the path e.g. '/audio/my-track.mp3'
//   3. Replace `art` with your own cover art in /art/
//   4. Suno also gives you a direct CDN link — you can use that URL directly
// ─────────────────────────────────────────────────────────────────────────────

import { title } from "framer-motion/client";

export const tracks = [
  {
    id: 't1',
    title: 'Ghost Frequency',
    artist: '8BitGinger',
    album: 'Liquid Gold',
    duration: 228,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Ghost%20Frequency.wav?alt=media', // 👈 replace with your .mp3 path or Suno URL
    art: '/art/ghostFrequency.webp', // 👈 replace with your cover art path or Suno URL
    genre: 'Noir Country-Trap',
    bpm: 145,
    lyrics: `

    `
  },
  {
    id: 't2',
    title: 'Whiskey Wolf - Club Cover',
    artist: '8BitGinger',
    album: 'Flow State',
    duration: 262,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Whisky%20Wolf%20-%20Club%20Cover.wav?alt=media', 
    art: '/art/whiskeyWolf.webp', 
    genre: 'UK Drill',
    bpm: 144,
  },
  {
    id: 't3',
    title: "Cello's Grudge",
    artist: '8BitGinger',
    album: 'Flow State',
    duration: 194,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Cello\'s%20Grudge.wav?alt=media', 
    art: '/art/cellosGrudge.webp', 
    genre: 'Hardcore Lo-Fi',
    bpm: null,
  },
  {
    id: 't6',
    title: 'Final Sound',
    artist: '8BitGinger',
    album: 'Alt Drives',
    duration: 268,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Final%20Sound.wav?alt=media', 
    art: '/art/finalSound.webp', // 
    genre: "90's Alternative",
    bpm: null,
  },
  {
    id: 't8',
    title: 'Trust Fall',
    artist: '8BitGinger',
    album: 'Alt Drives',
    duration: 224,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Trust%20Fall%20-%20Studio%20Mix.wav?alt=media',
    art: '/art/trustfall.webp',
    genre: 'Midwest Emo',
    bpm: 140,
  },
  {
    id: 't9',
    title: 'Burn the Blueprint',
    artist: '8BitGinger',
    album: 'Alt Drives',
    duration: 215,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Burn%20the%20Blueprint%20-%20Auraveil%20(Remastered).wav?alt=media',
    art: '/art/burntheBlueprint.webp',
    genre: 'Chillwave',
    bpm: 140,
  },
  {
    id: 't10',
    title: 'Back in Blood - RyFi Remix',
    artist: 'RyFi & @sonotzen2',
    album: 'Flow State',
    duration: 244,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Back%20in%20Blood%20-%20RyFi%20Remix.wav?alt=media',
    art: '/art/backinBlood.webp',
    genre: 'Dark Soul Trap',
    bpm: 138,
  },
  // {
  //   id: 't11',
  //   title: 'Slow Burn',
  //   artist: '8BitGinger',
  //   album: 'Silk Sheets',
  //   duration: 275,
  //   src: 'https://cdn1.suno.ai/1a30ba32-847b-4c81-99e1-43b5712f37b4.mp3',
  //   art: '/art/slowburn.webp',
  //   genre: 'Dark Soul Trap',
  //   bpm: 92,
  // },

  {
    id: 't14',
    title: 'Certified Pyscho',
    artist: 'Cash Harlan',
    album: 'Dirt Road',
    duration: 201,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Certified%20Psycho%20-%20Irish%20Coast%20Cover.wav?alt=media',
    art: '/art/certPsycho.jpg',
    genre: 'Contemporary Country',
    bpm: 72,
  },
  {
    id: 't15',
    title: 'The Whiskey Isn\'t Well',
    artist: 'Cash Harlan',
    album: 'Dirt Road',
    duration: 214,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/The%20Whiskey%20isn\'t%20Well%20-%20Cash%20Mashup%20Cover%20(Edit)%20(Remastered).wav?alt=media',
    art: '/art/whiskeyIsntWell.webp',
    genre: 'Contemporary Country',
    bpm: 140,
  },




  {
    id: 't32',
    title: 'Everything You Asked For',
    artist: '8BitGinger',
    album: 'Static Heart',
    duration: 219,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Everything%20You%20Asked%20For.wav?alt=media',
    art: '/art/everythingYouAskedFor.webp',
    genre: 'Dark R&B',
    bpm: null,
  },

  {
    id: 't33',
    title: 'Apex Vision',
    artist: '8BitGinger',
    album: 'Synergy',
    duration: 222,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Apex%20Vision.wav?alt=media',
    art: '/art/apexVision.webp',
    genre: 'Trap Phonk',
    bpm: 180,
  },




  {
    id: 't37',
    title: 'Where the Wild Things Run',
    artist: 'Cash Harlan',
    album: 'Dirt Road',
    duration: 217,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Where%20the%20Wild%20Things%20Run%20-%20Cash%20Harlan%20(Remastered).wav?alt=media',
    art: '/art/wildThings.webp',
    genre: 'Country Trap',
    bpm: null,
  },


  // {
  //   id: 't39',
  //   title: 'In Love with a Burlesque Queen',
  //   artist: '8BitGinger',
  //   album: 'Silk Sheets',
  //   duration: 259,
  //   src: 'https://cdn1.suno.ai/00bb8dce-7cd8-4432-9568-a6415561a552.mp3',
  //   art: '/art/burlesqueQueen.webp',
  //   genre: 'R&B',
  //   bpm: 70,
  // },






  {
    id: 't46',
    title: 'The Simulation - LoFi Rewind',
    artist: '8BitGinger',
    album: 'Synergy',
    duration: 266,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/The%20Simulation%20-%20LoFi%20Rewind.wav?alt=media',
    art: '/art/simulation.webp',
    genre: 'LoFi',
    bpm: 140,
  },

  {
    id: 't47',
    title: 'Hard 2 Move (Remix)',
    artist: 'RyFi & @ARVYN',
    album: 'Liquid Gold',
    duration: 183,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Hard%202%20Move%20-%20RyFi%20Remix.wav?alt=media',
    art: '/art/hard2Move.webp',
    genre: 'Dark LoFi',
    bpm: 98,
  },


  {
    id: 't49',
    title: 'Transcendence',
    artist: '8BitGinger',
    album: 'Synergy',
    duration: 269,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Transcendence%20-%20Vibe%20Cover.wav?alt=media',
    art: '/art/transcendence.webp',
    genre: '432hz Synthwave Trap',
    bpm: null,
  },

  // {
  //   id: 't50',
  //   title: 'The Phoenix Rises',
  //   artist: '8BitGinger',
  //   album: 'Liquid Gold',
  //   duration: 193,
  //   src: 'https://cdn1.suno.ai/7152721e-7d84-4fa4-9f10-6a6937682035.mp3',
  //   art: '/art/thePhoenix.webp',
  //   genre: 'Country Trap',
  //   bpm: null,
  // },

  {
    id: 't51',
    title: 'One Last Rose',
    artist: '8BitGinger',
    album: 'Static Heart',
    duration: 273,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/ONE%20LAST%20ROSE%20-%208BitBanger(NAH%20-%20REMIX).wav?alt=media',
    art: null,
    genre: 'Acoustic Soul',
    bpm: 96,
  },

  {
    id: 't52',
    title: 'Chemical Bond',
    artist: '8BitGinger',
    album: 'High Gain',
    duration: 206,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Chemical%20Bond-%20Blacklist%20Dahlia%20Beat.wav?alt=media',
    art: '/art/chemicalBond.webp',
    genre: 'Cinematic Emo Rock',
    bpm: null,
  },

  // {
  //   id: 't53',
  //   title: 'Hyper-Focus',
  //   artist: '8BitGinger',
  //   album: 'Flow State',
  //   duration: 194,
  //   src: 'https://cdn1.suno.ai/9007005c-3e58-4059-81de-22e8ec76a4c4.mp3',
  //   art: '/art/hyperFocus.webp',
  //   genre: 'Dark Boom Bap',
  //   bpm: 92,
  // },


  // {
  //   id: 't55',
  //   title: 'Dis Bitch - Drill Demo',
  //   artist: '8BitGinger',
  //   album: 'Silk Sheets',
  //   duration: 145,
  //   src: 'https://cdn1.suno.ai/9a4621f1-57d9-4f9d-ab62-883a6a7b76a9.mp3',
  //   art: '/art/disBitch.webp',
  //   genre: 'Drill',
  //   bpm: 140,
  // },



  {
    id: 't58',
    title: 'Skin & Soul',
    artist: '8BitGinger',
    album: 'Silk Sheets',
    duration: 273,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Skin%20%26%20Soul%20_%20Deephouse%20Demo.wav?alt=media',
    art: '/art/skinSoul.webp',
    genre: 'Chillstep',
    bpm: 115,
  },

  {
    id: 't59',
    title: 'Body Frequency',
    artist: '8BitGinger',
    album: 'Silk Sheets',
    duration: 258,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Body%20Frequency%20-%20VNDAL%20Version.wav?alt=media',
    art: '/art/bodyFrequency.webp',
    genre: 'R&B',
    bpm: 105,
  },

  {
    id: 't60',
    title: 'Villian Era - 3am Remix',
    artist: '8BitGinger',
    album: 'Flow State',
    duration: 253,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Lowkey%20Villian%20-%20Villian%20Era%20Remix%20(1).wav?alt=media',
    art: '/art/villianEra.webp',
    genre: 'Trap-Phonk',
    bpm: 140,
  },




  // {
  //   id: 't64',
  //   title: 'West Texas Wind',
  //   artist: '8BitGinger',
  //   album: 'Dirt Road',
  //   duration: 310,
  //   src: 'https://cdn1.suno.ai/ca79ec67-645d-4ed9-a405-ee80c87afb82.mp3',
  //   art: '/art/westTexasWind.webp',
  //   genre: 'Outlaw Country',
  //   bpm: 145,
  // },






  {
    id: 't70',
    title: 'Rain on the Glass',
    artist: '8BitGinger',
    album: 'Coffee & Clouds',
    duration: 479,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Rain%20on%20the%20Glass%20-%20Neon%20Noir%20Mix.wav?alt=media',
    art: '/art/rainOnTheGlass.webp',
    genre: 'Executive LoFi',
    bpm: 95,
  },









  {
    id: 't79',
    title: 'Through the Smoke',
    artist: '8BitGinger',
    album: 'Static Heart',
    duration: 208,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Through%20the%20Smoke.wav?alt=media',
    art: null,
    genre: 'Trap Soul',
    bpm: 88,
  },

  // {
  //   id: 't80',
  //   title: 'Brothers',
  //   artist: '8BitGinger',
  //   album: 'Dirt Road',
  //   duration: 166,
  //   src: 'https://cdn1.suno.ai/0006e9ab-57ee-40b6-8f00-89919e0b2947.mp3',
  //   art: '/art/brothers.webp',
  //   genre: 'Rock Country',
  //   bpm: 95,
  // },


  // {
  //   id: 't82',
  //   title: 'First Date Vibes',
  //   artist: '8BitGinger',
  //   album: 'Pulse',
  //   duration: 210,
  //   src: 'https://cdn1.suno.ai/53ccea43-9bea-45cf-aa27-d07c5fe1eb4f.mp3',
  //   art: '/art/firstDate.webp',
  //   genre: 'Pop-Infused Hip-Hop',
  //   bpm: 160,
  // },


  {
    id: 't84',
    title: 'Wrapped Up In You Tonight',
    artist: '8BitGinger',
    album: 'Silk Sheets',
    duration: 243,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Wrapped%20Up%20in%20You%20Tonight.wav?alt=media',
    art: null,
    genre: 'Trip-Hop',
    bpm: 88,
  },












  {
    id: 't96',
    title: 'Your Ex is a Bish',
    artist: '8BitGinger',
    album: 'Flow State',
    duration: 312,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Your%20Ex%20is%20a%20Bish%20-%20VNDAL%20Version.wav?alt=media',
    art: '/art/yourExIsABish.webp',
    genre: 'Murder Rap',
    bpm: 140,
  },

  {
    id: 't97',
    title: 'Beautiful Friction',
    artist: '8BitGinger',
    album: 'Coffee & Clouds',
    duration: 169,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Beautiful%20Friction.wav?alt=media',
    art: '/art/beautifulFriction.webp',
    genre: 'LoFi',
    bpm: 85,
  },


  {
    id: 't99',
    title: 'Midnight Mantra',
    artist: '8BitGinger',
    album: 'Silk Sheets',
    duration: 319,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Midnight%20Mantra.wav?alt=media',
    art: '/art/midnightMantra.webp',
    genre: 'New Genre',
    bpm: 130,
  },


  // {
  //   id: 't101',
  //   title: 'Fatality - Diss Track',
  //   artist: '8BitGinger',
  //   album: 'Flow State',
  //   duration: 275,
  //   src: 'https://cdn1.suno.ai/5e41be39-efb5-4724-98c5-f478f0b48cc5.mp3',
  //   art: '/art/fatality.webp',
  //   genre: 'Battle Rap',
  //   bpm: 140,
  // },


  // {
  //   id: 't103',
  //   title: 'Hallowed Ground',
  //   artist: '8BitGinger',
  //   album: 'Dirt Road',
  //   duration: 266,
  //   src: 'https://cdn1.suno.ai/3a42d34b-df96-4d6d-98f4-b45bfdcc9ca4.mp3',
  //   art: '/art/hallowedGround.webp',
  //   genre: 'Swamp Blues Country',
  //   bpm: 80,
  // },


  {
    id: 't105',
    title: 'Alien',
    artist: '8BitGinger',
    album: 'Flow State',
    duration: 234,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/%F0%9F%91%BD%20ALIEN.wav?alt=media',
    art: '/art/alien.webp',
    genre: 'Futuristic Trap',
    bpm: 145,
  },


  {
    id: 't107',
    title: 'Where the Wild Things Run',
    artist: 'Cash Harlan',
    album: 'Dirt Road',
    duration: 217,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Where%20the%20Wild%20Things%20Run%20-%20Cash%20Harlan%20(Remastered).wav?alt=media',
    art: null,
    genre: 'Dark Country',
    bpm: 72,
  },


  {
    id: 't109',
    title: 'Nothing Matters',
    artist: '8BitGinger',
    album: 'Pulse',
    duration: 218,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Nothing%20Matters%20(I%20Choose%20Me%20Mix).wav?alt=media',
    art: null,
    genre: 'LoFi Trap',
    bpm: 96,
  },


  {
    id: 't111',
    title: 'Bored',
    artist: 'Auraveil',
    album: 'Coffee & Clouds',
    duration: 199,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Bored%20-%20Auraveil%20(Remastered).wav?alt=media',
    art: null,
    genre: 'Folk Soul',
    bpm: 78,
  },


  // {
  //   id: 't113',
  //   title: 'JUST LISTEN (Poetic Justice)',
  //   artist: 'RyFi & @poeticjustice',
  //   album: 'Flow State',
  //   duration: 466,
  //   src: 'https://cdn1.suno.ai/201c0df8-2e17-4c61-9b46-68dc261a7333.mp3',
  //   art: '/art/justListen.webp',
  //   genre: 'Emo Trap',
  //   bpm: 90,
  // },

  // {
  //   id: 't114',
  //   title: 'Just Listen (Poetic Justice)',
  //   artist: 'RyFi & @Poetic Justice',
  //   album: 'Static Heart',
  //   duration: 466,
  //   src: 'https://cdn1.suno.ai/201c0df8-2e17-4c61-9b46-68dc261a7333.mp3',
  //   art: '/art/justListen.webp',
  //   genre: 'Pyschedelic Trap',
  //   bpm: 78,
  // },




  {
    id: 't118',
    title: 'Dopamine Ghost',
    artist: '8BitGinger',
    album: 'Liquid Gold',
    duration: 192,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Dopamine%20Ghost%20-%20Studio%20Mix.wav?alt=media',
    art: '/art/dopamineGhost.webp',
    genre: 'Country Rock',
    bpm: 84,
  },

  // {
  //   id: 't119',
  //   title: 'Sea of Love',
  //   artist: '8BitGinger',
  //   album: 'Static Heart',
  //   duration: 350,
  //   src: 'https://cdn1.suno.ai/7e075078-ef45-48c7-8d91-2ed2c9eede8d.mp3',
  //   art: '/art/seaOfLove.webp',
  //   genre: 'Pop Rap',
  //   bpm: 92,
  // },


  // {
  //   id: 't121',
  //   title: 'Already Whole',
  //   artist: '8BitGinger',
  //   album: 'Coffee & Clouds',
  //   duration: 322,
  //   src: 'https://cdn1.suno.ai/89f90306-361e-46b8-bd83-133f4ee78598.mp3',
  //   art: '/art/alreadyWhole.webp',
  //   genre: 'Spiritual Chillstep',
  //   bpm: 85,
  // },

  {
    id: 't122',
    title: 'Signal and Noise',
    artist: '8BitGinger',
    album: 'Coffee & Clouds',
    duration: 293,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Signal%20and%20Noise.wav?alt=media',
    art: '/art/signalAndSpark.webp',
    genre: 'Neo Soul',
    bpm: 72,
  },




  {
    id: 't127',
    title: 'The Return',
    artist: '8BitGinger',
    album: 'Pulse',
    duration: 181,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Return%20of%20the%20Man%20(Sample%20Remix).wav?alt=media',
    art: '/art/theReturn.webp',
    genre: '90s New Jack Swing',
    bpm: 100,
  },


  // {
  //   id: 't129',
  //   title: 'Chasing the Echo',
  //   artist: '8BitGinger',
  //   album: 'Coffee & Clouds',
  //   duration: 184,
  //   src: 'https://cdn1.suno.ai/b6dfe695-90e2-4f9b-96be-541273c2fc6e.mp3',
  //   art: '/art/chasingTheEcho.webp',
  //   genre: 'Trap Soul',
  //   bpm: 78,
  // },

  {
    id: 't130',
    title: 'Systematic Haunt',
    artist: '8BitGinger',
    album: 'High Gain',
    duration: 215,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Systematic%20Haunt.wav?alt=media',
    art: '/art/systematicHaunt.webp',
    genre: 'Industrial Trap Rock',
    bpm: 140,
  },
  // {
  //   id: 't131',
  //   title: 'The Great Escape',
  //   artist: '8BitGinger',
  //   album: 'Liquid Gold',
  //   duration: 222,
  //   src: 'https://cdn1.suno.ai/306a3294-7537-44b6-81f6-cd216bae12c6.mp3',
  //   art: '/art/greatEscape.webp',
  //   genre: 'Folk Hop',
  //   bpm: 90,
  // },

  // {
  //   id: 't132',
  //   title: 'Pointless',
  //   artist: '8BitGinger',
  //   album: 'High Gain',
  //   duration: 319,
  //   src: 'https://cdn1.suno.ai/a9f7d1d1-ee75-4ba4-9947-4fe7a21bac20.mp3',
  //   art: '/art/pointless.webp',
  //   genre: 'Post-Hardcore',
  //   bpm: null,
  // },


  // {
  //   id: 't134',
  //   title: 'Velvet & Glass',
  //   artist: '8BitGinger',
  //   album: 'Alt Drives',
  //   duration: 192,
  //   src: 'https://cdn1.suno.ai/b449b538-c8d2-488a-983f-94338b57f306.mp3',
  //   art: '/art/velvetGlass.webp',
  //   genre: 'Glitch Soul',
  //   bpm: 135,
  // },

  // {
  //   id: 't135',
  //   title: "Must've Been",
  //   artist: '8BitGinger',
  //   album: 'Dirt Road',
  //   duration: 292,
  //   src: 'https://cdn1.suno.ai/6685d07d-ca5e-4b8b-b20d-70237b3931d1.mp3',
  //   art: '/art/mustveBeen.webp',
  //   genre: 'Traditional Country',
  //   bpm: 92,
  // },


  {
    id: 't137',
    title: 'Obsessed',
    artist: '8BitGinger',
    album: 'Static Heart',
    duration: 217,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Obsessed%20-%20Shadow%20Single.wav?alt=media',
    art: '/art/obsessed.webp',
    genre: 'Dark Pop/Hip-Hop',
    bpm: 88,
  },


  // {
  //   id: 't139',
  //   title: "We're Home",
  //   artist: '8BitGinger',
  //   album: 'Alt Drives',
  //   duration: 232,
  //   src: 'https://cdn1.suno.ai/e8565f49-49ab-40ab-8bd6-01524b46b17c.mp3',
  //   art: '/art/wereHome.webp',
  //   genre: 'Alternative Rock',
  //   bpm: 140,
  // },

  // {
  //   id: 't140',
  //   title: 'Gravel Throne',
  //   artist: '8BitGinger',
  //   album: 'Alt Drives',
  //   duration: 193,
  //   src: 'https://cdn1.suno.ai/c0a4cd91-f54d-45fd-bb82-b2db2b052b4a.mp3',
  //   art: '/art/gravelThrone.webp',
  //   genre: 'Alternative Country/Rock',
  //   bpm: 70,
  // },





  // {
  //   id: 't145',
  //   title: 'Glass Singing',
  //   artist: '8BitGinger',
  //   album: 'Pulse',
  //   duration: 288,
  //   src: 'https://cdn1.suno.ai/1a3fa410-df48-4646-ad52-ce5286a6ebfc.mp3',
  //   art: '/art/glassSinging.webp',
  //   genre: 'Exerimental Synth Pop',
  //   bpm: null,
  // },


  // {
  //   id: 't147',
  //   title: 'Shadowmaster',
  //   artist: '8BitGinger',
  //   album: 'Alt Drives',
  //   duration: 339,
  //   src: 'https://cdn1.suno.ai/5f435d9b-ea29-4b90-bf43-77da515e91e0.mp3',
  //   art: '/art/shadowmaster.webp',
  //   genre: 'Alternative Rock',
  //   bpm: 98,
  // },

  // {
  //   id: 't148',
  //   title: 'The Misses',
  //   artist: '8BitGinger',
  //   album: 'Silk Sheets',
  //   duration: 237,
  //   src: 'https://cdn1.suno.ai/a527b917-2f62-41ea-a45a-733f5cdb925c.mp3',
  //   art: '/art/theMisses.webp',
  //   genre: '70s Groove',
  //   bpm: null,
  // },

  {
    id: 't149',
    title: 'Wear That',
    artist: '8BitGinger',
    album: 'Silk Sheets',
    duration: 227,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Wear%20That%20(Or%20Nothing%20At%20All%20Remix).wav?alt=media',
    art: '/art/wearThat.webp',
    genre: 'Dark R&B',
    bpm: 96,
  },

  {
    id: 't151',
    title: 'Enough',
    artist: 'Auraveil',
    album: 'Alt Drives',
    duration: 268,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/If%20I%20Was%20Only%20Enough.wav?alt=media',
    art: '/art/enough.webp',
    genre: 'Alternative Rock',
    bpm: null,
  },





  {
    id: 't157',
    title: 'Yummy Yummy',
    artist: 'RyFi & @sonotzen2',
    album: 'Silk Sheets',
    duration: 274,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Yummy%20Yummy%20%F0%9F%98%8B.wav?alt=media',
    art: '/art/yummyYummy.webp',
    genre: 'Dark Luxury Trap-Drill',
    bpm: 140,
  },

  {
    id: 't158',
    title: 'Bulletproof',
    artist: 'Blacklist Dahlia',
    album: 'Static Heart',
    duration: 183,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Bulletproof%20(Remastered).wav?alt=media',
    art: '/art/blacklistDahliaCover.jpg',
    genre: 'Neo-Noir Soul',
    bpm: 85,
  },

  // {
  //   id: 't159',
  //   title: 'You Matter - Suno Songs 4 Love Contest',
  //   artist: '8BitGinger',
  //   album: 'Alt Drives',
  //   duration: 270,
  //   src: 'https://cdn1.suno.ai/5e7574ba-0d8d-4f40-8a5a-87581f90a720.mp3',
  //   art: '/art/youMatterRemix.webp',
  //   genre: 'Midwest Emo',
  //   bpm: 110,
  // },
  // {
  //   id: 't161',
  //   title: 'Hijacked Broadcast',
  //   artist: '8BitGinger',
  //   album: 'High Gain',
  //   duration: 284,
  //   src: 'https://cdn1.suno.ai/1fd52724-f821-44c3-871a-818bd43fb248.mp3',
  //   art: '/art/hijackedBroadcast.webp',
  //   genre: 'Alternative Rock',
  //   bpm: null,
  // },



  {
    id: 't166',
    title: 'Don\'t Choke',
    artist: '8BitGinger',
    album: 'Silk Sheets',
    duration: 181,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Don\'t%20Choke%20-%20REMIX%20THIS!!!.wav?alt=media',
    art: '/art/dontChoke.webp',
    genre: 'Dark R&B',
    bpm: 85,
  },




   
  // {
  //   id: 't171',
  //   title: 'The Dark',
  //   artist: '8BitGinger',
  //   album: 'Alt Drives',
  //   duration: 348,
  //   src: 'https://cdn1.suno.ai/c7cefb91-e061-40b2-98ec-e9c85996fa37.mp3',
  //   art: '/art/theDark.webp',
  //   genre: 'Dark Alternative Rock',
  //   bpm: 90,
  // },




  // {
  //   id: 't175',
  //   title: 'Boom B!tch - Diss Track',
  //   artist: '8BitGinger',
  //   album: 'Flow State',
  //   duration: 321,
  //   src: 'https://cdn1.suno.ai/287d1420-9f7e-46c1-8882-fbaec8aff0c9.mp3',
  //   art: '/art/boomBitch.webp',
  //   genre: 'Battle Rap',
  //   bpm: 115,
  // },

  {
    id: 't176',
    title: 'Happy',
    artist: '8BitGinger',
    album: 'Coffee & Clouds',
    duration: 258,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Happy%20-%20Auraveil%20(Remastered).wav?alt=media',
    art: '/art/happy.webp',
    genre: 'LoFi Chillhop',
    bpm: null,
  },

  // {
  //   id: 't177',
  //   title: 'Return of the Man',
  //   artist: '8BitGinger',
  //   album: 'Liquid Gold',
  //   duration: 246,
  //   src: 'https://cdn1.suno.ai/473e8219-fdb8-47fc-9797-e60a82e5d54a.mp3',
  //   art: '/art/returnOfTheMan.webp',
  //   genre: '90s Remix',
  //   bpm: 98,
  // },

  {
    id: 't178',
    title: 'Stacked Too High',
    artist: '8BitGinger',
    album: 'Coffee & Clouds',
    duration: 204,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Stacked%20Too%20High%20ft%20A.R.V.Y.N..wav?alt=media',
    art: null,
    genre: 'LoFi Hip-Hop',
    bpm: 74,
  },



  {
    id: 't181',
    title: 'Southern Solace',
    artist: '8BitGinger',
    album: 'High Gain',
    duration: 282,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Southern%20Solace%20-%20Blacklist%20Dahlia%20Cover.wav?alt=media',
    art: '/art/southernSolace.webp',
    genre: 'Dark Southern Rock',
    bpm: 82,
  },
  // {
  //   id: 't182',
  //   title: 'Stalking the Feed',
  //   artist: '8BitGinger',
  //   album: 'Liquid Gold',
  //   duration: 146,
  //   src: 'https://cdn1.suno.ai/91a2be1b-3cb0-403e-8b83-094af345c0af.mp3',
  //   art: '/art/stalkingTheFeed.webp',
  //   genre: 'Atmospheric Phonk',
  //   bpm: 140,
  // },



  {
    id: 't186',
    title: 'Type Shii',
    artist: 'VNDAL',
    album: 'Liquid Gold',
    duration: 236,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Type%20Shii%20-%20VNDAL%20MIX%20(Remastered).wav?alt=media',
    art: '/art/typeShii.webp',
    genre: 'Trap',
    bpm: 148,
  },


  {
    id: 't188',
    title: 'That\'s Just What Snakes Do',
    artist: '8BitGinger',
    album: 'Static Heart',
    duration: 266,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/That\'s%20Just%20What%20Snakes%20Do.wav?alt=media',
    art: '/art/thatsJustWhatSnakesDo.webp',
    genre: 'Louisiana Trap',
    bpm: 128,
  },



  {
    id: 't192',
    title:'Irish Garden',
    artist: '8BitGinger ft. @sonotzen2',
    album: 'Silk Sheets',
    duration: 281,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Irish%20Garden%20-%20Afterdark%20Zen%20Mix.wav?alt=media',
    art: '/art/irishGarden.webp',
    genre: 'Irish Drill',
    bpm: 110,
  },


  {
    id: 't194',
    title: 'Basic',
    artist: '8BitGinger',
    album: 'Static Heart',
    duration: 317,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Basic.wav?alt=media',
    art: '/art/basic.webp',
    genre: 'Neo-Soul',
    bpm: 74,
  },


  {
    id: 't196',
    title: '90\'s Green',
    artist: '8BitGinger',
    album: 'Flow State',
    duration: 271,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/90\'s%20Green%20-%20RyFi%20Remix%20%F0%9F%94%A5.wav?alt=media',
    art: '/art/90sGreen.webp',
    genre: '90s Hip-Hop',
    bpm: 92,
  },

  {
    id: 't197',
    title: 'Still Up Here',
    artist: '8BitGinger',
    album: 'Coffee & Clouds',
    duration: 202,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Still%20Up%20Here%20(Studio%20Vibe%20Mix).wav?alt=media',
    art: '/art/stillUpHere.webp',
    genre: 'Chillhop',
    bpm: 130,
  },

  {
    id: 't198',
    title: 'Tangled Ties',
    artist: 'VNDAL',
    album: 'Flow State',
    duration: 192,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Tangled%20Ties%20-%20VNDAL%20Version%20(Remastered).wav?alt=media',
    art: null,
    genre: 'LoFi Trap',
    bpm: 96,
  },

  {
    id: 't199',
    title: 'Crazy Shii',
    artist: '8BitGinger',
    album: 'Liquid Gold',
    duration: 218,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Crazy%20Shii!%20-%20Chill%20Cover.wav?alt=media',
    art: '/art/crazyShii.webp',
    genre: 'Chill Trap',
    bpm: null,
  },

  {
    id: 't200',
    title: 'Bored',
    artist: '8BitGinger',
    album: 'Liquid Gold',
    duration: 219,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Bored%20-%20Auraveil%20(Remastered).wav?alt=media',
    art: '/art/bored.webp',
    genre: 'LoFi Chillhop',
    bpm: null,
  },

   {
    id: 't202',
    title: 'Ledger of Scars',
    artist: '8BitGinger',
    album: 'Flow Lab',
    duration: 235,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Ledger%20of%20Scars%20-%20Sample%20Solo.wav?alt=media',
    art: '/art/ledgerOfScars.webp',
    genre: 'Dark G-Funk',
    bpm: 98,
   },




   {
    id: 't206',
    title: 'Apathy of Anarchy',
    artist: '8BitGinger',
    album: 'Flow State',
    duration: 266,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Apathy%20of%20Anarchy%20(Game%20Over).wav?alt=media',
    art: '/art/apathyOfAnarchy.webp',
    genre: 'Dirty South Trap',
    bpm: 90,
   },




   {
    id: 't210',
    title: 'Steady State',
    artist: '8BitGinger',
    album: 'Coffee & Clouds',
    duration: 166,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Steady%20State.wav?alt=media',
    art: '/art/steadyState.webp',
    genre: 'LoFi Hip-Hop',
    bpm: null,
   },



   {
    id: 't213',
    title: 'Drama',
    artist: '8BitGinger',
    album: 'Coffee & Clouds',
    duration: 272,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Drama%20(1).wav?alt=media',
    art: '/art/drama.webp',
    genre: 'Phonk LoFi',
    bpm: 140,
   },

   {
    id: 't215',
    title: 'We Endure',
    artist: '8BitGinger',
    album: 'Coffee & Clouds',
    duration: 224,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/We%20Endure.wav?alt=media',
    art: null,
    genre: 'Neo-Soul',
    bpm: 72,
   },


   {
    id: 't217',
    title: 'Beautiful Sin',
    artist: '8BitGinger',
    album: 'Liquid Gold',
    duration: 255,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Beautiful%20Sin.wav?alt=media',
    art: '/art/beautifulSin.webp',
    genre: 'Cinematic Soul',
    bpm: 90,
   },



   {
    id: 't219',
    title: 'Like Damn...',
    artist: 'VNDAL',
    album: 'Silk Sheets',
    duration: 194,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Like%20Damn%20-%20VNDAL%20Version%20(Remastered).wav?alt=media',
    art: '/art/likeDamn.webp',
    genre: 'Midwestern Trap',
    bpm: 130,
   },


   {
    id: 't221',
    title: 'Irish It Worked Out',
    artist: '8BitGinger',
    album: 'Static Heart',
    duration: 220,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Irish%20it%20Worked%20Out.wav?alt=media',
    art: null,
    genre: 'LoFi Trap',
    bpm: 110,
   },


   {
    id: 't223',
    title: 'Why Is He So Crazy?',
    artist: '8BitGinger',
    album: 'Static Heart',
    duration: 301,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Why%20is%20he%20so%20crazy_%20-%20Blacklist%20Dahlia%20(Remastered).wav?alt=media',
    art: '/art/whyIsHeSoCrazy.webp',
    genre: 'Celtic Nu-Metal',
    bpm: 110,
   },




   {
    id: 't225',
    title: 'Dank Til I Sank',
    artist: 'VNDAL',
    duration: 207,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Dank%20Til%20I%20Sank%20-%20VNDAL%20Version.wav?alt=media',
    art: '/art/dank.webp',
    genre: 'Phonk Rap',
    bpm: 120,
   },


   {
    id: 't226',
    title: 'I\'m on Fire',
    artist: 'VNDAL',
    duration: 222,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/I\'m%20on%20Fire%20-%20VNDAL%20Original%20-%20Corrected%202.wav?alt=media',
    art: null,
    genre: 'Memphis Trap',
    bpm: 142,
   },

   {
    id: 't227',
    title: 'Tongue (Tied Remix)',
    artist: '8BitGinger',
    duration: 234,
    album: 'Silk Sheets',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Tongue%20%20(Tied%20Remix).wav?alt=media',
    art: '/art/tongue.webp',
    genre: 'Dark Trap Soul',
    bpm: 96,
   },


   {
    id: 't228',
    title: 'Lookin\' 4 Krazy',
    artist: '8BitGinger',
    duration: 281,
    album: 'Pulse',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Lookin\'%204%20Krazy.wav?alt=media',
    art: '/art/looking4Krazy.webp',
    genre: 'Trap Pop',
    bpm: 100,
   },
  {
    id: 't281',
    title: 'Ain\'t Worth The Trauma',
    artist: '8BitGinger',
    duration: 155,
    album: 'Static Heart',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Ain\'t%20Worth%20The%20Trauma.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't230',
    title: 'Beautiful Death - Auraveil Original',
    artist: 'Auraveil',
    duration: 238,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Beautiful%20Death%20-%20%20Auraveil%20Original.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't231',
    title: 'Beautiful Friction - VNDAL Version',
    artist: 'VNDAL',
    duration: 143,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Beautiful%20Friction%20-%20VNDAL%20Version.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't232',
    title: 'Bleeding Bytes 3am Remix - 8BitGinger',
    artist: '8BitGinger',
    duration: 260,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Bleeding%20Bytes%203am%20Remix%20-%208BitGinger.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't233',
    title: 'Bleeding Bytes',
    artist: '8BitGinger',
    duration: 268,
    album: 'Static Heart',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Bleeding%20Bytes.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't235',
    title: 'Carry My Heart - 8BitGinger',
    artist: '8BitGinger',
    duration: 202,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Carry%20My%20Heart%20-%208BitGinger.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't236',
    title: 'Chasin\' Dopamine (Vibe Mix)',
    artist: '8BitGinger',
    duration: 228,
    album: 'Synergy',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Chasin\'%20Dopamine%20(Vibe%20Mix).wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't237',
    title: 'Chasing Tornados - \'26 Mix',
    artist: '8BitGinger',
    duration: 237,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Chasing%20Tornados%20-%20\'26%20MIx.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't238',
    title: 'Chasing a Shadow',
    artist: '8BitGinger',
    duration: 175,
    album: 'Static Heart',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Chasing%20a%20Shadow.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't240',
    title: 'Cold Focus',
    artist: '8BitGinger',
    duration: 223,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Cold%20Focus%20(1).wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't241',
    title: 'Cool on a Tuesday',
    artist: '8BitGinger',
    duration: 173,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Cool%20on%20a%20Tuesday.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't242',
    title: 'Drowning in the Dark',
    artist: '8BitGinger',
    duration: 289,
    album: 'High Gain',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Drowning%20in%20the%20Dark.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't243',
    title: 'Dying Stars - Lowkey LoFi Remix',
    artist: '8BitGinger',
    duration: 258,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Dying%20Stars%20-%20Lowkey%20LoFi%20Remix.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't244',
    title: 'Exist',
    artist: '8BitGinger',
    duration: 206,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Exist.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't245',
    title: 'Feelin\' Myself',
    artist: '8BitGinger',
    duration: 227,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Feelin\'%20Myself.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't246',
    title: 'Freakin\' Weekend - VNDAL Version',
    artist: 'VNDAL',
    duration: 197,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Freakin\'%20Weekend%20-%20VNDAL%20Version.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't247',
    title: 'Frequency High / Studio Speedrap',
    artist: '8BitGinger',
    duration: 181,
    album: 'Synergy',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Frequency%20High%20_%20Studio%20Speedrap.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't248',
    title: 'I\'m A Mess Tonight!',
    artist: '8BitGinger',
    duration: 149,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/I\'m%20A%20Mess%20Tonight!.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't249',
    title: 'Just the Weekend',
    artist: '8BitGinger',
    duration: 232,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Just%20the%20Weekend.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't250',
    title: 'Loverz - VNDAL Version (Remastered) 2',
    artist: 'VNDAL',
    duration: 252,
    album: 'Static Heart',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Loverz%20-%20VNDAL%20Version%20(Remastered)%202.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't251',
    title: 'Man with the Plan',
    artist: '8BitGinger',
    duration: 153,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Man%20with%20the%20Plan.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't252',
    title: 'Missed Calls',
    artist: '8BitGinger',
    duration: 216,
    album: 'Static Heart',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Missed%20Calls.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't253',
    title: 'Missing Gateway Tape',
    artist: '8BitGinger',
    duration: 244,
    album: 'Synergy',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Missing%20Gateway%20Tape.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't254',
    title: 'Moved On',
    artist: '8BitGinger',
    duration: 229,
    album: 'Static Heart',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Moved%20On.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't255',
    title: 'Nice To Meet You - Miss U Mix',
    artist: '8BitGinger',
    duration: 226,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Nice%20To%20Meet%20You%20%20-%20Miss%20U%20Mix.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't256',
    title: 'Open All Night',
    artist: '8BitGinger',
    duration: 193,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Open%20All%20Night.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't257',
    title: 'Queen of the Pain - Blacklist Beat (Remastered)',
    artist: '8BitGinger',
    duration: 240,
    album: 'High Gain',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Queen%20of%20the%20Pain%20-%20Blacklist%20Beat%20(Remastered).wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't258',
    title: 'Receipts',
    artist: '8BitGinger',
    duration: 209,
    album: 'Static Heart',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Receipts.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't259',
    title: 'Rigid',
    artist: '8BitGinger',
    duration: 154,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Rigid.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't260',
    title: 'Signal Unknown - VNDAL Version',
    artist: 'VNDAL',
    duration: 183,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Signal%20Unknown%20-%20VNDAL%20Version.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't261',
    title: 'Stalking the Feed - Lowkey LoFi',
    artist: '8BitGinger',
    duration: 147,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Stalking%20the%20Feed%20-%20Lowkey%20LoFi.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't262',
    title: 'Steppin’',
    artist: '8BitGinger',
    duration: 195,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Steppin%E2%80%99.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't263',
    title: 'Still Walking',
    artist: '8BitGinger',
    duration: 269,
    album: 'High Gain',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Still%20Walking.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't264',
    title: 'Superhuman',
    artist: '8BitGinger',
    duration: 172,
    album: 'Synergy',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Superhuman.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't265',
    title: 'Tailor Made',
    artist: '8BitGinger',
    duration: 195,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Tailor%20Made.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't266',
    title: 'Tell You Something',
    artist: '8BitGinger',
    duration: 297,
    album: 'Static Heart',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Tell%20You%20Something.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't267',
    title: 'The Open Horizon',
    artist: '8BitGinger',
    duration: 268,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/The%20Open%20Horizon.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't268',
    title: 'The Way You Move',
    artist: '8BitGinger',
    duration: 279,
    album: 'Silk Sheets',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/The%20Way%20You%20Move.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't269',
    title: 'This is How We Vibe - VNDAL (Edit)',
    artist: 'VNDAL',
    duration: 227,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/This%20is%20How%20We%20Vibe%20-%20VNDAL%20(Edit).wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't270',
    title: 'Three Blind Mice',
    artist: '8BitGinger',
    duration: 203,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Three%20Blind%20Mice.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't271',
    title: 'Trauma - Auraveil Original',
    artist: 'Auraveil',
    duration: 207,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Trauma%20-%20Auraveil%20Original.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't272',
    title: 'Water',
    artist: '8BitGinger',
    duration: 207,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Water.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't273',
    title: 'We Are The Simulation',
    artist: '8BitGinger',
    duration: 199,
    album: 'Synergy',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/We%20Are%20The%20Simulation.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't274',
    title: 'Windows Cracked Down',
    artist: '8BitGinger',
    duration: 184,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Windows%20Cracked%20Down.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't275',
    title: 'Wish I had Known',
    artist: '8BitGinger',
    duration: 247,
    album: 'Static Heart',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Wish%20I%20had%20Known.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't276',
    title: 'Your Last Song - Auraveil (Edit) (Remastered)',
    artist: 'Auraveil',
    duration: 225,
    album: 'Static Heart',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Your%20Last%20Song%20-%20Auraveil%20(Edit)%20(Remastered).wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't277',
    title: '_I hope you\'re alright._',
    artist: '8BitGinger',
    duration: 163,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/_I%20hope%20you\'re%20alright._.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't278',
    title: 'still water - 8BitGinger Original (Remastered)',
    artist: '8BitGinger',
    duration: 264,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/still%20water%20-%20%208BitGinger%20Original%20(Remastered).wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't279',
    title: '❌\'$ Only (h0e n0 ed1t)',
    artist: '8BitGinger',
    duration: 281,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/%E2%9D%8C\'%24%20Only%20(h0e%20n0%20ed1t).wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },
  {
    id: 't280',
    title: '👽 ALIEN - VNDAL Version',
    artist: 'VNDAL',
    duration: 232,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/%F0%9F%91%BD%20ALIEN%20-%20VNDAL%20Version.wav?alt=media',
    art: null,
    genre: null,
    bpm: null,
  },



















];


// Gradient palettes per album (used as cover art fallback)
export const albumPalettes = {
  'Flow State': ['#7c3aed', '#4c0870', '#0f0219'],
  'Dirt Road': ['#c5c359', '#7f7a1e', '#2c2c00'],
  'Synergy': ['#0b8cf5', '#064d8c', '#021519'],
  'Static Heart': ['#db0e07', '#7f0a05', '#2c0000'],
  'Alt Drives': ['#36c236', '#1e7a1e', '#051904'],
  'Pulse': ['#ff4081', '#c60055', '#2c0014'],
  'High Gain': ['#ed6d3a', '#a83f1e', '#2c0f00'],
  'Silk Sheets': ['#b642d3', '#6f1e7a', '#1c0519'],
  'Liquid Gold': ['#f8d359', '#c48e1e', '#2c1400'],
  'Coffee & Clouds': ['#00e5ff', '#007a9c', '#05141c'],
  'Mixtape - All Tracks': ['#a8aaaa', '#879ca1', '#05141c'],
};

export const playlists = [
  {
    id: 'pl1',
    icon: 'MicVocal',
    name: 'Flow State',
    description:
      'Trap, Boom Bap, and Hardcore Rap for letting the words flow',
    trackIds: [
        't225',
      't2',
      't3',
      't10',
      't60',
      't202',
      't96',
      't206',
    
      't196',
      't105',
      't226',
      't198',
      't231',
      't259',
      't260',
      't272',
      't279',
      't280',
    ],
    color: '#871cdf',
  },
  {
    id: 'pl2',
    icon: 'Guitar',
    name: 'Dirt Road',
    description:
      'Country Trap, Outlaw Country, and Trad Country for those dusty roads',
    trackIds: [
    
      't15',
      't14',
      
      't37',
    
      't107',
     
    ],
    color: '#bda26d',
  },

    {
    id: 'pl6',
    icon: 'CarFront',
    name: 'Alt Drives',
    description:
      'Late-night Alternative for introspective moments and existential crises',
    trackIds: [
      't6',
      't8',
      't9',
      
      't151',
      
      
     
      
     't230',
      't244',
      't271',
      't277',
      
    ],
    color: '#36c236',
  },
    {
    id: 'pl7',
    icon: 'HandMetal',
    name: 'High Gain',
    description:
      'Rock, Nu-Metal, and Aggressive vibes for when you need to let it all out',
    trackIds: [
      
      
      
      't52',
      
      't181',
      
      't130',
      't242',
      't257',
      't263',
      
    ],
    color: '#ed6d3a',
  },
      {
    id: 'pl9',
    icon: 'Zap',
    name: 'Pulse',
    description: 'Pop hits, Electronica, and High-Energy Hits for any occasion',
    trackIds: [
      't228',
      't127',
      
    ],
    color: '#ff4081',
  },

    {
    id: 'pl10',
    icon: 'Coffee',
    name: 'Coffee & Clouds',
    description:
      'LoFi, Mellow, and Emotional vibes for Rainy Days',
    trackIds: [
      't70',
      't197',
      't97',
      't213',
      't210',
      't111',
      't176',
      't178',
      't122',
      't215',
     't232',
      't240',
      't241',
      't243',
      't251',
      't255',
      't261',
      't270',
      't274',
    ],
    color: '#00e5ff',
  },


    


  {
    id: 'pl4',
    icon: 'Heart',
    name: 'Static Heart',
    description: 'Love, Heartbreak, and Toxic cycles explored',
    trackIds: [
      't158',
      
      't79',
      't51',
      't32',
      
      't194',
      't223',
      't137',
      't188',
      
      't221',
     't281',
      't233',
      't238',
      't250',
      't252',
      't254',
      't258',
      't266',
      't275',
      't276',
    ],
    color: '#e2231c',
  },

  {
    id: 'pl11',
    icon: 'Droplet',
    name: 'Liquid Gold',
    description: 'Smooth and Slick cross-genre Hits for vibing',
    trackIds: [
       
      't186',
      't47',
      't199',
      't1',
      't217',

    't118',
    't200',
    
  
   
 
     't235',
      't237',
      't245',
      't246',
      't248',
      't249',
      't256',
      't262',
      't265',
      't267',
      't269',
      't278',
    ],
    color: '#f8d359',

    },

        {
    id: 'pl3',
    icon: 'Infinity',
    name: 'Synergy',
    description:
      'Manifestation, Simulation Theory, and the Metaphysical collide',
    trackIds: [
      't33',
      't46',
      't49',
      't109',
      't236',
      't247',
      't253',
      't264',
      't273',
    ],
    color: '#0b8cf5',
  },



  {
    id: 'pl8',
    icon: 'BedDouble',
    name: 'Silk Sheets',
    description:
      'Smooth, Sensual, and perfect for those After Hours intimate moments',
    trackIds: [
      't59',
      't219',
      't84',
      't192',
      't166',
      't227',
      't149',
      't157',
      't99',
      't58',
      't268',
      
     
     

      
    ],
    color: '#b642d3',
  },

  {
    id: 'pl5',
    icon: 'Shuffle',
    name: 'Mixtape - ALL',
    description: 'Everything in the RyFi universe',
    trackIds: tracks
      .sort(() => 0.5 - Math.random())
      .slice(0, 250)
      .map((t) => t.id),
    color: '#00e5ff',
  },
];
