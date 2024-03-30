import { CHANGE_BANNERS, CHANGE_RECOMMENDS } from './contants'

const initState = {
    banners: [],
    recommends: []
}

function reducer(state = initState, action) {
    switch(action.type) {
        case CHANGE_BANNERS:
            return {...state, banners: action.banners}
        case CHANGE_RECOMMENDS:
            return {...state, recommends: action.recommends}
        default:
            return state
    }
}

export default reducer