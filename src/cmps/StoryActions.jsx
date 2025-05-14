import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { useLikeWithControl } from '../customHooks/useLikeWithControl'


export function StoryActions({ from, loggedInUser, story }) {
  const { isLiked, ref, onMouseLeave, onLikeClick } = useLikeWithControl(loggedInUser, story)

  return (
    <div className="story-actions">
      <div className="left-actions">
        <button onClick={onLikeClick}>
          <FontAwesomeIcon
            ref={ref}
            onMouseLeave={onMouseLeave}
            icon={isLiked ? faHeartSolid : faHeart}
            className={`heart-icon ${isLiked ? 'isLiked' : ''}`}
          />
        </button>
        <button><FontAwesomeIcon icon={faComment} /></button>
        <button><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>
      <button className="save-btn"><FontAwesomeIcon icon={faBookmark} /></button>
    </div>
  )
}
