import { useEffect, useState, useRef } from 'react'
import ShowMoreText from 'react-show-more-text'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { updateUser, loadUser } from '../store/actions/user.actions'
import { CommentBubble, CommentOutline, GridOutline, NotificationsActive, ReelsOutline, SaveOutline, SettingsOutline, TaggedOutline } from '../assets/SVG/icons'
import { useModal } from '../customHooks/ModalContext'
import { LoaderInstagram } from '../cmps/LoaderInstagram'
// import {
// 	socketService,
// 	SOCKET_EVENT_USER_UPDATED,
// 	SOCKET_EMIT_USER_WATCH,
// } from '../services/socket.service'

export function UserDetails() {
	const { userId } = useParams()
	const navigate = useNavigate()
	const stories = useSelector((storeState) => storeState.storyModule.stories)
	const users = useSelector((storeState) => storeState.userModule.users)
	const loggedInUser = useSelector((storeState) => storeState.userModule.loggedInUser)
	const isLoading = useSelector((storeState) => storeState.userModule.isLoading)
	const [user, setUser] = useState(null)
	const [userStories, setUserStories] = useState(null)
	const isAdmin = user?._id === loggedInUser?._id
	const { open } = useModal()

	let isFollowing
	const [isLoadingFollow, setIsLoadingFollow] = useState(false)

	useEffect(() => {
		onLoadUser(userId)
		// isFollowing = loggedInUser.following.includes(user._id)

		// socketService.emit(SOCKET_EMIT_USER_WATCH, params.userId)
		// socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
		// return () => {
		// socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
		// }
	}, [userId, users, isLoadingFollow])

	async function onLoadUser(userId) {
		try {
			const user = await loadUser(userId)
			setUser(user)
			setUserStories(user.stories || [])
		} catch (err) {
			console.log('User not found', err)
		}
	}

	function onOpenModal(_id) {
		navigate(`/u/${user._id}/${_id}`)
	}

	async function onFollow() {
		if (!loggedInUser || !user) return
		setIsLoadingFollow(true)
		if (isFollowing) {
			const updatedLoggedInUser = {
				...loggedInUser,
				following: loggedInUser.following.filter(
					(id) => id !== user._id
				),
			}
			const updatedUser = {
				...user,
				followers: user.followers.filter(
					(id) => id !== loggedInUser._id
				),
			}
			await updateUser(updatedLoggedInUser)
			await updateUser(updatedUser)
		} else {
			const updatedLoggedInUser = {
				...loggedInUser,
				following: loggedInUser.following.includes(user._id)
					? loggedInUser.following
					: [...(loggedInUser.following || []), user._id],
			}
			const updatedUser = {
				...user,
				followers: user.followers.includes(loggedInUser._id)
					? user.followers
					: [...(user.followers || []), loggedInUser._id],
			}
			await updateUser(updatedLoggedInUser)
			await updateUser(updatedUser)
			setIsLoadingFollow(false)
		}
	}
	if (!user || isLoading) return <LoaderInstagram />

	isFollowing = loggedInUser && user ? loggedInUser.following?.includes(user._id) : false
	return (
		<main className="user-details">
			<section className="user-details-container">
				<img
					className="user-details-img"
					src={user.imgUrl}
					alt={`${user.username}'s profile picture`}
					loading="eager"
				/>
				<section className="user-details-main">
					<div className="user-details-header">
						<span className="user-details-username">
							{user.username}
						</span>
						{isAdmin && (
							<>
								<button className="btn-user-header edit">
									Edit profile
								</button>
								<button className="btn-user-header archive">
									View archive
								</button>
								<button className="user-details-settings">
									<SettingsOutline className="icon-settings" onClick={() => open(user._id, 'options')} />
								</button>
							</>
						)}
						{!isAdmin && (
							<>
								<button
									className="btn-user-header edit"
									onClick={onFollow}
									disabled={isLoadingFollow}
								>
									{isLoadingFollow
										? 'Loading...'
										: isFollowing
											? 'Unfollow'
											: 'Follow'}
								</button>
								<button className="btn-user-header archive">
									Message
								</button>
								<button className="user-details-settings">
									...
								</button>
							</>
						)}
					</div>
					<div className="user-details-info">
						<span>
							<b>{user.posts?.length || 0}</b> posts
						</span>
						<span>
							<b>{user.followers?.length || 0}</b> followers
						</span>
						<span>
							<b>{user.following?.length || 0}</b> following
						</span>
					</div>
					<div className="user-details-bio">
						<p>{user.fullname}</p>


							<ShowMoreText
								lines={2}
								more="more"
								less=""
								anchorClass="show-more-link"
								expanded={false}
								truncatedEndingComponent="…"
							>
								<p className="user-txt-span">{user.bio}</p>
							</ShowMoreText>



					</div>
				</section>
			</section>			<div className="user-details-btn-area">
				<NavLink to={`/u/${user._id}`}><GridOutline className="icon" /> <span>posts</span></NavLink>
				<NavLink to={`/u/${user._id}/reels/`}><ReelsOutline className="icon" /> <span>reels</span></NavLink>
				<NavLink to={`/u/${user._id}/saved/`}><SaveOutline className="icon" /> <span>saved</span></NavLink>
				<NavLink to={`/u/${user._id}/tagged/`}><TaggedOutline className="icon" /> <span>tagged</span></NavLink>
			</div>
			<div className="user-details-grid">
				{stories && stories.length > 0 ? (
					stories.map((story) => (
						<div
							className="story-preview"
							key={story._id}
							onClick={() => onOpenModal(story._id)}
						>
							<div className="hover-icons">
								<div className="icon-with-count">
									<CommentOutline className="icon comment" />
									<span>{story.comments?.length || 0}</span>
								</div>
								<div className="icon-with-count">
									<NotificationsActive className="icon notif" />
									<span>{story.likedBy?.length || 0}</span>
								</div>
							</div>
							<img src={story.imgUrl} />
						</div>
					))) : (
					<div className="no-stories-message">
						<p>No posts yet</p>
					</div>
				)}
			</div>
		</main>
	)
}
