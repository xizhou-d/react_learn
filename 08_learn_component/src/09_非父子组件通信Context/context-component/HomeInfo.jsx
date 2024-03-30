import React, { Component } from 'react'
import ThemeContext from '../context/theme-context'
import UserContext from '../context/user-context'

export class HomeInfo extends Component {
  constructor(props, context) {
    super()
    // 这里不能打印出来 context 的内容
    console.log('context', context)
  }
  render() {
    console.log('this.context', this.context)
    return (
      <div>
        <h2>HomeInfo</h2>
        <UserContext.Consumer>
          {
            (value) => {
              return  <h2>{value.name}</h2>
            }
          }
        </UserContext.Consumer>
      </div>
    )
  }
}

HomeInfo.contextType = ThemeContext

export default HomeInfo