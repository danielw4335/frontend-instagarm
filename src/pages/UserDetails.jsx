import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {  NavLink, useNavigate, useParams } from 'react-router-dom'
import { loadUser } from '../store/actions/user.actions'
import { store } from '../store/store'
import { showSuccessMsg } from '../services/event-bus.service'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from '../services/socket.service'
import { updateUser } from '../store/actions/user.actions'

export function UserDetails() {

  const params = useParams()
  const loggedInUser = useSelector(storeState => storeState.userModule.loggedInUser)
  const user = useSelector(storeState => storeState.userModule.user)
  const stories = useSelector(storeState => storeState.storyModule.stories)
  const [filterBy, setFilterBy] = useState({})
  // const [selectedStory, setSelectedStory] = useState(null)
  const [isLoadingFollow, setIsLoadingFollow] = useState(false)

  const isAdmin = (user?._id === loggedInUser?._id)
   const navigate = useNavigate()
  const isFollowing = loggedInUser?.following?.includes(user?._id)

  useEffect(() => {
    loadUser(params.userId)
    // socketService.emit(SOCKET_EMIT_USER_WATCH, params.userId)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // return () => {
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // }
  }, [params.userId, isLoadingFollow])
  
  function onOpenModal(_id) {
    navigate(`/u/${user._id}/${_id}`)
  }

  async function onFollow() {
    if (!loggedInUser || !user) return
    setIsLoadingFollow(true)
    if (isFollowing) {
      const updatedLoggedInUser = {
        ...loggedInUser,
        following: loggedInUser.following.filter(id => id !== user._id)
      }
      const updatedUser = {
        ...user,
        followers: user.followers.filter(id => id !== loggedInUser._id)
      }
      await updateUser(updatedLoggedInUser)
      await updateUser(updatedUser)
    } else {
      const updatedLoggedInUser = {
        ...loggedInUser,
        following: loggedInUser.following.includes(user._id)
          ? loggedInUser.following
          : [...(loggedInUser.following || []), user._id]
      }
      const updatedUser = {
        ...user,
        followers: user.followers.includes(loggedInUser._id)
          ? user.followers
          : [...(user.followers || []), loggedInUser._id]
      }
      await updateUser(updatedLoggedInUser)
      await updateUser(updatedUser)
      setIsLoadingFollow(false)
    }
  }


  if (!user) return <div className='loading'>Loading...</div>
  return (
    <main className="user-details">
      <section className="user-details-container">
        <img className="user-details-img" src={user.imgUrl} />
        <section className="user-details-main">
          <div className="user-details-header">
            <span className="user-details-username">{user.username}</span>
            {isAdmin && (
              <>
                <button className="btn-user-header edit">Edit profile</button>
                <button className="btn-user-header archive">View archive</button>
                <button className="user-details-settings">⚙️</button>
              </>
            )}
            {!isAdmin && (
              <>
                <button className="btn-user-header edit" onClick={onFollow} disabled={isLoadingFollow}>
                  {isLoadingFollow ? 'Loading...' : (isFollowing ? 'Unfollow' : 'Follow')}
                </button>
                <button className="btn-user-header archive">Message</button>
                <button className="user-details-settings">...</button>
              </>
            )}
          </div>
          <div className="user-details-info">
            <span><b>{user.posts?.length}</b> posts</span>
            <span><b>{user.followers.length}</b> followers</span>
            <span><b>{user.following.length}</b> following</span>
          </div>
          <div className="user-details-bio">
            <p>{user.fullname}</p>
            <p>{user.bio}</p>
          </div>
        </section>
      </section>

      <div className='user-details-btn-area'>
        <NavLink to={`/u/${user._id}`}>posts</NavLink>
        <NavLink to={`/u/${user._id}/reels/`}>reels</NavLink>
        <NavLink to={`/u/${user._id}/saved/`}>saved</NavLink>
        <NavLink to={`/u/${user._id}/tagged/`}>tagged</NavLink>
      </div>
      <div className="user-details-grid">
        {stories.map((story) => {
          return (
            <div className="story-preview" key={story._id} onClick={() => onOpenModal(story._id)}>
              <p className='hover'>💬{story.comments.length}</p>
              <img src={story.imgUrl} />
            </div>
          )
        })}
      </div>
    </main>
  )
}