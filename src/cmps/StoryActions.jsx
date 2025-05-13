import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { toggleLike } from '../store/actions/story.actions'

export function StoryActions({ from, loggedInUser, story }) {
  const [isLiked, setIsLiked] = useState(
    loggedInUser?.likedStoryIds?.includes(story._id)
  )

  async function onToggleLike() {
    if (!loggedInUser) return alert('you need to login first')
    
    try {
      // loggedInUser.likedStoryIds might be undefined for existing users
      if (!loggedInUser.likedStoryIds) {
        loggedInUser.likedStoryIds = []
      }

      await toggleLike(story, loggedInUser)
      setIsLiked(prev => !prev)
    } catch (err) {
      console.error('Failed to toggle like:', err)
    }
  }

  return (
    <div className="story-actions">
      <div className="left-actions">
        <button onClick={onToggleLike}>
          <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeart} className={isLiked ? 'isLiked' : ''} />
        </button>
        <button><FontAwesomeIcon icon={faComment} /></button>
        <button><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>
      <button className="save-btn"><FontAwesomeIcon icon={faBookmark} /></button>
    </div>
  )
}
