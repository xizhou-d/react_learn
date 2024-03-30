import { createStore, combineReducer } from './redux'

const initState = {
    counter: {
        count: 0
    },
    age: {
        a: 18
    }
}

const counterReducer = function(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + 1}
        case 'DECREMENT':
            return { count: state.count - 1}
        default:
            return state
    }
}

const ageReducer = function(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return { a: state.age + 1 }
        case 'DECREMENT':
            return { a: state.age - 1 }
        default:
            return state
    }
}

const reducers = combineReducer({
    counter: counterReducer,
    age: ageReducer 
})

const store = createStore(initState, reducers)

export default store