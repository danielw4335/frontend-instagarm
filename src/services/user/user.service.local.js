import { storageService } from '../async-storage.service'
import { Users } from '../../data/users'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY = 'users'

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
    let users = await storageService.query(STORAGE_KEY)
    const isCorrupted = !Array.isArray(users) || users.some(u => !u._id || !u.username)
    if (!users || !users.length || isCorrupted) {
        localStorage.removeItem(STORAGE_KEY)
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
    if (!user) return null
    if (user.password !== userCred.password) return null
    if (!user.likedStoryIds) user.likedStoryIds = []
    if (!user.savedStoryIds) user.savedStoryIds = []
    return saveLoggedinUser(user)
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
    localStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function getLoggedinUser() {
    const userStr = sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) ||
        localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)
    return userStr ? JSON.parse(userStr) : null
}

function saveLoggedinUser(user) {
    const userStr = JSON.stringify(user)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, userStr)
    // localStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, userStr)
    return user
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

// initUsersAndLoginFirst()
// async function initUsersAndLoginFirst() {
//     let users
//     try {
//         users = await storageService.query(STORAGE_KEY)
//     } catch {
//         users = null
//     }
//     if (!users || !users.length) {
//         for (const user of Users) {
//             await storageService.post(STORAGE_KEY, user)
//         }
//         users = await storageService.query(STORAGE_KEY)
//     }
//     if (!getLoggedinUser() && users && users.length) {
//         saveLoggedinUser(users[0])
//     }
// }
