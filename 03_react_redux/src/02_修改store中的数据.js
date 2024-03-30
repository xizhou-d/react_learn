const store = require('./store')

console.log('store', store.getState())

const name_action = {
    type: 'change_name',
    name: 'James'
}

store.dispatch(name_action)

console.log('store_new', store.getState())

const age_action = {
    type: 'change_age',
    age: 19
}

store.dispatch(age_action)

console.log('store_new2', store.getState())