const { createStore } = require('redux')

const initialState = {
    name: 'why',
    age: 18
}

function reducer(state = initialState, action) {
    console.log('state, action', state, action)
    if (action.type === 'change_name') {
        return {...state, name: action.name}
    } else if (action.type === 'change_age') {
        return {...state, age: action.age}
    }
    return initialState
}

const store = createStore(reducer)

module.exports = store

