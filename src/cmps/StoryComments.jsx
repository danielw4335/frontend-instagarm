import ShowMoreText from 'react-show-more-text'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { addStoryComment, loadStory } from '../store/actions/story.actions'
import { useNavigate } from 'react-router-dom'
import { getTimeFormat } from '../services/util.service'
import { EmojiPickerWrapper } from './EmojiPickerWrapper'
import { setIsDetails } from '../store/actions/story.actions'


export const StoryComments = ({ story, from }) => {
    const [comment, setComment] = useState('')
        const isDetails = useSelector(storeState => storeState.storyModule.isDetails)
        // const isIndex = useSelector(storeState => storeState.storyModule.isIndex)
    const loggedInUser = useSelector((storeState) => storeState.userModule.loggedInUser)
    const navigate = useNavigate()

    const { _id, txt, by, createdAt, comments = [], likedBy } = story


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
            await loadStory(story._id)
            setComment('')
        } catch (err) {
            console.error('Failed to add comment:', err)
        }
    }

    function onOpenModal() {
        navigate(`/${_id}`)
        setIsDetails({ story: story, from: 'index'})
    }
    const timeAgo = getTimeFormat(createdAt)

    return (
        <section className={`story-comments ${from}`}>
            <section className="story-comments-likedBy">
                {likedBy?.length > 0 && <p>{likedBy.length} likedBy</p>}

                {isDetails && (<>
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
                { from !== 'index' && <EmojiPickerWrapper from={from} onEmojiSelect={(emoji) => setComment(prev => prev + emoji)} /> }
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
            { from === 'index' && <EmojiPickerWrapper onEmojiSelect={(emoji) => setComment(prev => prev + emoji)} /> }
            </form>
        </section >
    )
}
