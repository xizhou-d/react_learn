import React, { Component } from 'react'
import Home from './context-component/Home'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class App extends Component {
  render() {
    return (
      <div>
        <h2>App</h2>
        <UserContext.Provider value={{name: 'kobe', age: 18}}>
            <ThemeContext.Provider value={{ color: 'red', size: 30}}>
                <Home />
            </ThemeContext.Provider>
        </UserContext.Provider>  
      </div>
    )
  }
}

export default App