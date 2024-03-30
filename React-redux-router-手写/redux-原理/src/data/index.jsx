import React, { memo, useEffect, useState } from 'react'
import { createData, createStore } from './data'

const initData = {
    counter: 1
}

const myReducer = (data, action) => {
    console.log('action11111', action)
    switch(action.type) {
        case 'INCREMENT':
            return { ...data, counter: data.counter + 1}
        case 'DECREMENT':
            return { ...data, counter: data.counter - 1}
        default:
            return data
    }
}

const dataObject = createData(initData, myReducer)

const Counter = memo(() => {
    const [counter, setCounter] = useState(1) 
    useEffect(() => {
        dataObject.subscribe(() => {
            let currentData = dataObject.getData()
            setCounter(currentData.counter)
        })
    }, [])

    function handleClick1() {
        // dataObject.UNSAFE_changeData({
        //     count: {
        //         value: 1
        //     }
        // })

        dataObject.setDataByAction({
            type: 'DECREMENT'
        })
    }

    function handleClick2() {
        dataObject.setDataByAction({
            type: 'INCREMENT'
        })
    }
    return (
        <div>
            <button onClick={handleClick1}>修改counter</button>
            <button onClick={handleClick2}>修改</button>
            <h2>{counter}</h2>
        </div>
    )
})

export default Counter