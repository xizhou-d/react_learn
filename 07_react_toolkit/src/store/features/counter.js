import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 888
    },
    reducers: {
        addNum(state, {payload}) {
            console.log('state', state)
            state.counter = state.counter + payload
        },
        subNum(state, { payload}) {
            state.counter = state.counter - payload
        }
    }
})

console.log('counterSlice', counterSlice)

export const { addNum, subNum } = counterSlice.actions

export default counterSlice.reducer