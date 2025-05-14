export const Users = [
  {
    _id: 'u101',
    username: 'daniel_w',
    password: 'pass1',
    fullname: 'Daniel',
    imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg',
    likedStoryIds: ['s101', 's102', 's104'],
    savedStoryIds: ['s102'],
    following: ['u108', 'u102', 'u103'],
    followers: ['u108', 'u1010', 'u103'],
    posts: ['s101'],
    comments: [
      {
        storyId: 's103',
        commentId: 'c10',
        txt: 'Love this vibe Love this vibe Love this vibe Love this vibe Love this vibe Love this vibe'
      },
      {
        storyId: 's101',
        commentId: 'c11',
        txt: 'Absolutely stunning Absolutely stunning vibe Love this vibe Love this vibe'
      }
    ]
  },
  {
    _id: 'u102',
    username: 'noa_b',
    password: 'pass2',
    fullname: 'Noa',
    imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
    likedStoryIds: ['s102', 's105'],
    savedStoryIds: [],
    following: ['u106', 'u107', 'u101'],
    followers: ['u1010', 'u109', 'u103'],
    posts: ['s102'],
    comments: [
      {
        storyId: 's101',
        commentId: 'c20',
        txt: 'Absolutely stunning Absolutely stunning vibe Love this vibe Love this vibe!'
      }
    ]
  },
  {
    _id: 'u103',
    username: 'eli.cohen',
    password: 'pass3',
    fullname: 'Eli',
    imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg',
    likedStoryIds: ['s104', 's105', 's102'],
    savedStoryIds: ['s103'],
    following: ['u105', 'u106', 'u107'],
    followers: ['u106', 'u104', 'u105'],
    posts: ['s103'],
    comments: [
      {
        storyId: 's103',
        commentId: 'c30',
        txt: 'Where is this?'
      },
      {
        storyId: 's104',
        commentId: 'c31',
        txt: 'Absolutely stunning Absolutely stunning vibe Love this vibe Love this vibe!'
      }
    ]
  },
  {
    _id: 'u104',
    username: 'yael_k',
    password: 'pass4',
    fullname: 'Yael',
    imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg',
    likedStoryIds: ['s104'],
    savedStoryIds: ['s103'],
    following: ['u102', 'u105', 'u108'],
    followers: ['u102', 'u109', 'u103'],
    posts: ['s104'],
    comments: [
      {
        storyId: 's102',
        commentId: 'c40',
        txt: 'Absolutely stunning Absolutely stunning vibe Love this vibe Love this vibe'
      }
    ]
  },
  {
    _id: 'u105',
    username: 'amit.aviv',
    password: 'pass5',
    fullname: 'Amit',
    imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
    likedStoryIds: ['s103'],
    savedStoryIds: ['s102'],
    following: ['u102', 'u109', 'u108'],
    followers: ['u108', 'u107', 'u104'],
    posts: ['s105'],
    comments: [
      {
        storyId: 's102',
        commentId: 'c50',
        txt: 'Absolutely stunning Absolutely stunning vibe Love this vibe Love this vibe'
      },
      {
        storyId: 's101',
        commentId: 'c51',
        txt: 'Amazing shot fposdjvoi isjdvi uihiu ihjiuohoiu j  iuhiuohiu ouuoihuihiu h iyuhuih!'
      }
    ]
  },
]
