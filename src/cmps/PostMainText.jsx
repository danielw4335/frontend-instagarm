import { NavLink } from 'react-router-dom'
import { getTimeFormat } from '../services/util.service'

export function PostMainText({ story }) {
  if (!story?.by || !story?.txt) return null

  const { by, txt, createdAt } = story
  const timeAgo = getTimeFormat(createdAt)

  return (
    <div className="comment-preview post-main-text">
      <NavLink to={`/u/${by._id}`}>
        <img className="user-img" src={by.imgUrl} alt={by.username} />
      </NavLink>
      <div className="comment-content">
        <NavLink to={`/u/${by._id}`}>
          <p>
            <strong>{by.username}</strong> {txt}
          </p>
        </NavLink>
        <div className="comment-meta">
          <span>{timeAgo}</span>
        </div>
      </div>
    </div>
  )
}
