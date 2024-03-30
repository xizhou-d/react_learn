import counterReducer from './counter/reducer'
import homeReducer from './home/reducer'
import userReducer from './user/reducer'
import { createStore, compose, combineReducers  } from 'redux'
import { log, thunk, applyMiddleware } from './middleWare'
// import thunk from 'redux-thunk'

// 使用 combineReducers 将两个 reducer 合并在一起

const reducer = combineReducers({
    count: counterReducer,
    home: homeReducer,
    user: userReducer
})

console.log('reducer', reducer)
// combineReducers 实现原理
// function reducer(state = {}, action) {
//     console.log('state', state)
//     return {
//         count: counterReducer(state.count, action),
//         home: homeReducer(state.home, action),
//         user: userReducer(state.user, action)
//     }
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer)

applyMiddleware(store, log, thunk)

export default store