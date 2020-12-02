import React from "react"
import axios from "axios"
import './App.css';
import UserCard from "./components/UserCard"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      input: ""
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

  handleChange = e => {
    this.setState({input: e.target.value})
  }

  fetchNewUser = username => {
    axios.get(`https://api.github.com/users/${username}`)
    .then(res => {
      this.setState({user: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.fetchNewUser(`${this.state.input}`)
    this.setState({input: ""})
  }

  fetchNewFollowers = username => {
    axios.get(`https://api.github.com/users/${username}/followers`)
      .then(res => {
        this.setState({followers: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidUpdate() {
    this.fetchNewFollowers(`${this.state.user.login}`)
  }

  render() {
    return (
      <div className="App">
        <h1>-React Github User Card-</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Search Username:
            <input type="text" name="username" value={this.state.input} onChange={this.handleChange} />
          </label>
        </form>
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
