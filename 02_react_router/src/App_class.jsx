import React from 'react'
import HelloWorld from './components/HelloWorld'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import HomeRecommanded from './pages/HomeRecommanded'
import HomeRanking from './pages/HomeRanking'
import './App.css'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = ({
            message: 'Hello React'
        })
    }
    render() {
        return (
            <div className='app'>
                <div className='header'>
                    <span>header<hr/></span>
                    <div className='nav'>
                        {/* <NavLink to='/home' style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>首页</NavLink>
                        <NavLink to='/about' style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>关于</NavLink> */}

                        {/* <NavLink to='/home' className={({isActive}) => isActive ? 'link-active' : ''}>首页</NavLink>
                        <NavLink to='/about' className={({isActive}) => isActive ? 'link-active' : ''}>关于</NavLink> */}

                        <Link to='/home'>首页</Link>
                        <Link to='/about'>关于</Link>
                        <Link to='/login'>登陆</Link>
                        <button>分类</button>
                        <span>订单</span>
                    </div>
                </div>
                <div className='content'>
                    {/* 映射关系：path -> component */}
                    <Routes>
                        <Route path='/' element={<Navigate to='/home'/>}></Route>
                        <Route path='/home' element={<Home/>}>
                            <Route path='/home/recommand' element={<HomeRecommanded/>}></Route>
                            <Route path='/home/rank' element={<HomeRanking/>}></Route>
                        </Route>
                        <Route path='/about' element={<About/>}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                        <Route path='*' element={<NotFound/>}></Route>
                    </Routes>
                </div>
                <div className='footer'>footer<hr/></div>
            </div>
        )
    }
}