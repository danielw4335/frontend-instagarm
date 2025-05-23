import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { updateUser } from '../store/actions/user.actions'

export function SuggestedUsers({ users }) {
  const loggedInUser = useSelector(storeState => storeState.userModule.loggedInUser)
  const [followingUsers, setFollowingUsers] = useState([])
  const [loadingUsers, setLoadingUsers] = useState([])
  useEffect(() => {
    if (loggedInUser && loggedInUser.following) {
      setFollowingUsers(loggedInUser.following)
    }
  }, [loggedInUser])

  const filteredUsers = users && users.length && loggedInUser
    ? users.filter(user =>
      user._id !== loggedInUser._id &&
      (!loggedInUser.following || !loggedInUser.following.includes(user._id)) &&
      !followingUsers.includes(user._id))
    : []

  const limitedUsers = filteredUsers.slice(0, 5)
  async function handleFollow(userToFollow) {
    if (!loggedInUser) return
    try {
      setLoadingUsers(prev => [...prev, userToFollow._id])
      setFollowingUsers(prev => [...prev, userToFollow._id])

      const updatedLoggedInUser = {
        ...loggedInUser,
        following: loggedInUser.following ? [...loggedInUser.following, userToFollow._id]
          : [userToFollow._id]
      }

      const updatedUserToFollow = {
        ...userToFollow,
        followers: userToFollow.followers ? [...userToFollow.followers, loggedInUser._id]
          : [loggedInUser._id]
      }

      await updateUser(updatedLoggedInUser)
      await updateUser(updatedUserToFollow)

      setLoadingUsers(prev => prev.filter(id => id !== userToFollow._id))
    } catch (err) {
      console.error('Failed to follow user:', err)
      setFollowingUsers(prev => prev.filter(id => id !== userToFollow._id))
      setLoadingUsers(prev => prev.filter(id => id !== userToFollow._id))
    }
  }

  return (
    <section className="suggested-users">
      <div className="suggested-users-header">
        <span>Suggested for you</span>
        <button className="see-all-btn">See All</button>
      </div>      <ul>
        {limitedUsers.length > 0 ? (
          limitedUsers.map(user => (
            <li key={user._id} className="suggested-user">
              <img src={user.imgUrl} alt={user.username} className="profile-img" />
              <div className="user-details">
                <div className="user-row">
                  <span className="username">{user.username}</span>
                </div>
                {user.subline && <span className="subline">{user.subline}</span>}
              </div>
              <button
                className="follow-btn"
                onClick={() => handleFollow(user)}
                disabled={loadingUsers.includes(user._id)}
              >{loadingUsers.includes(user._id)
                ? 'Loading...'
                : 'Follow'
                }
              </button>
            </li>))) : (
          <li className="no-suggestions">No suggestion</li>
        )}
      </ul>
    </section>
  )
}