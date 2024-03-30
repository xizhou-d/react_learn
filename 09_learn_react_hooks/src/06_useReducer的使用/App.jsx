import React, { memo, useReducer, useState } from 'react'

function reducer(state, action) {
    switch(action.type) {
        case "increment":
            return {...state, count: state.count + 1}
        case "decrement":
            return {...state, count: state.count - 1}
        case "add_num":
            return {...state, count: state.count + action.num}
        case "sub_num":
            return {...state, count: state.count - action.num}
        default:
            return state
    }
}

const App = memo(() => {
  // const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <div>
        <h2>当前计数：{state.count}</h2>

        {/* <button onClick={e => setCount(count + 1)}>+1</button>
        <button onClick={e => setCount(count - 1)}>-1</button>
        <button onClick={e => setCount(count + 5)}>+5</button>
        <button onClick={e => setCount(count - 5)}>-5</button>
        <button onClick={e => setCount(count + 100)}>+100</ button> */}

        <button onClick={e => dispatch({type: 'increment'})}>+1</button>
        <button onClick={e => dispatch({type: 'decrement'})}>-1</button>
        <button onClick={e => dispatch({type: 'add_num', num: 5})}>+5</button>
        <button onClick={e => dispatch({type: 'sub_num', num: 5})}>-5</button>
        <button onClick={e => dispatch({type: 'add_num', num: 100})}>+100</ button>
    </div>
  )
})

export default App