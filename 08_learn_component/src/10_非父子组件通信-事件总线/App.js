import React, { Component } from 'react'
import Home from './components/Home'
import eventBus from './utils/event_bus'

export class App extends Component {
  componentDidMount() {
    eventBus.on('prevClick', this.bannerPrevClick)
  }

  bannerPrevClick(name, age, height) {
    console.log('App 中监听到 HomeBanner 中触发的事件 ')
    console.log('this', this)
  }

  componentWillUnmount() {
    eventBus.off('prevClick', this.bannerPrevClick)
  }
  render() {
    return (
      <div>
        <h2>App</h2>
        <Home />
      </div>
    )
  }
}

export default App