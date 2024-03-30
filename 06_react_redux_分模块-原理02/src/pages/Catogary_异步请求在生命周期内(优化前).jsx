import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { changeBannersAction, changeRecommendsAction } from '../store/actionCreators'

class Categary extends React.Component {
    componentDidMount() {
        axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
            const banners = res.data.data.banner.list
            const recommends = res.data.data.recommend.list

            this.props.changeBanners(banners)
            this.props.changeRecommends(recommends)
        })
    }
    render() {
        return (
            <div>
                <h2>Categary Page: </h2>
            </div>
        )
    }
}

const mapActionsToProps = (dispatch) => ({
    changeBanners(banners) {
        dispatch(changeBannersAction(banners))
    },
    changeRecommends(recommends) {
        console.log('recommends', recommends)
        dispatch(changeRecommendsAction(recommends))
    }
})

export default connect(null, mapActionsToProps)(Categary)