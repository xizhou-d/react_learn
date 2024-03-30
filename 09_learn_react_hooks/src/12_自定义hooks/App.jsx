import React, { memo, useState, useEffect } from 'react'
import { useLocalStorage } from './hooks'

const App = memo(() => {
    // 通过 key, 直接从 localStorage 中获取一个数据
    const [token, setToken] = useLocalStorage('token')
    function setTokenHandle() {
        setToken('James')
    }

    const [avatarUrl, setAvatarUrl] = useLocalStorage('avatarUrl')
    function setAvatarUrlHandle() {
        setAvatarUrl('http://www.XIZHOU.com/ddd.png')
    } 

    return (
        <div className='app'>
            <h1>App root component: {token}</h1>
            <button onClick={setTokenHandle}>设置 token</button>
            <hr />
            <h1>avatarUrl: {avatarUrl}</h1>
            <button onClick={setAvatarUrlHandle}>设置新头像</button>
        </div>
    )
})

export default App