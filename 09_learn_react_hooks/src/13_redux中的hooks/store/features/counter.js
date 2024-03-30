import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 99,
        message: 'Hello World'
    },
    reducers: {
        addNum(state, {payload}) {
            state.count = state.count + payload
        },
        subNum(state, {payload}) {
            state.count = state.count - payload
        },
        changeMessageAction(state, {payload}) {
            state.message = payload
        }
    }
})

export const {addNum, subNum, changeMessageAction} = counterSlice.actions

export default counterSlice.reducer