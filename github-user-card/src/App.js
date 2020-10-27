import React from "react"
import Axios from "axios"
import './App.css';
import UserCard from "./Components/UserCard"

class App extends React.Component {
  state = {
    users: {},
    followers: []
  }

  fetchUser = () => {
    Axios.get("https://api.github.com/users/CPower1248")
      .then(res => {
        console.log("This is user res: ", res)
        this.setState({users: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  fetchFollowers = () => {
    Axios.get("https://api.github.com/users/CPower1248/followers")
      .then(res => {
        console.log("This is followers res: ", res)
        this.setState({followers: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.fetchUser()
    this.fetchFollowers()
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard users={this.state.users} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;