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
    album: 'Coffee & Clouds',
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
    duration: 186,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Cello\'s%20Grudge%20-%20CORRECTED.wav?alt=media', 
    art: '/art/cellosGrudge.jfif', 
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
    artist: 'Auraveil',
    album: 'Alt Drives',
    duration: 224,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Trust%20Fall%20-%20Studio%20Mix.wav?alt=media',
    art: '/art/trustFall.jfif',
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
    genre: 'Alternative',
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


  {
    id: 't14',
    title: 'Certified Pyscho - Irish Coast Cover',
    artist: '8BitGinger',
    album: 'Dirt Road',
    duration: 201,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Certified%20Psycho%20-%20Irish%20Coast%20Cover.wav?alt=media',
    art: '/art/certifiedPyscho.webp',
    genre: 'Folk',
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
    album: 'High Gain',
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
    genre: 'Synthwave Trap',
    bpm: null,
  },



  {
    id: 't51',
    title: 'One Last Rose',
    artist: '8BitGinger',
    album: 'Coffee & Clouds',
    duration: 273,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/ONE%20LAST%20ROSE%20-%208BitBanger(NAH%20-%20REMIX).wav?alt=media',
    art: '/art/oneLastRose.jfif',
    genre: 'LoFi Trap',
    bpm: 96,
  },

  {
    id: 't52',
    title: 'Chemical Bond',
    artist: 'Blacklist Dahlia',
    album: 'High Gain',
    duration: 206,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Chemical%20Bond-%20Blacklist%20Dahlia%20Beat.wav?alt=media',
    art: '/art/chemicalBond.jpg',
    genre: 'Cinematic Emo Rock',
    bpm: null,
  },





  {
    id: 't58',
    title: 'Skin & Soul',
    artist: '8BitGinger',
    album: 'Silk Sheets',
    duration: 273,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Skin%20%26%20Soul%20_%20Deephouse%20Demo.wav?alt=media',
    art: '/art/skinSoul.jfif',
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
    title: 'Lowkey Villian',
    artist: '8BitGinger',
    album: 'Flow State',
    duration: 253,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Lowkey%20Villian%20-%20Villian%20Era%20Remix%20(1).wav?alt=media',
    art: '/art/villianEra.png',
    genre: 'Trap-Phonk',
    bpm: 140,
  },







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
    album: 'Coffee & Clouds',
    duration: 208,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Through%20the%20Smoke.wav?alt=media',
    art: '/art/throughSmoke.jfif',
    genre: 'Trap Soul',
    bpm: 88,
  },




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












  // {
  //   id: 't96',
  //   title: 'Your Ex is a Bish',
  //   artist: '8BitGinger',
  //   album: 'Flow State',
  //   duration: 312,
  //   src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Your%20Ex%20is%20a%20Bish%20-%20VNDAL%20Version.wav?alt=media',
  //   art: '/art/yourExIsABish.webp',
  //   genre: 'Murder Rap',
  //   bpm: 140,
  // },



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










  {
    id: 't109',
    title: 'Nothing Matters',
    artist: '8BitGinger',
    album: 'Pulse',
    duration: 218,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Nothing%20Matters%20(I%20Choose%20Me%20Mix).wav?alt=media',
    art: '/art/nothingMatters.jpeg',
    genre: 'Darkwave Pop',
    bpm: 96,
  },








  {
    id: 't118',
    title: 'Dopamine Ghost',
    artist: '8BitGinger',
    album: 'High Gain',
    duration: 192,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Dopamine%20Ghost%20-%20Studio%20Mix.wav?alt=media',
    art: '/art/dopamineGhost.webp',
    genre: 'Country Rock',
    bpm: 84,
  },



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



  {
    id: 't137',
    title: 'Obsessed',
    artist: '8BitGinger',
    album: 'High Gain',
    duration: 217,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Obsessed%20-%20Shadow%20Single.wav?alt=media',
    art: '/art/obsessed.webp',
    genre: 'Dark Pop/Hip-Hop',
    bpm: 88,
  },



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
    album: 'High Gain',
    duration: 183,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Bulletproof%20(Remastered).wav?alt=media',
    art: '/art/blacklistDahliaCover.jpg',
    genre: 'Neo-Noir Soul',
    bpm: 85,
  },

 



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




   
  
  {
    id: 't176',
    title: 'Happy',
    artist: 'Auraveil',
    album: 'Alt Drives',
    duration: 258,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Happy%20-%20Auraveil%20(Remastered).wav?alt=media',
    art: '/art/happy.webp',
    genre: 'LoFi Chillhop',
    bpm: null,
    lyrics: `
    [Verse 1]
Let them build their towers to the sky
Let them carve their names in heavy stone
They speak of legacies before they die
Terrified of leaving here unknown
They break their backs to buy a bit of time
Selling off their days for a polished floor
It’s a steep and bloody mountain left to climb
Just to find out they are empty at the door

[Pre-Chorus]
I have seen the way the empires fall
The ivy overtakes the highest wall
I don’t want to carry all that weight
Battering my body at the golden gate

[Chorus]
I don’t want the world upon a string
I don’t need a choir of angels to sing my praises
Keep your grand designs and your heavy crowns
I just want to plant my feet on quiet ground
Let the rivers run, let the madness cease
Lord, all I’m asking for is a sliver of peace...
(Music drops back to just the acoustic guitar)
Just let me be happy.

[Verse 2]
They’re chasing down a ghost they’ll never catch
Setting fire to the woods to find a spark
I’m just looking for a simple little patch
Where I don’t have to tremble in the dark
There's a sickness in always wanting more
A hunger that a mountain couldn't feed
I’m leaving all my armor by the door
I’m stripping down to only what I need

[Pre-Chorus]
(Drum beat kicks in, stomping and clapping)
'Cause I have seen the way the rich men starve
For a gentle touch and a quiet heart
I don’t want to carry all that weight
Battering my body at the golden gate

[Chorus]
I don’t want the world upon a string
I don’t need a choir of angels to sing my praises
Keep your grand designs and your heavy crowns
I just want to plant my feet on quiet ground
Let the rivers run, let the madness cease
Lord, all I’m asking for is a sliver of peace...
Just let me be happy.

[Bridge]
Take the glory! Take the fame!
Take the monuments and take the name!
Give me sunlight through the trees!
Give me something I can actually keep!
(Choir: Give me something I can keep!)
Take the hustle, take the grind!
Take the demons that it leaves behind!
I surrender, I resign!
I just want a little peace of mind!

[Outro]
Just a quiet room.
Just a steady breath.
A little bit of joy before the rest.
Let them have the world.

Just let me be happy.
    `
  },



  {
    id: 't178',
    title: 'Stacked Too High',
    artist: '8BitGinger',
    album: 'Coffee & Clouds',
    duration: 204,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Stacked%20Too%20High%20ft%20A.R.V.Y.N..wav?alt=media',
    art: '/art/stacked2High.png',
    genre: 'LoFi Hip-Hop',
    bpm: 74,
    lyrics: `
The screen is glowing in a crowded room I stack the blocks until they touch the sky They praise the tower and they watch it bloom But never see the way the timbers sigh

The applause is loud but I can hear the crack One tiny tilt will break the camel's back

 Stacked up way too high Staring at the sky One breath from the floor Can't take any more Stacked up way too high


The calendar is bleeding down the wall Five different engines running at top speed They call me brilliant and I take the call While trying not to let the margins bleed


The applause is loud but I can hear the crack One tiny tilt will break the camel's back


Stacked up way too high Staring at the sky One breath from the floor Can't take any more Stacked up way too high


Maybe I built it all to watch it break To see if they would notice my mistake They only see the gold upon the crown They don't see that it's all tumbling down


Ready to fall Stacked too high Watch it all fall Way too high

`,
  },



  {
    id: 't181',
    title: 'Southern Solace',
    artist: 'Blacklist Dahlia',
    album: 'High Gain',
    duration: 282,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Southern%20Solace%20-%20Blacklist%20Dahlia%20Cover.wav?alt=media',
    art: '/art/southernSolace.jpg',
    genre: 'Dark Southern Rock',
    bpm: 74,
  },




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
    album: 'Flow State',
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
    album: 'Coffee & Clouds',
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
    art: '/art/tangledTies.jpg',
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
    album: 'Flow State',
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
    art: '/art/weEndure.png',
    genre: 'Neo-Soul',
    bpm: 72,
   },


   {
    id: 't217',
    title: 'Beautiful Sin',
    artist: '8BitGinger',
    album: 'Silk Sheets',
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
    album: 'Pulse',
    duration: 220,
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Irish%20it%20Worked%20Out.wav?alt=media',
    art: '/art/irishItWorkedOut.jpg',
    genre: 'LoFi Trap',
    bpm: 110,
   },


   {
    id: 't223',
    title: 'Why Is He So Crazy?',
    artist: '8BitGinger',
    album: 'Pulse',
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
    art: '/art/imOnFire.png',
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
    id: 't230',
    title: 'Beautiful Death',
    artist: 'Auraveil',
    duration: 238,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Beautiful%20Death%20-%20%20Auraveil%20Original.wav?alt=media',
    art: '/art/beautifulDeath.png',
    genre: null,
    bpm: null,
  },
  {
    id: 't231',
    title: 'Beautiful Friction',
    artist: 'VNDAL',
    duration: 143,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Beautiful%20Friction%20-%20VNDAL%20Version.wav?alt=media',
    art: '/art/beautifulFriction.webp',
    genre: 'Hardcord LoFi',
    bpm: null,
  },
  {
    id: 't232',
    title: 'Bleeding Bytes 3am Remix - 8BitGinger',
    artist: '8BitGinger',
    duration: 260,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Bleeding%20Bytes%203am%20Remix%20-%208BitGinger.wav?alt=media',
    art: '/art/bleedingBytes.jpg',
    genre: 'Cloudrap',
    bpm: null,
  },
  {
    id: 't233',
    title: 'Bleeding Bytes',
    artist: '8BitGinger',
    duration: 268,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Bleeding%20Bytes.wav?alt=media',
    art: '/art/bleedingBytes.jpg',
    genre: 'LoFi',
    bpm: null,
  },
  {
    id: 't235',
    title: 'Carry My Heart',
    artist: '8BitGinger',
    duration: 202,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Carry%20My%20Heart%20-%208BitGinger.wav?alt=media',
    art: '/art/carryMyHeart.png',
    genre: 'Folk Pop',
    bpm: null,
  },
  {
    id: 't236',
    title: 'Chasin\' Dopamine',
    artist: '8BitGinger',
    duration: 228,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Chasin\'%20Dopamine%20(Vibe%20Mix).wav?alt=media',
    art: '/art/chasingDopamine.jfif',
    genre: 'R&B',
    bpm: null,
    lyrics: `
    [Intro]
Chase the feelin'...

[Verse 1]
Night's still young
Song not sung
City turnin' gold
A story left untold
I don't need a reason
Bad Vibes, that’s Treason
I just need the vibe
The one keeping me alive
I'm just in the now
Watch da show!

[Pre-Chorus]
Feel it risin' in my chest
Every high just chasin' the next
Ain't no shame in wantin' more of this

[Chorus]
Chasin' dopamine tonight
Every corner, every light
Chasin' dopamine, feel alright
Ridin' high, we outta sight
(Chasin'... chasin'... chasin'...)
Chasin' dopamine tonight
Elevated, feelin' right
Every high just feels so tight
Chasin' dopamine tonight

[Verse 2]
Bottle sweatin' on the table
Hoe’s checkin’ the label
Every conversation flowin' smooth
That’s just how I move
Like a canvas paintin' free
Chasin' every feelin' that keeps callin' out to me

[Pre-Chorus]
Feel it risin' in my chest
Every high just chasin' the next
Ain't no shame in wantin' more of this

[Chorus]
Chasin' dopamine tonight
Every corner, every light
Chasin' dopamine, feel alright
Ridin' high, we outta sight
(Chasin'... chasin'... chasin'...)
Chasin' dopamine tonight
Elevated, feelin' right
Every high just feels so tight
Chasin' dopamine tonight

[Bridge]
Maybe the chase is the point of it all
Maybe the high's just an echo, a call

[Final Chorus]
Chasin' dopamine tonight
Every corner, every light
Chasin' dopamine, feel alright
Ridin' high, we outta sight
(Chasin'... chasin'... chasin'...)
Chasin' dopamine tonight
Elevated, feelin' right
Every high just feels so tight
Chasin' dopamine tonight
Chasin' dopamine tonight

[Outro]
Chasin' dopamine...
    `
  },
  {
    id: 't237',
    title: 'Chasing Tornados',
    artist: '8BitGinger',
    duration: 237,
    album: 'Pulse',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Chasing%20Tornados%20-%20\'26%20MIx.wav?alt=media',
    art: '/art/chasingTornados.png',
    genre: 'Pop',
    bpm: null,
  },
  {
    id: 't242',
    title: 'Drowning in the Dark',
    artist: '8BitGinger',
    duration: 289,
    album: 'High Gain',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Drowning%20in%20the%20Dark.wav?alt=media',
    art: '/art/drowningInTheDark.webp',
    genre: null,
    bpm: null,
  },
  {
    id: 't243',
    title: 'Dying Stars',
    artist: '8BitGinger',
    duration: 258,
    album: 'Pulse',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Dying%20Stars%20-%20Lowkey%20LoFi%20Remix.wav?alt=media',
    art: '/art/dyingStars.png',
    genre: 'Synth-Pop',
    bpm: null,
  },
  {
    id: 't244',
    title: 'Exist',
    artist: '8BitGinger',
    duration: 206,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Exist.wav?alt=media',
    art: '/art/exist.png',
    genre: 'Alternative',
    bpm: null,
  },
  {
    id: 't245',
    title: 'Feelin\' Myself',
    artist: '8BitGinger',
    duration: 227,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Feelin\'%20Myself.wav?alt=media',
    art: '/art/feelinMyself.jpeg',
    genre: 'LoFi',
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
    title: 'Frequency High',
    artist: '8BitGinger',
    duration: 181,
    album: 'Synergy',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Frequency%20High%20_%20Studio%20Speedrap.wav?alt=media',
    art: '/art/frequencyHigh.png',
    genre: 'Drill',
    bpm: null,
  },
  {
    id: 't248',
    title: 'I\'m A Mess Tonight!',
    artist: '8BitGinger',
    duration: 149,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/I\'m%20A%20Mess%20Tonight!.wav?alt=media',
    art: './art/imAMessTonight.jpg',
    genre: 'Hip-Hop',
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
    title: 'Loverz',
    artist: 'VNDAL',
    duration: 252,
    album: 'Pulse',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Loverz%20-%20VNDAL%20Version%20(Remastered)%202.wav?alt=media',
    art: '/art/loverz.jpg',
    genre: 'Hip-Hop',
    bpm: null,
  },
  {
    id: 't253',
    title: 'Missing Gateway Tape',
    artist: '8BitGinger',
    duration: 244,
    album: 'Synergy',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Missing%20Gateway%20Tape.wav?alt=media',
    art: '/art/missingGateway.png',
    genre: 'Synthwave',
    bpm: null,
  },
  {
    id: 't255',
    title: 'Nice To Meet U',
    artist: '8BitGinger',
    duration: 226,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Nice%20To%20Meet%20You%20%20-%20Miss%20U%20Mix.wav?alt=media',
    art: '/art/niceToMeetU.png',
    genre: 'Alt-Pop',
    bpm: null,
  },
  {
    id: 't256',
    title: 'Open All Night',
    artist: '8BitGinger',
    duration: 193,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Open%20All%20Night.wav?alt=media',
    art: '/art/openAllNight.png',
    genre: 'LoFi',
    bpm: null,
  },
  {
    id: 't257',
    title: 'Queen of the Pain',
    artist: 'Blacklist Dahlia',
    duration: 240,
    album: 'Silk Sheets',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Queen%20of%20the%20Pain%20-%20Blacklist%20Beat%20(Remastered).wav?alt=media',
    art: '/art/queenOfPain.jpg',
    genre: 'Neo-Soul Rock',
    bpm: null,
  },
  {
    id: 't258',
    title: 'Receipts',
    artist: 'VNDAL',
    duration: 209,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Receipts.wav?alt=media',
    art: '/art/receipts.png',
    genre: 'Afrobeat',
    bpm: null,
  },
  {
    id: 't259',
    title: 'Rigid',
    artist: '8BitGinger',
    duration: 154,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Rigid.wav?alt=media',
    art: '/art/rigid.jfif',
    genre: 'Hardcore Trap',
    bpm: null,
  },
  {
    id: 't260',
    title: 'Wrong Version of Me',
    artist: 'VNDAL',
    duration: 183,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Signal%20Unknown%20-%20VNDAL%20Version.wav?alt=media',
    art: '/art/wrongVersion.png',
    genre: 'Hip-Hop',
    bpm: null,
  },
  // {
  //   id: 't261',
  //   title: 'Stalking the Feed - Lowkey LoFi',
  //   artist: '8BitGinger',
  //   duration: 147,
  //   album: 'Coffee & Clouds',
  //   src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Stalking%20the%20Feed%20-%20Lowkey%20LoFi.wav?alt=media',
  //   art: null,
  //   genre: null,
  //   bpm: null,
  // },
  {
    id: 't262',
    title: 'Steppin’',
    artist: '8BitGinger',
    duration: 195,
    album: 'Synergy',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Steppin%E2%80%99.wav?alt=media',
    art: '/art/steppin.png',
    genre: 'LoFi',
    bpm: null,
  },
  {
    id: 't263',
    title: 'Still Walking',
    artist: '8BitGinger',
    duration: 269,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Still%20Walking.wav?alt=media',
    art: '/art/stillWalking.jpeg',
    genre: 'Soul',
    bpm: 62,
    lyrics: `
    [Verse 1]
The street lights got a different kind of weight tonight
Everything is open but nothing feels quite right
I told myself I'm fine
I've been saying that for weeks
There's a version of the truth
That fits between the things I speak

I walked out of a room
That used to feel like mine
Left my keys on the table
For the last time
Didn't look back — or I did
But just the once
The kind of look that answers
Every question all at once

And the city just kept moving
Like it always does
Indifferent and illuminated
The way the city was
[City]
Where are you going?
[Male]
I don't know yet
[City]
Where did you come from?
[Male]
Somewhere I can't go back to
[City]
What are you carrying?
[Male]
Everything

[Pre-Chorus]
I know the geography of grief
I've been here before
Different street same feeling
Different door same floor
The kind of okay
That wears the right expression
That answers how are you
Without the full confession

[Chorus]
Still walking
Still moving through the amber light
Still breathing
Which means I'm doing something right
The city holds a million endings
Every night
Still walking
Even when I'm not sure
Where I'm walking to tonight

[Verse 2]
I passed the place we used to sit
And didn't stop
I noticed that I noticed it
And kept on
There's a kind of loss
That doesn't have a name
Not dramatic
Not the kind
You get to fully blame
On anyone

The job that didn't last
The version of yourself
You were convinced was coming
That just hasn't showed
The friendship that just
Quietly dissolved one day
The dream you stopped
Describing out loud somewhere
Along the way

I'm not asking for the past back
I stopped asking that a while ago
I'm just trying to figure out
Which direction home is
In a life where I'm not sure
I remember what home is

[City]
You've been here before
[Male]
I know
[City]
And you survived it
[Male]
I know
[City]
So what is it this time
That feels different
[Male]
All of it
This time it's all of it

[Pre-Chorus]
The kind of okay
That wears the right expression
That answers how are you
Without the full confession

[Chorus]
Still walking
Still moving through the amber light
Still breathing
Which means I'm doing something right
The city holds a million endings
Every night
Still walking
Even when I'm not sure
Where I'm walking to tonight

[Bridge]

I used to know what I was walking toward
I had the whole thing mapped
The person and the place
And the version of the life
That was supposed to have happened
By now

And somewhere it just
Didn't

Not with drama
Not with fire
Just with the quiet accumulation
Of small divergences
Until I looked up one day
And the map was gone
[City — Female, directly beside him now, not distant]
Can I ask you something?
[Male]
Yeah
And I mean really ask
Not the way people ask
When they already know the answer
[Male]
Okay
[Male asking himself]: What would actually make you happy?
 nothing

[Outro]
[City]
Take your time
[Silence]
    `
  },
  {
    id: 't264',
    title: 'Superhuman',
    artist: '8BitGinger',
    duration: 172,
    album: 'Synergy',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Superhuman.wav?alt=media',
    art: '/art/superhuman.png',
    genre: 'Speed Rap',
    bpm: null,
  },
  {
    id: 't265',
    title: 'Tailor Made',
    artist: '8BitGinger',
    duration: 195,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Tailor%20Made.wav?alt=media',
    art: '/art/tailorMade.jpg',
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
    art: '/art/openHorizon.png',
    genre: 'Hip-Hop',
    bpm: null,
  },
  {
    id: 't268',
    title: 'The Way You Move',
    artist: '8BitGinger',
    duration: 279,
    album: 'Silk Sheets',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/The%20Way%20You%20Move.wav?alt=media',
    art: '/art/theWayYouMove.png',
    genre: 'Trap Soul',
    bpm: 84,
    lyrics: ` 
    
[INTRO]
(I don't usually — )
(Never mind)
(Just listen)

[VERSE 1]
I been around
I know how rooms feel
I know the difference between presence
And the specific kind of pull
That makes you forget
What you were even looking for

You’re not anything dramatic
You’re not some movie moment
(Its just the way you move)
Just the way you moved through the space
Like the room was already yours
Before you decided
Whether you wanted it

I watched you disagree with someone
About something small
And the way you held your ground
Without raising your voice
Without performing certainty —
Just having it
(Quietly)
In your whole body

[Pre-chorus builds]

[PRE-CHORUS]
( been trying to place what this is)
(It ain't love — I know what that costs)
(This is something earlier)
(Something that moves like you do...)

[CHORUS]
It's the way you move (the way you move)
Like gravity made an exception for you
It's the way you move (the way you move)
Like you been the answer to a question
I forgot I was asking
It's the way you think
And the way you stand
And the way you take up space
The smile that owns that face
(It’s contagious...)
It's just the way you move

[VERSE 2 – fuller, more specific, the amazement more visible now]
You laugh at your own jokes
Before the punchline lands
And you're right every time
Which should be annoying
And isn't

You got opinions about things
I never thought to have opinions about
And you say them like they're obvious
Like the world is clearly this way
And you're just the first one
Who bothered to notice

And then you move across the room
To get a drink or check your phone
Or nothing
Just move
And I lose the thread
Of whatever I was thinking
Because nothing I was thinking
Was as interesting
As the way you do that

(I'm not falling)
(I'm just — )
(..adjacent to falling)
(this is new… thanks for the space to enjoy this)

[PRE-CHORUS]
I been trying to place what this is
It ain't love — I know what that costs
This is something earlier
Something that lives before the name
(Something that moves like you do...)
(Like you do...)

[CHORUS]
It's the way you move (the way you move)
Like gravity made an exception for you
It's the way you move (the way you move)
Like you been the answer to a question
I forgot I was asking
It's the way you think
And the way you stand
And the way you take up space
The smile that owns that face
(It’s contagious...)
It's just the way you move

[BRIDGE]
(I've met people before)
(I've liked people before)
(I’ve loved)
(That's not what this is)

This is the specific thing
Where you notice someone doing something ordinary
Making a point, passing a joint
Just existing.

(And you don't say it out loud)
Because saying it out loud
Makes it a thing
(And right now it's just)
Being genuinely amazed
By someone just being themselves

I don't know what to do with that yet
(But I know I don't want it to stop)


[FINAL CHORUS]
It's the way you move (the way you move)
Like gravity made an exception for you
It's the way you move (the way you move)
Like you been the answer to a question
I forgot I was asking
It's the way you think
And the way you stand
And the way you take up space
The smile that owns that face
(It’s contagious...)
It's just the way you move
You move
(You move)
(The way you move...)

[OUTRO ]
...yeah
...the way you move

    `
  },
  {
    id: 't269',
    title: 'This is How We Vibe',
    artist: 'VNDAL',
    duration: 227,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/This%20is%20How%20We%20Vibe%20-%20VNDAL%20(Edit).wav?alt=media',
    art: '/art/thisIsHowWeVibe.jpg',
    genre: 'Hip-Hop',
    bpm: null,
  },
  {
    id: 't270',
    title: 'Three Blind Mice',
    artist: '8BitGinger',
    duration: 203,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Three%20Blind%20Mice.wav?alt=media',
    art: '/art/threeBlindMice.png',
    genre: 'LoFi',
    bpm: null,
  },
  {
    id: 't271',
    title: 'Trauma',
    artist: 'Auraveil',
    duration: 207,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Trauma%20-%20Auraveil%20Original.wav?alt=media',
    art: '/art/trauma.png',
    genre: 'Alternative',
    bpm: null,
  },
  {
    id: 't273',
    title: 'We Are The Simulation',
    artist: '8BitGinger',
    duration: 199,
    album: 'Pulse',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/We%20Are%20The%20Simulation.wav?alt=media',
    art: '/art/weAreTheSimulation.webp',
    genre: 'Electro-Pop',
    bpm: null,
  },
  {
    id: 't274',
    title: 'Windows Cracked Down',
    artist: '8BitGinger',
    duration: 184,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Windows%20Cracked%20Down.wav?alt=media',
    art: '/art/windowsCrackedDown.png',
    genre: 'LoFi R&B',
    bpm: null,
  },
  {
    id: 't275',
    title: 'Wish I had Known',
    artist: '8BitGinger',
    duration: 247,
    album: 'Silk Sheets',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Wish%20I%20had%20Known.wav?alt=media',
    art: '/art/wishIHadKnown.png',
    genre: 'R&B',
    bpm: null,
  },
  {
    id: 't276',
    title: 'Funeral Song',
    artist: 'Auraveil',
    duration: 225,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Your%20Last%20Song%20-%20Auraveil%20(Edit)%20(Remastered).wav?alt=media',
    art: '/art/funeralSong.jpg',
    genre: 'Alternative',
    bpm: null,
  },
  {
    id: 't277',
    title: 'I hope you\'re alright.',
    artist: '8BitGinger',
    duration: 163,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/_I%20hope%20you\'re%20alright._.wav?alt=media',
    art: '/art/hopeAlright.jpg',
    genre: 'Alt Pop',
    bpm: null,
  },
  {
    id: 't278',
    title: 'Still Water',
    artist: '8BitGinger',
    duration: 264,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/still%20water%20-%20%208BitGinger%20Original%20(Remastered).wav?alt=media',
    art: '/art/stillWater.jpg',
    genre: 'Folk Rap',
    bpm: null,
  },
  {
    id: 't279',
    title: '❌\'$ Only',
    artist: '8BitGinger',
    duration: 281,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/%E2%9D%8C\'%24%20Only%20(h0e%20n0%20ed1t).wav?alt=media',
    art: '/art/x.webp',
    genre: 'Hip-Hop',
    bpm: null,
  },
  {
    id: 't280',
    title: '👽 ALIEN',
    artist: 'VNDAL',
    duration: 232,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/%F0%9F%91%BD%20ALIEN%20-%20VNDAL%20Version.wav?alt=media',
    art: '/art/alien.webp',
    genre: 'Hardcord LoFi',
    bpm: null,
  },
  {
    id: 't282',
    title: 'Better Than Me',
    artist: '8BitGinger',
    duration: 235,
    album: 'Pulse',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Better%20Than%20Me%20(8BitBop).wav?alt=media',
    art: '/art/betterThanMe.jfif',
    genre: 'Alt Pop',
    bpm: null,
  },
  {
    id: 't283',
    title: 'Borrowed Time',
    artist: '8BitGinger',
    duration: 231,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Borrowed%20Time.wav?alt=media',
    art: '/art/borrowedTime.jfif',
    genre: 'Dark R&B',
    bpm: null,
  },
  // {
  //   id: 't284',
  //   title: 'Bourbon Bandit',
  //   artist: '8BitGinger',
  //   duration: 224,
  //   album: 'Dirt Road',
  //   src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Bourbon%20Bandit.wav?alt=media',
  //   art: null,
  //   genre: null,
  //   bpm: null,
  // },
  {
    id: 't285',
    title: 'Cloud Level',
    artist: 'Auraveil',
    duration: 259,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Cloud%20Level%20-%20Auraveil%20Cover%20(Remastered)%20(Edit).wav?alt=media',
    art: '/art/cloudLevel.jpg',
    genre: 'Alternative',
    bpm: null,
  },
  {
    id: 't286',
    title: 'Dopamine and Drama',
    artist: '8BitGinger',
    duration: 256,
    album: 'High Gain',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Dopamine%20and%20Drama.wav?alt=media',
    art: '/art/dopamineDrama.webp',
    genre: 'Rock',
    bpm: null,
  },
  {
    id: 't287',
    title: 'Dream Girl',
    artist: '8BitGinger',
    duration: 215,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Dream%20Girl.wav?alt=media',
    art: '/art/dreamGirl.webp',
    genre: 'R&B',
    bpm: null,
  },

  {
    id: 't289',
    title: 'Everything that Made Me',
    artist: 'Auraveil',
    duration: 198,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Everything%20that%20Made%20Me%20-%20Auraveil%20Published.wav?alt=media',
    art: '/art/everythingThatMadeMe.jfif',
    genre: 'Indie Alternative',
    bpm: null,
  },
  {
    id: 't290',
    title: 'Fucking or Fighting',
    artist: '8BitGinger',
    duration: 241,
    album: 'High Gain',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Fucking%20or%20Fighting%20(Remastered).wav?alt=media',
    art: '/art/fuckingFighting.jfif',
    genre: 'Rock',
    bpm: null,
  },

  {
    id: 't292',
    title: 'Ganja Goddess',
    artist: 'VNDAL',
    duration: 190,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Ganja%20Goddess%20-%20VNDAL%20Version%20-%20no%20cover.wav?alt=media',
     art: '/art/ganjaGoddess.jfif',
    genre: 'Rap',
    bpm: null,
  },
  {
    id: 't293',
    title: 'Ghost Tracks',
    artist: '8BitGinger',
    duration: 249,
    album: 'Dirt Road',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Ghost%20Tracks.wav?alt=media',
    art: '/art/ghostTracks.webp',
    genre: 'Dark Country',
    bpm: null,
  },
  {
    id: 't294',
    title: 'Heavy Breathing',
    artist: '8BitGinger',
    duration: 168,
    album: 'Silk Sheets',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Heavy%20Breathing%20-%208BitPublish.wav?alt=media',
    art: '/art/heavyBreathing.jfif',
    genre: 'Trap',
    bpm: null,
  },
  {
    id: 't295',
    title: 'Holes in my Dreams',
    artist: '8BitGinger',
    duration: 235,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Holes%20in%20my%20Dreams.wav?alt=media',
    art: '/art/holesDreams.png',
    genre: 'Alternative Phonk',
    bpm: null,
  },
  {
    id: 't296',
    title: 'I\'m Fine, I Swear',
    artist: '8BitGinger',
    duration: 184,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/I\'m%20Fine%2C%20I%20Swear.wav?alt=media',
    art: '/art/imFine.jfif',
    genre: 'Trap',
    bpm: null,
  },
  {
    id: 't297',
    title: 'Live, Laugh, Lunacy',
    artist: '8BitGinger',
    duration: 171,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Live%2C%20Laugh%2C%20Lunacy.wav?alt=media',
    art: '/art/liveLaughLunacy.jfif',
    genre: 'Alternative',
    bpm: null,
  },
  {
    id: 't298',
    title: 'Lock the Frame',
    artist: 'Auraveil',
    duration: 191,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Lock%20the%20Frame%20-%20Auraveil%20Edit.wav?alt=media',
    art: '/art/lockTheFrame.jfif',
    genre: 'Alternative Trap',
    bpm: null,
  },
  {
    id: 't299',
    title: 'Lubbock Lean',
    artist: '8BitGinger',
    duration: 175,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Lubbock%20Lean.wav?alt=media',
    art: '/art/lubbockLean.png',
    genre: 'Boom Bap',
    bpm: null,
  },
  {
    id: 't300',
    title: 'Movin\' Different',
    artist: '8BitGinger',
    duration: 181,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Move%20Different.wav?alt=media',
    art: '/art/movinDifferent.jpg',
    genre: 'Trap',
    bpm: null,
  },
  {
    id: 't301',
    title: 'No Apologies',
    artist: '8BitGinger',
    duration: 175,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/No%20Apologies.wav?alt=media',
    art: '/art/noApologies.jfif',
    genre: 'Rock',
    bpm: null,
  },

  {
    id: 't303',
    title: 'Ruin It Right',
    artist: 'Blacklist Dahlia',
    duration: 210,
    album: 'High Gain',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Ruin%20It%20Right%20-%20Blacklist%20Banger.wav?alt=media',
    art: '/art/ruinItRight.jfif',
    genre: 'Rock Trap',
    bpm: null,
  },
  {
    id: 't304',
    title: 'SOULGAZE',
    artist: '8BitGinger',
    duration: 214,
    album: 'Synergy',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/SOULGAZE.wav?alt=media',
    art: '/art/soulgaze.jpg',
    genre: 'LoFi',
    bpm: null,
  },
  {
    id: 't305',
    title: 'Show Me That Heart',
    artist: '8BitGinger',
    duration: 206,
    album: 'Silk Sheets',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Show%20Me%20That%20Heart.wav?alt=media',
    art: '/art/showMeThatHeart.jpeg',
    genre: 'R&B',
    bpm: null,
  },
  {
    id: 't306',
    title: 'Skin Don\'t Forget',
    artist: '8BitGinger',
    duration: 165,
    album: 'Silk Sheets',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Skin%20Don\'t%20Forget.wav?alt=media',
    art: '/art/skinDontForget.jpg',
    genre: 'R&B',
    bpm: null,
  },
  {
    id: 't307',
    title: 'Smoke in the Sun',
    artist: '8BitGinger',
    duration: 181,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Smoke%20in%20the%20Sun.wav?alt=media',
    art: '/art/smokeInTheSun.jpg',
    genre: 'LoFi Hip-Hop',
    bpm: null,
  },
  {
    id: 't308',
    title: 'Spent the Summer',
    artist: '8BitGinger',
    duration: 146,
    album: 'Pulse',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Spent%20the%20Summer.wav?alt=media',
    art: '/art/spentTheSummer.jpg',
    genre: 'Pop R&B',
    bpm: null,
  },
  {
    id: 't309',
    title: 'The Standard',
    artist: 'VNDAL',
    duration: 195,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/The%20Standard%20-%20VNDAL%20Version.wav?alt=media',
    art: '/art/theStandard.jfif',
    genre: 'Trip-Hop',
    bpm: null,
  },
  {
    id: 't310',
    title: 'Thunder & Dust',
    artist: '8BitGinger',
    duration: 225,
    album: 'Dirt Road',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Thunder%20%26%20Dust%20-%20Duet.wav?alt=media',
    art: '/art/thunderDust.jfif',
    genre: 'Outlaw Country',
    bpm: null,
  },
  {
    id: 't311',
    title: 'Til the Sky Falls',
    artist: '8BitGinger',
    duration: 188,
    album: 'Liquid Gold',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Til%20the%20Sky%20Falls.wav?alt=media',
    art: '/art/tilTheSkyFalls.jpg',
    genre: 'LoFi R&B',
    bpm: null,
  },
  {
    id: 't312',
    title: 'Touch Me (Like a Secret)',
    artist: '8BitGinger',
    duration: 212,
    album: 'Silk Sheets',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Touch%20Me%20(Like%20a%20Secret).wav?alt=media',
    art: '/art/touchMeLikeASecret.png',
    genre: 'LoFi R&B',
    bpm: null,
    lyrics: `
    [Intro]

[Hook]
Saw you in that moonlight, (now I can't think straight)
Something 'bout dat body, dat soul, (got me rearrangin' fate)
Never been the type to fall, at all (but here I go again)
You got me prayin' to a feeling, (I don't believe in)
Touch me like a secret, (but you already know)
Baby we ain't even started, (I ain't letting go)
(yeah… like that… right there)

[Verse 1]
I don't do this — I don't fall fast
I built my walls, fuck my past
But you look like danger, worth chasing
Forget the reason, I been self-erasing
I stay cool, stay distant
But now I'm texting fast, instant
Said slow down, said wait —
You smiled sideways, sealed my fate —
Learning your body — touching your waist
Leaned in close, setting the pace

[Hook]
Saw you in that moonlight, (now I can't think straight)
Something 'bout dat body, dat soul, (got me rearrangin' fate)
Never been the type to fall, at all (but here I go again)
You got me prayin' to a feeling, (I don't believe in)
Touch me like a secret, (but you already know)
Baby we ain't even started, (I ain't letting go)
(yeah… like that… right there)

[Verse 2]
Listen —
Perfume still lingers, on my jacket
Don't want to lose this feeling, let's track it
Countin' the hours like I lost something (precious)
Runnin' through my mind, (those dresses)
Every touch felt like a secret I wasn't ready to keep
I'm usually unreadable, usually composed
But you cracked something open that I thought I had closed
And now I'm —

[Bridge]
…When you bit my neck? (heaven)
…What I ‘bout do? Wreck it
…Hit it from behind, while I cum inside
And now I'm —

I don't do this...
 Neither do I...
But something 'bout tonight feels like...
 Like we already know how this ends...
 ...so hit the lights… let's go again!

[Hook]
Saw you in that moonlight, (now I can't think straight)
Something 'bout dat body, dat soul, (got me rearrangin' fate)
Never been the type to fall, at all (but here I go again)
You got me prayin' to a feeling, (I don't believe in)
Touch me like a secret, (but you already know)
Baby we ain't even started, (I ain't letting go)
(yeah… like that… right there)

[Outro]
Never fell this fast...
Yeah... I know
 But I'd fall again...
Every single time...
 (...yeah)

(uh, uh, uh, yeah, oh. Oh god)

    `
  },
  {
    id: 't313',
    title: 'Wide Open',
    artist: '8BitGinger',
    duration: 264,
    album: 'Pulse',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Wide%20Open.wav?alt=media',
    art: '/art/wideOpen.webp',
    genre: 'Pop',
    bpm: null,
  },
  {
    id: 't314',
    title: 'Can\'t Sleep',
    artist: '8BitGinger',
    duration: 200,
    album: 'Coffee & Clouds',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Can\'t%20Sleep%20-%20My%20Mix.wav?alt=media',
    art: '/art/cantSleep.jpeg',
    genre: 'Trap Soul',
    bpm: null,
  },
  {
    id: 't315',
    title: 'Venom',
    artist: 'VNDAL',
    duration: 212,
    album: 'Flow State',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Venom%20-%20V6%20Version.wav?alt=media',
    art: '/art/venom.png',
    genre: 'Trap Soul',
    bpm: null,
  },
  {
    id: 't316',
    title: 'Just Let Me Fade',
    artist: 'Auraveil',
    duration: 257,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Just%20Let%20Me%20Fade%20(Remastered).wav?alt=media',
    art: '/art/letMeFade.webp',
    genre: 'Alt Pop',
    bpm: null,
  },
  {
    id: 't317',
    title: 'Dangerous',
    artist: '8BitGinger',
    duration: 237,
    album: 'Silk Sheets',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Dangerous%20(1).wav?alt=media',
    art: '/art/dangerous.webp',
    genre: 'Alt Pop',
    bpm: null,
  },
  {
    id: 't318',
    title: 'Sorrow is Just Joy',
    artist: 'Auraveil',
    duration: 191,
    album: 'Alt Drives',
    src: 'https://firebasestorage.googleapis.com/v0/b/ryfimusic-b6ccf.firebasestorage.app/o/Sorrow%20is%20just%20Joy%20(1).wav?alt=media',
    art: '/art/sorrow.png',
    genre: 'Alt Pop',
    bpm: null,
  },



















];


// Gradient palettes per album (used as cover art fallback)
export const albumPalettes = {
  'Flow State': ['#7c3aed', '#4c0870', '#0f0219'],
  'Dirt Road': ['#c5c359', '#7f7a1e', '#2c2c00'],
  'Synergy': ['#0b8cf5', '#064d8c', '#021519'],
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
      't206',
      't196',
      't226',
      't198',
      't259',
      't260',
      't279',
      't280',
      't292',
      't301',
      't309',
      't269',
      't315',
      't188',
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
      't310',
      't293',
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
      't316',
      't6',
      't8',
      't9',
      't151',
      't230',
      't244',
      't271',
      't277',
      't289',
      't295',
      't298',
      't297',
      't176',
      't285',
      't318',
      't276',
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
      't303',
      't286',
      't118',
      't290',
      't158',
      't137',
      't32',
    ],
    color: '#ed6d3a',
  },
      {
    id: 'pl9',
    icon: 'Zap',
    name: 'Pulse',
    description: 'Pop hits, Electronica, and High-Energy Hits for any occasion',
    trackIds: [
      't313',
      't308',
      't228',
      't282',
      't243',
      't273',
      't109',
      't237',
      't250',
      't223',
      't221',
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
      't197',
      't70',
      't210',
      't178',
      't122',
      't215',
      't232',
      't255',
      't263',
      't1',
      't256',
      't245',
      't270',
      't231',
      't283',
      't51',
      't79',
      't233',
      't314',
      't194',
      't213',
    ],
    color: '#00e5ff',
  },

  {
    id: 'pl11',
    icon: 'Droplet',
    name: 'Liquid Gold',
    description: 'Smooth and Slick cross-genre Hits for vibing',
    trackIds: [
      't307',
      't186',
      't47',
      't199',
      't200',
      't235',
      't246',
      't248',
      't249',
      't265',
      't267',
      't278',
      't300',
      't311',
      't287',
      't299',
      't296',
      't274',
      't236',
      't258',
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
      't247',
      't253',
      't264',
      't304',
      't262',
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
      't294',
      't306',
      't312',
      't217',
      't257',
      't305',
      't317',
      't275',
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
