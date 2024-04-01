import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    handleChangeNum = () => {
        /**
         * 使用这种方式调用的，会直接三次完全生效，因为传递的是函数的话，会将每次修改后的对象，传递给下一次 setState 的 callback 作为参数
         * 
         * React会对异步的setstate进行优化，将多次setstate进行合并(将多次状态改变完成后，再统一对state进行改变，然后触发render)
         */
        // cur 是当前的 state 对象
        this.setState(cur => {
            return {
                num: cur.num + 1
            }
        }, () => {
            // ⚠️ 这个 callback 会在所有的 setState 全部完成之后，并且在 render 后才会执行
            console.log('第一次 setState 完成')
        })

        this.setState(cur => {
            return {
                num: cur.num + 1
            }
        })

        this.setState(cur => {
            return {
                num: cur.num + 1
            }
        })
    }
    
  render() {
    // 调用了三次 setState 只渲染了一次
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
