const store = require('./store')

const unsubscribe = store.subscribe(() => {
    console.log('订阅数据：', store.getState())
})

store.dispatch({ type: 'change_name', name: 'James'})

unsubscribe()

store.dispatch({ type: 'change_age', age: 19 })
 