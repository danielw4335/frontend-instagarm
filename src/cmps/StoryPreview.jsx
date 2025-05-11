import { Link } from 'react-router-dom'
import { UserInfo } from './userInfo.jsx'

export function StoryPreview({ story }) {
    const { txt, imgUrl, by } = story


    return (
        <div className="story-preview">
            <UserInfo key={by._id} user={by} />
            <img className="story-img" src={imgUrl} alt="story" />
        </div>
    )
}
