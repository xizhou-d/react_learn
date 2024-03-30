import React, { memo, useState, useEffect } from 'react'
import { useUserToken } from './hooks'

const Home = memo(() => {
    const [user, token] = useUserToken()

    return <h1>Home Page: {user.name}- {token}</h1>
})

const About = memo(() => {
    const [user, token] = useUserToken()

    return <h1>About Page: {user.name}- {token}</h1>
})

const App = memo(() => {

    return (
        <div>
            <h1>App root component.</h1>
            <hr />
            <Home />
            <About />
        </div>
    )
})

export default App