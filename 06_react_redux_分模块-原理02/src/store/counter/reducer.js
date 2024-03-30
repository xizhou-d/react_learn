import { ADD_ACTION, SUB_ACTION } from './contants'

const initState = {
    count: 200
}

function reducer(state = initState, action) {
    switch(action.type) {
        case ADD_ACTION:
            return {...state, count: state.count + action.num}
        case SUB_ACTION:
            return {...state, count: state.count - action.num}
        default:
            return state
    }
}

export default reducer