import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {addNum, subNum, changeMessageAction} from './store/features/counter'

// memo 高阶组件包裹起来的组件有对应的特点：只有 props 发生改变时，才会重新渲染
const Home = memo(() => {
  const {message} = useSelector(state => ({
    message: state.counter.message
  }), shallowEqual)

  const dispatch = useDispatch()
  console.log('Home render.')
  return (
    <div>
      <h2>message: {message}</h2>
      <button onClick={e => dispatch(changeMessageAction('哈哈哈哈哈'))}>修改message</button>
    </div>
  )
})

const App = memo((props) => {
  // 1. 使用 useSelector 将 redux 中 store 的数据映射到组件内
  const {count} = useSelector(state => ({
    count: state.counter.count
  }), shallowEqual)

  // 2. 使用 dispatch 直接派发 action
  const dispatch = useDispatch()

  console.log('App render.')
  return (
    <div>
        <button onClick={e => dispatch(addNum(1))}>+1</button>
        <button onClick={e => dispatch(addNum(6))}>+6</button>
        <button onClick={e => dispatch(subNum(6))}>-6</button>
        <hr />
        <h2>count: {count}</h2>
        <hr />
        <Home />
    </div>
  )
})

export default App