import React, { memo, useEffect, useState } from 'react'
import store from './index.js'

const Counter = memo(() => {
    const [counter, setCounter] = useState(1) 
    useEffect(() => {
        store.subscribe(() => {
            let currentData = store.getData()
            setCounter(currentData.counter.count)
        })
    }, [])

    function handleClick1() {
        store.dispatch({
            type: 'DECREMENT'
        })
    }

    function handleClick2() {
        store.dispatch({
            type: 'INCREMENT'
        })
    }

    console.log('counter', counter)
    return (
        <div>
            <button onClick={handleClick1}>修改counter</button>
            <button onClick={handleClick2}>修改</button>
            <h2>{counter}</h2>
        </div>
    )
})

export default Counter