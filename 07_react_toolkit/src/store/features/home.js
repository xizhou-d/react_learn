import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHomeMutiDataAction = createAsyncThunk(
    'fetch/homemutidata',
    async (extraInfo, {dispatch, getState}) => {
        console.log('dispatch, getState', dispatch, getState)
        const res = await axios.get('http://123.207.32.32:8000/home/multidata')
        const banners = res.data.data.banner.list
        const recommends = res.data.data.recommend.list
        dispatch(changeBanners(banners))
        dispatch(changeRecommends(recommends))
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        banners: [],
        recommends: []
    },
    reducers: {
        changeBanners(state, {payload}) {
            state.banners = payload
        },
        changeRecommends(state, {payload}) {
            state.recommends = payload 
        }
    },
    // extraReducers 对象写法
    // extraReducers: {
    //     [fetchHomeMutiDataAction.pending](state, action) {
    //         console.log('fetchHomeMutiDataAction--pending')
    //     },
    //     [fetchHomeMutiDataAction.fulfilled](state, { payload }) {
    //         console.log('fetchHomeMutiDataAction--fulFilled', payload)
    //         state.banners = payload.data.banner.list
    //         state.recommends = payload.data.recommend.list
    //     },
    //     [fetchHomeMutiDataAction.rejected](state, action) {
    //         console.log('fetchHomeMutiDataAction--rejected ')
    //     }
    // }

    // extraReducers 链式写法
    // extraReducers: (builder) => {
    //     builder.addCase(fetchHomeMutiDataAction.pending, (state, action) => {
    //         console.log('etchHomeMutiDataAction.pending')
    //     }).addCase(fetchHomeMutiDataAction.fulfilled, (state, {payload}) => {
    //         state.banners = payload.data.banner.list
    //         state.recommends = payload.data.recommend.list
    //     })
    // }

    // extraReducers 不监听
    extraReducers: () => {}
})
export const { changeBanners, changeRecommends } = homeSlice.reducer

export default homeSlice.reducer