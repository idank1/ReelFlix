import { Episode } from '../../types';

/**
 * Initial episodes data
 */
export const initialEpisodes: Episode[] = [
  // Stranger Things Season 1 - 8 episodes
  // TMDB TV ID: 66732
  {
    id: 1,
    seasonId: 1,
    title: 'Chapter One: The Vanishing of Will Byers',
    description: 'On his way home from a friend\'s house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3120, // 52 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    seasonId: 1,
    title: 'Chapter Two: The Weirdo on Maple Street',
    description: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3300, // 55 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    seasonId: 1,
    title: 'Chapter Three: Holly, Jolly',
    description: 'An increasingly concerned Nancy looks for Barb and finds out what Jonathan\'s been up to. Joyce is convinced Will is trying to talk to her.',
    episodeNumber: 3,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3180, // 53 minutes
    watched: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 4,
    seasonId: 1,
    title: 'Chapter Four: The Body',
    description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover. Nancy and Jonathan form an unlikely alliance.',
    episodeNumber: 4,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3300, // 55 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 5,
    seasonId: 1,
    title: 'Chapter Five: The Flea and the Acrobat',
    description: 'Hopper breaks into the lab to find the truth about Will\'s death. The boys ask Mr. Clarke how to travel to another dimension.',
    episodeNumber: 5,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3300, // 55 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 6,
    seasonId: 1,
    title: 'Chapter Six: The Monster',
    description: 'A frantic Jonathan looks for Nancy in the darkness, but Steve\'s looking for her, too. Hopper and Joyce uncover the truth about the lab\'s experiments.',
    episodeNumber: 6,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3300, // 55 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 7,
    seasonId: 1,
    title: 'Chapter Seven: The Bathtub',
    description: 'Eleven tries to reach Will. Lucas issues a warning after seeing armed men in Hawkins. Nancy and Jonathan prepare to fight the monster and save Will.',
    episodeNumber: 7,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3300, // 55 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 8,
    seasonId: 1,
    title: 'Chapter Eight: The Upside Down',
    description: 'Dr. Brenner holds Hopper and Joyce for questioning while the kids wait with Eleven in the gym. Back in the Upside Down, Will sees something terrifying.',
    episodeNumber: 8,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3300, // 55 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // Stranger Things Season 2 - 9 episodes
  {
    id: 9,
    seasonId: 2,
    title: 'Chapter One: MADMAX',
    description: 'One year after Will\'s return, everything seems back to normal... but a darkness lurks just beneath the surface, threatening all of Hawkins.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3240, // 54 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 10,
    seasonId: 2,
    title: 'Chapter Two: Trick or Treat, Freak',
    description: 'After Will sees something terrible on trick-or-treat night, Mike wonders if Eleven\'s still out there. Nancy struggles with the truth about Barb.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3300, // 55 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 11,
    seasonId: 2,
    title: 'Chapter Three: The Pollywog',
    description: 'Dustin adopts a strange new pet, and Eleven grows increasingly impatient. A well-meaning Bob urges Will to stand up to his fears.',
    episodeNumber: 3,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3300, // 55 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 12,
    seasonId: 2,
    title: 'Chapter Four: Will the Wise',
    description: 'A frantic Jonathan looks for Nancy in the darkness, but Steve\'s looking for her, too. Hopper and Joyce uncover the truth about the lab\'s experiments.',
    episodeNumber: 4,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3300, // 55 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 13,
    seasonId: 2,
    title: 'Chapter Five: Dig Dug',
    description: 'Hopper gets into the tunnels beneath Hawkins. Dustin and Steve forge an unlikely alliance. Eleven makes plans to see Mike.',
    episodeNumber: 5,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3300, // 55 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // Stranger Things Season 3 - 8 episodes
  {
    id: 14,
    seasonId: 3,
    title: 'Chapter One: Suzie, Do You Copy?',
    description: 'Summer brings new jobs and budding romance. But the mood shifts when Dustin\'s radio picks up a Russian transmission.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3300, // 55 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 15,
    seasonId: 3,
    title: 'Chapter Two: The Mall Rats',
    description: 'Nancy and Jonathan follow a lead, Steve and Robin sign on to a secret mission, and Max and Eleven go shopping.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3300, // 55 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // Stranger Things Season 4 - 9 episodes
  {
    id: 16,
    seasonId: 4,
    title: 'Chapter One: The Hellfire Club',
    description: 'Spring Break brings new romances, but trouble looms when Eleven and Will realize something\'s wrong at Hawkins Lab.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 17,
    seasonId: 4,
    title: 'Chapter Two: Vecna\'s Curse',
    description: 'A plane crash brings back memories for Eleven. Max is in danger. Dustin and Steve discover something\'s wrong.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // Breaking Bad Season 1 - 7 episodes
  // TMDB TV ID: 1396
  {
    id: 18,
    seasonId: 5,
    title: 'Pilot',
    description: 'Diagnosed with terminal lung cancer, chemistry teacher Walter White teams up with former student Jesse Pinkman to cook and sell crystal meth.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 3480, // 58 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 19,
    seasonId: 5,
    title: 'Cat\'s in the Bag...',
    description: 'After their first drug deal goes terribly wrong, Walt and Jesse are forced to deal with a corpse and a prisoner. Meanwhile, Skyler grows suspicious of Walt\'s activities.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 20,
    seasonId: 5,
    title: '...And the Bag\'s in the River',
    description: 'Walt and Jesse attempt to tie up loose ends. The desperate situation gets more complicated with the flip of a coin. Walt\'s brother-in-law, DEA agent Hank Schrader, pays a visit to the Whites.',
    episodeNumber: 3,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 21,
    seasonId: 5,
    title: 'Cancer Man',
    description: 'Walt and Skyler attend a cancer support group. Meanwhile, Jesse tries to sell the meth on his own, but runs into trouble.',
    episodeNumber: 4,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 22,
    seasonId: 5,
    title: 'Gray Matter',
    description: 'Walt and Skyler attend a party at his former business partner\'s house. Jesse tries to get his money back from his former partner.',
    episodeNumber: 5,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 23,
    seasonId: 5,
    title: 'Crazy Handful of Nothin\'',
    description: 'Walt\'s cancer treatment starts. Jesse tries to expand the business, but runs into trouble with a local drug dealer.',
    episodeNumber: 6,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 24,
    seasonId: 5,
    title: 'A No-Rough-Stuff-Type Deal',
    description: 'Walt and Jesse make a deal with a dangerous drug dealer. Skyler confronts Walt about his behavior.',
    episodeNumber: 7,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // Breaking Bad Season 2 - 13 episodes
  {
    id: 25,
    seasonId: 6,
    title: 'Seven Thirty-Seven',
    description: 'Walt and Jesse realize how dire their situation is. They must come up with a plan to kill Tuco before Tuco kills them first.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 26,
    seasonId: 6,
    title: 'Grilled',
    description: 'Walt and Jesse are held captive by Tuco. Hank searches for them.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 27,
    seasonId: 6,
    title: 'Bit by a Dead Bee',
    description: 'Walt and Jesse try to cover up what happened. Skyler grows more suspicious.',
    episodeNumber: 3,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // Breaking Bad Season 3 - 13 episodes
  {
    id: 28,
    seasonId: 7,
    title: 'No Más',
    description: 'Walt tries to move on from his criminal past, but finds it difficult. Jesse struggles with addiction.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 29,
    seasonId: 7,
    title: 'Caballo Sin Nombre',
    description: 'Walt and Skyler\'s relationship deteriorates. Jesse tries to get clean.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // Breaking Bad Season 4 - 13 episodes
  {
    id: 30,
    seasonId: 8,
    title: 'Box Cutter',
    description: 'Gus deals with the aftermath of the previous season. Walt and Jesse are forced to work together again.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 31,
    seasonId: 8,
    title: 'Thirty-Eight Snub',
    description: 'Walt buys a gun. Jesse struggles with guilt. Hank continues his investigation.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // Breaking Bad Season 5 - 16 episodes
  {
    id: 32,
    seasonId: 9,
    title: 'Live Free or Die',
    description: 'Walt, Jesse and Mike try to dispose of Gus\'s laptop. Skyler is horrified by Walt\'s actions.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 33,
    seasonId: 9,
    title: 'Madrigal',
    description: 'The DEA investigates Gus\'s operation. Mike is targeted. Jesse tries to move on.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    duration: 2880, // 48 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // The Crown Season 1 - 10 episodes
  // TMDB TV ID: 65494
  {
    id: 34,
    seasonId: 10,
    title: 'Wolferton Splash',
    description: 'As King George VI\'s health fails, Princess Elizabeth and Prince Philip tour the Commonwealth. Winston Churchill becomes prime minister again.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 35,
    seasonId: 10,
    title: 'Hyde Park Corner',
    description: 'King George VI dies, and Elizabeth must cut short her trip to return to England. The new queen meets with Churchill and begins to understand the weight of her new role.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 36,
    seasonId: 10,
    title: 'Windsor',
    description: 'The Queen must choose between her duty to the Crown and her sister\'s happiness when Margaret wants to marry a divorced man.',
    episodeNumber: 3,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 37,
    seasonId: 10,
    title: 'Act of God',
    description: 'A great smog descends upon London, wreaking havoc and crippling the city. As the crisis escalates, Churchill must act.',
    episodeNumber: 4,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 38,
    seasonId: 10,
    title: 'Smoke and Mirrors',
    description: 'The Queen must decide whether to use her married name or her regnal name. Churchill faces a health crisis.',
    episodeNumber: 5,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // The Crown Season 2 - 10 episodes
  {
    id: 39,
    seasonId: 11,
    title: 'Misadventure',
    description: 'As the Suez Crisis escalates, the Queen must deal with the fallout. Philip faces personal challenges.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 40,
    seasonId: 11,
    title: 'A Company of Men',
    description: 'Philip embarks on a long tour. The Queen faces a constitutional crisis when Prime Minister Eden falls ill.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // The Crown Season 3 - 10 episodes
  {
    id: 41,
    seasonId: 12,
    title: 'Olding',
    description: 'A new decade brings new challenges. The Queen must adapt to a changing world and a new Prime Minister.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 42,
    seasonId: 12,
    title: 'Margaretology',
    description: 'The Queen sends Princess Margaret on a diplomatic mission to America. The trip proves more successful than expected.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // The Crown Season 4 - 10 episodes
  {
    id: 43,
    seasonId: 13,
    title: 'Gold Stick',
    description: 'The 1980s bring new challenges. The Queen must navigate the arrival of Margaret Thatcher and the marriage of Charles and Diana.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 44,
    seasonId: 13,
    title: 'The Balmoral Test',
    description: 'Thatcher and her family visit Balmoral. The Prime Minister struggles to fit in with the royal family.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // The Crown Season 5 - 10 episodes
  {
    id: 45,
    seasonId: 14,
    title: 'Queen Victoria Syndrome',
    description: 'The 1990s bring new challenges. The Queen faces criticism and must adapt to a changing monarchy.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 46,
    seasonId: 14,
    title: 'The System',
    description: 'The Queen must deal with the fallout from Charles and Diana\'s separation. The monarchy faces a crisis.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  // The Crown Season 6 - 10 episodes
  {
    id: 47,
    seasonId: 15,
    title: 'Persona Non Grata',
    description: 'The final season begins. The Queen faces the end of an era and must prepare for the future.',
    episodeNumber: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 48,
    seasonId: 15,
    title: 'Two Photographs',
    description: 'The Queen reflects on her reign as she prepares for the future of the monarchy.',
    episodeNumber: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w400/1M876KPjulVwppEpldhdc8V4o68.jpg',
    duration: 3600, // 60 minutes
    watched: false,
    createdAt: new Date().toISOString()
  }
];

