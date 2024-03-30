import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  constructor(props) {
    super(props)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.message !== nextProps.message) {
  //     return true
  //   }
  //   return false
  // }
  render() {
    console.log('Home render function.')
    return (
      <div>
        <h2>Home Page.</h2>
      </div>
    )
  }
}

export default Home