import { useSelector } from "react-redux"


export function Messenger() {
    const users = useSelector(storeState => storeState.userModule.users)
    return (
       <section className="messenger-page">
            <div className="messenger-list">
                {users.map(user => (
                    <div key={user._id} className="messenger-user">
                        <img src={user.imgUrl} alt={user.username} />
                        <span>{user.username}</span>
                    </div>
                ))}
            </div>
            <div className="messenger-chat">
        
        <input type="text" />
            </div>
        </section>
    )
}
