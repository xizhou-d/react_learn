import React, { PureComponent } from 'react'

export class Recommend extends PureComponent {
  constructor(props) {
    super(props)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.count !== nextProps.count) {
  //     return true
  //   }
  //   return false
  // }
  render() {
    console.log('Recommend render function.')
    return (
      <div>
        <h2>Recommend Page.</h2>
      </div>
    )
  }
}

export default Recommend