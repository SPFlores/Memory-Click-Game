import React, { Component } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Card from './Components/Card'

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    hasbeenclicked: true,
    hasnotbeenclicked: false,
    pictures: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  handleClick = e => {
    console.log(e.target)
  }

  render() {
    return (
      <>
        <Nav currentScore={this.state.currentScore} topScore={this.state.topScore} />
        <p>Something here about what you should do for the game.</p>
        <Card handleClick={this.handleClick} pictures={this.state.pictures} clicked={this.state.hasnotbeenclicked} />
        {/* find the randomize function on the NSTAAF HW */}
      </>
    )
  }
}

export default App
