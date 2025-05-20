import { useSelector } from "react-redux"


export function Messenger() {
    const users = useSelector(storeState => storeState.userModule.users)
    const loggedinUser = useSelector(storeState => storeState.userModule.loggedinUser)
    return (
        <section className="messenger-page">
            <div className="messenger-list">
                <div className="messenger-header">
                    <p>{loggedinUser?.username}</p>
                <img src={loggedinUser?.imgUrl} />
                    <button><img src="/path/to/icon.create.svg" alt="New message" /></button>
                </div>

                {users.map(user => (
                    <div key={user._id} className="messenger-user">
                        <span>{user.username}</span>
                        <img src={user.imgUrl} />
                    </div>
                ))}
            </div>
            <div className="messenger-chat">

                <input type="text" />
            </div>
        </section>
    )
}
