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
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 228,
    src: 'https://cdn1.suno.ai/d40a4722-7f2e-40ca-a3d8-f84e35c13832.mp3', // 👈 replace with your .mp3 path or Suno URL
    art: '/art/ghostFrequency.webp', // 👈 replace with your cover art path or Suno URL
    genre: 'Noir Country-Trap',
    bpm: 145,
    lyrics: `

    `
  },
  {
    id: 't2',
    title: 'Whiskey Wolf - Club Cover',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 262,
    src: 'https://cdn1.suno.ai/e30861b3-6651-41fe-8e7d-761c6b714544.mp3', 
    art: '/art/whiskeyWolf.webp', 
    genre: 'UK Drill',
    bpm: 144,
  },
  {
    id: 't3',
    title: "Cello's Grudge",
    artist: 'RyFi',
    album: 'Flow State',
    duration: 194,
    src: 'https://cdn1.suno.ai/8122412c-fbf7-4362-a21c-30eda18e8e2d.mp3', 
    art: '/art/cellosGrudge.webp', 
    genre: 'Hardcore Lo-Fi',
    bpm: null,
  },
  {
    id: 't4',
    title: 'Your Last Song - Bagpipe Bootleg',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 307,
    src: 'https://cdn1.suno.ai/9848338d-d85c-4f5f-8714-9191f2d09273.mp3', 
    art: '/art/yourLastSong.jpeg', 
    genre: 'Irish Folk Drill',
    bpm: 110,
  },
  {
    id: 't5',
    title: 'I am Infinite',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 323,
    src: 'https://cdn1.suno.ai/afa7021b-7f2a-4076-ac6a-842951504cde.mp3', 
    art: '/art/iamInfinite.webp', 
    genre: 'Spiritual Hip-Hop',
    bpm: 95,
  },
  {
    id: 't6',
    title: 'Final Sound',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 268,
    src: 'https://cdn1.suno.ai/19c2111b-4f21-40b9-851d-ce8c96877c47.mp3', 
    art: '/art/finalSound.webp', // 
    genre: "90's Alternative",
    bpm: null,
  },
  {
    id: 't7',
    title: 'Walking in my Power',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 199,
    src: 'https://cdn1.suno.ai/ed4bfdf6-9bca-446b-bdcb-b39cfc2ae9fc.mp3', 
    art: '/art/walkingInMyPower.webp', //  URL
    genre: 'Drum & Bass',
    bpm: 174,
  },
  {
    id: 't8',
    title: 'Trust Fall',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 224,
    src: 'https://cdn1.suno.ai/f0ed06e4-2bd0-485e-b226-3471731c6589.mp3',
    art: '/art/trustfall.webp',
    genre: 'Midwest Emo',
    bpm: 140,
  },
  {
    id: 't9',
    title: 'Burn the Blueprint',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 215,
    src: 'https://cdn1.suno.ai/8ce74465-2da5-487d-a484-c30cc23e418e.mp3',
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
    src: 'https://cdn1.suno.ai/6485b372-0c27-46ba-add2-44b46330ef8c.mp3',
    art: '/art/backinBlood.webp',
    genre: 'Dark Soul Trap',
    bpm: 138,
  },
  {
    id: 't11',
    title: 'Slow Burn',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 275,
    src: 'https://cdn1.suno.ai/1a30ba32-847b-4c81-99e1-43b5712f37b4.mp3',
    art: '/art/slowburn.webp',
    genre: 'Dark Soul Trap',
    bpm: 92,
  },
  {
    id: 't12',
    title: 'Mirror & the Ocean',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 388,
    src: 'https://cdn1.suno.ai/2a5c130c-c43d-47f4-8c25-1e4276b2ae58.mp3',
    art: '/art/mirrorAndTheOcean.webp',
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
    art: '/art/oceanAgain.webp',
    genre: 'LoFi Trap',
    bpm: 85,
  },
  {
    id: 't14',
    title: 'Certified Pyscho',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 172,
    src: 'https://cdn1.suno.ai/525c512b-a967-48d8-a43f-04136f6cc9c7.mp3',
    art: '/art/certifiedPyscho.webp',
    genre: 'Contemporary Country',
    bpm: 85,
  },
  {
    id: 't15',
    title: 'The Whiskey Isn\'t Well',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 214,
    src: 'https://cdn1.suno.ai/88b09f40-0ae4-44c8-9a40-8f38d49b3f2f.mp3',
    art: '/art/whiskeyIsntWell.webp',
    genre: 'Contemporary Country',
    bpm: 140,
  },
  {
    id: 't16',
    title: 'Paper Crimes',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 269,
    src: 'https://cdn1.suno.ai/161ccda7-0f4e-4121-a21b-e64134255171.mp3',
    art: '/art/paperCrimes.webp',
    genre: 'Contemporary Country',
    bpm: 68,
  },
  {
    id: 't17',
    title: 'Favorite Stranger',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 296,
    src: 'https://cdn1.suno.ai/a149662b-c5b9-437d-a8af-de258e04a58f.mp3',
    art: '/art/favoriteStranger.webp',
    genre: 'Pop Rap',
    bpm: 95,
  },
  {
    id: 't18',
    title: 'Contained',
    artist: 'RyFi & @not8DJ',
    album: 'Static Heart',
    duration: 300,
    src: 'https://cdn1.suno.ai/cb086096-6964-4f3b-9263-3f9920e5528c.mp3',
    art: '/art/contained.webp',
    genre: 'Dark R&B',
    bpm: 75,
  },
  {
    id: 't19',
    title: 'Weightless',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 127,
    src: 'https://cdn1.suno.ai/fc07aa35-2b49-4373-8453-6d14f7d20d51.mp3',
    art: '/art/weightless.webp',
    genre: 'Smooth Pop',
    bpm: null,
  },
  {
    id: 't20',
    title: 'Heartbreak Hit & Run',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 195,
    src: 'https://cdn1.suno.ai/bd3c1e4d-f91f-4c84-b35b-d9ba20c5b24a.mp3',
    art: '/art/heartbreak.webp',
    genre: 'Pop Funk',
    bpm: 128,
  },
  {
    id: 't21',
    title: 'Color in the Monochrome - Sitar Remix',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 214,
    src: 'https://cdn1.suno.ai/3d8d4c8f-eb73-4eea-8621-a0b87122a5f8.mp3',
    art: '/art/colorMonochrome.webp',
    genre: 'Pop Funk',
    bpm: 115,
  },
  {
    id: 't22',
    title: 'Still Vibrating',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 290,
    src: 'https://cdn1.suno.ai/1cc24451-9080-435c-9772-bf6bc2693db2.mp3',
    art: '/art/stillVibrating.webp',
    genre: 'Nu-Metal',
    bpm: 82,
  },
  {
    id: 't23',
    title: 'The Beginning?',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 214,
    src: 'https://cdn1.suno.ai/19242ffe-b25d-4d33-a1a3-640f1512ff8b.mp3',
    art: '/art/beginning.webp',
    genre: 'Alt-Rock Trap',
    bpm: 90,
  },
  {
    id: 't24',
    title: 'The Glitter & the Glass',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 199,
    src: 'https://cdn1.suno.ai/461b77e1-a374-48e4-b5db-d2482bede50f.mp3',
    art: '/art/glitterGlass.webp',
    genre: 'Dark Rock-Pop',
    bpm: 90,
  },
  {
    id: 't25',
    title: 'Honey Trap',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 241,
    src: 'https://cdn1.suno.ai/8a300890-4556-4b9e-9571-fa5edc39c579.mp3',
    art: '/art/honeyTrap.webp',
    genre: 'Dark Luxury Trap',
    bpm: 140,
  },
  {
    id: 't26',
    title: 'Good Boy',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 221,
    src: 'https://cdn1.suno.ai/e6f50f4e-d122-4f92-83bb-574acf5ea4cd.mp3',
    art: '/art/goodBoy.webp',
    genre: 'Sinister R&B',
    bpm: null,
  },
  {
    id: 't27',
    title: 'Last Call Casanova',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 274,
    src: 'https://cdn1.suno.ai/22a8b6f3-fed8-489c-a7ea-8620c57f68ab.mp3',
    art: '/art/lastCall.webp',
    genre: 'Traditional Country',
    bpm: 75,
  },
  {
    id: 't28',
    title: "Can't Sleep",
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 192,
    src: 'https://cdn1.suno.ai/b57bfa19-65d2-4f6c-a3bd-6a5e9da28a40.mp3',
    art: '/art/cantSleep.webp',
    genre: 'LoFi Trap',
    bpm: 70,
  },

  {
    id: 't29',
    title: "Let's Get High  (ft. Timbaland)",
    artist: 'RyFi feat. Timbaland',
    album: 'Flow State',
    duration: 297,
    src: 'https://cdn1.suno.ai/c9565d3f-0a36-44a9-9b4a-5052c10e8393.mp3',
    art: '/art/letsGetHigh.webp',
    genre: 'LoFi Trap',
    bpm: 140,
  },

  {
    id: 't30',
    title: '1st Day Out - One Night Duet',
    artist: 'RyFi ft. @dearonwiley',
    album: 'Flow State',
    duration: 181,
    src: 'https://cdn1.suno.ai/873ed8d8-d51e-4a8a-b4ee-6c723752d602.mp3',
    art: '/art/1stDay.webp',
    genre: 'Emo Trap',
    bpm: 140,
  },

  {
    id: 't31',
    title: 'Liquid or Lace',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 241,
    src: 'https://cdn1.suno.ai/6cffaf21-d3c4-45d2-9671-1d4907c3ab22.mp3',
    art: '/art/liquidLace.webp',
    genre: 'Country Trap',
    bpm: 135,
  },

  {
    id: 't32',
    title: 'Everything You Asked For',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 219,
    src: 'https://cdn1.suno.ai/41fea86d-22ba-4295-8403-385093a059ca.mp3',
    art: '/art/everythingYouAskedFor.webp',
    genre: 'Dark R&B',
    bpm: null,
  },

  {
    id: 't33',
    title: 'Apex Vision',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 222,
    src: 'https://cdn1.suno.ai/b82ea744-18e0-4703-b29b-00b591ae6377.mp3',
    art: '/art/apexVision.webp',
    genre: 'Trap Phonk',
    bpm: 180,
  },

  {
    id: 't34',
    title: 'Soul in the Beat',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 197,
    src: 'https://cdn1.suno.ai/986d61fa-d00b-43b4-a10d-27419c1297e6.mp3',
    art: '/art/soulInTheBeat.webp',
    genre: 'Trap Phonk',
    bpm: 140,
  },

  {
    id: 't35',
    title: 'Pure Signal - Ethereal Edit',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 268,
    src: 'https://cdn1.suno.ai/b4e3e85b-8d06-4d19-9f76-4f2e91ab6117.mp3',
    art: '/art/pureSignal.webp',
    genre: 'Trap Phonk',
    bpm: 140,
  },

  {
    id: 't36',
    title: 'Oxygen',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 248,
    src: 'https://cdn1.suno.ai/bb9f91b5-e369-48c9-8637-54a8c6b092c9.mp3',
    art: '/art/oxygen.webp',
    genre: 'Neo-Soul Trap',
    bpm: 92,
  },

  {
    id: 't37',
    title: 'Let it Burn',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 214,
    src: 'https://cdn1.suno.ai/fbf20fda-8934-41a1-87af-26889b5a201b.mp3',
    art: '/art/letItBurn.webp',
    genre: 'Country Trap',
    bpm: null,
  },

  {
    id: 't38',
    title: 'Resonate',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 277,
    src: 'https://cdn1.suno.ai/9f33a6ce-d306-4d70-a096-a6a0069b639d.mp3',
    art: '/art/resonate.webp',
    genre: 'Hip-Hop Jazz',
    bpm: 85,
  },

  // {
  //   id: 't39',
  //   title: 'In Love with a Burlesque Queen',
  //   artist: 'RyFi',
  //   album: 'Silk Sheets',
  //   duration: 259,
  //   src: 'https://cdn1.suno.ai/00bb8dce-7cd8-4432-9568-a6415561a552.mp3',
  //   art: '/art/burlesqueQueen.webp',
  //   genre: 'R&B',
  //   bpm: 70,
  // },

  {
    id: 't40',
    title: 'Lackluster',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 259,
    src: 'https://cdn1.suno.ai/5295c0e6-28a1-40f3-9805-6b6b73d001e1.mp3',
    art: '/art/lackluster.webp',
    genre: 'Indie Dark Pop',
    bpm: 95,
  },

  {
    id: 't41',
    title: 'Bourbon & Bitches',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 191,
    src: 'https://cdn1.suno.ai/58ddfc8e-bbfd-4561-813d-d41f6098974c.mp3',
    art: '/art/bourbonBitches.webp',
    genre: 'Modern Pop-Rock',
    bpm: 82,
  },

  {
    id: 't42',
    title: 'Double Rainbow',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 209,
    src: 'https://cdn1.suno.ai/687e193e-934e-42ac-8421-c4253eeb585f.mp3',
    art: '/art/doubleRainbow.webp',
    genre: 'Chillstep',
    bpm: 130,
  },

  {
    id: 't43',
    title: 'Just Let it Render',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 231,
    src: 'https://cdn1.suno.ai/12817268-0145-4b74-b2d7-5173bd9f9dad.mp3',
    art: '/art/justLetItRender.webp',
    genre: '2010s Hip-Hop',
    bpm: 190,
  },

  {
    id: 't44',
    title: 'Vibe Check',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 147,
    src: 'https://cdn1.suno.ai/3ed1e6f7-3835-45c2-a673-ca69e8c4f116.mp3',
    art: '/art/vibeCheck.webp',
    genre: 'Trap Phonk',
    bpm: 175,
  },
  {
    id: 't45',
    title: 'Healing War',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 211,
    src: 'https://cdn1.suno.ai/afd20895-d3c7-4001-baee-6ce371a1fe80.mp3',
    art: '/art/healingWar.webp',
    genre: 'Soulful Singer-Songwriter',
    bpm: 110,
  },

  {
    id: 't46',
    title: 'The Simulation - LoFi Rewind',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 266,
    src: 'https://cdn1.suno.ai/546d55e6-784c-4512-90d4-b8ecc066b164.mp3',
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
    src: 'https://cdn1.suno.ai/aede3266-b1c2-4bd5-83dd-890bee4b422b.mp3',
    art: '/art/hard2Move.webp',
    genre: 'Dark LoFi',
    bpm: 98,
  },

  {
    id: 't48',
    title: 'High Fidelity Hit',
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 175,
    src: 'https://cdn1.suno.ai/0e335442-d1e5-425d-a1d3-c504f0ebe642.mp3',
    art: '/art/highFidelityHit.webp',
    genre: '2010s Hip-Hop',
    bpm: null,
  },

  {
    id: 't49',
    title: 'Transcendence',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 274,
    src: 'https://cdn1.suno.ai/d53ded3c-4494-4af9-8d02-91d349d52c2a.mp3',
    art: '/art/transcendence.webp',
    genre: '432hz Synthwave Trap',
    bpm: null,
  },

  // {
  //   id: 't50',
  //   title: 'The Phoenix Rises',
  //   artist: 'RyFi',
  //   album: 'Liquid Gold',
  //   duration: 193,
  //   src: 'https://cdn1.suno.ai/7152721e-7d84-4fa4-9f10-6a6937682035.mp3',
  //   art: '/art/thePhoenix.webp',
  //   genre: 'Country Trap',
  //   bpm: null,
  // },

  {
    id: 't51',
    title: 'Words and their Wounds',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 278,
    src: 'https://cdn1.suno.ai/022cd8cd-fb54-4df1-8000-3f174fa52a1f.mp3',
    art: '/art/wordsWounds.webp',
    genre: 'Acoustic Soul',
    bpm: null,
  },

  {
    id: 't52',
    title: 'Chemical Bond',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 206,
    src: 'https://cdn1.suno.ai/d710c912-105c-4a6e-834a-4e8b8a2346d8.mp3',
    art: '/art/chemicalBond.webp',
    genre: 'Cinematic Emo Rock',
    bpm: null,
  },

  // {
  //   id: 't53',
  //   title: 'Hyper-Focus',
  //   artist: 'RyFi',
  //   album: 'Flow State',
  //   duration: 194,
  //   src: 'https://cdn1.suno.ai/9007005c-3e58-4059-81de-22e8ec76a4c4.mp3',
  //   art: '/art/hyperFocus.webp',
  //   genre: 'Dark Boom Bap',
  //   bpm: 92,
  // },

  {
    id: 't54',
    title: 'Give it to me Raw',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 263,
    src: 'https://cdn1.suno.ai/7320ca97-da3e-4284-af69-3573573fe6e0.mp3',
    art: '/art/giveItToMeRaw.webp',
    genre: 'Dark Trapsoul',
    bpm: 130,
  },

  // {
  //   id: 't55',
  //   title: 'Dis Bitch - Drill Demo',
  //   artist: 'RyFi',
  //   album: 'Silk Sheets',
  //   duration: 145,
  //   src: 'https://cdn1.suno.ai/9a4621f1-57d9-4f9d-ab62-883a6a7b76a9.mp3',
  //   art: '/art/disBitch.webp',
  //   genre: 'Drill',
  //   bpm: 140,
  // },

  {
    id: 't56',
    title: 'Raise Your Glass!',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 288,
    src: 'https://cdn1.suno.ai/edd9c36f-f325-4201-b080-e093a6f0d046.mp3',
    art: '/art/raiseYourGlass.webp',
    genre: 'Folk-Stomp',
    bpm: null,
  },

  {
    id: 't57',
    title: 'The Standard',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 179,
    src: 'https://cdn1.suno.ai/8571139f-9133-41eb-85d8-4ba8c1b44d42.mp3',
    art: '/art/theStandard.webp',
    genre: 'Psychedelic Trap',
    bpm: 140,
  },

  {
    id: 't58',
    title: 'Skin & Soul',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 273,
    src: 'https://cdn1.suno.ai/18fd9d00-72ec-4b10-9bb9-59c0f751e42e.mp3',
    art: '/art/skinSoul.webp',
    genre: 'Chillstep',
    bpm: 115,
  },

  {
    id: 't59',
    title: 'Body Frequency',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 258,
    src: 'https://cdn1.suno.ai/d4a48489-6f03-415e-b10b-92cc0b4bf225.mp3',
    art: '/art/bodyFrequency.webp',
    genre: 'R&B',
    bpm: 105,
  },

  {
    id: 't60',
    title: 'Villian Era - 3am Remix',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 253,
    src: 'https://cdn1.suno.ai/690a066f-a623-4db4-98ab-24ae0ad6979a.mp3',
    art: '/art/villianEra.webp',
    genre: 'Trap-Phonk',
    bpm: 140,
  },

  {
    id: 't61',
    title: "I'm Drunk Again",
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 207,
    src: 'https://cdn1.suno.ai/b49ba696-b74f-4856-8a66-63f0ebb1c750.mp3',
    art: '/art/drunkAgain.webp',
    genre: 'Indie LoFi',
    bpm: 85,
  },

  {
    id: 't62',
    title: 'The Brink - Lonesome Edition',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 258,
    src: 'https://cdn1.suno.ai/3a19348f-84d1-4da9-9b88-0029d1bfc2b9.mp3',
    art: '/art/theBrink.webp',
    genre: 'Country Trap',
    bpm: 74,
  },

  {
    id: 't63',
    title: 'Digital Drift',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 222,
    src: 'https://cdn1.suno.ai/28d3520c-7881-440d-aced-ec10d2beb002.mp3',
    art: '/art/digitalDrift.webp',
    genre: 'Phonk LoFi',
    bpm: 140,
  },

  // {
  //   id: 't64',
  //   title: 'West Texas Wind',
  //   artist: 'RyFi',
  //   album: 'Dirt Road',
  //   duration: 310,
  //   src: 'https://cdn1.suno.ai/ca79ec67-645d-4ed9-a405-ee80c87afb82.mp3',
  //   art: '/art/westTexasWind.webp',
  //   genre: 'Outlaw Country',
  //   bpm: 145,
  // },

  {
    id: 't65',
    title: 'Solar Return',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 170,
    src: 'https://cdn1.suno.ai/1727ba54-f37f-4f73-8677-03134ee898c4.mp3',
    art: '/art/solarReturn.webp',
    genre: 'LoFi Chillstep',
    bpm: 90,
  },

  {
    id: 't66',
    title: 'Sweet Alignment!',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 203,
    src: 'https://cdn1.suno.ai/d4cef9d3-d346-4971-9e93-7961d0c83934.mp3',
    art: '/art/sweetAlignment.webp',
    genre: 'LoFi Chillstep',
    bpm: 92,
  },

  {
    id: 't67',
    title: 'Flow State',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 262,
    src: 'https://cdn1.suno.ai/d1ae4db9-a1f8-4f5c-8494-ee44f1ff47a3.mp3',
    art: '/art/flowState.webp',
    genre: 'LoFi Chillstep',
    bpm: 88,
  },

  {
    id: 't68',
    title: 'Monochrome Grid',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 186,
    src: 'https://cdn1.suno.ai/dc0ac5e3-51e0-4717-8d25-9738fff5dfeb.mp3',
    art: '/art/monochromeGrid.webp',
    genre: 'Country Trap',
    bpm: 90,
  },

  {
    id: 't69',
    title: 'Escape the Simulation',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 156,
    src: 'https://cdn1.suno.ai/5901c7d7-9172-44b6-85d1-33b6b3136dcb.mp3',
    art: '/art/escapeTheSimulation.webp',
    genre: 'Trap Soul',
    bpm: 140,
  },

  {
    id: 't70',
    title: 'Rain on the Glass',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 479,
    src: 'https://cdn1.suno.ai/b467d17a-cb7a-4e42-aaed-72ebb7237ccb.mp3',
    art: '/art/rainOnTheGlass.webp',
    genre: 'Executive LoFi',
    bpm: 95,
  },

  {
    id: 't71',
    title: 'Alignment',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 342,
    src: 'https://cdn1.suno.ai/13404606-5c49-4635-ba60-995a4013b09e.mp3',
    art: '/art/alignment.webp',
    genre: 'Atmospheric Trap',
    bpm: null,
  },

  {
    id: 't72',
    title: 'Poison in the Sheets',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 217,
    src: 'https://cdn1.suno.ai/56d315b5-940f-454e-8b65-9cbf3d387f70.mp3',
    art: '/art/poisonInTheSheets.webp',
    genre: 'Southern Trap-Blues',
    bpm: 72,
  },

  {
    id: 't73',
    title: 'Velvet & Glass',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 192,
    src: 'https://cdn1.suno.ai/b449b538-c8d2-488a-983f-94338b57f306.mp3',
    art: '/art/velvetGlass.webp',
    genre: 'Soul-Rap',
    bpm: 135,
  },

  {
    id: 't74',
    title: 'Not Delivered',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 267,
    src: 'https://cdn1.suno.ai/ed25b653-1fb3-4e34-8ba7-2a37cda5cba6.mp3',
    art: '/art/notDelivered.webp',
    genre: 'Pop Rock',
    bpm: 95,
  },

  {
    id: 't75',
    title: "Cruisin' Through the Shadows",
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 292,
    src: 'https://cdn1.suno.ai/3f23accc-d868-4d69-bdba-c0c51c11bc72.mp3',
    art: '/art/cruisin.webp',
    genre: 'Nu-Metal',
    bpm: 85,
  },

  {
    id: 't76',
    title: 'The Fall of Home',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 295,
    src: 'https://cdn1.suno.ai/6d0e7cc3-b36a-44a0-bb48-2202bcc35ba5.mp3',
    art: '/art/fallHome.webp',
    genre: 'Nu-Metal',
    bpm: 80,
  },

  {
    id: 't77',
    title: '4am',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 245,
    src: 'https://cdn1.suno.ai/88f40e6b-cc29-4fd1-bb40-910d47006f45.mp3',
    art: '/art/4am.webp',
    genre: 'Indie Rock',
    bpm: 85,
  },

  {
    id: 't78',
    title: 'Static in the Soul',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 255,
    src: 'https://cdn1.suno.ai/3990a3e8-f874-4523-8481-36961c3b94d4.mp3',
    art: '/art/staticInTheSoul.webp',
    genre: 'LoFi Alternative',
    bpm: 140,
  },

  {
    id: 't79',
    title: 'Beautiful Hell',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 209,
    src: 'https://cdn1.suno.ai/f5167d33-7039-4020-958e-3d224ae13fdc.mp3',
    art: '/art/beautifulHell.webp',
    genre: 'Dark R&B',
    bpm: 90,
  },

  // {
  //   id: 't80',
  //   title: 'Brothers',
  //   artist: 'RyFi',
  //   album: 'Dirt Road',
  //   duration: 166,
  //   src: 'https://cdn1.suno.ai/0006e9ab-57ee-40b6-8f00-89919e0b2947.mp3',
  //   art: '/art/brothers.webp',
  //   genre: 'Rock Country',
  //   bpm: 95,
  // },

  {
    id: 't81',
    title: 'No Ice - Nectar Mix',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 219,
    src: 'https://cdn1.suno.ai/bdb097ed-e722-4aab-8dfd-80c92a75ec5e.mp3',
    art: '/art/noIce.webp',
    genre: 'Reggae Pop-Rock',
    bpm: null,
  },

  {
    id: 't82',
    title: 'First Date Vibes',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 210,
    src: 'https://cdn1.suno.ai/53ccea43-9bea-45cf-aa27-d07c5fe1eb4f.mp3',
    art: '/art/firstDate.webp',
    genre: 'Pop-Infused Hip-Hop',
    bpm: 160,
  },

  {
    id: 't83',
    title: 'The Switch',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 220,
    src: 'https://cdn1.suno.ai/0640729c-5090-47d5-b5d5-83fdedb8dcfd.mp3',
    art: '/art/theSwitch.webp',
    genre: 'Dark R&B',
    bpm: 90,
  },

  // {
  //   id: 't84',
  //   title: 'Don\t Do It',
  //   artist: 'RyFi & @korean_hamin',
  //   album: 'Silk Sheets',
  //   duration: 218,
  //   src: 'https://cdn1.suno.ai/d81ea87c-5181-497b-bd52-120902db0df7.mp3',
  //   art: '/art/dontDoIt.webp',
  //   genre: 'K-POP',
  //   bpm: 95,
  // },

  {
    id: 't85',
    title: 'Gunpowder & Gasoline',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 253,
    src: 'https://cdn1.suno.ai/7c9fc47f-a9f0-46f4-b2ea-417fd1d6dd45.mp3',
    art: '/art/gunpowderGasoline.webp',
    genre: 'Outlaw Country',
    bpm: null,
  },

  {
    id: 't86',
    title: 'Ready to Fall',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 255,
    src: 'https://cdn1.suno.ai/61ce9050-55de-45a8-b8db-1ce3f281f380.mp3',
    art: '/art/readyToFall.webp',
    genre: 'Alternative Emo Rock',
    bpm: 168,
  },

  {
    id: 't87',
    title: 'West Coast Beat',
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 155,
    src: 'https://cdn1.suno.ai/2a1cecf2-545b-4805-8656-1f513e41b064.mp3',
    art: '/art/westCoastBeat.webp',
    genre: 'West Coast Hip-Hop',
    bpm: 94,
  },

  {
    id: 't88',
    title: 'Wide Awake - Remix',
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 190,
    src: 'https://cdn1.suno.ai/ce5f094c-7242-4ec3-8542-1d9106f6e52e.mp3',
    art: '/art/wideAwake.webp',
    genre: 'Psychedelic Trap',
    bpm: 90,
  },

  // {
  //   id: 't89',
  //   title: 'Modern High',
  //   artist: 'RyFi',
  //   album: 'Pulse',
  //   duration: 177,
  //   src: 'https://cdn1.suno.ai/7635a168-10da-4247-83dd-9d21497c8525.mp3',
  //   art: '/art/modernHigh.webp',
  //   genre: 'Power-Pop Punk',
  //   bpm: 105,
  // },

  {
    id: 't90',
    title: 'Dust on the Dashboard',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 176,
    src: 'https://cdn1.suno.ai/b0bd643f-c3f2-42bb-8bbf-56b0390e7173.mp3',
    art: '/art/dustOnTheDash.webp',
    genre: 'Country Trap',
    bpm: null,
  },

  {
    id: 't91',
    title: 'Choosing the Light Today',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 207,
    src: 'https://cdn1.suno.ai/60c0d5b2-f992-4ec5-be02-fefa81286fa2.mp3',
    art: '/art/choosingTheLightToday.webp',
    genre: 'Indie Rock',
    bpm: 85,
  },

  {
    id: 't92',
    title: 'Permanent Sugar Stain',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 204,
    src: 'https://cdn1.suno.ai/e1e97a96-a392-441b-b8c9-100436945d7b.mp3',
    art: '/art/permanentSugarStain.webp',
    genre: '90s Alternative Rock',
    bpm: 95,
  },

  {
    id: 't93',
    title: 'Hey Mr. Money!',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 176,
    src: 'https://cdn1.suno.ai/2b49d4c2-ad2c-4730-af9e-1499064c138c.mp3',
    art: '/art/heyMrMoney.webp',
    genre: 'Reggae Rock',
    bpm: null,
  },

  // {
  //   id: 't94',
  //   title: 'Top Shelf Dreams',
  //   artist: 'RyFi',
  //   album: 'Liquid Gold',
  //   duration: 214,
  //   src: 'https://cdn1.suno.ai/8cf859fe-432f-46db-899b-3fb072a9e6d1.mp3',
  //   art: '/art/topShelfDreams.webp',
  //   genre: 'Soulful R&B',
  //   bpm: null,
  // },

  {
    id: 't95',
    title: 'Residual Heat',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 264,
    src: 'https://cdn1.suno.ai/6ae418de-c26b-458d-b43c-a2136427251b.mp3',
    art: '/art/residualHeat.webp',
    genre: 'Dark R&B',
    bpm: null,
  },

  {
    id: 't96',
    title: 'Your Ex is a Bish',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 312,
    src: 'https://cdn1.suno.ai/112c396c-b841-4b7a-9fd1-dea7dc3b51c4.mp3',
    art: '/art/yourExIsABish.webp',
    genre: 'Murder Rap',
    bpm: 140,
  },

  {
    id: 't97',
    title: 'Beautiful Friction',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 169,
    src: 'https://cdn1.suno.ai/a1497b11-aab9-4d98-a9a4-f8de9f2f961c.mp3',
    art: '/art/beautifulFriction.webp',
    genre: 'LoFi',
    bpm: 85,
  },


  {
    id: 't99',
    title: 'Midnight Mantra',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 319,
    src: 'https://cdn1.suno.ai/5c06df52-26ca-45ea-a04e-84c1c52956a7.mp3',
    art: '/art/midnightMantra.webp',
    genre: 'New Genre',
    bpm: 130,
  },

  {
    id: 't100',
    title: 'Venom',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 316,
    src: 'https://cdn1.suno.ai/5bed3c6f-1885-4a55-ba43-9e47a3547bc8.mp3',
    art: '/art/venom.webp',
    genre: 'Dark Trap Soul',
    bpm: 92,
  },

  // {
  //   id: 't101',
  //   title: 'Fatality - Diss Track',
  //   artist: 'RyFi',
  //   album: 'Flow State',
  //   duration: 275,
  //   src: 'https://cdn1.suno.ai/5e41be39-efb5-4724-98c5-f478f0b48cc5.mp3',
  //   art: '/art/fatality.webp',
  //   genre: 'Battle Rap',
  //   bpm: 140,
  // },

  // {
  //   id: 't102',
  //   title: 'Null',
  //   artist: 'RyFi',
  //   album: 'High Gain',
  //   duration: 128,
  //   src: 'https://cdn1.suno.ai/8aa5e5ed-b846-4b69-afe9-cdf4e3172b56.mp3',
  //   art: '/art/null.webp',
  //   genre: 'Noir Rock',
  //   bpm: 88,
  // },

  // {
  //   id: 't103',
  //   title: 'Hallowed Ground',
  //   artist: 'RyFi',
  //   album: 'Dirt Road',
  //   duration: 266,
  //   src: 'https://cdn1.suno.ai/3a42d34b-df96-4d6d-98f4-b45bfdcc9ca4.mp3',
  //   art: '/art/hallowedGround.webp',
  //   genre: 'Swamp Blues Country',
  //   bpm: 80,
  // },

  {
    id: 't104',
    title: 'Slick Like Texas',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 239,
    src: 'https://cdn1.suno.ai/69d9f52b-dcd2-4365-a190-f03d3208eb41.mp3',
    art: '/art/slickLikeTexas.webp',
    genre: 'Country Boom-Bap',
    bpm: 98,
  },

  {
    id: 't105',
    title: 'Alien',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 234,
    src: 'https://cdn1.suno.ai/09ef3d25-791f-4459-ae1e-e9e016d6d10b.mp3',
    art: '/art/alien.webp',
    genre: 'Futuristic Trap',
    bpm: 145,
  },

  {
    id: 't106',
    title: 'Just Clear',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 320,
    src: 'https://cdn1.suno.ai/0580861e-6247-4dff-8015-3e07447a177b.mp3',
    art: '/art/justClear.webp',
    genre: 'Folk Pop',
    bpm: 96,
  },

  {
    id: 't107',
    title: 'Blindside Drunk',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 283,
    src: 'https://cdn1.suno.ai/5437793b-5dab-4c25-8aea-0dbfda75d6cf.mp3',
    art: '/art/blindsideDrunk.webp',
    genre: 'Stadium Country',
    bpm: 108,
  },

  {
    id: 't108',
    title: "X's Only",
    artist: 'RyFi',
    album: 'Flow State',
    duration: 280,
    src: 'https://cdn1.suno.ai/becaa5bf-090e-482d-a53f-a487221c2377.mp3',
    art: '/art/x.webp',
    genre: 'Dirty South Trap',
    bpm: 94,
    lyrics: `
You know what's elementary?
(pause)
This.

I keep a grid in my head, nine squares total
Every negative energy gets a box and a role
And the role is simple, you already know
I don't negotiate, I don't explain, I just
(stop) X (stop) And go
This ain't complicated, this is elementary school
Same game every child knows, got the same set of rules
You either vibe or you don't, you either real or you're not
Every fake one in my circle gets a square and a dot
(stop)
Then an X over the dot
Every O in my life acting up for a show
Wanting pieces of my crown, but they nothing but hoes
They bring zero to the table, got exactly what they scored
Which is nothing, they out, hit the X at the door
Don't need an explanation, don't need a reason why
You already knew what you was bringing to my grid, bye

It ain't personal (stop) it's just math
You add negative to positive and the positive gets half
So I'm doing simple arithmetic
X you out the equation, watch the whole sum get rich
Elementary

X's only in my grid, no O's allowed
X's only in my circle, no room for that cloud
Of toxic energy draining what I built
X's only moving forward, O's can keep the guilt
(stop) X (stop) Just X (stop) X's only

See these O's think they different, trying to build up a case
Thinks if they talk enough they can stay in my space
But the X already landed and the X never healed
Back into an O, that's not how the game feels
Once I mark the square, everybody knows
Cut the fakes, cut the flakes, and the clout-chasing hoes
Slow, final, no drama, no noise
Just the X and the quiet that comes after a choice
Elementary... didn't even need to study for this one

It ain't personal (stop) it's just math
You add negative to positive and the positive gets half
X you out the equation, watch the whole sum get rich
Elementary

X's only in my grid, no O's allowed
X's only in my circle, no room for that cloud
Of toxic energy draining what I built
X's only moving forward, O's can keep the guilt
(stop) X (stop) Just X (stop) X's only

I kept the wrong ones close for longer than I should
Told myself their darkness was just misunderstood
Chasing shadows and hoes, letting my energy spill
Every box with a toxin that was making me ill
I was the one explaining, I was the one defending
I was the one who stayed long past every ending
Signal they were sending that said get out, get out
(stop)
And I stayed
One day I woke up, drew the grid, cleared the air
Saw the fakes and the users and the O's sitting there
So I picked up the X and went square by square
Didn't explain, didn't prepare them for it
Because they already knew what they were bringing
(stop) X (stop) X (stop) X
All nine squares, game over, my board now

(single 808 pulse)
You saw it coming.
I saw it coming.
The only difference is I did something about it.
(pause) X. (pause) Next square.

Clock me in, X's only, no O's in my atmosphere
Cut the parasites out, watch 'em all disappear
Tic-tac-toe elementary, protecting the frame
You been playing it complex, I'm mastering the game
Simple rules from day one, just with higher stakes
Every X I put down is a boundary I make
Permanent and final, no discussion, no debate
Built for X's only, real ones only, genuine inside the gate

X's only in my grid...
No O's allowed, X's only in my circle
No room for that cloud draining what I built
O's can keep the guilt
 X
 ...just X...
 X's only

Elementary.
Next square.
    `
  },

  {
    id: 't109',
    title: 'We Are The Simulation',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 199,
    src: 'https://cdn1.suno.ai/8fda1837-79c9-4b87-b23c-88cee27c0a21.mp3',
    art: '/art/weAreTheSimulation.webp',
    genre: 'Alternative R&B',
    bpm: 95,
  },

  {
    id: 't110',
    title: 'Spice It Up - Spice Girls Cover',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 239,
    src: 'https://cdn1.suno.ai/e83bbe4b-5166-46fc-81e8-8d874c05a4c7.mp3',
    art: '/art/spiceItUp.webp',
    genre: 'Avante Garde Pop',
    bpm: 140,
  },

  {
    id: 't111',
    title: 'Weekend Spirit',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 156,
    src: 'https://cdn1.suno.ai/e2ab9004-bd19-4146-add1-e79957536085.mp3',
    art: '/art/weekendSpirit.webp',
    genre: 'Folk Soul',
    bpm: 78,
  },

  {
    id: 't112',
    title: "We Don't Talk Anymore",
    artist: 'RyFi & @kostaboda',
    album: 'Static Heart',
    duration: 232,
    src: 'https://cdn1.suno.ai/1465d912-5acd-4db6-b5a4-b42e54a06a26.mp3',
    art: '/art/weDontTalkAnymore.webp',
    genre: 'Trap Soul',
    bpm: 95,
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
    id: 't115',
    title: 'Jump On This',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 241,
    src: 'https://cdn1.suno.ai/230a6b2f-e493-41f7-8153-570b03c0bdab.mp3',
    art: '/art/jumpOnThis.webp',
    genre: 'Country Trap',
    bpm: 85,
  },

  {
    id: 't116',
    title: 'Wide Open',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 264,
    src: 'https://cdn1.suno.ai/36f8cd73-b449-4cc1-91be-877656d7d25c.mp3',
    art: '/art/wideOpen.webp',
    genre: 'Pop R&B',
    bpm: 110,
  },

  {
    id: 't117',
    title: 'Shaded Not Jaded',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 354,
    src: 'https://cdn1.suno.ai/b259a62a-1c4c-4183-95a9-6a61863cb454.mp3',
    art: '/art/shadedNotJaded.webp',
    genre: 'Alternative Metal',
    bpm: 74,
  },

  {
    id: 't118',
    title: 'Dopamine Ghost',
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 192,
    src: 'https://cdn1.suno.ai/8d1567c0-2dc8-49cc-adcc-b4a11fbd534a.mp3',
    art: '/art/dopamineGhost.webp',
    genre: 'Country Rock',
    bpm: 84,
  },

  // {
  //   id: 't119',
  //   title: 'Sea of Love',
  //   artist: 'RyFi',
  //   album: 'Static Heart',
  //   duration: 350,
  //   src: 'https://cdn1.suno.ai/7e075078-ef45-48c7-8d91-2ed2c9eede8d.mp3',
  //   art: '/art/seaOfLove.webp',
  //   genre: 'Pop Rap',
  //   bpm: 92,
  // },

  {
    id: 't120',
    title: "Casanova's Curse",
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 176,
    src: 'https://cdn1.suno.ai/21470178-c93e-45df-b8eb-57815ec35fd7.mp3',
    art: '/art/casanovasCurse.webp',
    genre: 'LoFi Trap',
    bpm: 140,
  },

  // {
  //   id: 't121',
  //   title: 'Already Whole',
  //   artist: 'RyFi',
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
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 293,
    src: 'https://cdn1.suno.ai/001efcdb-7df2-4e1f-b9ad-065ba7e37f74.mp3',
    art: '/art/signalAndSpark.webp',
    genre: 'Neo Soul',
    bpm: 72,
  },

  {
    id: 't123',
    title: 'Unleashed',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 181,
    src: 'https://cdn1.suno.ai/e32a2877-41f5-4fce-a489-ff4a3c9b9f33.mp3',
    art: '/art/unleashed.webp',
    genre: 'Hard Rock',
    bpm: 160,
  },

  {
    id: 't124',
    title: 'Sunday Service',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 213,
    src: 'https://cdn1.suno.ai/14a45d0a-ef57-40bf-bb2a-0c990908b26f.mp3',
    art: '/art/sundayService.webp',
    genre: 'Hick Hop',
    bpm: 82,
  },
  {
    id: 't125',
    title: 'Zero to Sixty',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 180,
    src: 'https://cdn1.suno.ai/1da6a635-a7ad-4592-ac0f-e38c9802812c.mp3',
    art: '/art/zeroSixty.webp',
    genre: 'Teen Pop',
    bpm: 110,
  },

  {
    id: 't126',
    title: 'The Current',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 189,
    src: 'https://cdn1.suno.ai/3356617c-ba42-4378-9309-9bd935faaf27.mp3',
    art: '/art/theCurrent.webp',
    genre: 'Dubstep',
    bpm: 150,
  },

  {
    id: 't127',
    title: 'The Return',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 181,
    src: 'https://cdn1.suno.ai/b5b8ae7b-c8c6-4c30-b4f0-698795a4e4e7.mp3',
    art: '/art/theReturn.webp',
    genre: '90s New Jack Swing',
    bpm: 100,
  },

  {
    id: 't128',
    title: 'Infinite',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 191,
    src: 'https://cdn1.suno.ai/854e73a8-7aec-4394-872c-634c5778f715.mp3',
    art: '/art/infinite.webp',
    genre: 'Synth Pop',
    bpm: 78,
  },

  // {
  //   id: 't129',
  //   title: 'Chasing the Echo',
  //   artist: 'RyFi',
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
    artist: 'RyFi',
    album: 'High Gain',
    duration: 215,
    src: 'https://cdn1.suno.ai/0bacfb22-05d1-4eaf-9ceb-0617a96ad21f.mp3',
    art: '/art/systematicHaunt.webp',
    genre: 'Industrial Trap Rock',
    bpm: 140,
  },
  // {
  //   id: 't131',
  //   title: 'The Great Escape',
  //   artist: 'RyFi',
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
  //   artist: 'RyFi',
  //   album: 'High Gain',
  //   duration: 319,
  //   src: 'https://cdn1.suno.ai/a9f7d1d1-ee75-4ba4-9947-4fe7a21bac20.mp3',
  //   art: '/art/pointless.webp',
  //   genre: 'Post-Hardcore',
  //   bpm: null,
  // },

  {
    id: 't133',
    title: 'Chrysalis',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 377,
    src: 'https://cdn1.suno.ai/be1545f5-f039-4b79-9a9f-776340f7b072.mp3',
    art: '/art/chrysalis.webp',
    genre: '70s Mystic Rock',
    bpm: null,
  },

  // {
  //   id: 't134',
  //   title: 'Velvet & Glass',
  //   artist: 'RyFi',
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
  //   artist: 'RyFi',
  //   album: 'Dirt Road',
  //   duration: 292,
  //   src: 'https://cdn1.suno.ai/6685d07d-ca5e-4b8b-b20d-70237b3931d1.mp3',
  //   art: '/art/mustveBeen.webp',
  //   genre: 'Traditional Country',
  //   bpm: 92,
  // },

  {
    id: 't136',
    title: "Line Don't Break (Collab Cover)",
    artist: 'RyFi & @ARYVN',
    album: 'Coffee & Clouds',
    duration: 183,
    src: 'https://cdn1.suno.ai/0934be4f-7a78-4d93-80eb-7a43151498bc.mp3',
    art: '/art/lineDontBreak.webp',
    genre: 'Afro Jazz',
    bpm: null,
  },

  {
    id: 't137',
    title: 'Obsessed',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 217,
    src: 'https://cdn1.suno.ai/70896f23-7d67-4984-ba29-86f992b815ef.mp3',
    art: '/art/obsessed.webp',
    genre: 'Dark Pop/Hip-Hop',
    bpm: 88,
  },

  {
    id: 't138',
    title: "I Don't Miss Her",
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 374,
    src: 'https://cdn1.suno.ai/f010a04c-79f4-4723-ba52-53d9e1957a32.mp3',
    art: '/art/iDontMissHer.webp',
    genre: 'Trap Soul',
    bpm: 82,
  },

  // {
  //   id: 't139',
  //   title: "We're Home",
  //   artist: 'RyFi',
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
  //   artist: 'RyFi',
  //   album: 'Alt Drives',
  //   duration: 193,
  //   src: 'https://cdn1.suno.ai/c0a4cd91-f54d-45fd-bb82-b2db2b052b4a.mp3',
  //   art: '/art/gravelThrone.webp',
  //   genre: 'Alternative Country/Rock',
  //   bpm: 70,
  // },

  {
    id: 't141',
    title: 'Empty Chair',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 359,
    src: 'https://cdn1.suno.ai/a4ff3a7a-fc8f-4e64-9d0b-1e38625b4140.mp3',
    art: '/art/emptyChair.webp',
    genre: 'Neo Soul',
    bpm: 62,
  },

  {
    id: 't142',
    title: 'Always Been You',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 223,
    src: 'https://cdn1.suno.ai/ffcda7a1-7aa2-4d84-bc54-18eeca881fbc.mp3',
    art: '/art/alwaysBeenYou.webp',
    genre: 'Experimental Fusion',
    bpm: 95,
  },

  {
    id: 't143',
    title: 'Paper Crimes - Papercuts Cover (LIVE)',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 265,
    src: 'https://cdn1.suno.ai/06ab7a33-dcff-465b-b315-42ba9f936882.mp3',
    art: '/art/paperCrimes.webp',
    genre: 'Live Alternative Rock',
    bpm: null,
  },

  {
    id: 't144',
    title: '60Hz Lullaby',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 308,
    src: 'https://cdn1.suno.ai/6f567829-63a7-4b51-8f3c-beb6664a5914.mp3',
    art: '/art/60Hz.png',
    genre: 'LoFi',
    bpm: 60,
  },

  // {
  //   id: 't145',
  //   title: 'Glass Singing',
  //   artist: 'RyFi',
  //   album: 'Pulse',
  //   duration: 288,
  //   src: 'https://cdn1.suno.ai/1a3fa410-df48-4646-ad52-ce5286a6ebfc.mp3',
  //   art: '/art/glassSinging.webp',
  //   genre: 'Exerimental Synth Pop',
  //   bpm: null,
  // },

  {
    id: 't146',
    title: 'Dangerous',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 261,
    src: 'https://cdn1.suno.ai/d23ca79a-79b7-40fb-9519-d25fab532d9b.mp3',
    art: '/art/dangerous.webp',
    genre: 'Hard Rock',
    bpm: 108,
  },

  // {
  //   id: 't147',
  //   title: 'Shadowmaster',
  //   artist: 'RyFi',
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
  //   artist: 'RyFi',
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
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 227,
    src: 'https://cdn1.suno.ai/7ad4e911-8787-483b-b883-348a496c7202.mp3',
    art: '/art/wearThat.webp',
    genre: 'Dark R&B',
    bpm: 96,
  },

  {
    id: 't150',
    title: 'Before the Bloom',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 177,
    src: 'https://cdn1.suno.ai/79cac44e-eeec-49a7-be2d-acb0e3a84df4.mp3',
    art: '/art/beforeTheBloom.webp',
    genre: 'Indie Rock',
    bpm: 110,
  },
  {
    id: 't151',
    title: 'Enough',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 264,
    src: 'https://cdn1.suno.ai/d7bc7f46-45be-4dc8-85eb-62f4ca432272.mp3',
    art: '/art/enough.webp',
    genre: 'Alternative Rock',
    bpm: null,
  },

  // {
  //   id: 't152',
  //   title: "Five O'Clock Fire",
  //   artist: 'RyFi',
  //   album: 'High Gain',
  //   duration: 152,
  //   src: 'https://cdn1.suno.ai/319ebdd7-a6ae-4136-a276-0e93ac9d8664.mp3',
  //   art: '/art/fiveFire.webp',
  //   genre: 'Nu-Metal',
  //   bpm: null,
  // },

  {
    id: 't153',
    title: 'Haunted Kind of Heartbreak',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 218,
    src: 'https://cdn1.suno.ai/0190d4b9-3109-4d56-8593-6fdaa844c6a4.mp3',
    art: '/art/hauntedHeartbreak.webp',
    genre: 'Dark Pop',
    bpm: 98,
  },

  {
    id: 't154',
    title: "Doin' Just Fiiine!",
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 149,
    src: 'https://cdn1.suno.ai/c0bee38c-f199-4a71-828f-9cbb2ef5f27d.mp3',
    art: '/art/doinJustFine.webp',
    genre: 'G-Funk Pop',
    bpm: 115,
  },

  {
    id: 't155',
    title: 'Orbiting The Static',
    artist: 'RyFi',
    album: 'Synergy',
    duration: 217,
    src: 'https://cdn1.suno.ai/fcb089b3-8f6e-4876-a550-6cb4fd26c949.mp3',
    art: '/art/orbitingTheStatic.webp',
    genre: 'Psychedelic Boom-Bap',
    bpm: null,
  },

  {
    id: 't156',
    title: 'You Got Mail',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 176,
    src: 'https://cdn1.suno.ai/8f91553f-aef1-45b4-8238-860b684e390f.mp3',
    art: '/art/gotMail.webp',
    genre: 'Avante-Garde Metal',
    bpm: null,
  },
  {
    id: 't157',
    title: 'Yummy Yummy',
    artist: 'RyFi & @sonotzen2',
    album: 'Silk Sheets',
    duration: 274,
    src: 'https://cdn1.suno.ai/757b1133-96c6-4430-a7a7-f0cea8df8d0b.mp3',
    art: '/art/yummyYummy.webp',
    genre: 'Dark Luxury Trap-Drill',
    bpm: 140,
  },

  {
    id: 't158',
    title: 'Bulletproof',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 183,
    src: 'https://cdn1.suno.ai/adbfbffd-0d44-4341-9516-aea7bf802c96.mp3',
    art: '/art/bulletProof.webp',
    genre: 'Neo-Noir Soul',
    bpm: 85,
  },

  // {
  //   id: 't159',
  //   title: 'You Matter - Suno Songs 4 Love Contest',
  //   artist: 'RyFi',
  //   album: 'Alt Drives',
  //   duration: 270,
  //   src: 'https://cdn1.suno.ai/5e7574ba-0d8d-4f40-8a5a-87581f90a720.mp3',
  //   art: '/art/youMatterRemix.webp',
  //   genre: 'Midwest Emo',
  //   bpm: 110,
  // },
  {
    id: 't160',
    title: 'Just Let Me Fade',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 256,
    src: 'https://cdn1.suno.ai/dc2faa75-ad97-409e-a9e6-ec983735e707.mp3',
    art: '/art/justLetMeFade.webp',
    genre: 'Indie Emo',
    bpm: null,
  },
  // {
  //   id: 't161',
  //   title: 'Hijacked Broadcast',
  //   artist: 'RyFi',
  //   album: 'High Gain',
  //   duration: 284,
  //   src: 'https://cdn1.suno.ai/1fd52724-f821-44c3-871a-818bd43fb248.mp3',
  //   art: '/art/hijackedBroadcast.webp',
  //   genre: 'Alternative Rock',
  //   bpm: null,
  // },
  {
    id: 't162',
    title: 'Watch Me Slide',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 197,
    src: 'https://cdn1.suno.ai/4ece251e-dd2c-4f33-a7d0-2afa527d10b4.mp3',
    art: '/art/watchMeSlide.webp',
    genre: 'Southern Hip-Hop',
    bpm: 140,
  },

  {
    id: 't163',
    title: 'Dream Girl',
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 214,
    src: 'https://cdn1.suno.ai/1becbc29-0350-498d-82cf-4c40b7fb9fc1.mp3',
    art: '/art/dreamGirl.webp',
    genre: 'Liquid Gold',
    bpm: 92,
  },

  {
    id: 't164',
    title: 'Green Thoughts',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 256,
    src: 'https://cdn1.suno.ai/9a194038-33e4-42f3-ab47-d92f3697427d.mp3',
    art: '/art/greenThoughts.webp',
    genre: 'Stoner Reggae',
    bpm: 78,
  },

  {
    id: 't165',
    title: 'The Weight of the Wiskey',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 254,
    src: 'https://cdn1.suno.ai/f62f2e07-725d-4387-80d2-626ca98ac54f.mp3',
    art: '/art/weightWhiskey.webp',
    genre: 'Outlaw Country',
    bpm: 65,
  },
  {
    id: 't166',
    title: 'Don\'t Choke',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 181,
    src: 'https://cdn1.suno.ai/014c43da-3c6f-42df-a7c2-628fd499ac12.mp3',
    art: '/art/dontChoke.webp',
    genre: 'Dark R&B',
    bpm: 85,
  },

  // {
  //   id: 't167',
  //   title: 'Lez Bee Friends (Yum Remix)',
  //   artist: 'RyFi',
  //   album: 'Silk Sheets',
  //   duration: 283,
  //   src: 'https://cdn1.suno.ai/6119beb4-8eda-4083-901e-8e535ec99802.mp3',
  //   art: '/art/lezBeeFriends.webp',
  //   genre: 'Trap Pop',
  //   bpm: null,
  // },

  {
    id: 't168',
    title: 'Freaky French Frog (Collab)',
    artist: 'RyFi & @sonotzen2',
    album: 'Silk Sheets',
    duration: 179,
    src: 'https://cdn1.suno.ai/7a72968d-e27d-4ef3-b9c7-822fbc645302.mp3',
    art: '/art/freakyFrenchFrog.webp',
    genre: 'Dirty South Hip-Hop',
    bpm: 97,
  },

  {
    id: 't169',
    title: 'Too Long',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 326,
    src: 'https://cdn1.suno.ai/b7762d87-ff2a-4c73-9efb-2d0e29eb2001.mp3',
    art: '/art/tooLong.webp',
    genre: 'Hip-Hop Soul Sample',
    bpm: 95,
  },

  {
    id: 't170',
    title: 'Dopamine & Drama',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 255,
    src: 'https://cdn1.suno.ai/900faae5-d8dd-4c44-a190-f72c76f0b96c.mp3',
    art: '/art/dopamineDrama.webp',
    genre: 'Dark Alt-Pop',
    bpm: 115,
  },
   
  // {
  //   id: 't171',
  //   title: 'The Dark',
  //   artist: 'RyFi',
  //   album: 'Alt Drives',
  //   duration: 348,
  //   src: 'https://cdn1.suno.ai/c7cefb91-e061-40b2-98ec-e9c85996fa37.mp3',
  //   art: '/art/theDark.webp',
  //   genre: 'Dark Alternative Rock',
  //   bpm: 90,
  // },

  {
    id: 't172',
    title: 'Bottle and Blade - LIVE!',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 192,
    src: 'https://cdn1.suno.ai/e95290c9-a6f5-411c-b8ef-7a25ad4bf2cc.mp3',
    art: '/art/bottleAndBlade.webp',
    genre: 'Country Rock',
    bpm: 95,
  },

  {
    id: 't173',
    title: 'Gravity Chips (Remix)',
    artist: 'RyFi & @OTF',
    album: 'Pulse',
    duration: 326,
    src: 'https://cdn1.suno.ai/3b779d55-f5c3-4eaf-84e9-ea6c55f1f730.mp3',
    art: '/art/gravityChips.webp',
    genre: 'Experimental Electronica x Grit Hop',
    bpm: null,
  },

  {
    id: 't174',
    title: 'Photo Dump',
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 145,
    src: 'https://cdn1.suno.ai/830b75a8-1dd8-45e0-86ff-804c9f900cd9.mp3',
    art: '/art/photoDump.webp',
    genre: 'Cloud Rap',
    bpm: 110,
  },

  // {
  //   id: 't175',
  //   title: 'Boom B!tch - Diss Track',
  //   artist: 'RyFi',
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
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 258,
    src: 'https://cdn1.suno.ai/62a9f38e-c531-457d-84e8-92ec96bfa7da.mp3',
    art: '/art/happy.webp',
    genre: 'LoFi Chillhop',
    bpm: null,
  },

  // {
  //   id: 't177',
  //   title: 'Return of the Man',
  //   artist: 'RyFi',
  //   album: 'Liquid Gold',
  //   duration: 246,
  //   src: 'https://cdn1.suno.ai/473e8219-fdb8-47fc-9797-e60a82e5d54a.mp3',
  //   art: '/art/returnOfTheMan.webp',
  //   genre: '90s Remix',
  //   bpm: 98,
  // },

  {
    id: 't178',
    title: 'Compass',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 286,
    src: 'https://cdn1.suno.ai/5b9e7474-4e6a-4724-9a29-5b990dda9067.mp3',
    art: '/art/compass.webp',
    genre: 'Neo Soul',
    bpm: 86,
  },

  {
    id: 't179',
    title: 'Only Road I Know',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 307,
    src: 'https://cdn1.suno.ai/9d1ebd56-a990-4128-9fe8-b2aeca7e766f.mp3',
    art: '/art/onlyRoadIKnow.webp',
    genre: 'Emo Rock',
    bpm: 76,
  },

  {
    id: 't180',
    title: 'Catching Vibes',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 141,
    src: 'https://cdn1.suno.ai/30e84b38-36fc-4672-8e34-a73e881ecac6.mp3',
    art: '/art/catchingVibes.webp',
    genre: 'Acoustic Trap',
    bpm: null,

  },

  {
    id: 't181',
    title: 'Southern Solace',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 282,
    src: 'https://cdn1.suno.ai/bd329bd3-7910-4896-b46a-eaa42d9ccfde.mp3',
    art: '/art/southernSolace.webp',
    genre: 'Dark Southern Rock',
    bpm: 82,
  },
  // {
  //   id: 't182',
  //   title: 'Stalking the Feed',
  //   artist: 'RyFi',
  //   album: 'Liquid Gold',
  //   duration: 146,
  //   src: 'https://cdn1.suno.ai/91a2be1b-3cb0-403e-8b83-094af345c0af.mp3',
  //   art: '/art/stalkingTheFeed.webp',
  //   genre: 'Atmospheric Phonk',
  //   bpm: 140,
  // },

  {
    id: 't183',
    title: 'Speak.',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 231,
    src: 'https://cdn1.suno.ai/d9edf2c4-9cf9-4195-8368-c630707ebdd0.mp3',
    // art: '/art/speak.webp',
    genre: 'Electro-Swing Trap',
    bpm: 128,
  },
  {
    id: 't184',
    title: 'Moth',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 210,
    src: 'https://cdn1.suno.ai/e862deb5-689b-4f2b-816f-b4e3fe86ca39.mp3',
    // art: '/art/moth.webp',
    genre: 'Industrial Metal',
    bpm: null,
  },

  {
    id: 't185',
    title: 'Just Drive',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 309,
    src: 'https://cdn1.suno.ai/918c1459-88e1-4747-ace5-b158f67b3474.mp3',
    // art: '/art/justDrive.webp',
    genre: 'Americana Folk Rock',
    bpm: 75,
  },

  {
    id: 't186',
    title: 'Type Shii',
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 228,
    src: 'https://cdn1.suno.ai/e9990f84-2794-4e9f-890e-69564189a8b9.mp3',
    // art: '/art/typeShii.webp',
    genre: 'Trap',
    bpm: 148,
  },

  {
    id: 't187',
    title: 'Mardi Gras Mud',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 251,
    src: 'https://cdn1.suno.ai/d3a613ed-51f8-49d3-87a0-6cbed82b3af8.mp3',
    // art: '/art/mardiGrasMud.webp',
    genre: 'Chopped & Screwed',
    bpm: null,
  },

  {
    id: 't188',
    title: 'That\'s Just What Snakes Do',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 266,
    src: 'https://cdn1.suno.ai/659c0562-f8be-4fe5-a07f-15bfe5361942.mp3',
    // art: '/art/thatsJustWhatSnakesDo.webp',
    genre: 'Louisiana Trap',
    bpm: 128,
  },

  {
    id: 't189',
    title: 'Code Red',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 225,
    src: 'https://cdn1.suno.ai/13803367-43b6-4a76-9701-445041b5b16b.mp3',
    // art: '/art/codeRed.webp',
    genre: 'Hardcore Trap',
    bpm: 150,
  },

  {
    id: 't190',
    title: 'Green Glass Canopy',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 283,
    src: 'https://cdn1.suno.ai/8bbfbe4a-5c0e-43ca-95e4-7ee90b603d3d.mp3',
    // art: '/art/greenGlassCanopy.webp',
    genre: 'Darkwave Indie Rock',
    bpm: 115,
  },

  {
    id: 't192',
    title:'Irish Garden',
    artist: 'RyFi',
    album: 'Silk Sheets',
    duration: 281,
    src: 'https://cdn1.suno.ai/4ff4985f-34f9-4f3c-9584-332edf71b511.mp3',
    // art: '/art/irishGarden.webp',
    genre: 'Irish Drill',
    bpm: 110,
  },

  {
    id: 't191',
    title:'The Rust',
    artist: 'RyFi',
    album: 'Alt Drives',
    duration: 224,
    src: 'https://cdn1.suno.ai/3865741f-e2c1-483c-ae96-272791abcc0e.mp3',
    // art: '/art/theRust.webp',
    genre: 'Post-Grunge Industrial Rock',
    bpm: 78,
  },

  {
    id: 't193',
    title: 'Outgrew It - RyFi Remix',
    artist: 'RyFi & @DeltasGirl',
    album: 'Alt Drives',
    duration: 235,
    src: 'https://cdn1.suno.ai/f728b5de-6a91-433a-88df-30d12ffe4c1c.mp3',
    // art: '/art/outgrewIt.webp',
    genre: 'Indie Pop',
    bpm: 120,

  },
  {
    id: 't194',
    title: 'Basic',
    artist: 'RyFi',
    album: 'Static Heart',
    duration: 317,
    src: 'https://cdn1.suno.ai/773a965a-1a05-4067-afee-5095eb32f482.mp3',
    // art: '/art/basic.webp',
    genre: 'Neo-Soul',
    bpm: 74,
  },

  {
    id: 't195',
    title: 'After Dark',
    artist: 'RyFi',
    album: 'Pulse',
    duration: 210,
    src: 'https://cdn1.suno.ai/a9b651f2-bf77-4610-a5d1-dc36ff11f7fb.mp3',
    // art: '/art/afterDark.webp',
    genre: '80s Synthwave',
    bpm: null,
  },

  {
    id: 't196',
    title: '90\'s Green',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 271,
    src: 'https://cdn1.suno.ai/d453a043-d70f-4c36-8c09-24087b824643.mp3',
    // art: '/art/90sGreen.webp',
    genre: '90s Hip-Hop',
    bpm: 92,
  },

  {
    id: 't197',
    title: 'Still Up Here',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 202,
    src: 'https://cdn1.suno.ai/2ca7c8ae-97b0-41f0-b3e1-3103f3b42c9d.mp3',
    // art: '/art/stillUpHere.webp',
    genre: 'Chillhop',
    bpm: 130,
  },

  {
    id: 't198',
    title: 'West Texas Witch',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 264,
    src: 'https://cdn1.suno.ai/295c65d4-5887-428f-8155-bca656f904f2.mp3',
    // art: '/art/westTexasWitch.webp',
    genre: 'Dirty South Trap',
    bpm: 140,
  },

  {
    id: 't199',
    title: 'Crazy Shii',
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 218,
    src: 'https://cdn1.suno.ai/a93defd1-fe1f-4050-88be-022afea95a0a.mp3',
    // art: '/art/crazyShii.webp',
    genre: 'Chill Trap',
    bpm: null,
  },

  {
    id: 't200',
    title: 'Bored',
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 219,
    src: 'https://cdn1.suno.ai/f86b4d21-f2bb-4b43-a7dc-c79e3828c343.mp3',
    // art: '/art/bored.webp',
    genre: 'LoFi Chillhop',
    bpm: null,
  },
   {
    id: 't201',
    title: 'Lie 2 Me ft ARVYN',
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 275,
    src: 'https://cdn1.suno.ai/81ef825a-d75e-4fcd-b6c0-ad3e9fd3e5b7.mp3',
    // art: '/art/lie2Me.webp',
    genre: 'Slow-Burn Trap Rock',
    bpm: 78,
   },

   {
    id: 't202',
    title: 'Ledger of Scars',
    artist: 'RyFi',
    album: 'Liquid Gold',
    duration: 235,
    src: 'https://cdn1.suno.ai/74aefb8f-458e-4059-ae2b-18520295dda1.mp3',
    // art: '/art/ledgerOfScars.webp',
    genre: 'Dark G-Funk',
    bpm: 98,
   },

   {
    id: 't203',
    title: 'Ghost Tracks',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 248,
    src: 'https://cdn1.suno.ai/6052faba-e748-4f4c-9452-14acdd54a63e.mp3',
    // art: '/art/ghostTracks.webp',
    genre: 'Dark Country Pop',
    bpm: 72,
   },

   {
    id: 't204',
    title: 'Liquid Velvet',
    artist: 'RyFi',
    album: 'Silk Sheets',
    src: 'https://cdn1.suno.ai/be1461f5-3007-4d24-a765-6244e8150fda.mp3',
    duration: 208,
    // art: '/art/liquidVelvet.webp',
    genre: 'Dark Trap',
    bpm: 115,
   },

   {
    id: 't205',
    title: 'Heavy Normal',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 236,
    src: 'https://cdn1.suno.ai/b90943ba-ed79-4df0-b7c1-fc1880865c63.mp3',
    // art: '/art/heavyNormal.webp',
    genre: 'Dark G-Funk',
    bpm: 96,
   },

   {
    id: 't206',
    title: 'Apathy of Anarchy',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 266,
    src: 'https://cdn1.suno.ai/92919224-fb8d-459e-b01d-849a4681e3f6.mp3',
    // art: '/art/apathyOfAnarchy.webp',
    genre: 'Dirty South Trap',
    bpm: 90,
   },

   {
    id: 't207',
    title: 'Lyrical Miracle',
    artist: 'RyFi',
    album: 'Flow State',
    duration: 151,
    src: 'https://cdn1.suno.ai/14403a97-a102-4cf2-9a03-43d17d1f9e1b.mp3',
    // art: '/art/lyricalMiracle.webp',
    genre: 'Freestyle Rap',
    bpm: 78,
   },

   {
    id: 't208',
    title: 'Holy Water',
    artist: 'RyFi',
    album: 'Dirt Road',
    duration: 305,
    src: 'https://cdn1.suno.ai/4ac54db3-d177-401b-ac7c-b8a04ee89af9.mp3',
    // art: '/art/holyWater.webp',
    genre: 'Dark Folk-Hop',
    bpm: 88,
   },

   {
    id: 't209',
    title: 'We\'re Messed Up',
    artist: 'RyFi',
    album: 'High Gain',
    duration: 297,
    src: 'https://cdn1.suno.ai/f92fe932-2fb5-4e50-a1d7-a165edd2bfdb.mp3',
    // art: '/art/wereMessedUp.webp',
    genre: 'Darkwave Neo-Noir',
    bpm: 110,
   },

   {
    id: 't210',
    title: 'Steady State',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 166,
    src: 'https://cdn1.suno.ai/e73f15c0-1578-4d2b-a49f-49a57030b081.mp3',
    // art: '/art/steadyState.webp',
    genre: 'LoFi Hip-Hop',
    bpm: null,
   },

   {
    id: 't211',
    title: 'Diddy Oil - RyFi Remix',
    artist: 'RyFi & @Ricdog266',
    album: 'Silk Sheets',
    duration: 179,
    src: 'https://cdn1.suno.ai/8a6cbc67-35fb-4e44-a84b-8c31352a7b4b.mp3',
    // art: '/art/diddyOilRemix.webp',
    genre: 'Dark Trap-Soul',
    bpm: 130,
   },

   {
    id: 't212',
    title: 'The Static Between',
    artist: 'RyFi',
    album: 'Coffee & Clouds',
    duration: 198,
    src: 'https://cdn1.suno.ai/71f8442c-94c1-498e-bd17-5781ab6e7500.mp3',
    // art: '/art/theStaticBetween.webp',
    genre: 'Ambient Trip-Hop',
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
    icon: '🎙️',
    name: 'Flow State',
    description:
      'Trap, Boom Bap, and Hardcore Rap for letting the words flow',
    trackIds: [
      't2',
      't29',
      't108',
      't100',
      't3',
      't10',
      't60',
      't96',
      't206',
      't196',
      't205',
      't162',
      't30',
      't34',
      't36',
      't189',
      't105',
      't207',
      't198',
    ],
    color: '#871cdf',
  },
  {
    id: 'pl2',
    icon: '🛞',
    name: 'Dirt Road',
    description:
      'Country Trap, Outlaw Country, and Traditional Country for dusty drives',
    trackIds: [
      't15',
      't104',
      't90',
      't14',
      't165',
      't16',
      't27',
      't37',
      't172',
      't31',
      't62',
      't203',
      't185',
      't68',
      't208',
      't85',
    
      't107',
     
      't124',
    ],
    color: '#bda26d',
  },

    {
    id: 'pl6',
    icon: '🚦',
    name: 'Alt Drives',
    description:
      'Late-night Alternative for introspective moments and existential crises',
    trackIds: [
      't160',
      't61',
      't117',
      't6',
      't8',
      't9',
      't41',
      't78',
      't86',
      
      't190',
      't92',
      't179',
      't151',
      
      't193',
      't191',
     
      
      't143',
      't150',
      
    ],
    color: '#36c236',
  },
    {
    id: 'pl7',
    icon: '🎸',
    name: 'High Gain',
    description:
      'Rock, Nu-Metal, and Aggressive vibes for when you need to let it all out',
    trackIds: [
      't22',
      't40',
      't23',
      't133',
      
      't52',
      't24',
      't184',
      't56',
      't152',
      't76',
      't181',
      't77',
      't156',
      't91',
      't123',
      't130',
      't209',
    ],
    color: '#ed6d3a',
  },
      {
    id: 'pl9',
    icon: '⚡',
    name: 'Pulse',
    description: 'Pop hits, Electronica, and High-Energy Hits for any occasion',
    trackIds: [
      't116',
      't21',
      't20',
      't19',
      't128',
      't81',
      't82',
      't183',
      't127',
      't93',
      't125',
      't17',
      't106',
      't110',
      't126',
      't173',
      't142',
      't195',
      
    ],
    color: '#ff4081',
  },

    {
    id: 'pl10',
    icon: '☕',
    name: 'Coffee & Clouds',
    description:
      'LoFi, Mellow, and Emotional vibes for Rainy Days',
    trackIds: [
      't180',
      't70',
      't197',
      't97',
      't164',
      't212',
      't210',
      't42',
      't65',
      't45',
      't141',
      't169',
      't111',
      't176',
      't178',
      't136',
      't122',
      't144',
    ],
    color: '#00e5ff',
  },


    


  {
    id: 'pl4',
    icon: '🫀',
    name: 'Static Heart',
    description: 'Love, Heartbreak, and Toxic cycles explored',
    trackIds: [
      't153',
      't83',
      't170',
      't79',
      't28',
      't18',
      't51',
      't112',
      't32',
      't57',
      't72',
      
      't194',
      't74',
      't137',
      't188',
      't158',
      't138',
      't4',
    ],
    color: '#e2231c',
  },

  {
    id: 'pl11',
    icon: '🫠',
    name: 'Liquid Gold',
    description: 'Smooth and Slick cross-genre Hits for vibing',
    trackIds: [
't154',
       
      't186',
      't47',
      't199',
      't48',
      't1',
      't201',
      't202',
      't87',
      't88',
    't118',
    't200',
    't75',
  
  
    't174',
    't120',
   
 
    't163',
    ],
    color: '#f8d359',

    },

        {
    id: 'pl3',
    icon: '♾️',
    name: 'Synergy',
    description:
      'Manifestation, Simulation Theory, and the Metaphysical collide',
    trackIds: [
      't13',
      't5',
      't12',
      't7',
      't38',
      't44',
      't67',
      't43',
      't155',
      't33',
      't46',
      't49',
      't35',
      't63',
      't66',
      't69',
      't71',
      't109',
    ],
    color: '#0b8cf5',
  },



  {
    id: 'pl8',
    icon: '🫦',
    name: 'Silk Sheets',
    description:
      'Smooth, Sensual, and perfect for those After Hours intimate moments',
    trackIds: [
      't59',
      't11',
      't204',
      't115',
      't192',
      't25',
      't146',
      't166',
      't26',
      't149',
      't157',
      't187',
      't168',
      't211',
      't95',
      't54',
     
      't58',
      
      't99',
     

      
    ],
    color: '#b642d3',
  },

  {
    id: 'pl5',
    icon: '🔀',
    name: 'Mixtape - ALL',
    description: 'Everything in the RyFi universe',
    trackIds: tracks
      .sort(() => 0.5 - Math.random())
      .slice(0, 250)
      .map((t) => t.id),
    color: '#00e5ff',
  },
];
