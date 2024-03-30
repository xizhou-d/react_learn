import { BrowserRouter, Routes, Route, Outlet, Link, useRoutes, useParams, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import { Suspense, lazy, useState } from 'react'

const NavLink = ({to, children}) => {
    return (
        <div className='mx-2 hover:text-blue-600 cursor-pointer'>
            <Link to={to}>{children}</Link>
        </div>
    )
}

const Menu = () => (
    <div>
        <header className='w-full h-14 flex flex-row jusitify-start items-center bg-blue-200'>
            <NavLink to='/'>首页</NavLink>
            <NavLink to='/list'>新闻列表</NavLink>
            <NavLink to='/about'>关于我们</NavLink>
            <NavLink to='/hot'>热点新闻</NavLink>
            <NavLink to='/lazy'>lazy page</NavLink>
        </header>
        <Outlet></Outlet>
    </div>
)

const List = () => {
    const [newLists, setNewLists] = useState([
        {
            id: 111, name: '流行音乐'
        },
        {
            id: 112, name: '古典音乐'
        },
        {
            id: 113, name: '欧美音乐'
        }
    ])

    const navigate = useNavigate()

    function handleClick(e) {
        const id = e.target.id
        navigate('/post/' + id)
    }
    return (
        <div>
            <h2>This is the news page.</h2>
            <ul onClick={handleClick}>
                {
                    newLists.map(item => {
                        return <li key={item.id} id={item.id}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

const About = () => (
    <div>
        This is the About page.
    </div>
)

const Hot = () => (
    <div>
        This is the Hot page.
    </div>
)

const Post = () => {
    const {id} = useParams()

    const location = useLocation()
    console.log('location', location)
    return (
        <div>
            {id}: news detail.
        </div>
    )
}

const LazyPage = lazy(() => import('./LazyPage'))

const routes = [
    {
        path: '/',
        element: <Menu />,
        children: [
            {
                path: '/list',
                element: <List />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/hot',
                element: <Hot />
            },
            {
                path: '/lazy',
                element: <Suspense fallback={<div>laoding......</div>}>
                    <LazyPage />
                </Suspense>
            },
            {
                path: '/post/:id',
                element: <Post />
            }
        ]
    }
]

const Routing = () => useRoutes(routes)

const App = () => {
    return <BrowserRouter>
        {/* <Routes>
            <Route path='/' element={<Menu />}>
                <Route path='/list' element={<List />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/hot' element={<Hot />}></Route>
            </Route>
        </Routes> */}
        <Routing />
    </BrowserRouter>
}

function App_old() {
    return (
        <div className="App">
            <BrowserRouter>
                <header className='w-full h-14 flex flex-row jusitify-start items-center bg-blue-200'>
                    <a className='mx-2 hover:text-blue-600 cursor-pointer' href='./'>首页</a>
                    <a className='mx-2 hover:text-blue-600 cursor-pointer' href='./list'>新闻列表</a>
                    <a className='mx-2 hover:text-blue-600 cursor-pointer' href='./about'>关于我们</a>
                    <a className='mx-2 hover:text-blue-600 cursor-pointer' href='./hot'>热点新闻</a>
                </header>

                <Routes>
                    <Route path='/list' element={<div>新闻列表- pages</div>} />
                    <Route path='/about' element={<div>关于我们- pages</div>} />
                    <Route path='/hot' element={<div>热点新闻- pages</div>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
