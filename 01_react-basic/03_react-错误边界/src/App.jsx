import React, { Component } from 'react'

import Comm1 from './components/Comm1'
import Comm3 from './components/Comm3'

export default class App extends Component {
    
  render() {
    console.log('render')
    return (
        <div style={{
            width: '90%',
            height: '800px',
            border: '2px solid'

        }}>
            <h1>APP</h1>
            <Comm1 />
            <Comm3 />
        </div>
    )
  }
}
