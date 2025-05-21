export function UserSelectModal({ isOpen, onClose, users, onSelect }) {
    function handleChange(e) {
        const userId = e.target.value
        const user = users.find(u => u._id === userId)
        if (user) {
            onSelect(user)
            onClose()
        }
    }

    if (!isOpen) return null

    return (
        <>
            {isOpen && (
                <div className="modal-backdrop" onClick={onClose}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <select defaultValue="" onChange={handleChange}>
                            <option value="" disabled>choose</option>
                            {users.map(user => (
                                <option key={user._id} value={user._id}>
                                    {user.fullname}
                                </option>
                            ))}
                        </select>
                        <button onClick={onClose}>close</button>
                    </div>
                </div>
            )}
        </>
    )
}