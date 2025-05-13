import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { toggleLike } from '../store/actions/story.actions'
import { useSelector } from 'react-redux'

export function StoryActions({ from, story }) {
  const loggedInUser = useSelector((storeState) => storeState.userModule.user)
  const [isLiked, setIsLiked] = useState(
    loggedInUser?.likedStoryIds?.includes(story._id)
  )

  async function onToggleLike() {
    if (!loggedInUser) return alert('You need to login first')

    try {
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
