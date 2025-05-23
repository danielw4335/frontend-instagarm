import { formatDistanceToNow } from 'date-fns'
import { getTimeFormat } from '../services/util.service'
import { useModal } from '../customHooks/ModalContext.jsx'
import {
    Close,
    TreeDots,
    Location
} from '../assets/SVG/icons'
import { NavLink } from 'react-router-dom'

export function StoryHeader({ from, _id, user, createdAt, loc }) {
    const { open } = useModal()
    const { username, imgUrl } = user
    const timeAgo = getTimeFormat(createdAt)
    return (
        <section className="storyHeader">
            <div className="storyHeader-container">
                {from !== 'modalCreat' && <button className='clear-button btn-options' onClick={() => open(_id, 'options')}><TreeDots /></button>}
                {from === 'index' && (
                    <div className="storyHeader-index">                       
                     <NavLink to={`/u/${user._id}`} className="nav-item" key={user._id}>
                        <img className="user-img" src={imgUrl} alt="user" />
                        <span className="username">{user.username}</span>
                    </NavLink>
                        <span className="created-time">•</span>
                        <span className="created-time">{timeAgo}</span>
                        <div className="location-container">
                            {loc && <Location className="location-icon" />}
                            {loc && <span className='location'>{loc?.name || loc}</span>}
                        </div>
                    </div>
                )}
                {from === 'details' && (
                    <div className="storyHeader-details">
                        <NavLink to={`/u/${user._id}`}>
                            <img className="user-img" src={imgUrl} alt="user" />
                            <span className="username">{user.username}</span>
                        </NavLink>
                    </div>
                )}
                {from === 'modalCreat' && (
                    <div className="storyHeader-modal-creat">
                        <NavLink to={`/u/${user._id}`}>
                            <img className="user-img" src={imgUrl} alt="user" />
                            <span className="username">{user.username}</span>
                        </NavLink>
                    </div>
                )}
            </div>
        </section>
    )
}