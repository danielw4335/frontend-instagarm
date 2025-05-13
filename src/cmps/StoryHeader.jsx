import { formatDistanceToNow } from 'date-fns'
import { getTimeFormat } from '../services/util.service'
import { useModal } from '../customHooks/ModalContext.jsx'

export function StoryHeader({ from, _id, user, createdAt }) {

    const { open } = useModal()
    const { username, imgUrl } = user
    const timeAgo = getTimeFormat(createdAt)
    return (
        <section className="storyHeader">
            <button onClick={() => open(_id)}>***</button>
            {from === 'index' && (
                <div className="storyHeader-index">
                    <img className="user-img" src={imgUrl} alt="user" />
                    <span className="username">{user.username}</span>
                    <span className="created-time">•</span>
                    <span className="created-time">{timeAgo}</span>
                </div>
            )}
            {from === 'details' && (
                <div className="storyHeader-details">
                    <img className="user-img" src={imgUrl} alt="user" />
                    <span className="username">{user.username}</span>
                </div>
            )}
        </section>
    )
}