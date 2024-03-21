const gamesContainer = document.getElementById('gamesContainer');

// Data for the games
const games = [
  {
    author: 'devan4264',
    name: 'improved-octo-chainsaw-charlie',
    description: 'An exciting golf game with improved mechanics and challenges.',
    url: 'https://github.com/devan4264/improved-octo-chainsaw-charlie'
  },
  {
    author: 'Mackenzie Thompson',
    name: 'legendary-goggles-charlie',
    description: 'Experience golfing adventures with legendary goggles!',
    url: 'https://github.com/mackenzie24t/legendary-goggles-charlie'
  },
  {
    author: 'JohnAllenB',
    name: 'crispy-charlie',
    description: 'Enjoy a crispy golfing experience like never before.',
    url: 'crispy-charlie-lab03-blaxton'
  },
  {
    author: 'Kalani Sorensen',
    name: 'charlie-lab-cis376',
    description: 'A golf game developed with passion and expertise.',
    url: 'https://github.com/babayaga1013/charlie-lab-cis376'
  },
  {
    author: 'Jacob-Vance',
    name: 'turbo-pancake-charlie',
    description: 'Golfing with turbo speed and fluffy pancakes!',
    url: 'https://jacob-vance.github.io/turbo-pancake-charlie/'
  },
  {
    author: 'Jayden Green',
    name: 'delta-jubilant-octo-winner',
    description: 'Become a golfing champion in this jubilant adventure!',
    url: 'https://jaydengreen23.github.io/delta-jubilant-octo-winner/'
  },
  {
    author: 'Sam Maldonado',
    name: 'Hot or Cold',
    description: 'A thrilling golf game with hot and cold challenges.',
    url: 'https://smaldonado1326.github.io/cuddly-invention--charlie/'
  },
  {
    author: 'Nolen Robinson',
    name: 'Charlie Meme',
    description: 'Golfing fun with Charlie-themed memes!',
    url: 'https://nrobinson4.github.io/bug-free-potato-charlie/'
  },
  {
    author: 'Michael Hayden Duran',
    name: 'The Mystical Lucky Eccentric Silly Llama Game!',
    description: 'Embark on a mystical golfing journey with silly llamas!',
    url: 'https://github.com/MichaelHaydenDuran/chica-bonita-delta'
  },
  {
    author: 'Alex Glenn',
    name: 'charlie-project-alex',
    description: 'Experience golfing excellence with Alex!',
    url: 'https://github.com/pglenn1/charlie-project-alex'
  },
  {
    author: 'Kevin Hernandez',
    name: 'Charlie-BravoSoMuchWow',
    description: 'Golfing adventures that will make you say, "So much wow!"',
    url: 'https://hkevin555.github.io/lab-charlie/'
  },
  {
    author: 'Marvin De La Cruz',
    name: 'Delta Lab Spirit animal',
    description: 'Discover your golfing spirit animal in this lab adventure!',
    url: 'https://marvin-2056.github.io/Delta-CIS-367/'
  },
  {
    author: 'Rodnesia Goodloe',
    name: 'nesia-charlie-lab',
    description: 'Experience golfing fun with Rodnesia!',
    url: 'https://github.com/nesiagoodloe/nesia-charlie-lab'
  },
  {
    author: 'Claire Mitchell',
    name: 'Charlie',
    description: 'Embark on a golfing journey with Claire!',
    url: 'https://cm1803.github.io/charlie/'
  },
  {
    author: 'Saleh Basalim',
    name: 'Delta-lab',
    description: 'Delta lab golfing adventures await you!',
    url: 'https://salehmb89.github.io/delta-lab/'
  },
  {
    author: 'Mandy McGinnis',
    name: 'Hopping Zone Charlie',
    description: 'Hop into golfing fun with Mandy!',
    url: 'https://github.com/mmandelyn/silver-seal-charlie'
  },
  {
    author: 'Skyler Saunders',
    name: 'super-adventure-charlie',
    description: 'Embark on a super adventure in golfing!',
    url: 'https://skysaunders.github.io/super-adventure-charlie/'
  },
  {
    author: 'Candice Buford',
    name: 'Glowing Meme Foxtrot',
    description: 'Experience golfing fun with glowing memes!',
    url: 'https://cbuf0rd.github.io/glowing-meme-foxtrot/'
  },
  {
    author: 'Mohammed Alrasheidi',
    name: 'Delta',
    description: 'Delta lab golfing experiences like no other!',
    url: 'https://mohammedalrasheidi.github.io/Delta-lab/'
  },
  {
    author: 'Grant Hartley',
    name: 'charlie',
    description: 'Experience golfing excellence with Grant!',
    url: 'https://github.com/hrantgartley/didactic-waffle-delta'
  },
  {
    author: 'Ayman Alluhaybi',
    name: 'delta',
    description: 'Embark on a golfing journey with Ayman!',
    url: 'https://aalluhaybi1.github.io/DELTA-LAB/'
  },
  {
    author: 'Brayden Bolton',
    name: 'Charlie',
    description: 'Join Brayden on an exciting golfing adventure!',
    url: 'https://github.com/bbolton1/CIS376-Charlie-Brayden'
  },
  {
    author: 'Navraj_Singh',
    name: 'probable-charlie',
    description: 'Experience probable golfing fun with Navraj!',
    url: 'https://github.com/QuantumCoder-242/probable-charlie'
  },
  {
    author: 'AkashdeepSingh0047',
    name: 'psychic-delta',
    description: 'Unlock psychic golfing abilities with Akashdeep!',
    url: 'https://github.com/AkashdeepSingh0047/psychic-delta'
  },
  {
    author: 'zrundle (Zach Rundle)',
    name: 'charlie-lab-zrundle',
    description: 'Golfing adventures with Zach in the lab!',
    url: 'https://github.com/zrundle/charlie-lab-zrundle'
  },
  {
    author: 'isabellerushing',
    name: 'Delta',
    description: 'Experience golfing fun with Isabelle!',
    url: 'isabellerushing.github.io/crispy-octo-carnival-delta/'
  }
];

// Create
