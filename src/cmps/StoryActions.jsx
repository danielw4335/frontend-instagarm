import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'

export function StoryActions({ from }) {
  return (
    <div className="story-actions">
      <div className="left-actions">
       <button><FontAwesomeIcon icon={faHeart} /></button>
       <button><FontAwesomeIcon icon={faComment} /></button>
       <button><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>
      <button className="save-btn"><FontAwesomeIcon icon={faBookmark} /></button>
    </div>
  )
}