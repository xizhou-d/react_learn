import React, { StrictMode } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Category from './pages/Catogary'
import './style.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Count: 0</h1>
        <div className='pages'>
          <Home/>
          <Profile/>
          <About/>
          <Category/>
        </div>
      </div>
    )
  }
}

export default App;
