import React, { Component } from 'react'

export default class App extends Component {
    state = {
        num: 0
    }

    constructor(props) {
        super(props)
        // 这种情况也只会触发一次渲染
        setInterval(() => {
            this.setState({
                num: this.state.num + 1
            })
    
            this.setState({
                num: this.state.num + 1
            })
    
            this.setState({
                num: this.state.num + 1
            })
        }, 2000)
    }

    handleChangeNum = () => {
        // 连续调用 this.setState 只会生效一次，只能在原来的基础上 +1
        // 因为 setState 在元素的事件中是异步的，因此，第二次、第三次或者更多次调用的时候 this.state.num 还是 0，所以只能在原来的基础上 +1，并且 render 中的打印也只能打印一次，因为 state.num 就发生了一次变化
        this.setState({
            num: this.state.num + 1
        })

        this.setState({
            num: this.state.num + 1
        })

        this.setState({
            num: this.state.num + 1
        })
    }
    
  render() {
    console.log('render')
    return (
        <div>
            <h1>APP</h1>
            <h2>{this.state.num}</h2>
            <button onClick={this.handleChangeNum}>+ 1</button>
        </div>
    )
  }
}
