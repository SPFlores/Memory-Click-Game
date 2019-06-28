import React, { Component } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Card from './Components/Card'
import Grid from '@material-ui/core/Grid'
import Alfred from './Images/alfred.jpg'
import Babs from './Images/barbara.jpg'
import Cass from './Images/cassandra.jpg'
import Dami from './Images/dami.png'
import Dick from './Images/nightwing.jpg'
import Jason from './Images/redhood.jpg'
import Tim from './Images/redrobin.jpg'
import Bruce from './Images/batman.png'
import Steph from './Images/stephanie.jpg'

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    pictures: [
      {
        number: 1,
        link: Alfred
      }, {
        number: 2,
        link: Babs
      }, {
        number: 3,
        link: Cass
      }, {
        number: 4,
        link: Dami
      }, {
        number: 5,
        link: Dick
      }, {
        number: 6,
        link: Jason
      }, {
        number: 7,
        link: Tim
      }, {
        number: 8,
        link: Bruce
      }, {
        number: 9,
        link: Steph
      }
    ],
    hasBeenClicked: [],
    cardNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  handleClick = e => {
    if ((this.state.cardNumbers.indexOf(parseInt(e.target.id)) >= 0) && (this.state.hasBeenClicked.indexOf(parseInt(e.target.id)) < 0)) {
      let beenClicked = this.state.hasBeenClicked
      beenClicked.push(parseInt(e.target.id))
      this.setState({ hasBeenClicked: beenClicked })
      let score = this.state.currentScore
      score += 1
      this.setState({ currentScore: score })

      let newPicturesArr = this.state.pictures
      for (let i = (newPicturesArr.length - 1); i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let x = newPicturesArr[i]
        newPicturesArr[i] = newPicturesArr[j]
        newPicturesArr[j] = x
      }
      this.setState({ pictures: newPicturesArr })
    } else if ((this.state.hasBeenClicked.indexOf(parseInt(e.target.id)) >= 0) && (this.state.cardNumbers.indexOf(parseInt(e.target.id)) >= 0)) {
      if (this.state.currentScore > this.state.topScore) {
        let newCurrentScore = this.state.currentScore
        this.setState({ topScore: newCurrentScore })
      }
      this.setState({ hasBeenClicked: [], currentScore: 0 })

      let newPicturesArr = this.state.pictures
      for (let i = (newPicturesArr.length - 1); i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let x = newPicturesArr[i]
        newPicturesArr[i] = newPicturesArr[j]
        newPicturesArr[j] = x
      }
      this.setState({ pictures: newPicturesArr })
    }
  }

  render() {
    return (
      <>
        <Nav currentScore={this.state.currentScore} topScore={this.state.topScore} />
        <p>Something here about what you should do for the game.</p>
        <Grid container>
          <Card handleClick={this.handleClick} pictures={this.state.pictures} />
        </Grid >
        {/* find the randomize function on the NSTAAF HW */}
      </>
    )
  }
}

export default App
