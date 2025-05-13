import ShowMoreText from 'react-show-more-text'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { addStoryComment } from '../store/actions/story.actions'
import { useNavigate } from 'react-router-dom'

export const StoryComments = ({ story }) => {
  const [comment, setComment] = useState('')
  const loggedInUser = useSelector((storeState) => storeState.userModule.user)
  const navigate = useNavigate()

  const { _id, txt, comments = [], likes } = story

  async function onAddComment(ev) {
    ev.preventDefault()
    if (!comment.trim() || !loggedInUser) return

    const newComment = {
      id: Date.now(),
      by: {
        _id: loggedInUser._id,
        fullname: loggedInUser.fullname,
        imgUrl: loggedInUser.imgUrl || 'https://robohash.org/1?set=set5'
      },
      txt: comment
    }

    try {
      await addStoryComment(_id, newComment)
      setComment('')
    } catch (err) {
      console.error('Failed to add comment:', err)
    }
  }

  function onOpenModal() {
    navigate(`/story/${_id}`)
  }

  return (
    <div className="story-comments">
      {likes?.length > 0 && <p>{likes.length} likes</p>}

      <ShowMoreText
        lines={2}
        more="more"
        less=""
        anchorClass="show-more-link"
        expanded={false}
        truncatedEndingComponent="…"
      >
        <p>{txt}</p>
      </ShowMoreText>

      <button className="view-comments" onClick={onOpenModal}>
        View all {comments.length} comments
      </button>

      <form className='add-comment-form' onSubmit={onAddComment}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className='clear-button add-comment-post' type="submit" disabled={!comment.trim()}>Post</button>
      </form>
    </div>
  )
}
