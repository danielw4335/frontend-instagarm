export const Stories = [
  {
    _id: 's101',
    txt: 'This is story text number 1',
    imgUrl: 'https://picsum.photos/470/300?random=101',
    createdAt: 1707264000000,
    by: {
      _id: 'u102',
      fullname: 'User 2 Fullname',
      userName: 'user2',
      imgUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    comments: [
      {
        id: 'c1010',
        by: { _id: 'u105', fullname: 'User 5 Fullname' },
        txt: 'User user5 commenting on story s101'
      }
    ],
    likes: ['u102', 'u104', 'u101']
  },
  {
    _id: 's102',
    txt: 'This is story text number 2',
    imgUrl: 'https://picsum.photos/470/300?random=102',
    createdAt: 1738886400000,
    by: {
      _id: 'u103',
      fullname: 'User 3 Fullname',
      userName: 'user3',
      imgUrl: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    comments: [
      {
        id: 'c1020',
        by: { _id: 'u104', fullname: 'User 4 Fullname' },
        txt: 'User user4 commenting on story s102'
      }
    ],
    likes: ['u103', 'u102']
  },
  {
    _id: 's103',
    txt: 'This is story text number 3',
    imgUrl: 'https://picsum.photos/470/300?random=103',
    createdAt: 1715212800000,
    by: {
      _id: 'u104',
      fullname: 'User 4 Fullname',
      userName: 'user4',
      imgUrl: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    comments: [
      {
        id: 'c1030',
        by: { _id: 'u101', fullname: 'User 1 Fullname' },
        txt: 'User user1 commenting on story s103'
      }
    ],
    likes: ['u102', 'u101']
  },
  {
    _id: 's104',
    txt: 'This is story text number 4',
    imgUrl: 'https://picsum.photos/470/300?random=104',
    createdAt: 1735257600000,
    by: {
      _id: 'u105',
      fullname: 'User 5 Fullname',
      userName: 'user5',
      imgUrl: 'https://randomuser.me/api/portraits/women/35.jpg'
    },
    comments: [
      {
        id: 'c1040',
        by: { _id: 'u104', fullname: 'User 4 Fullname' },
        txt: 'User user4 commenting on story s104'
      }
    ],
    likes: ['u102']
  },
  {
    _id: 's105',
    txt: 'This is story text number 5',
    imgUrl: 'https://picsum.photos/470/300?random=105',
    createdAt: 1728259200000,
    by: {
      _id: 'u101',
      fullname: 'User 1 Fullname',
      userName: 'user1',
      imgUrl: 'https://randomuser.me/api/portraits/women/31.jpg'
    },
    comments: [
      {
        id: 'c1050',
        by: { _id: 'u104', fullname: 'User 4 Fullname' },
        txt: 'User user4 commenting on story s105'
      }
    ],
    likes: ['u104']
  }
]
