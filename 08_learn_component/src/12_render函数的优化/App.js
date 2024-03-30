import React, { PureComponent } from 'react'
import { flushSync } from 'react-dom'
import Home from './Home'
import Recommend from './Recommend'
import Profile from './Profile'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      message: 'Hello World', 
      count: 0
    }
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.message !== nextState.message || this.state.count !== nextState.count ) {
  //     return true
  //   }
  //   return false
  // }

  changeText = () => {
    this.setState({
      message: '你好，李银河。'
    })
  }
 
  render() {
    console.log('App render function.')
    const { count, message } = this.state
    return (
      <div>
        <h2>App-{message}-{count}</h2>
        <button onClick={this.changeText}>修改文本</button>
        <button onClick={this.handleAdd}>+1</button>
        <Home message={message}/>
        <Recommend count={count} />
        <Profile message={message} />
      </div>
    )
  }
}

export default App