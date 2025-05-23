import { userService } from '../../services/user'
import { socketService } from '../../services/socket.service'
import { store } from '../store'

import { showErrorMsg } from '../../services/event-bus.service'
import { LOADING_DONE, LOADING_START } from '../reducers/system.reducer'
import {
	REMOVE_USER,
	SET_LOGGEDIN_USER,
	SET_USER,
	SET_USERS,
	UPDATE_USER,
} from '../reducers/user.reducer'
import { SET_IS_LOADING } from '../reducers/story.reducer'

export async function loadUsers() {
	try {
		store.dispatch({ type: SET_IS_LOADING, isLoading: true })
		store.dispatch({ type: LOADING_START })
		const users = await userService.getUsers()
		console.log('Actions loadUsers users:', users)
		store.dispatch({ type: SET_USERS, users })
	} catch (err) {
		console.log('UserActions: err in loadUsers', err)
	} finally {
		store.dispatch({ type: LOADING_DONE })
		store.dispatch({ type: SET_IS_LOADING, isLoading: false })
	}
}

export async function loadUser(userId) {
	try {
		store.dispatch({ type: SET_IS_LOADING, isLoading: true })
		const user = await userService.getById(userId)
		store.dispatch({ type: SET_USER, user })
		return user
	} catch (err) {
		showErrorMsg('Cannot load user')
		console.log('Cannot load user', err)
	}
	finally {
		store.dispatch({ type: LOADING_DONE })
		store.dispatch({ type: SET_IS_LOADING, isLoading: false })
	}
}

export async function removeUser(userId) {
	try {
		await userService.remove(userId)
		store.dispatch({ type: REMOVE_USER, userId })
	} catch (err) {
		console.log('UserActions: err in removeUser', err)
	}
}

export async function updateUser(userToUpdate) {
	try {
		const user = await userService.update(userToUpdate)
		store.dispatch({ type: UPDATE_USER, user })
		return user
	} catch (err) {
		showErrorMsg('Cannot update user')
		console.log('Cannot update user', err)
		throw err
	}
}

export async function login(credentials) {
	try {
		const user = await userService.login(credentials)
		store.dispatch({ type: SET_LOGGEDIN_USER, user })
		socketService.login(user._id)	 
		return user
	} catch (err) {
		console.log('Cannot login', err)
		throw err
	}
}

export async function signup(credentials) {
	try {
		const user = await userService.signup(credentials)
		store.dispatch({ type: SET_LOGGEDIN_USER, user })
		socketService.login(user._id)
		return user
	} catch (err) {
		console.log('Cannot signup', err)
		throw err
	}
}

export async function logout() {
	try {
		await userService.logout()
		store.dispatch({ type: SET_LOGGEDIN_USER, user: null })
		socketService.logout()
	} catch (err) {
		console.log('Cannot logout', err)
		throw err
	}
}
