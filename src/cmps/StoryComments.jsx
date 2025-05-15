import ShowMoreText from 'react-show-more-text'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { addStoryComment } from '../store/actions/story.actions'
import { useNavigate } from 'react-router-dom'
import { getTimeFormat } from '../services/util.service'
import { EmojiPickerWrapper } from './EmojiPickerWrapper'

export const StoryComments = ({ story, from, setIsDetails }) => {
    const [comment, setComment] = useState('')
    const loggedInUser = useSelector((storeState) => storeState.userModule.user)
    const navigate = useNavigate()

    const { _id, txt, by, createdAt, comments = [], likes } = story


    async function onAddComment(ev) {
        ev.preventDefault()
        if (!comment.trim() || !loggedInUser) return

        if (!loggedInUser) {
            alert('You must be logged in to comment')
            return
        }

        const newComment = {
            id: Date.now(),
            by: {
                _id: loggedInUser._id,
                username: loggedInUser.username,
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
        setIsDetails(true)
    }
    const timeAgo = getTimeFormat(createdAt)

    return (
        <section className={`story-comments ${from}`}>
            <section className="story-comments-likes">
                {likes?.length > 0 && <p>{likes.length} likes</p>}

                {from === 'details' && (<>
                    <p>{timeAgo}</p>
                    <hr />
                </>)}

            </section>
            {
                from === 'index' && (
                    <>
                        <div className='user-comment'>
                            <ShowMoreText
                                lines={2}
                                more="more"
                                less=""
                                anchorClass="show-more-link"
                                expanded={false}
                                truncatedEndingComponent="…"
                            >
                                <a className="user-name-span">{by.username}</a> <span className="user-txt-span">{txt}</span>
                            </ShowMoreText>
                        </div>

                        <button className="view-comments "  onClick={onOpenModal}>
                            View all {comments.length} comments
                        </button>
                    </>
                )
            }
            <form className='add-comment-form' onSubmit={onAddComment}>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button className={`clear-button add-comment-post ${from === 'index' ? 'comment-index' : ''} 
                ${comment.trim() ? '' : 'disabled'}`} type="submit" disabled={!comment.trim()}>
                    Post
                </button>
                <EmojiPickerWrapper onEmojiSelect={(emoji) => setComment(prev => prev + emoji)} />
            </form>
        </section >
    )
}
