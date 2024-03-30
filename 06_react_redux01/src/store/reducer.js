const { ADD_ACTION, SUB_ACTION, CHANGE_BANNERS, CHANGE_RECOMMENDS } = require('./contants')

const initState = {
    count: 100,
    banners: [],
    recommends: []
}

function reducer(state = initState, action) {
    switch(action.type) {
        case ADD_ACTION:
            return {...state, count: state.count + action.num}
        case SUB_ACTION:
            return {...state, count: state.count - action.num}
        case CHANGE_BANNERS:
            return {...state, banners: action.banners}
        case CHANGE_RECOMMENDS:
            return {...state, recommends: action.recommends}
        default:
            return state
    }
}

module.exports = {
    reducer
}