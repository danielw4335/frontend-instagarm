import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'

import { loadUsers } from '../store/actions/user.actions'
import { store } from '../store/store'
import { showSuccessMsg } from '../services/event-bus.service'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from '../services/socket.service'
import { loadStories } from '../store/actions/story.actions'

export function UserDetails() {

  const params = useParams()
  const users = useSelector(storeState => storeState.userModule.users)
  const loggedInUser = useSelector(storeState => storeState.userModule.user)
  const stories = useSelector(storeState => storeState.storyModule.stories)
  console.log(' UserDetails stories:', stories)
  const user = users.find(u => u._id === params.id)
  const isAdmin = (user?._id === loggedInUser?._id)
  console.log(' UserDetails isAdmin:', isAdmin)

  useEffect(() => {
    loadUsers()

    // socketService.emit(SOCKET_EMIT_USER_WATCH, params.id)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    // return () => {
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // }

  }, [params.id])
  console.log(user, params.id)
  // function onUserUpdate(user) {
  //   showSuccessMsg(`This user ${user.fullname} just got updated from socket`)
  //   store.dispatch({ type: UPDATE_USER, user })
  // }

  if (!user) return <div className='loading'>Loading...</div>
  return (
    <main className="user-details">
      <section className="user-details-container">
        <img className="user-details-img" src={user.imgUrl} />
        <section className="user-details-main">
          <div className="user-details-header">
            <span className="user-details-username">{user.username}</span>
            <button className="btn-user-header edit">Edit profile</button>
            <button className="btn-user-header archive">View archive</button>
            <button className="user-details-settings">⚙️</button>
          </div>
          <div className="user-details-info">
            <span><b>{user.posts.length}</b> posts</span>
            <span><b>{user.followers.length}</b> followers</span>
            <span><b>{user.following.length}</b> following</span>
          </div>
          <div className="user-details-bio">
            <p>{user.fullname}</p>
            <p>{user.bio}</p>
          </div>
        </section>
      </section>
      <hr />

      <div className='user-details-btn-area'>
        <NavLink to={`/u/${user._id}`}>posts</NavLink>
        <NavLink to={`/u/${user._id}/reels/`}>reels</NavLink>
        <NavLink to={`/u/${user._id}/saved/`}>saved</NavLink>
        <NavLink to={`/u/${user._id}/tagged/`}>tagged</NavLink>
      </div>
      <div className="user-details-grid">

      </div>
    </main>
  )
}