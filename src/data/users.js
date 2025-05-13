export const Users = [
  {
    _id: 'u101',
    username: 'user1',
    password: 'pass1',
    fullname: 'User 1 Fullname',
    imgUrl: 'https://randomuser.me/api/portraits/women/31.jpg',
    likedStoryIds: ['s103', 's102'],
    savedStoryIds: [],
    following: [],
    followers: [],
    posts: ['s105'],
    comments: [
      {
        storyId: 's103',
        commentId: 'c1030',
        txt: 'User user1 commenting on story s103'
      }
    ]
  },
  {
    _id: 'u102',
    username: 'user2',
    password: 'pass2',
    fullname: 'User 2 Fullname',
    imgUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    likedStoryIds: ['s101', 's102', 's103', 's104'],
    savedStoryIds: [],
    following: [],
    followers: [],
    posts: ['s101'],
    comments: []
  },
  {
    _id: 'u103',
    username: 'user3',
    password: 'pass3',
    fullname: 'User 3 Fullname',
    imgUrl: 'https://randomuser.me/api/portraits/women/33.jpg',
    likedStoryIds: ['s102'],
    savedStoryIds: [],
    following: [],
    followers: [],
    posts: ['s102'],
    comments: []
  },
  {
    _id: 'u104',
    username: 'user4',
    password: 'pass4',
    fullname: 'User 4 Fullname',
    imgUrl: 'https://randomuser.me/api/portraits/men/34.jpg',
    likedStoryIds: ['s101', 's105'],
    savedStoryIds: [],
    following: [],
    followers: [],
    posts: ['s103'],
    comments: [
      {
        storyId: 's102',
        commentId: 'c1020',
        txt: 'User user4 commenting on story s102'
      },
      {
        storyId: 's104',
        commentId: 'c1040',
        txt: 'User user4 commenting on story s104'
      },
      {
        storyId: 's105',
        commentId: 'c1050',
        txt: 'User user4 commenting on story s105'
      }
    ]
  },
  {
    _id: 'u105',
    username: 'user5',
    password: 'pass5',
    fullname: 'User 5 Fullname',
    imgUrl: 'https://randomuser.me/api/portraits/women/35.jpg',
    likedStoryIds: ['s101'],
    savedStoryIds: [],
    following: [],
    followers: [],
    posts: ['s104'],
    comments: [
      {
        storyId: 's101',
        commentId: 'c1010',
        txt: 'User user5 commenting on story s101'
      }
    ]
  }
]
