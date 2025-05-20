import { userService } from '../services/user/index.js'

import { ChatPreview } from './ChatPreview.jsx'

export function ChatList({ chats, onRemoveChat }) {
    
    function shouldShowActionBtns(chat) {
        const user = userService.getLoggedinUser()
        
        if (!user) return false
        if (user.isAdmin) return true
        return chat.byUser?._id === user._id
    }

    return <section>
        <ul className="list chat-list">
            {chats.map(chat =>
                <li key={chat._id}>
                    <ChatPreview chat={chat}/>
                    {shouldShowActionBtns(chat) && <div className="actions">
                        <button onClick={() => onRemoveChat(chat._id)}>x</button>
                    </div>}
                </li>)
            }
        </ul>
    </section>
}