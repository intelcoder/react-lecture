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
              name='Luke Skywalker'
              title='Jedi Master'
              jediInfo={{
                age: 200
              }}
            />
            <DarkJedi
              name='Darth Vader'
              title='Dark Jedi'
              jediInfo={{
                age: 300
              }}
            />
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
