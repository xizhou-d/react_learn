const { createStore } = require('redux')

const initialState = {
    name: 'why',
    age: 18
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'change_name':
            return {...state, name: action.name}
        case 'change_age':
            return {...state, age: action.age}
        default:
            return state
    }
}

const store = createStore(reducer)

module.exports = store

