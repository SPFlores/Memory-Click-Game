import React, { Component } from 'react'
import './card.css'

class Card extends Component {
  // componentDidMount = _ => {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        {
          this.props.pictures.map(picture => {
            console.log(this.props)
            return (
              <div className='card' onClick={this.props.handleClick} key={picture} id={this.props.clicked} >
                {picture}
              </div>
            )
          })
        }
      </>
    )
  }
}

export default Card
