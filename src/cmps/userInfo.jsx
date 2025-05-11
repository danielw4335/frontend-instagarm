
export function UserInfo({ user }) {
    const { fullname, imgUrl } = user

    return (
        <div className="user-info">
            <img className="user-img" src={imgUrl} alt="user" />
            <h3>{fullname}</h3>
        </div>
    )
}