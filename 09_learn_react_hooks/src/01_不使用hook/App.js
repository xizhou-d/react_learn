import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export class HelloWorld extends PureComponent {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello World.'
    }
  }

  changeText = () => {
    this.setState({
      message: 'Heelelskd'
    })
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <h2>内容：{ message }</h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    )
  }
}

function HelloWorld2(props) {
  let message = 'Hello World'

  // 函数式组件存在的最大缺陷
  // 1. 组件不会被重新渲染：修改message之后，组件不知道是否要重新渲染
  // 2. 如果页面重新渲染：函数会被重新执行，第二次重新执行时，会重新给 message 赋值为 Hello World
  // 3. 类似于生命周期的函数也没有
  return (
    <div>
      <h2>内容：{ message }</h2>
      <button onClick={e => message = "你好，李银河"}>修改文本</button>
    </div>
  )
}

export class App extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div>
        <HelloWorld />
        <HelloWorld2 />
      </div>
    )
  }
}

export default App
