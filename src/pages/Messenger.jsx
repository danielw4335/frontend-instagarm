
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addChat, addMsg, loadChats } from '../store/actions/chat.actions'
import { UserSelectModal } from '../cmps/UserSelectModal'
import { NavLink } from 'react-router-dom'

export function Messenger() {
    const users = useSelector(storeState => storeState.userModule.users)
    const loggedInUser = useSelector(storeState => storeState.userModule.loggedInUser)
    const chats = useSelector(storeState => storeState.chatModule.chats)
    console.log(' Messenger chats:', chats)
    const [selectedChatId, setSelectedChatId] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    const [otherUser, setOtherUser] = useState(null)
    const [msgInput, setMsgInput] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        onLoad()
    }, [])

    async function onLoad() {

        await loadChats(loggedInUser._id)
    }


    function handleUserSelect(user) {
        setSelectedUser(user)
        setIsOpen(false)
    }

    function handleChatClick(chat, user) {
        setSelectedChatId(chat._id)
        setOtherUser(user)
        setSelectedUser(null)
    }

    function getOtherUser(chat, myId) {
        if (chat) {
            const otherUserId = chat.users.find(u => u !== myId)
            return users.find(u => u._id === otherUserId)
        }
    }

    function handleChange({ target }) {
        setMsgInput(target.value)
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
    if (!chats || !loggedInUser) return <div>not found</div>
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
                        const otherUser = getOtherUser(chat, loggedInUser._id)
                        return (
                            otherUser ? (
                                <div className='chat-preview' key={chat._id} onClick={() => handleChatClick(chat, otherUser)}>
                                    <img src={otherUser.imgUrl} />
                                    <p>{otherUser.fullname}</p>
                                </div>
                            ) : <div key={chat._id}>No user found</div>
                        )
                    }) : <p>No chats available</p>}
                </div>
            </section>

            {selectedChat ? (
                <section className="chat-details">
                    <div className='chat-header'>

                        <>
                              <NavLink to={`/u/${otherUser?._id}`}>
                            <div>
                                <img src={otherUser.imgUrl} />
                            </div>
                            <div>
                                <h4>{otherUser.fullname}</h4>
                                <p>{otherUser.username}</p>
                            </div>
                              </NavLink>
                        </>

                    </div>
                    <section className='messages-area'>
                        {selectedChat.msgs.map(msg => {
                            let me = (msg.by._id === loggedInUser._id)
                            return (
                                <div key={msg.id} className={me ? 'sent' : 'received'}>
                                    <p>
                                        {

                                            new Date().toLocaleString('en-US', {
                                                month: 'numeric',
                                                day: 'numeric',
                                                year: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true
                                            })}

                                        {/* function _fomatTime(time) {
       let gormatTime = time.toLocaleString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })
        console.log('time:', gormatTime);
    } */}
                                    </p>
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