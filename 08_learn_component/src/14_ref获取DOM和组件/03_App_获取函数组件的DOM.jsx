import PropTypes from 'prop-types'
import React, { PureComponent, createRef, forwardRef } from 'react'

const HelloWorld = forwardRef(function(props, ref) {
  return (
    <div>
        <span>text content</span>
        <h1 ref={ref}>Hello Wrold</h1>
    </div>
  )
})

const Tab = function(props) {
    return (
      <div>
          <span>Tab Component.</span>
      </div>
    )
  }


export class App extends PureComponent {
  constructor() {
    super()

    this.hwRef = createRef()
    this.tabRef = createRef()
  }

  getComponent = () => {
    console.log('this.hwRef.current', this.hwRef.current)
    console.log('this.tabRef.current', this.tabRef.current)
  }

  render() {
    return (
      <div>
        <HelloWorld ref={this.hwRef} />
        <Tab ref={this.tabRef} />
        <button onClick={e => this.getComponent()}>获取组件实例</button>
      </div>
    )
  }
}

export default App