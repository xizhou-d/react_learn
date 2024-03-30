import React, { memo } from 'react'
import { useScrollPosition } from './hooks'
import './style.css'

const Home = memo(() => {
    const [scrollX, scrollY] = useScrollPosition()
    return <h1>Home Page: {scrollX}-{scrollY}</h1>
})

const About = memo(() => {
    const [scrollX, scrollY] = useScrollPosition()
    return <h1>About Page: {scrollX}-{scrollY}</h1>
})

const App = memo(() => {

    return (
        <div className='app'>
            <h1>App root component.</h1>
            <hr />
            <Home />
            <About />
        </div>
    )
})

export default App