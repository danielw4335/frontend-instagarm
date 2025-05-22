import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { useLikeWithControl } from '../customHooks/useLikeWithControl'
import { NavLink, useNavigate } from 'react-router-dom'
import { setIsDetails } from '../store/actions/story.actions.js'

export function StoryActions({ from, loggedInUser, story }) {
  const { isLiked, ref, onMouseLeave, onLikeClick } = useLikeWithControl(loggedInUser, story)
      const navigate = useNavigate()

  function onOpenModal() {
    navigate(`/${story._id}`)
    setIsDetails({ story: story, from: 'index' })
    }

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
        
        <button onClick={onOpenModal}>
          <FontAwesomeIcon icon={faComment} />
        </button>

        <button><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>
      <button className="save-btn"><FontAwesomeIcon icon={faBookmark} /></button>
    </div>
  )
}
