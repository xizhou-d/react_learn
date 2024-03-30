export const createStore = function(initState, reducer) {
    let state = initState

    let deps = []

    function getData() {
        return state
    }

    function subscribe(handler) {
        // 订阅了这个数据的 handler, 在数据改变时都能自动执行
        deps.push(handler)
    }

    // 提供一个可预测的，可以固定能力去修改 data 的逻辑
    function dispatch(action) {
        // immutable, 我没有改变 state 本身，而是生成了一个新的 state
        const currentState = reducer(state, action)
        state = currentState
        deps.forEach(fn => fn())
    }

    return { getData, subscribe, dispatch }
}

export const combineReducer = function(reducers) {
    const keys = Object.keys(reducers)
    // 这里返回的 state 就是 18 行的 reducer
    return function(state = {}, action) {
        const nextState = {}
        
        keys.forEach(key => {
            const reducer = reducers[key]
            const prev = state[key]
            const next = reducer(prev, action)
            nextState[key] = next
        })
        console.log('nextState', nextState)

        return nextState
    }
}