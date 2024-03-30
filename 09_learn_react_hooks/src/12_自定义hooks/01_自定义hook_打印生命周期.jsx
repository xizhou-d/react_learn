import React, { memo, useState, useEffect } from 'react'

function useLifeStye(cname) {
  useEffect(() => {
    console.log(cname + '组件被创建')
    return () => {
      console.log(cname + '组件被销毁 ')
    }
  }, [])
}

const Home = memo(() => {
  useLifeStye('Home')

  return <h1>Home Page.</h1>
})

const About = memo(() => {
  useLifeStye('About')

  return <h1>About Page.</h1>
})

const App = memo(() => {
  const [isShow, setIsShow] = useState(true)

  useLifeStye('App') 

  return (
    <div>
      <h1>App root component.</h1>
      <hr />
      <button onClick={e => setIsShow(!isShow)}>切换</button>
      {isShow && <Home />}
      {isShow && <About />}
    </div>
  )
})

export default App