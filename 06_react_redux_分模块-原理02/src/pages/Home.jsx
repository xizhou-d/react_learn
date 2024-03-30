import React from 'react'
import {addAction} from '../store/counter/actionCreators'
import store from '../store'
import withHomeProfile from '../hoc/withHoc'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  handleAdd = (num) => {
    store.dispatch(addAction(num))
  }

  render() {
    const { count } = this.props
    return (
      <div>
        <h2>Home Count: {count}</h2>
        <div>
            <button onClick={() => this.handleAdd(1)}>+1</button>
            <button onClick={() => this.handleAdd(2)}>+2</button>
            <button onClick={() => this.handleAdd(3)}>+3</button>
        </div>        
      </div>
    )
  }
}

const HocHome = withHomeProfile(Home)

export default HocHome;