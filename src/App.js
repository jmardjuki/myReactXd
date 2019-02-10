import React, { Component } from 'react';
import './App.css';
import User from "./components/User";
import Dash from "./components/Dash";

class App extends Component {
  render() {
    return (
    <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <User/>
                </div>
                <div className="col-xs-7 form-container">
                  <Dash />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
