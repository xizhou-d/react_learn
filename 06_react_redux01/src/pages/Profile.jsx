import React from 'react'
import {subAction} from '../store/actionCreators'
import store from '../store'
import withHomeProfile from '../hoc/withHoc'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }
  handleAdd = (num) => {
    store.dispatch(subAction(num))
  }
  render() {
    return (
      <div>
        <h2>Profile Count: {this.props.count}</h2>
        <div>
            <button onClick={() => this.handleAdd(1)}>-1</button>
            <button onClick={() => this.handleAdd(2)}>-2</button>
            <button onClick={() => this.handleAdd(3)}>-3</button>
        </div>
      </div>
    )
  }
}

const HocProfile = withHomeProfile(Profile)

export default HocProfile;