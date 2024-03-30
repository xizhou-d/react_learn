import axios from 'axios'

export const { ADD_ACTION, SUB_ACTION, CHANGE_BANNERS, CHANGE_RECOMMENDS } = require('./contants')

export const addAction = (num) => ({type: ADD_ACTION, num})

export const subAction = (num) => ({type: SUB_ACTION, num})

export const changeBannersAction = (banners) => ({type: CHANGE_BANNERS, banners})

export const changeRecommendsAction = (recommends) => ({type: CHANGE_RECOMMENDS, recommends})

export const fetchHomemutilDataSction = () => {
    return function(dispatch, getState) {
        axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
            const banners = res.data.data.banner.list
            const recommends = res.data.data.recommend.list

            dispatch(changeBannersAction(banners))
            dispatch(changeRecommendsAction(recommends))
        })
    }
}