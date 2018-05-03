import React, { Component } from 'react'
import './App.css'


import Jedi from './Jedi'
import DarkJedi from './DarkJedi'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="universe">
          <div className="jedis">
            <Jedi
              type="light"
              name='Luke Skywalker'
              title='Jedi Master'
              jediInfo={{
                age: 200
              }}
              hp={100}
            />
            <Jedi
              type="dark"
              name='Darth Vader'
              title='Dark Jedi'
              jediInfo={{
                age: 300
              }}
              hp={100}
            />
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
