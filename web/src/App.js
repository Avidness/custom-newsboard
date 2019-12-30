import React, { Component } from 'react'
import Box from './components/Box'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    users: [],
    loading: false,
  }

  async componentDidMount() {
    console.log(process.env)
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    )
    this.setState({ users: res.data, loading: false })
  }

  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    )
    console.log(res)
    this.setState({ users: res.data, loading: false })
  }

  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <Box>
                <iframe
                  id="forecast_embed"
                  frameborder="0"
                  height="245"
                  width="100%"
                  src="//forecast.io/embed/#lat=40.766460&lon=-73.986150&name=Hell's Kitchen"
                ></iframe>
              </Box>
            </div>
            <div class="col-sm">
              <embed
                src="http://localhost/test"
                style={{ width: '500px', height: '300px' }}
              ></embed>
            </div>
            <div class="col-sm">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=adavidness%40gmail.com&ctz=America%2FNew_York"
                width="800"
                height="600"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
