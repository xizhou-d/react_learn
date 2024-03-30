import React, { memo } from 'react'
import { connect } from 'react-redux'
import {addNum, subNum} from './store/features/counter'

const App = memo((props) => {
  const {count, addNumAction, subNumAction} = props
  return (
    <div>
        <button onClick={e => addNumAction(1)}>+1</button>
        <button onClick={e => addNumAction(6)}>+6</button>
        <button onClick={e => subNumAction(6)}>-6</button>
        <hr />
        <h2>count: {count}</h2>
    </div>
  )
})

const mapStateToProps = (state) => ({
    count: state.counter.count
})

const mapDispatchToProps = (dispatch) => ({
    addNumAction(num) {
        dispatch(addNum(num))
    },
    subNumAction(num) {
        dispatch(subNum(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)