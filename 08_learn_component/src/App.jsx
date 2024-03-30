import PropTypes from 'prop-types'
import React, { PureComponent, createRef, forwardRef } from 'react'

const HelloWorld = forwardRef(function(props, ref) {
  return (
    <h1 ref={ref}>Hello Wrold</h1>
  )
})

export class App extends PureComponent {
  constructor() {
    super()

    this.hwRef = createRef()
  }

  getComponent = () => {
    console.log('this.hwRef.current', this.hwRef.current)
  }

  render() {
    return (
      <div>
        <HelloWorld ref={this.hwRef} />
        <button onClick={e => this.getComponent()}>获取组件实例</button>
      </div>
    )
  }
}

export default App