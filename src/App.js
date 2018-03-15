import React, { Component } from 'react';
import logo from './gamecontroller.png';
import './App.css';
import GameState from './GameState.js';
import Controls from './Controls.js';
import axios from 'axios';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Button Pong Console</h1>
        </header>
        <p className="App-intro">
            Awesomeness
        </p>
        <GameState /> 
        <Controls />
      </div>
    );
  }
}

export default App;
