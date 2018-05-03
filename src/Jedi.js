import React, { Component } from 'react'
import PropTypes from 'prop-type'
import './Jedi.css'

class Jedi extends Component {
  render() {
    const { type = 'white', name, title, jediInfo, hp } = this.props
    return (
      <div className={ type }>
          <h1>{name}</h1>
          <h2>{title}</h2>
          <h4>age: {jediInfo.age}</h4>
          <div className="hp" style={{width: hp + '%'}}></div>
      </div> 
    )
  }
}

Jedi.propTypes = {
  name: PropTypes.string,
}

export default Jedi