export const Users = [
  {
    _id: 'u101',
    username: 'danielwallache',
    password: 'pass1',
    fullname: 'Daniel Wallache',
    bio: 'Full-stack developer. Love photography and hiking.',
    imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg',
    likedStoryIds: ['s102','s103','s105','s106','s108','s112','s115','s121','s124'],
    savedStoryIds: ['s101', 's110', 's125'],
    following: ['u102', 'u104', 'u110'],
    followers: ['u102', 'u105', 'u109'],
    posts: ['s101', 's111', 's125'],
    comments: [
      { storyId: 's103', commentId: 'c1011', txt: 'Fantastic shot! 🔥' },
      { storyId: 's105', commentId: 'c1012', txt: 'Love the mood here!' }
    ]
  },
  {
    _id: 'u102',
    username: 'noa_b',
    password: 'pass2',
    fullname: 'Noa Benari',
    bio: 'Designer & travel lover.',
    imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
    likedStoryIds: ['s101','s104','s107','s108','s110','s113','s117','s123'],
    savedStoryIds: ['s102', 's112', 's116'],
    following: ['u101', 'u103', 'u106'],
    followers: ['u101', 'u104', 'u110'],
    posts: ['s102', 's110', 's117'],
    comments: [
      { storyId: 's101', commentId: 'c2011', txt: 'Wow, where is this?' },
      { storyId: 's104', commentId: 'c2012', txt: 'Stunning view!' }
    ]
  },
  {
    _id: 'u103',
    username: 'eli_cohen',
    password: 'pass3',
    fullname: 'Eli Cohen',
    bio: 'Nature addict. Coffee first.',
    imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg',
    likedStoryIds: ['s101','s102','s109','s112','s116','s120','s123'],
    savedStoryIds: ['s103', 's114', 's121'],
    following: ['u104', 'u105', 'u106'],
    followers: ['u102', 'u101', 'u107'],
    posts: ['s103', 's115', 's120'],
    comments: [
      { storyId: 's110', commentId: 'c3011', txt: 'Super cool photo!' },
      { storyId: 's101', commentId: 'c3012', txt: 'Miss this place.' }
    ]
  },
  {
    _id: 'u104',
    username: 'yael_k',
    password: 'pass4',
    fullname: 'Yael Koren',
    bio: 'Urban explorer.',
    imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg',
    likedStoryIds: ['s104','s110','s112','s114','s117','s119','s122'],
    savedStoryIds: ['s104', 's118', 's119'],
    following: ['u103', 'u105', 'u108'],
    followers: ['u101', 'u106', 'u110'],
    posts: ['s104', 's112', 's119'],
    comments: [
      { storyId: 's102', commentId: 'c4011', txt: 'What a light!' },
      { storyId: 's111', commentId: 'c4012', txt: 'Crazy vibes 🔥' }
    ]
  },
  {
    _id: 'u105',
    username: 'amit_aviv',
    password: 'pass5',
    fullname: 'Amit Aviv',
    bio: 'Coding my life.',
    imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
    likedStoryIds: ['s103','s111','s113','s115','s118','s123','s124'],
    savedStoryIds: ['s105', 's118'],
    following: ['u102', 'u107', 'u101'],
    followers: ['u104', 'u108', 'u103'],
    posts: ['s105', 's113', 's124'],
    comments: [
      { storyId: 's104', commentId: 'c5011', txt: 'Really amazing.' },
      { storyId: 's114', commentId: 'c5012', txt: 'Colorful!' }
    ]
  },
  {
    _id: 'u106',
    username: 'tomer_b',
    password: 'pass6',
    fullname: 'Tomer Ben Tov',
    bio: 'I shoot, I run, I code.',
    imgUrl: 'https://randomuser.me/api/portraits/men/36.jpg',
    likedStoryIds: ['s105','s109','s110','s116','s120','s122'],
    savedStoryIds: ['s106', 's121'],
    following: ['u108', 'u109', 'u110'],
    followers: ['u102', 'u105', 'u101'],
    posts: ['s106', 's114', 's121'],
    comments: [
      { storyId: 's106', commentId: 'c6011', txt: 'Wow this is sharp.' },
      { storyId: 's112', commentId: 'c6012', txt: 'Great composition.' }
    ]
  },
  {
    _id: 'u107',
    username: 'lior_photo',
    password: 'pass7',
    fullname: 'Lior Fine',
    bio: 'Landscape photographer.',
    imgUrl: 'https://randomuser.me/api/portraits/women/37.jpg',
    likedStoryIds: ['s108','s110','s115','s118','s120','s125'],
    savedStoryIds: ['s107', 's119'],
    following: ['u106', 'u108', 'u103'],
    followers: ['u101', 'u102', 'u109'],
    posts: ['s107', 's108', 's120'],
    comments: [
      { storyId: 's107', commentId: 'c7011', txt: 'So beautiful!' },
      { storyId: 's108', commentId: 'c7012', txt: 'Love the colors!' }
    ]
  },
  {
    _id: 'u108',
    username: 'tal.g',
    password: 'pass8',
    fullname: 'Tal Green',
    bio: 'Product manager & foodie.',
    imgUrl: 'https://randomuser.me/api/portraits/men/38.jpg',
    likedStoryIds: ['s109','s111','s112','s114','s119','s123'],
    savedStoryIds: ['s108', 's121'],
    following: ['u110', 'u101', 'u103'],
    followers: ['u106', 'u107', 'u109'],
    posts: ['s108', 's109', 's123'],
    comments: [
      { storyId: 's109', commentId: 'c8011', txt: 'This is epic.' },
      { storyId: 's109', commentId: 'c8012', txt: 'Reminds me of last summer.' }
    ]
  },
  {
    _id: 'u109',
    username: 'oren_z',
    password: 'pass9',
    fullname: 'Oren Zinger',
    bio: 'Always outdoors.',
    imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg',
    likedStoryIds: ['s101','s103','s107','s114','s119','s122'],
    savedStoryIds: ['s109', 's122'],
    following: ['u101', 'u106', 'u102'],
    followers: ['u108', 'u105', 'u111'],
    posts: ['s109', 's114', 's122'],
    comments: [
      { storyId: 's101', commentId: 'c9011', txt: 'I wish I was there.' },
      { storyId: 's107', commentId: 'c9012', txt: 'Super dreamy.' }
    ]
  },
  {
    _id: 'u110',
    username: 'maya_b',
    password: 'pass10',
    fullname: 'Maya Bar',
    bio: 'Adventure, coding & music.',
    imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg',
    likedStoryIds: ['s106','s112','s115','s121','s125'],
    savedStoryIds: ['s101', 's116'],
    following: ['u101', 'u102', 'u103'],
    followers: ['u109', 'u105', 'u101'],
    posts: ['s110', 's112', 's121'],
    comments: [
      { storyId: 's112', commentId: 'c10011', txt: 'Golden hour magic.' },
      { storyId: 's106', commentId: 'c10012', txt: 'Super vibe.' }
    ]
  },
  {
    _id: 'u111',
    username: 'bar.k',
    password: 'pass11',
    fullname: 'Bar Kedem',
    bio: 'Yoga & UX.',
    imgUrl: 'https://randomuser.me/api/portraits/men/41.jpg',
    likedStoryIds: ['s101','s110','s111','s113','s124'],
    savedStoryIds: ['s103', 's101'],
    following: ['u105', 'u109', 'u102'],
    followers: ['u102', 'u108', 'u112'],
    posts: ['s111', 's101', 's124'],
    comments: [
      { storyId: 's101', commentId: 'c11011', txt: 'I love this angle.' },
      { storyId: 's113', commentId: 'c11012', txt: 'Feels so real.' }
    ]
  },
  {
    _id: 'u112',
    username: 'shira_lev',
    password: 'pass12',
    fullname: 'Shira Levi',
    bio: 'Frontend, music and dogs.',
    imgUrl: 'https://randomuser.me/api/portraits/women/42.jpg',
    likedStoryIds: ['s102','s113','s114','s117','s122','s125'],
    savedStoryIds: ['s112', 's119'],
    following: ['u107', 'u101', 'u109'],
    followers: ['u101', 'u111', 'u113'],
    posts: ['s112', 's113', 's117'],
    comments: [
      { storyId: 's101', commentId: 'c12011', txt: 'So good! 😍' },
      { storyId: 's112', commentId: 'c12012', txt: 'Gorgeous snap.' }
    ]
  },
  {
    _id: 'u113',
    username: 'nir_sh',
    password: 'pass13',
    fullname: 'Nir Shachar',
    bio: 'Fullstack for fun.',
    imgUrl: 'https://randomuser.me/api/portraits/men/43.jpg',
    likedStoryIds: ['s101','s115','s113','s121','s123','s125'],
    savedStoryIds: ['s112', 's111'],
    following: ['u105', 'u112', 'u114'],
    followers: ['u115', 'u114', 'u101'],
    posts: ['s113', 's115', 's123'],
    comments: [
      { storyId: 's114', commentId: 'c13011', txt: 'Where is that?' },
      { storyId: 's115', commentId: 'c13012', txt: 'Vibes for days.' }
    ]
  },
  {
    _id: 'u114',
    username: 'lea_n',
    password: 'pass14',
    fullname: 'Lea Navon',
    bio: 'Nature lover, React fan.',
    imgUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    likedStoryIds: ['s113','s114','s115','s120','s123','s124'],
    savedStoryIds: ['s113', 's118'],
    following: ['u113', 'u112', 'u115'],
    followers: ['u111', 'u101', 'u105'],
    posts: ['s114', 's115', 's120'],
    comments: [
      { storyId: 's115', commentId: 'c14011', txt: 'Magic in the air.' },
      { storyId: 's113', commentId: 'c14012', txt: 'Looks familiar!' }
    ]
  },
  {
    _id: 'u115',
    username: 'gal_r',
    password: 'pass15',
    fullname: 'Gal Rosen',
    bio: 'Travel, tech, tea.',
    imgUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    likedStoryIds: ['s101','s105','s115','s116','s122','s125'],
    savedStoryIds: ['s115', 's114'],
    following: ['u114', 'u112', 'u113'],
    followers: ['u114', 'u101', 'u113'],
    posts: ['s115', 's105', 's116'],
    comments: [
      { storyId: 's101', commentId: 'c15011', txt: 'What a place!' },
      { storyId: 's102', commentId: 'c15012', txt: 'Amazing details!' }
    ]
  }
]