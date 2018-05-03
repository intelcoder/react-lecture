import React, { Component } from 'react'
import PropTypes from 'prop-type'
import './Jedi.css'

class Jedi extends Component {
  render() {
    const { name, title, jediInfo } = this.props
    return (
      <div className="Jedi">
          <h1>{name}</h1>
          <h2>{title}</h2>
          <h4>age: {jediInfo.age}</h4>
      </div> 
    )
  }
}

Jedi.propTypes = {
  name: PropTypes.string,
}

export default Jedi