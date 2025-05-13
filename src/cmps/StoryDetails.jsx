import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDistance } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { useClickOutsideClose } from '../customHooks/useClickOutsideClose'

import { StoryComments } from './StoryComments.jsx'
import { StoryHeader } from './storyHeader.jsx'
import { loadStory, toggleLike } from '../store/actions/story.actions'
import { loadUsers } from '../store/actions/user.actions.js'

export function StoryDetails({ story, onClose }) {
    const from = 'details'
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    const users = useSelector(storeState => storeState.userModule.users)
    const newStory = useSelector((storeState) => storeState.storyModule.story)
    const dispatch = useDispatch()
    
    
    const [isLiked, setIsLiked] = useState(
        loggedInUser?.likedStoryIds?.includes(story?._id)
    )
    const modalRef = useRef()
    useClickOutsideClose(modalRef, onClose)
    
    useEffect(() => {
        loadStory(story._id)
        loadUsers()
    }, [])
    
    useEffect(() => {
        if (loggedInUser && newStory) {
            setIsLiked(loggedInUser.likedStoryIds?.includes(newStory._id))
        }
    }, [loggedInUser, newStory])
    
    if (!newStory) return null
    if (!users) return null
    console.log(' StoryDetails users:', users)

    const { _id, txt, imgUrl, by, comments, likes, createdAt } = newStory

    async function onToggleLike() {
        if (!loggedInUser) return alert('You need to login first')

        try {
            await toggleLike(newStory, loggedInUser)
        } catch (err) {
            console.error('Failed to toggle like:', err)
        }
    }

    return (
        <main className="story-modal-overlay">
            <section className="story-modal" ref={modalRef}>
                <button className="story-modal-close" onClick={onClose}>X</button>

                <div className="story-modal-content">
                    <div className="story-media">
                        <img src={newStory.imgUrl} alt="story" />
                    </div>

                    <div className="story-details">
                        <div className="story-header">
                            <StoryHeader key={by._id} from={from} user={by} createdAt={createdAt} />
                        </div>
                        <div className="story-comments">
                            {comments?.map((comment, idx) => (
                                <p key={idx}>
                                    <strong>{comment.by?.fullname}</strong> {comment.txt}
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
                            <StoryComments story={newStory} from={from} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
