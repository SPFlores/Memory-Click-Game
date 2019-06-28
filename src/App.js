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
    cardNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    haveWon: false
  }

  handleClick = e => {
    if ((this.state.currentScore >= 8) && (this.state.cardNumbers.indexOf(parseInt(e.target.id)) >= 0) && (this.state.hasBeenClicked.indexOf(parseInt(e.target.id)) < 0)) {
      let score = this.state.currentScore
      score += 1
      this.setState({ haveWon: true, currentScore: score })
    } else if ((this.state.cardNumbers.indexOf(parseInt(e.target.id)) >= 0) && (this.state.hasBeenClicked.indexOf(parseInt(e.target.id)) < 0) && (this.state.currentScore <= 8)) {
      let beenClicked = this.state.hasBeenClicked
      beenClicked.push(parseInt(e.target.id))
      this.setState({ hasBeenClicked: beenClicked })

      let newPicturesArr = this.state.pictures
      for (let i = (newPicturesArr.length - 1); i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let x = newPicturesArr[i]
        newPicturesArr[i] = newPicturesArr[j]
        newPicturesArr[j] = x
      }

      let score = this.state.currentScore
      score += 1

      this.setState({ currentScore: score, haveWon: false, pictures: newPicturesArr })
    } else if ((this.state.hasBeenClicked.indexOf(parseInt(e.target.id)) >= 0) && (this.state.cardNumbers.indexOf(parseInt(e.target.id)) >= 0)) {
      if (this.state.currentScore > this.state.topScore) {
        let newCurrentScore = this.state.currentScore
        this.setState({ topScore: newCurrentScore })
      }

      let newPicturesArr = this.state.pictures
      for (let i = (newPicturesArr.length - 1); i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let x = newPicturesArr[i]
        newPicturesArr[i] = newPicturesArr[j]
        newPicturesArr[j] = x
      }

      this.setState({ hasBeenClicked: [], currentScore: 0, pictures: newPicturesArr, haveWon: false })
    }
  }

  render() {
    return (
      <>
        <Nav currentScore={this.state.currentScore} topScore={this.state.topScore} />
        <Grid container>
          <Grid item xs={12} sm={12} m={12} l={12} xl={12} >
            {
              this.state.haveWon ? <p>Congratulations, you have won! Great detective work. Click on any image to start again.</p> : <p>Click on the images wihtout repeating one. Good luck, the pictures will move!</p>
            }
            <br />
          </Grid >
          <Card handleClick={this.handleClick} pictures={this.state.pictures} />
        </Grid >
      </>
    )
  }
}

export default App
