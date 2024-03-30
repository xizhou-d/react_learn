import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import withRouter from '../hoc/with_router'

class Home extends React.Component {
    navigate(path) {
        console.log('path', path)
        console.log('this.props.router', this.props.router)
        this.props.router.navigate(path)
    }
    render() {
        return (
            <div>
                <h1>Home page.</h1>
                <div className='home-nav'>
                    <Link to='/home/recommand'>推荐</Link>
                    <Link to='/home/rank'>排名</Link> 
                    <button onClick={e => this.navigate('/home/homesongmenus')}>歌单</button>
                </div>
                {/* 占位组件 */}
                <Outlet/>
                <Outlet/>
                <Outlet/>
                <Outlet/>
                <Outlet/>
                <Outlet/>
            </div>
        ) 
    }
} 

export default withRouter(Home)