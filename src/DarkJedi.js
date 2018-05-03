import React, { Component } from 'react'
import './DarkJedi.css'

class DarkJedi extends Component {
  render() {
    const { name, title, jediInfo } = this.props
    return (
      <div className="vader">
          <h1>{name}</h1>
          <h2>{title}</h2>
          <h4>age: {jediInfo.age}</h4>
      </div> 
    )
  }
}

export default DarkJedi