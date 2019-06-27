import React, { Component } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Card from './Components/Card'

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    pictures: [
      {
        number: 1,
        link: 'something 1'
      }, {
        number: 2,
        link: 'something 2'
      }, {
        number: 3,
        link: 'something 3'
      }, {
        number: 4,
        link: 'something 4'
      }, {
        number: 5,
        link: 'something 5'
      }, {
        number: 6,
        link: 'something 6'
      }, {
        number: 7,
        link: 'something 7'
      }, {
        number: 8,
        link: 'something 8'
      }, {
        number: 9,
        link: 'something 9'
      }, {
        number: 10,
        link: 'something 10'
      }
    ],
    hasBeenClicked: [],
    cardNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  handleClick = e => {
    // check if the id is in this.state.hasBeenClicked
    if ((this.state.cardNumbers.indexOf(parseInt(e.target.id)) >= 0) && (this.state.hasBeenClicked.indexOf(parseInt(e.target.id)) < 0)) {
      // if it isn't
      let beenClicked = this.state.hasBeenClicked
      beenClicked.push(parseInt(e.target.id))
      this.setState({ hasBeenClicked: beenClicked })
      console.log(this.state.hasBeenClicked)
      // increment score (separate function?)
    } else if ((this.state.hasBeenClicked.indexOf(parseInt(e.target.id)) >= 0) && (this.state.cardNumbers.indexOf(parseInt(e.target.id)) >= 0)) {
      console.log('wrong')
    }
    // if it is
    // reset hasBeenClicked, stop score increment, set highest score (separate func?)
  }

  render() {
    return (
      <>
        <Nav currentScore={this.state.currentScore} topScore={this.state.topScore} />
        <p>Something here about what you should do for the game.</p>
        <Card handleClick={this.handleClick} pictures={this.state.pictures} />
        {/* find the randomize function on the NSTAAF HW */}
      </>
    )
  }
}

export default App
