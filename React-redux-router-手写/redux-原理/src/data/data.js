export const createData = function(initState, reducer) {
    let data = initState

    let deps = []

    function getData() {
        return data
    }

    function subscribe(handler) {
        // 订阅了这个数据的 handler, 在数据改变时都能自动执行
        deps.push(handler)
    }

    function UNSAFE_changeData(newData) {
        // 提供一个修改 data 的方法，修改 data 之后，挨个执行订阅这个数据的方法
        // newData 可以传进来任何值，这样是不行的
        data = newData
        deps.forEach(fn => fn())
    }

    // 提供一个可预测的，可以固定能力去修改 data 的逻辑
    function setDataByAction(action) {
        // immutable, 我没有改变 state 本身，而是生成了一个新的 state
        const currentState = reducer(data, action)
        data = currentState
        deps.forEach(fn => fn())
    }

    return { getData, subscribe, UNSAFE_changeData, setDataByAction }
}