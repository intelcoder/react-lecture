import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Jedi from './Jedi'
import DarkJedi from './DarkJedi'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="universe">
          <div className="jedis">
            <Jedi />
            <DarkJedi />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
