import React from "react"

const UserCard = props => {
    const { user, followers } = props
    console.log("FOLLOWERS: ", followers)

    return (
        <div className="usercard">
            <h3>User Card</h3>
            <img src={user.avatar_url} alt="corey" />
            <p>Name: {user.name}</p>
            <p>Login: {user.login}</p>
            <p>Twitter: {user.twitter_username}</p>
            <p>Location: {user.location}</p>
            <p>Public Repos: {user.public_repos}</p>
            <div className="bio">
                <p>Bio:</p>
                <p>{user.bio}</p>
            </div>
            <div className="followers">
                <h5>Followers:</h5>
                {followers.map(item => {
                    return (
                        <div className="follower">
                            <img src={item.avatar_url} alt="follower" />
                            <p>{item.login}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserCard;
