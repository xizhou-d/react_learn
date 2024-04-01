import React, { Component } from 'react'
import { NewContext } from './context/NewContext'

import SubComponent from './components/SubComponent'

export default class App extends Component {
    state = {
        a: 2,
        b: 'dongzhou',
        changeA: (newA) => {
            this.setState({
                a: newA
            })
        }
    }

    handleChangeA = () => {
        this.setState({
            a: this.state.a + 2
        })
    }
    
  render() {
    console.log('NewContext', NewContext)
    return (
      <NewContext.Provider value={this.state}>
        <div>
            <h1>APP</h1>
            <button onClick={this.handleChangeA}>+ 2</button>
            <hr />
            <SubComponent />
        </div>
      </NewContext.Provider>
    )
  }
}
