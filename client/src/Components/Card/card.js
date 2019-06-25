import React, { Component } from 'react'
import './card.css'

class Card extends Component {
  render() {
    return (
      <>
        {
          this.props.pictures.map(picture => {
            return (
              <div className='card' onClick={this.props.handleClick}>
                <h1>{picture}</h1>
              </div>
            )
          })
        }
      </>
    )
  }
}

export default Card
