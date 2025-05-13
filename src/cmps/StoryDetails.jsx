import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { formatDistance } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { toggleLike } from '../store/actions/story.actions'
import { useClickOutsideClose } from '../customHooks/useClickOutsideClose'

function formatTimeAgo(date) {
    return formatDistance(new Date(date), new Date(), { addSuffix: true })
}

export function StoryDetails({ story, comments = [], onClose }) {
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    const [isLiked, setIsLiked] = useState(
        loggedInUser?.likedStoryIds?.includes(story?._id)
    )
    const modalRef = useRef()
    useClickOutsideClose(modalRef, onClose)

    async function onToggleLike() {
        if (!loggedInUser) return alert('You need to login first')

        try {
            if (!loggedInUser.likedStoryIds) {
                loggedInUser.likedStoryIds = []
            }

            await toggleLike(story, loggedInUser)
            setIsLiked(prev => !prev)
        } catch (err) {
            console.error('Failed to toggle like:', err)
        }
    }

    if (!story) return null

    return (
        <main className="story-modal-overlay">
            <section className="story-modal" ref={modalRef}>
                <button className="story-modal-close" onClick={onClose}>X</button>

                <div className="story-modal-content">
                    <div className="story-media">
                        <img src={story.imgUrl} alt="story" />
                    </div>

                    <div className="story-details">
                        <div className="story-header">
                            <p>@{story.username}</p>
                            <p>{story.description}</p>
                        </div>

                        <div className="story-comments">
                            {comments.map((comment, idx) => (
                                <p key={idx}>
                                    <strong>{comment.by?.fullname || 'Unknown'}</strong> {comment.txt}
                                </p>
                            ))}
                        </div>

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

                        <div className="story-footer">
                            <p>{formatTimeAgo(story.createdAt)} · {story.likes?.length || 0} likes</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
