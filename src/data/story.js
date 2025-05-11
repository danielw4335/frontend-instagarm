import { makeLorem } from "../services/util.service";

export const Stories = [
  {
    _id: "s101",
    txt: makeLorem(20),
    imgUrl: "https://picsum.photos/470/300?random=101",
    createdAt: 1746720236,
    by: {
      _id: "u101",
      fullname: "Alice Green",
      userName: "alice.green",
      imgUrl: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    comments: [
      {
        id: "c101",
        by: {
          _id: "u201",
          fullname: "John Doe"
        }
      }
    ]
  },
  {
    _id: "s102",
    txt: makeLorem(30),
    imgUrl: "https://picsum.photos/470/300?random=102",
    createdAt: 1746979436,
    by: {
      _id: "u102",
      fullname: "Bob Smith",
      userName: "bob.smith",
      imgUrl: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    comments: [
      {
        id: "c102",
        by: {
          _id: "u202",
          fullname: "Jane Roe"
        }
      }
    ]
  }
]
