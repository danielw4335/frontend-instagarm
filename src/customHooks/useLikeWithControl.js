import { useState, useRef, useEffect } from 'react'
import { toggleLike } from '../store/actions/story.actions'
import { useOptimisticAction } from './useOptimisticAction'
import { useHeartbeatOnHover } from './useHeartbeatOnHover'

export function useLikeWithControl(loggedInUser, story, animationDelay = 2500) {
  const [wasClicked, setWasClicked] = useState(false)

  const [isLiked, onToggleLike] = useOptimisticAction(
    loggedInUser?.likedStoryIds?.includes(story._id),
    () => toggleLike(story, loggedInUser)
  )

  const prevLikedRef = useRef(isLiked)

  useEffect(() => {
    prevLikedRef.current = isLiked
  }, [isLiked])

  const { ref, onMouseLeave } = useHeartbeatOnHover(
    !isLiked && !wasClicked
  )

  async function onLikeClick() {
    setWasClicked(true)
    await onToggleLike()
    setTimeout(() => setWasClicked(false), animationDelay)
  }

  return {
    isLiked,
    ref,
    onMouseLeave,
    onLikeClick
  }
}
