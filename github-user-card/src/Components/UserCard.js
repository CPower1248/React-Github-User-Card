import React from "react"
import "./UserCard.css"

function UserCard (props) {
    console.log("This is props: ", props)
    const { users, followers } = props

    return (
        <div className="user-card-container">
            <h2>User Card</h2>
            <div className="user-card">
                <img src={users.avatar_url} alt={users.name} />
                <h3>{users.name}</h3>
                <p>Username: {users.login}</p>
                <p>Location: {users.location}</p>
            </div>
            <div className="followers-card">
                <h4>Followers Card:</h4>
                {followers.map(item => {
                    return (
                        <p>{item.login}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default UserCard