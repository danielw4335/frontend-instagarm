import { getTimeFormat } from '../services/util.service'

export function PostMainText({ story }) {
  if (!story?.by || !story?.txt) return null

  const { by, txt, createdAt } = story
  const timeAgo = getTimeFormat(createdAt)

  return (
    <div className="comment-preview post-main-text">
      <img className="user-img" src={by.imgUrl} alt={by.username} />
      <div className="comment-content">
        <p>
          <strong>{by.username}</strong> {txt}
        </p>
        <div className="comment-meta">
          <span>5h</span>
        </div>
      </div>
    </div>
  )
}
