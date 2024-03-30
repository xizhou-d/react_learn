import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'

export class App extends Component {
  constructor() {
    super()

    this.titleRef = createRef()

    this.titleEl = null
  }
  static propTypes = {}

  getNativeDom = () => {
    // 1.方式一：在 react 元素上绑定一个 ref 字符串
    // console.log(this.refs.why)

    // 2.方式二：提前创建好 ref 对象，createRef()，将创建出来的对象绑定到元素
    // console.log(this.titleRef.current)

    // 3.方式三：传入一个回调函数，在对应的元素被渲染之后，元素渲染后回调函数自动被执行，并且将元素传入
    console.log('this.titleEl', this.titleEl)
  }

  render() {
    return (
      <div>
        <h2 ref='why'>Hello World</h2>
        <h2 ref={this.titleRef}>你好，李银河</h2>
        <h2 ref={element => {this.titleEl = element}}>你好啊，世界 </h2>
        <button onClick={(e => this.getNativeDom())}>获取原生DOM</button>
      </div>
    )
  }
}

export default App