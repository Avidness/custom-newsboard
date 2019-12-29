import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <embed
          src="http://localhost/test"
          style={{ width: "500px", height: "300px" }}
        ></embed>
      </div>
    );
  }
}

export default App;
