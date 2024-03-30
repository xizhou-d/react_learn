import React, { Component } from 'react'
import eventBus from '../utils/event_bus'

export class HomeBanner extends Component {
  prevClick() {
    console.log('prev click')
    eventBus.emit('prevClick', 'why', 18, 189)
  }

  nextClick() {
    console.log('next click')
  }

  render() {
    return (
      <div>
        <h2>HomeBanner Page.</h2>
        <button onClick={this.prevClick}>上一个</button>
        <button onClick={this.nextClick}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner