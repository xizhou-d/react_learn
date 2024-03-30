import React, { Component } from 'react'
import HomeBanner from './HomeBanner'

export class Home extends Component {
  
  render() {
    const {message} = this.props
    return (
      <div>
        <h2>Home Page.</h2>
        <HomeBanner />
      </div>
    )
  }
}

export default Home