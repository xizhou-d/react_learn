import React, { PureComponent } from 'react'

class CounterClass extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    addNum = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    subNum = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
      const { count } = this.state 
      return (
        <div>
            <h2>count: { count }</h2>
            <button onClick={(e) => {this.addNum()}}>+1</button>
            <button onClick={(e) => {this.subNum()}}>-1</button>
        </div>
      )
    }
  }

export default CounterClass