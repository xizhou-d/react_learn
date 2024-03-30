import React from 'react'
import Home from '../pages/Home'
// About 和 Login 使用 React.lazy(import('../page/XXX') 做分包处理
// import About from '../pages/About'
// import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import HomeRecommanded from '../pages/HomeRecommanded'
import HomeRanking from '../pages/HomeRanking'
import Categary from '../pages/Categery'
import Orders from '../pages/Orders'
import Detail from '../pages/Detail'
import HomeSongMenus from '../pages/HomeSongMenus'
import User from '../pages/User'
import { Navigate } from 'react-router-dom'

const About = React.lazy(() => import('../pages/About'))
const Login = React.lazy(() => import('../pages/Login'))

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

const routes = [
    {
        path: '/',
        element: <Navigate to='/home' />
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: '/home',
                element: <Navigate to='/home/recommand' />
            },
            {
                path: '/home/recommand',
                element: <HomeRecommanded/>
            },
            {
                path: '/home/rank',
                element: <HomeRanking/>
            },
            {
                path: '/home/homesongmenus',
                element: <HomeSongMenus/>
            }
        ]
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/categary',
        element: <Categary/>
    },
    {
        path: '/orders',
        element: <Orders/>
    },
    {
        path: '/detail/:id',
        element: <Detail/>
    },
    {
        path: '/user',
        element: <User/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]

export default routes