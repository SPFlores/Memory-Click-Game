import React, { Component } from 'react'
import './card.css'

class Card extends Component {
  state = {

  }

  render() {
    return (
      <>
        {
          this.props.pictures.map(picture => {
            // console.log(this.props)
            return (
              <div className='card' onClick={this.props.handleClick} key={picture.number} id={picture.number} >
                {/*<h1 id={picture.number}>{picture.link}</h1>
                <h2>{
                  !this.props.clicked ? 'false' : 'true'
                }</h2> */}
              </div>
            )
          })
        }
      </>
    )
  }
}

export default Card
