import React, { memo, useState, useCallback, PureComponent, useRef } from 'react'

// useCallback 优化的点：
// 1. 当需要将一个函数传递给子组件时，最好使用 useCallback 进行优化，将优化后的函数，传递给子组件

const HYIncrement = memo((props) => {
    const {increment} = props

    console.log('HYIncrement 被重新渲染')
    return (
        <div>
            <button onClick={increment}>increment + 1</button>
        </div>
    )
})

// 使用 useCallback 时，如果传递给组件，组件是函数式组件时必须使用 memo 包裹，如果是 class 组件必须 extends React.PureComponent
// class HYIncrement extends PureComponent {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         const {increment} = this.props
//         return (
//             <div>
//                 <button onClick={increment}>increment + 1</button>
//             </div> 
//         )
//     }
// }

const App = memo(() => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello World.')

//   const increment = e => {
//     setCount(count + 1)
//   }

//   function increment(e) {
//     setCount(count + 1)
//   }

//   闭包陷阱：useCallback
  const increment = useCallback(function(e) {
    console.log('increment')
    setCount(count + 1)
  }, [count]) 

//   进一步优化：当 count 发生改变的时候，也使用同一个函数
//   做法一：将依赖项 count 移除掉，缺点：闭包陷阱
//   做法二：useRef 
//   const countRef = useRef()
//   countRef.current = count
//   const increment = useCallback(function(e) {
//     console.log('increment')
//     setCount(countRef.current + 1)
//   }, []) 

  return (
    <div>
        <h2>计数：{count}</h2>

        <button onClick={increment}>+1</button>
        <HYIncrement increment={increment}></HYIncrement>
        <hr />
        <h2>message: {message}</h2>
        <button onClick={e => setMessage(Math.random())}>修改 message</button>
    </div>
  )
})

export default App