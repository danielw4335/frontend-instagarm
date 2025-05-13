import { useEffect } from 'react'
import { useSelector } from 'react-redux'


import { loadUser } from '../store/actions/user.actions'
import { store } from '../store/store'
import { showSuccessMsg } from '../services/event-bus.service'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from '../services/socket.service'

export function UserDetails() {

  const user = useSelector(storeState => storeState.userModule.user)

  return (
    <section className="user-details">
      <h1>User Details</h1>
      {user && <div>
        <h3>
          {user.fullname}
        </h3>
        <img src={user.imgUrl} style={{ width: '100px' }} />
        <pre> {JSON.stringify(user, null, 2)} </pre>
      </div>}
    </section>
  )
}