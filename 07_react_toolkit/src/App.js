import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import { connect } from 'react-redux'
import './style.css'
import Close from './components/Close'

class App extends React.Component {
  render() {
    const { counter } = this.props
    return (
      <div className="App">
        <h1>App counter: {counter}</h1>
        <div className='pages'>
          {/* <Home/>
          <Profile/>
          <About/> */}
          <Close />
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  counter: state.counter.counter
})

export default connect(mapStatetoProps)(App);
