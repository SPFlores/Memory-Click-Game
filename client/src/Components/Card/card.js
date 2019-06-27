import React, { Component } from 'react'
import './card.css'
import Grid from '@material-ui/core/Grid'

class Card extends Component {
  render() {
    return (
      <>
        {
          this.props.pictures.map(picture => {
            // console.log(this.props)
            return (
            <Grid item xs={6} sm={4} m={4} l={4} xl={4} >
              <div className='card' onClick={this.props.handleClick} key={picture.number} id={picture.number} >
                <h1>Hello</h1>
              </div>
            </Grid >
            )
          })
        }
      </>
    )
  }
}

export default Card
