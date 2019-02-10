import React, { Component } from 'react';
import './App.css';
import Dash from "./components/Dash";
import Calendar from "./components/Calendar";

class App extends Component {
  render() {
    return (
    <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Dash />
                </div>
                <div className="col-xs-7 form-container">
                  <Calendar/>
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
