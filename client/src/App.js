import React, { Component } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Card from './Components/Card'

const pictures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0
  }

  handleClick = event => {
    console.log(event)
  }

  render() {
    return (
      <>
        <Nav currentScore={this.state.currentScore} topScore={this.state.topScore} />
        <Card handleClick={this.handleClick} pictures={pictures}/>
      </>
    )
  }
}

export default App
