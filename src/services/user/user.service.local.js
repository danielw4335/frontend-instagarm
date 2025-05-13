import { storageService } from '../async-storage.service'
import { Users } from '../../data/users'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY = 'user'

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

window.cs = userService

async function getUsers() {
    let users = await storageService.query(STORAGE_KEY)
    if (!users || !users.length) {
        users = await createUsers()
    }
    return users.map(user => {
        delete user.password
        return user
    })
}

async function getById(userId) {
    return await storageService.get(STORAGE_KEY, userId)
}

function remove(userId) {
    return storageService.remove(STORAGE_KEY, userId)
}

async function update(userToUpdate) {
    const user = await storageService.get(STORAGE_KEY, userToUpdate._id)
    const updatedUser = { ...user, ...userToUpdate }
    await storageService.put(STORAGE_KEY, updatedUser)

    const loggedinUser = getLoggedinUser()
    if (loggedinUser && loggedinUser._id === updatedUser._id) {
        saveLoggedinUser(updatedUser)
    }

    return updatedUser
}

async function login(userCred) {
    const users = await storageService.query(STORAGE_KEY)
    const user = users.find(user => user.username === userCred.username)

    if (user) {
        return saveLoggedinUser(user)
    }
}

async function signup(userCred) {
    if (!userCred.imgUrl) {
        userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    }

    const user = await storageService.post(STORAGE_KEY, userCred)
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

    storageService.post(STORAGE_KEY, demoUser)
    saveLoggedinUser(demoUser)
}

async function createUsers() {
    const defaultUsers = [...Users]
    const savedUsers = []

    for (const user of defaultUsers) {
        const savedUser = await storageService.post(STORAGE_KEY, user)
        savedUsers.push(savedUser)
    }

    return savedUsers
}


// async function createUsers() {
//     const defaultUsers = [...Users]
//     for (const user of defaultUsers) {
//         await storageService.post(STORAGE_KEY, user)
//     }
//     return defaultUsers
// }
