import { makeLorem } from "../services/util.service"

function getRandomTimestamp() {
  const start = new Date('2024-01-01').getTime()
  const end = new Date('2025-12-31').getTime()
  return Math.floor(Math.random() * (end - start)) + start
}

export const Stories = [
  {
    _id: "s101",
    txt: makeLorem(20),
    imgUrl: "https://picsum.photos/470/300?random=101",
    createdAt: getRandomTimestamp(),
    by: {
      _id: "u101",
      fullname: "Alice Green",
      userName: "alice.green",
      imgUrl: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    comments: [
      {
        id: "c101",
        by: { _id: "u201", fullname: "John Doe" },
        txt: "Really love the atmosphere here"
      },
      {
        id: "c102",
        by: { _id: "u202", fullname: "Jane Roe" },
        txt: "Where was this taken?"
      }
    ],
    likes: ["u201", "u202"]
  },
  {
    _id: "s102",
    txt: makeLorem(25),
    imgUrl: "https://picsum.photos/470/300?random=102",
    createdAt: getRandomTimestamp(),
    by: {
      _id: "u102",
      fullname: "Bob Smith",
      userName: "bob.smith",
      imgUrl: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    comments: [
      {
        id: "c103",
        by: { _id: "u203", fullname: "Daniel Wolf" },
        txt: "Great picture!"
      }
    ],
    likes: ["u203"]
  },
  {
    _id: "s103",
    txt: makeLorem(30),
    imgUrl: "https://picsum.photos/470/300?random=103",
    createdAt: getRandomTimestamp(),
    by: {
      _id: "u103",
      fullname: "Clara White",
      userName: "clara.white",
      imgUrl: "https://randomuser.me/api/portraits/women/30.jpg"
    },
    comments: [],
    likes: []
  },
  {
    _id: "s104",
    txt: makeLorem(22),
    imgUrl: "https://picsum.photos/470/300?random=104",
    createdAt: getRandomTimestamp(),
    by: {
      _id: "u104",
      fullname: "David Kim",
      userName: "david.kim",
      imgUrl: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    comments: [
      {
        id: "c104",
        by: { _id: "u202", fullname: "Jane Roe" },
        txt: "That sky looks unreal"
      }
    ],
    likes: ["u202", "u204"]
  },
  {
    _id: "s105",
    txt: makeLorem(18),
    imgUrl: "https://picsum.photos/470/300?random=105",
    createdAt: getRandomTimestamp(),
    by: {
      _id: "u105",
      fullname: "Ella Brown",
      userName: "ella.brown",
      imgUrl: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    comments: [
      {
        id: "c105",
        by: { _id: "u204", fullname: "Muki Muka" },
        txt: "Nice capture"
      }
    ],
    likes: ["u204"]
  }
]
