import { chatService } from '../../services/chat'
import { store } from '../store'
import { ADD_CHAT, UPDATE_CHAT, REMOVE_CHAT, SET_CHATS } from '../reducers/chat.reducer'


export async function loadChats(userId) {
	try {
		const chats = await chatService.query(userId)
		store.dispatch({ type: SET_CHATS, chats })
	} catch (err) {
		console.log('ChatActions: err in loadChats', err)
		throw err
	}
}

export async function addChat(chat) {
	try {
		const addedChat = await chatService.createChat(chat)
		store.dispatch({ type: ADD_CHAT, chat: addedChat })
		return addedChat
	} catch (err) {
		console.log('ChatActions: err in addChat', err)
		throw err
	}
}

export async function addMsg({ chatId, msg }) {
    try {
        const updatedChat = await chatService.addMsg({ chatId, msg })
        store.dispatch({ type: UPDATE_CHAT, chat: updatedChat })
    } catch (err) {
        console.log('ChatActions: err in addMsg', err)
        throw err
    }
}

export async function removeChat(chatId) {
	try {
		await chatService.remove(chatId)
		store.dispatch({ type: REMOVE_CHAT, chatId })
	} catch (err) {
		console.log('ChatActions: err in removeChat', err)
		throw err
	}
}

