export const Stories = [
  {
    _id: 's101',
    txt: 'Photo 1 from our last adventure our last adventure our last adventure our  last adventure our last adventure our last adventure our last adventure  last adventure our last adventure our last adventure our last adventure last adventure our  last adventure!',
    imgUrl: 'https://picsum.photos/470/300?random=101',
    createdAt: 1700100000000,
    by: {
      _id: 'u101',
      username: 'daniel_w',
      fullname: 'Daniel',
      imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg'
    },
    comments: [
      {
        id: 'c10',
        by: {
          _id: 'u1010',
          username: 'lior.photo',
          fullname: 'Lior',
          imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg'
        },
        txt: 'Love this!'
      },
      {
        id: 'c11',
        by: {
          _id: 'u105',
          username: 'amit.aviv',
          fullname: 'Amit',
          imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg'
        },
        txt: 'Wow 😍'
      }
    ],
    likes: ['u105', 'u107', 'u109', 'u103', 'u104', 'u108']
  },
  {
    _id: 's102',
    txt: 'Photo 2 from our last adventure our last adventure our last adventure our  last adventure our last adventure our last adventure our last adventure  last adventure our last adventure our last adventure our last adventure last adventure our  last adventure!',
    imgUrl: 'https://picsum.photos/470/300?random=102',
    createdAt: 1700200000000,
   by: {
      _id: 'u101',
      username: 'daniel_w',
      fullname: 'Daniel',
      imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg'
    },
    comments: [
      {
        id: 'c20',
        by: {
          _id: 'u109',
          username: 'tomer.build',
          fullname: 'Tomer',
          imgUrl: 'https://randomuser.me/api/portraits/men/39.jpg'
        },
        txt: 'So peaceful!'
      },
      {
        id: 'c21',
        by: {
          _id: 'u102',
          username: 'noa_b',
          fullname: 'Noa',
          imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg'
        },
        txt: 'Love this!'
      }
    ],
    likes: ['u1010', 'u107', 'u102', 'u105', 'u101', 'u109']
  },
  {
    _id: 's103',
    txt: 'Photo 3 from our last adventure our last adventure our last adventure our  last adventure our last adventure our last adventure our last adventure  last adventure our last adventure our last adventure our last adventure last adventure our  last adventure!',
    imgUrl: 'https://picsum.photos/470/300?random=103',
    createdAt: 1700300000000,
    by: {
      _id: 'u103',
      username: 'eli.cohen',
      fullname: 'Eli',
      imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg'
    },
    comments: [
      {
        id: 'c30',
        by: {
          _id: 'u102',
          username: 'noa_b',
          fullname: 'Noa',
          imgUrl: 'https://randomuser.me/api/portraits/women/32.jpg'
        },
        txt: 'Amazing shot!'
      }
    ],
    likes: ['u109', 'u105', 'u102']
  },
  {
    _id: 's104',
    txt: 'Photo 4 from our last adventure our last adventure our last adventure our  last adventure our last adventure our last adventure our last adventure  last adventure our last adventure our last adventure our last adventure last adventure our  last adventure!',
    imgUrl: 'https://picsum.photos/470/300?random=104',
    createdAt: 1700400000000,
    by: {
      _id: 'u104',
      username: 'yael_k',
      fullname: 'Yael',
      imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg'
    },
    comments: [
      {
        id: 'c40',
        by: {
          _id: 'u104',
          username: 'yael_k',
          fullname: 'Yael',
          imgUrl: 'https://randomuser.me/api/portraits/women/34.jpg'
        },
        txt: 'So peaceful!'
      }
    ],
    likes: ['u109', 'u106', 'u108', 'u1010']
  },
  {
    _id: 's105',
    txt: 'Photo 5 from our last adventure our last adventure our last adventure our  last adventure our last adventure our last adventure our last adventure  last adventure our last adventure our last adventure our last adventure last adventure our  last adventure!',
    imgUrl: 'https://picsum.photos/470/300?random=105',
    createdAt: 1700500000000,
    by: {
      _id: 'u105',
      username: 'amit.aviv',
      fullname: 'Amit',
      imgUrl: 'https://randomuser.me/api/portraits/men/35.jpg'
    },
    comments: [
      {
        id: 'c50',
        by: {
          _id: 'u103',
          username: 'eli.cohen',
          fullname: 'Eli',
          imgUrl: 'https://randomuser.me/api/portraits/men/33.jpg'
        },
        txt: 'Absolutely stunning'
      }
    ],
    likes: ['u104', 'u108', 'u103', 'u105', 'u102']
  }
]
