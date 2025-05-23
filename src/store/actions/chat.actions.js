import { chatService } from '../../services/chat'
import { store } from '../store'
import { ADD_CHAT, UPDATE_CHAT, REMOVE_CHAT, SET_CHATS } from '../reducers/chat.reducer'
import { SOCKET_EMIT_SEND_MSG, socketService } from '../../services/socket.service.js'

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
        const chats = store.getState().chatModule.chats
        const chat = chats.find(chat => chat._id === chatId)

        if (chat) {
            const optimisticChat = { ...chat }
            if (!optimisticChat.msgs) optimisticChat.msgs = []
            optimisticChat.msgs.push(msg)
            store.dispatch({ type: UPDATE_CHAT, chat: optimisticChat })
        }
        const updatedChat = await chatService.addMsg({ chatId, msg })

        socketService.emit(SOCKET_EMIT_SEND_MSG, msg )

        if (JSON.stringify(updatedChat) !== JSON.stringify(chat)) {
            store.dispatch({ type: UPDATE_CHAT, chat: updatedChat })
        }

        return updatedChat
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


export function addMsgThunk({ chatId, msg }) {
    return async (dispatch) => {
        try {
            const updatedChat = await chatService.addMsg({ chatId, msg })
            dispatch({ type: UPDATE_CHAT, chat: updatedChat })
            return updatedChat
        } catch (err) {
            console.log('ChatActions: err in addMsgThunk', err)
            throw err
        }
    }
}

export function removeChatThunk(chatId) {
    return async (dispatch) => {
        try {
            await chatService.remove(chatId)
            dispatch({ type: REMOVE_CHAT, chatId })
        } catch (err) {
            console.log('ChatActions: err in removeChatThunk', err)
            throw err
        }
    }
}

