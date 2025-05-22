import { useState } from 'react'
import {
  Close
} from '../assets/SVG/icons'

export function UserSelectModal({ isOpen, onClose, users, onSelect }) {
    const [search, setSearch] = useState('')
    if (!isOpen) return null

    function handleUserClick(user) {
        onSelect(user)
        onClose()
        setSearch('')
    }
    const filtered = users.filter(u =>
        (u.fullname?.includes(search) || u.username?.includes(search))
    )

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content user-modal" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}><Close /></button>
                <p>New message</p>
                    <hr />
                <div className="search-row">
                    <span>To:</span>
                    <input
                        autoFocus
                        placeholder="Search..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                    <hr />
                <div className="user-list">
                    {filtered.map(user => (
                        <div className="user-item" key={user._id} onClick={() => handleUserClick(user)}>
                            <img src={user.imgUrl} alt="" />
                            <span className="fullname">{user.username}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
