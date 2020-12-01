import React from "react"
import axios from "axios"
import './App.css';
import UserCard from "./components/UserCard"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  fetchUser = () => {
    axios.get("https://api.github.com/users/CPower1248")
      .then(res => {
        this.setState({user: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  fetchFollowers = () => {
    axios.get("https://api.github.com/users/CPower1248/followers")
      .then(res => {
        console.log("THIS IS FOLLOWERS RES: ", res)
        this.setState({followers: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>-React Github User Card-</h1>
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
