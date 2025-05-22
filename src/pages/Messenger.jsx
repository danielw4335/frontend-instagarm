import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addChat, addMsg, loadChats } from '../store/actions/chat.actions'
import { UserSelectModal } from '../cmps/UserSelectModal'
import { NavLink } from 'react-router-dom'
import { loadUsers } from '../store/actions/user.actions'

export function Messenger() {
    const users = useSelector(storeState => storeState.userModule.users)
    const loggedInUser = useSelector(storeState => storeState.userModule.loggedInUser)
    const chats = useSelector(storeState => storeState.chatModule.chats)
    const [selectedChatId, setSelectedChatId] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    const [msgInput, setMsgInput] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [isCreatingChat, setIsCreatingChat] = useState(false)

    useEffect(() => {
        if (loggedInUser && loggedInUser._id) loadChats(loggedInUser._id)
        if (!users || !users.length) loadUsers()
    }, [loggedInUser])

    function handleUserSelect(user) {
        setSelectedUser(user)
        setIsOpen(false)
        setSelectedChatId(null)
    }

    function handleChatClick(chat) {
        setSelectedChatId(chat._id)
        setSelectedUser(null)
    }

    function getOtherUser(chat) {
        if (!chat) return null
        const otherUserId = chat.users.find(u => u !== loggedInUser._id)
        return users.find(u => u._id === otherUserId)
    }

    function handleChange({ target }) {
        setMsgInput(target.value)
    }

    async function handleSendMsg() {
        if (!msgInput.trim()) return

        let chatId = selectedChatId
        let chat = chats.find(chat => chat._id === chatId)

        if (!chatId && selectedUser) {
            setIsCreatingChat(true)
            chat = await addChat({
                userIds: [loggedInUser._id, selectedUser._id]
            })
            chatId = chat._id
            setSelectedChatId(chatId)
        }

        const newMsg = {
            txt: msgInput,
            by: {
                _id: loggedInUser._id,
                fullname: loggedInUser.fullname,
                imgUrl: loggedInUser.imgUrl
            },
            createdAt: new Date(),
            id: Date.now().toString() + Math.random().toString(36).substr(2, 6)
        }

        await addMsg({ chatId, msg: newMsg })
        setMsgInput('')
    }

    useEffect(() => {
        if (isCreatingChat && selectedChatId) {
            const chatExists = chats.some(chat => chat._id === selectedChatId)
            if (chatExists) {
                setIsCreatingChat(false)
                setSelectedUser(null)
            }
        }
    }, [chats, selectedChatId, isCreatingChat])

    function _formatTime(time) {
        return new Date(time).toLocaleString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })
    }

    if (!chats || !loggedInUser || !users) return <div>Loading...</div>

    const selectedChat = chats.find(chat => chat._id === selectedChatId)
    const otherUser = selectedChat ? getOtherUser(selectedChat) : null

    return (
        <main className="messenger-container">
            <section className='chat-index'>
                <div className='chat-header'>
                    <h1>{loggedInUser.username}</h1>
                    <button className='clear-button' onClick={() => setIsOpen(true)}>Add</button>
                    <UserSelectModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        users={users}
                        onSelect={handleUserSelect}
                    />
                </div>
                <div className='chat-list'>
                    <div className='chat-list-header'>
                        <span>Messages</span>
                    </div>
                    {chats ? chats.map(chat => {
                        let otherUser = getOtherUser(chat)
                        return (
                            otherUser ? (
                                <div className='chat-preview' key={chat._id} onClick={() => handleChatClick(chat)}>
                                    <img src={otherUser?.imgUrl} />
                                    <p>{otherUser?.fullname}</p>
                                </div>
                            ) : <div key={chat._id + '-nouser'}></div>
                        )
                    }) : <p>No chats available</p>}
                </div>
            </section>

            {(isCreatingChat && !selectedChat) ? (
                <div className="chat-details loading">
                    <h2>Creating chat...</h2>
                </div>
            ) : selectedChat ? (
                <section className="chat-details">
                    <div className='chat-header'>
                        <NavLink to={`/u/${otherUser?._id}`}>
                            <div>
                                <img src={otherUser?.imgUrl} />
                            </div>
                            <div>
                                <h4>{otherUser?.fullname}</h4>
                                <p>{otherUser?.username}</p>
                            </div>
                        </NavLink>
                    </div>
                    <section className='messages-area'>
                        {selectedChat.msgs.map((msg, idx) => {
                            let me = (msg.by._id === loggedInUser._id)
                            return (
                                <div key={msg.id} className={me ? 'sent' : 'received'}>
                                        <span className='timestamp'>{_formatTime(msg.createdAt)}</span>
                                    {!me && <img src={msg.by.imgUrl} alt={msg.by.fullname} />}
                                    <p>{msg.txt}</p>
                                </div>
                            )
                        })}
                    </section>
                    <footer className='chat-footer'>
                        <div>
                            <input
                                type="text"
                                value={msgInput}
                                onChange={handleChange}
                                placeholder="Message..."
                            />
                            <button onClick={handleSendMsg}>Send</button>
                        </div>
                    </footer>
                </section>
            ) : selectedUser ? (
                <section className="chat-details">
                    <h2>selectedUser</h2>
                    <div className='chat-header'>
                        <img src={selectedUser.imgUrl} />
                        <div>
                            <h4>{selectedUser.fullname}</h4>
                        </div>
                    </div>
                    <footer className='chat-footer'>
                        <div>
                            <input
                                type="text"
                                value={msgInput}
                                onChange={handleChange}
                                placeholder="Message..."
                            />
                            <button onClick={handleSendMsg}>Send</button>
                        </div>
                    </footer>
                </section>
            ) : (
                <div className="empty-details">
                    <img src="/img/messenger.png" alt="" />
                    <h2>Your messages</h2>
                    <h4>Send a message to start a chat</h4>
                </div>
            )}
        </main>
    )
}
