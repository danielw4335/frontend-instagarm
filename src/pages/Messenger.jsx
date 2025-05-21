
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addChat, addMsg, loadChats } from '../store/actions/chat.actions'
import { UserSelectModal } from '../cmps/UserSelectModal'

export function Messenger() {
    const users = useSelector(storeState => storeState.userModule.users)
    const loggedInUser = useSelector(storeState => storeState.userModule.loggedInUser)
    const chats = useSelector(storeState => storeState.chatModule.chats)
    const [selectedChatId, setSelectedChatId] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    const [msgInput, setMsgInput] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (loggedInUser?._id) loadChats(loggedInUser._id)
    }, [loggedInUser])

    function handleUserSelect(user) {
        setSelectedUser(user)
        setIsOpen(false)
    }

    function handleChatClick(chat) {
        setSelectedChatId(chat._id)
        setSelectedUser(null)
    }

    function getOtherUser(chat, myId) {
        return chat.users.find(u => u._id !== myId)
    }

    async function handleSendMsg() {
        if (!msgInput.trim()) return

        let chatId = selectedChatId
        let chat = chats.find(chat => chat._id === chatId)

        if (!chatId && selectedUser) {
            chat = await addChat({
                userIds: [loggedInUser._id, selectedUser._id]
            })
            chatId = chat._id
            console.log(' handleSendMsg chat:', chat)
            console.log(' handleSendMsg chatId:', chatId)
            setSelectedChatId(chatId)
            setSelectedUser(null)
        }

        const newMsg = {
            txt: msgInput,
            by: {
                _id: loggedInUser._id,
                fullname: loggedInUser.fullname,
                imgUrl: loggedInUser.imgUrl
            },
            createdAt: Date.now()
        }

        await addMsg({ chatId, msg: newMsg })
        setMsgInput('')
    }

    const selectedChat = chats.find(chat => chat._id === selectedChatId)
    if (!loggedInUser) return null
    return (
        <div>
            <section className='chat-list'>
                <div className='chat-header'>
                    <button onClick={() => setIsOpen(true)}>Add</button>
                    <UserSelectModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        users={users}
                        onSelect={handleUserSelect}
                    />
                </div>
                {chats.map(chat => {
                    const otherUser = getOtherUser(chat, loggedInUser._id)
                    return (
                        <div key={chat._id} onClick={() => handleChatClick(chat)}>
                            <p>{otherUser.fullname}</p>
                            <img src={otherUser.imgUrl} />
                        </div>
                    )
                })}
            </section>

            {selectedChat ? (
                <section className="chat-details">
                    <div className='chat-header'>
                        {(() => {
                            const otherUser = getOtherUser(selectedChat, loggedInUser._id)
                            console.log(' Messenger selectedChat:', selectedChat)
                            return (
                                <>
                                    <div>
                                        <img src={otherUser.imgUrl} />
                                    </div>
                                    <div>
                                        <h4>{otherUser.fullname}</h4>
                                        <p>{otherUser.username}</p>
                                    </div>
                                </>
                            )
                        })()}
                    </div>
                    {selectedChat.msgs.map(msg => {
                        let me = (msg.by._id === loggedInUser._id)
                        return (
                            <div key={msg.id} className={me ? 'sent' : 'received'}>
                                <img src={msg.by.imgUrl} alt={msg.by.fullname} />
                                <p>{msg.txt}</p>
                            </div>
                        )
                    })}
                    <footer className='chat-footer'>
                        <div>
                            <input
                                type="text"
                                value={msgInput}
                                onChange={(e) => setMsgInput(e.target.value)}
                                placeholder="Message..."
                            />
                            <button onClick={handleSendMsg}>Send</button>
                        </div>
                    </footer>
                </section>
            ) : selectedUser ? (
                <section className="chat-details">
                    <div className='chat-header'>
                        <img src={selectedUser.imgUrl} />
                        <div>
                            <h4>{selectedUser.fullname}</h4>
                            <p>{selectedUser.username}</p>
                        </div>
                    </div>
                    <footer className='chat-footer'>
                        <div>
                            <input
                                type="text"
                                value={msgInput}
                                onChange={(e) => setMsgInput(e.target.value)}
                                placeholder="Message..."
                            />
                            <button onClick={handleSendMsg}>Send</button>
                        </div>
                    </footer>
                </section>
            ) : (
                <>
                    <h2>Your messages</h2>
                    <h4>Send a message to start a chat</h4>
                </>
            )}
        </div>
    )
}