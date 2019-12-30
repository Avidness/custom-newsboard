import React, { Component } from 'react'
import Box from './components/Box'
import axios from 'axios'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="">
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
                src="http://localhost/fandango"
                style={{ width: '500px', height: '300px' }}
              ></embed>
            </div>
            <div class="col-sm">
              <embed
                src="http://localhost/bbc"
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
            <div align="center">
              <iframe
                align="center"
                src="//widget.calendarlabs.com/v1/quot.php?cid=101&ver=1.2&uid=1599182854&c=random&l=en&cbg=FFFFFF&cb=1&cbc=000000&cf=calibri&cfg=000000&qfs=bi&qta=center&tfg=000000&tfs=bi&afc=000000&afs=i"
                width="188"
                height="210"
                allowtransparency="true"
              >
                Loading...
              </iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
