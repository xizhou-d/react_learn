import { BrowserRouter, Routes, Route } from './router-write-by-hand/route.js'

function App() {
    return (
        <div className="App">
            DDFGGGHH
            <BrowserRouter>
                <header className='w-full h-14 flex flex-row jusitify-start items-center bg-blue-200'>
                    <a className='mx-2 hover:text-blue-600 cursor-pointer mr-10'  style={{marginRight: '20px'}} href='./'>首页</a>
                    <a className='mx-2 hover:text-blue-600 cursor-pointer mr-10'  style={{marginRight: '20px'}} href='./list'>新闻列表</a>
                    <a className='mx-2 hover:text-blue-600 cursor-pointer mr-10'  style={{marginRight: '20px'}} href='./about'>关于我们</a>
                    <a className='mx-2 hover:text-blue-600 cursor-pointer mr-10'  style={{marginRight: '20px'}} href='./hot'>热点新闻</a>
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