import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainproductList from './MainproductList'
import axios from 'axios'

export class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            banners: [],
            productList: []
        }
    }

    componentDidMount() {
        axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
            console.log('res', res)
            const banners = res.data.data.banner.list
            const recommend = res.data.data.recommend.list

            this.setState({
                banners,
                productList: recommend 
            })
        })
    }

    render() {
        const {banners, productList} = this.state
        return (
            <div>
                <h1>Main Page.</h1>
                <MainBanner banners={banners} title='轮播图' />
                <MainBanner />
                <MainproductList productList={productList} />
            </div>
        )  
    }
}

export default Main