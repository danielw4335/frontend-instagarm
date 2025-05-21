import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadChats, removeChat, getActionAddChat, getActionRemoveChat } from '../store/actions/chat.actions'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { socketService, SOCKET_EVENT_CHAT_ADDED, SOCKET_EVENT_CHAT_REMOVED } from '../services/socket.service'
import { ChatList } from '../cmps/ChatList'
import { ChatEdit } from '../cmps/ChatEdit'

export function ChatIndex() {
	const loggedInUser = useSelector(storeState => storeState.userModule.user)
	const chats = useSelector(storeState => storeState.chatModule.chats)

	const dispatch = useDispatch()

	useEffect(() => {
		loadChats()

		socketService.on(SOCKET_EVENT_CHAT_ADDED, chat => {
			console.log('GOT from socket', chat)
			dispatch(getActionAddChat(chat))
		})

		socketService.on(SOCKET_EVENT_CHAT_REMOVED, chatId => {
			console.log('GOT from socket', chatId)
			dispatch(getActionRemoveChat(chatId))
		})

		return () => {
            socketService.off(SOCKET_EVENT_CHAT_ADDED)
            socketService.off(SOCKET_EVENT_CHAT_REMOVED)
        }
	}, [])

	async function onRemoveChat(chatId) {
		try {
			await removeChat(chatId)
			showSuccessMsg('Chat removed')
		} catch (err) {
			showErrorMsg('Cannot remove')
		}
	}


	return <div className="chat-index">
        <h2>Chats and Gossip</h2>
        {loggedInUser && <ChatEdit/>}
        <ChatList 
            chats={chats} 
            onRemoveChat={onRemoveChat}/>
    </div>
}