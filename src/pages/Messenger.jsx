
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function Messenger({ users, getChatWithUser }) {
    const loggedinUser = useSelector(storeState => storeState.userModule.loggedinUser)
    const chats = useSelector(storeState => storeState.chatModule.chats)

    // const [selectedUser, setSelectedUser] = useState(null)
    const [selectedChat, setSelectedChat] = useState(null)
    const [msgs, setMsgs] = useState([])
    const [msgInput, setMsgInput] = useState('')

    useEffect(() => {
        if (selectedChat) {
            setMsgs(selectedChat?.msgs || [])
        }
    }, [selectedChat])


    function handleChatClick(chat) {
        setSelectedChat(chat)
        setMsgs(chat?.msgs || [])
    }

    // function handleUserClick(user) {
    //     const chat = getChatById(user._id)
    //     setSelectedUser(user)
    //     setMsgs(chat?.msgs || [])
    // }

    function handleSendMsg() {
        if (!msgInput.trim()) return
        const newMsg = {
            //? id:
            txt: msgInput,
            createdAt: new Date().toISOString(),
            by: {
                id: loggedinUser._id,
                fullname: loggedinUser.fullname,
                username: loggedinUser.username,
                imgUrl: loggedinUser.imgUrl,
            }
        }
        setMsgs(prevMsgs => [...prevMsgs, newMsg])
        setMsgInput('')
    }

    return (
        <div >
            {/* <div>
                    {users.map(user => (
                        <div key={user._id} onClick={() => handleUserClick(user)}>
                            <p>{user.fullname}</p>
                        </div>
                    ))}
                </div> */}
            <section className='chat-list'>
                <div>
                    {chats.map(chat => (
                        <div key={chat._id} onClick={() => handleChatClick(chat)}>
                            <p>{chat.to.fullname}</p>
                            <img src={chat.to.imgUrl} />
                        </div>
                    ))}
                </div>
            </section>

            <div>
                {selectedChat ? (
                    <section className="chat-details">
                        <div>
                            <img src={selectedChat.to.imgUrl} />
                        </div>

                        <div>
                            <h4>{selectedChat.to.fullname}</h4>
                            <p>{selectedChat.to.username}</p>
                        </div>

                        <div>
                            {msgs.map(msg => (
                                <div key={msg.id}>
                                    <strong>{msg.by.fullname}: </strong>
                                    <span>{msg.txt}</span>
                                    <p> ({new Date(msg.createdAt).toLocaleString()})</p>
                                </div>
                            ))}
                        </div>

                        <footer className='chat-edit'>
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
        </div>
    )
}
