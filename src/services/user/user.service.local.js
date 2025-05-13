import { storageService } from '../async-storage.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
  login,
  logout,
  signup,
  getUsers,
  getById,
  remove,
  update,
  getLoggedinUser,
  saveLoggedinUser,
}

async function getUsers() {
  const users = await storageService.query('user')
  return users.map(user => {
    delete user.password
    return user
  })
}

async function getById(userId) {
  return await storageService.get('user', userId)
}

function remove(userId) {
  return storageService.remove('user', userId)
}

async function update(userToUpdate) {
  const user = await storageService.get('user', userToUpdate._id)
  const updatedUser = { ...user, ...userToUpdate }
  await storageService.put('user', updatedUser)

  const loggedinUser = getLoggedinUser()
  if (loggedinUser && loggedinUser._id === updatedUser._id) {
    saveLoggedinUser(updatedUser)
  }

  return updatedUser
}

async function login(userCred) {
  const users = await storageService.query('user')
  const user = users.find(user => user.username === userCred.username)

  if (user) {
    return saveLoggedinUser(user)
  }
}

async function signup(userCred) {
  if (!userCred.imgUrl) {
    userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
  }

  const user = await storageService.post('user', userCred)
  return saveLoggedinUser(user)
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function saveLoggedinUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}

if (!getLoggedinUser()) {
  const demoUser = {
    _id: 'u101',
    username: 'demo',
    password: 'demo',
    fullname: 'Demo User',
    imgUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
    likedStoryIds: [],
    savedStoryIds: [],
    following: [],
    followers: []
  }

  storageService.post('user', demoUser)
  saveLoggedinUser(demoUser)
}