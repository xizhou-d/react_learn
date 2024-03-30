const store = require('./store')
const { changeNameAction, changeAgeAction } = require('./store/actionCreators')

const unsubscribe = store.subscribe(() => {
    console.log('订阅数据：', store.getState())
})

store.dispatch(changeNameAction('Janms'))
store.dispatch(changeNameAction('Lilei'))
store.dispatch(changeNameAction('Andongni'))

unsubscribe()

store.dispatch(changeAgeAction(19))
store.dispatch(changeAgeAction(20))
store.dispatch(changeAgeAction(21))
store.dispatch(changeAgeAction(22))
 