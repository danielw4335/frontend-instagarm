import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { userService } from '../services/user'
import { storyservice } from '../services/story'

export function StoryActions({ from, loggedInUser, story }) {
  const [isLiked, setIsLiked] = useState(
    loggedInUser?.likedStoryIds?.includes(story._id)
  )

  function onToggleLike() {
    if (!loggedInUser) return alert('you need to login first')

    const updatedUser = { ...loggedInUser }
    const storyIdxInUser = updatedUser.likedStoryIds.indexOf(story._id)

    if (storyIdxInUser === -1) {
      updatedUser.likedStoryIds.push(story._id)
    } else {
      updatedUser.likedStoryIds.splice(storyIdxInUser, 1)
    }

    userService.saveLoggedinUser(updatedUser)
    userService.update(updatedUser)

    const updatedStory = { ...story }
    updatedStory.likes = updatedStory.likes || []

    const userIdxInStory = updatedStory.likes.indexOf(loggedInUser._id)

    if (userIdxInStory === -1) {
      updatedStory.likes.push(loggedInUser._id)
    } else {
      updatedStory.likes.splice(userIdxInStory, 1)
    }

    storyservice.update(updatedStory)

    setIsLiked(prev => !prev)
  }

  return (
    <div className="story-actions">
      <div className="left-actions">
        <button onClick={onToggleLike}>
          <FontAwesomeIcon icon={faHeart} className={isLiked ? 'isLiked' : ''} />
        </button>
        <button><FontAwesomeIcon icon={faComment} /></button>
        <button><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>
      <button className="save-btn"><FontAwesomeIcon icon={faBookmark} /></button>
    </div>
  )
}
