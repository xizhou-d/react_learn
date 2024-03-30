// Routes
import React, { useContext, useLayoutEffect, createContext, useRef, useMemo, useState } from "react";
import { createBrowserHistory, createHashHistory } from 'history'

// import { BrowserRouter } from "./BrowserRouter";

// 创建上下文
const NavigationContext = createContext({})
const LocationContext = createContext({})

function useLocation() {
    return useContext(LocationContext).location
}

function useNavigate() {
    return useContext(NavigationContext).navigator
}

export function BrowserRouter({children}) {
    let historyRef = useRef()

    if (!historyRef.current) {
        historyRef.current = createBrowserHistory()
    }

    let history = historyRef.current
    console.log('history', history)
    const [state, setState] = useState({
        action: history?.action,
        location: history?.location
    })
    // 我们需要监听 history 的变化，用 useLayoutEffect
    // 当 history 变化的时候，有多种情况（浏览器输入，获取 a 标签跳转、api跳转）
    // 派发更新，渲染整个 route 树
    
    useLayoutEffect(() => history?.listen(setState), [history])
    console.log('state', state)
    console.log('children', children)

    return (
        <Router
            children={children}
            location={state.location}
            navigator={history}
            navigationType={state.action}
            className='LSDKFJSDLKFJSLKDF'
        >
        </Router>
    )
}

export function HashRouter({children}) {
    let historyRef = useRef()

    if (historyRef.current === null) {
        historyRef.current = createHashHistory()
    }

    let history = historyRef.current
    const [state, setState] = useState({
        action: history.action,
        location: history.location
    })
    // 我们需要监听 history 的变化，用 useLayoutEffect
    // 当 history 变化的时候，有多种情况（浏览器输入，获取 a 标签跳转、api跳转）
    // 派发更新，渲染整个 route 树
    useLayoutEffect(() => history.listen(setState), [history])

    console.log('state', state)
    console.log('history', history)
    return <Router>
        children={children}
        location={state.location}
        navigator={history}
        navigationType={state.action}
    </Router>
}

export const Router = ({children, location: locationProp, navigator}) => {
    console.log('children33333', children)
    console.log('locationProp', locationProp)
    console.log('navigator', navigator)
    // Router 中的 children 是不能去掉的，是用来渲染 导航按钮还有
    const navigationContext = useMemo(() => ({ navigator }), [navigator])
    const locationContext = useMemo(() => ({ location: locationProp }), [locationProp])

    return <NavigationContext.Provider value={navigationContext}>
        <LocationContext.Provider value={locationContext} >
            {children}
        </LocationContext.Provider>
    </NavigationContext.Provider>
}

export const Route = () => {}
// const Routing = () => useRoutes(routes)
// Routing 就是根据 routes 参数的内容，结合当前浏览器上的 URL，返回具体是哪个 element
function useRoutes(routes) {
    console.log('routes', routes)

    // useRoutes 是被包裹在 Router 里面的，Router 提供了 LocationContext value=locationContext
    // locationContext是从 BrowserRouter 的 state 传递下来的，
    // state 在 history.listen 每次监听到 URL 变化的时候都会重新设置，传递给 Router，达到更新的目的 
    let location = useLocation()    // 当前路径
    let currentPath = location?.pathname || './'
    for (let i = 0; i < routes.length; i++) {
        const { path, element } = routes[i]
        let match = currentPath.match(new RegExp(`^${path}`))

        if (match) {
            return element
        }
    }

    return null
}

// 把所有的 Route 组件，创建成一棵树
export const Routes = ({children}) => 
    useRoutes(createRoutesFromChildren(children))

export const createRoutesFromChildren = (children) => {
    let routes = []

    React.Children.forEach(children, node => {
        let route = {
            path: node.props.path,
            element: node.props.element
        }

        if (node.props.children) {
            route.children = createRoutesFromChildren(node.props.children)
        }

        routes.push(route)
    })

    return routes
}