import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Page() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<div>首页</div>}></Route>
            </Routes>
        </div>
    )
}

function App() {
  return (
    <BrowserRouter>
        <Page />
    </BrowserRouter>
  );
}

export default App;
