import { formatDistanceToNow } from 'date-fns'
import { getTimeFormat } from '../services/util.service'

export function StoryHeader({ from, user, createdAt }) {

    const { userName, imgUrl } = user
    const timeAgo = getTimeFormat(createdAt)

    return (
        <section className="storyHeader">
            {from === 'index' && (
                <div className="storyHeader-index">
                    <img className="user-img" src={imgUrl} alt="user" />
                    <span className="username">{user.userName}</span>
                    <span className="created-time">•</span>
                    <span className="created-time">{timeAgo}</span>
                </div>
            )}
            {from === 'details' && (
                <div className="storyHeader-details">
                    <img className="user-img" src={imgUrl} alt="user" />
                    <span className="username">{user.userName}</span>
                </div>
            )}
        </section>
    )
}