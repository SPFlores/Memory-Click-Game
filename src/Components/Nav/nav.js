import React, { Component } from 'react'
import './nav.css'

class Nav extends Component {
  render() {
    return (
      <>
        <div id='navbar'>
          <span>Clicking Game</span>
          <span>Click an image to begin!</span>
          <span>Score: {this.props.currentScore} | Top score: {this.props.topScore} </span>
        </div>
      </>
    )
  }
}

export default Nav
