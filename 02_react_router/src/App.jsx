import React from 'react'
import HelloWorld from './components/HelloWorld'
import { Link , useNavigate, useRoutes } from 'react-router-dom'
import routes from './router'
import './App.css'

export default function App(props) {
    const navigate = useNavigate()
    
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
                    <button onClick={(e) => {navigate('/categary')}}>分类</button>
                    <span onClick={e => navigate('/orders')}>订单</span>
                    <Link to='/user?name=why&age=18'>用户</Link>
                </div>
            </div>
            <div className='content'>
                {/* 映射关系：path -> component */}
                {/* 可以用 useRoutes来使用配置的方式 */}
                {/* <Routes>
                    <Route path='/' element={<Navigate to='/home'/>}></Route>
                    <Route path='/home' element={<Home/>}>
                        <Route path='/home' element={<Navigate to='/home/recommand'/>}></Route>
                        <Route path='/home/recommand' element={<HomeRecommanded/>}></Route>
                        <Route path='/home/rank' element={<HomeRanking/>}></Route>
                        <Route path='/home/homesongmenus' element={<HomeSongMenus/>}></Route>
                    </Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/categary' element={<Categary/>}></Route>
                    <Route path='/orders' element={<Orders/>}></Route>
                    <Route path='/detail/:id' element={<Detail/>}></Route>
                    <Route path='/user' element={<User/>}></Route>
                    <Route path='*' element={<NotFound/>}></Route>
                </Routes> */}
                {useRoutes(routes)}
            </div>
            <div className='footer'>footer<hr/></div>
        </div>
    )
}