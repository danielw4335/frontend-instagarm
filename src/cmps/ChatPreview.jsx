import { Link } from 'react-router-dom'

export function ChatPreview({ chat }) {
    const { byUser, aboutUser } = chat

    return <article className="preview chat-preview">
        <p>About: <Link to={`/user/${aboutUser._id}`}>{aboutUser.fullname}</Link></p>
        <p className="chat-by">By: <Link to={`/user/${byUser._id}`}>{byUser.fullname}</Link></p>
        <p className="chat-txt">{chat.txt}</p>
    </article>
}