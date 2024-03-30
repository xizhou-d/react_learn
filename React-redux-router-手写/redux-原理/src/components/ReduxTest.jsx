import React, { memo } from 'react'
import connect from '../store/connect'

const ReduxTest = memo((props) => {
    const { counter, add, sub } = props
    console.log('COUNTER', counter)


    return (
        <div>
            <h2>ReduxTest: { counter.count }</h2>
            <button onClick={() => sub()}>-1</button>
            <button onClick={() => add()}>+1</button>
        </div>
    )
})

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    add: function () {
        dispatch({ type: 'INCREMENT' })
    },
    sub: function () {
        dispatch({ type: 'DECREMENT' })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)