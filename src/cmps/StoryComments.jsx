import ShowMoreText from 'react-show-more-text'
import { useState } from 'react'
import { addStoryComment } from '../store/actions/story.actions'

export const StoryComments = ({ story }) => {
    const [comment, setComment] = useState('')

    const { _id, txt, comments = [], likes } = story

    async function onAddComment(ev) {
        ev.preventDefault()
        if (!comment.trim()) return

        const newComment = {
            id: Date.now(),
            by: {
                _id: 'u101',
                fullname: 'Tal Cohen',
                imgUrl: 'https://robohash.org/1?set=set5'
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

    return (
        <div className="story-comments">
            {likes ? <p>{likes} likes</p> : ''}

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

            <button className='clear-button'>
                <p>View all {comments.length} comments</p>
            </button>

            <form onSubmit={onAddComment}>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit">Post</button>
            </form>
        </div>
    )
}
