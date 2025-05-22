import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDistance } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHeart,
	faComment,
	faPaperPlane,
	faBookmark,
} from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { useClickOutsideClose } from '../customHooks/useClickOutsideClose'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { getTimeFormat } from '../services/util.service'
import { StoryComments } from './StoryComments.jsx'
import { StoryHeader } from './storyHeader.jsx'
import { PostMainText } from './PostMainText.jsx'
import {
	loadStories,
	loadStory,
	toggleLike,
} from '../store/actions/story.actions'
import {
	Close,
} from '../assets/SVG/icons'
import { store } from '../store/store.js'
import { SET_IS_LOADING } from '../store/reducers/story.reducer.js'

export function StoryDetails() {
	const params = useParams()
	const navigate = useNavigate()
	const loggedInUser = useSelector((storeState) => storeState.userModule.loggedInUser)
	const newStory = useSelector((storeState) => storeState.storyModule.story)
	const [isLiked, setIsLiked] = useState(loggedInUser?.likedStoryIds?.includes(newStory?._id))
	const [isModalOpen, setIsModalOpen] = useState(null)
	const [isFromIndex, setIsFromIndex] = useState(null)
	const from = 'details'
	const modalRef = useRef()
	useClickOutsideClose(modalRef, onClose)

	useEffect(() => {
		const target = document.querySelector('body')
		if (isModalOpen) {
			disableBodyScroll(target)
		} else {
			enableBodyScroll(target)
		}

		return () => {
			enableBodyScroll(target)
		}
	}, [isModalOpen])

	useEffect(() => {
		if (params) {
			loadStory(params.storyId)
			store.dispatch({ type: SET_IS_LOADING, isLoading: false })
			if (!params.userId) setIsFromIndex(true)
		}
		setIsModalOpen(true)
	}, [params])

	useEffect(() => {
		if (loggedInUser && newStory) {
			setIsLiked(loggedInUser.likedStoryIds?.includes(newStory._id))
		}
	}, [loggedInUser, newStory])

	function onClose() {
		navigate(-1)
		// setSelectedStory(null)
	}
	if (!newStory) return null

	const { _id, txt, imgUrl, by, comments, likedBy, createdAt } = newStory || {}

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
				<button className="story-modal-close" onClick={onClose}>
					<Close />
				</button>

				<div className="story-modal-content">
					<div className="story-media">
						{newStory?.imgUrl && (
							<img src={newStory.imgUrl} alt="story" />
						)}
					</div>
					<div className="story-details">
						<div className="story-header">
							{by && (
								<StoryHeader
									key={by._id}
									from={from}
									user={by}
									createdAt={createdAt}
								/>
							)}
						</div>
						<div className="story-comments">
							<PostMainText story={newStory} />
							{comments?.map((comment, idx) => (
								<div key={idx} className="comment-preview">
									<NavLink to={`/u/${comment.by._id}`}>
										<img
											className="user-img"
											src={comment.by.imgUrl}
											alt="user"
										/>
									</NavLink>
									<div className="comment-content">
										<p>
											<NavLink to={`/u/${comment.by._id}`}>
												<strong>
													{comment.by.username}
												</strong>{' '}
											</NavLink>
											{comment.txt}
										</p>
										<div className="comment-meta">
											<span>{getTimeFormat(createdAt)}</span>
											{comment.likedBy?.length > 0 && (
												<span>
													{comment.likedBy.length} likes
												</span>
											)}
										</div>
									</div>
								</div>
							))}
						</div>

						<div className="story-footer">
							<hr />
							<div className="story-actions details">
								<div className="left-actions">
									<button onClick={onToggleLike}>
										<FontAwesomeIcon
											icon={
												isLiked ? faHeartSolid : faHeart
											}
											className={isLiked ? 'isLiked' : ''}
										/>
									</button>
									<button>
										<FontAwesomeIcon icon={faComment} />
									</button>
									<button>
										<FontAwesomeIcon icon={faPaperPlane} />
									</button>
								</div>
								<button className="save-btn">
									<FontAwesomeIcon icon={faBookmark} />
								</button>
							</div>

							<StoryComments story={newStory} from={from} />
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
