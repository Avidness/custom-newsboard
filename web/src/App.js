import React, { Component } from 'react'
import Box from './components/Box'
import Weather from './components/Weather'
import Quote from './components/Quote'
import News from './components/News'
import Movies from './components/Movies'
import Calendar from './components/Calendar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="">
          <div className="row">
            <Box>
              <Weather />
            </Box>
            <Box>
              <Quote />
            </Box>
            <Box>
              <Movies />
            </Box>
            <Box>
              <News />
            </Box>
            <Box>
              <Calendar />
            </Box>
          </div>
        </div>
      </div>
    )
  }
}

export default App
