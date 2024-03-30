import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {addNum, subNum} from './store/features/counter'

const App = memo((props) => {
  // 1. 使用 useSelector 将 redux 中 store 的数据映射到组件内
  const {count} = useSelector(state => ({
    count: state.counter.count
  }), shallowEqual)

  // 2. 使用 dispatch 直接派发 action
  const dispatch = useDispatch()

  return (
    <div>
        <button onClick={e => dispatch(addNum(1))}>+1</button>
        <button onClick={e => dispatch(addNum(6))}>+6</button>
        <button onClick={e => dispatch(subNum(6))}>-6</button>
        <hr />
        <h2>count: {count}</h2>
    </div>
  ) 
})

export default App