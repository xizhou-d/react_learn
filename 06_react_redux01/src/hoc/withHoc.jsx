import React from 'react'
import {addAction} from '../store/actionCreators'
import store from '../store'

function withHomeProfile(WrappedComponent) {
    return class WithHoc extends React.Component {
        constructor() {
          super()
          this.state = {
            count: store.getState().count.count
          }
        }
      
        componentDidMount() {
          store.subscribe(() => {
            this.setState({
              count: store.getState().count.count
            })
          })
        }
      
        handleAdd = (num) => {
          store.dispatch(addAction(num))
        }
      
        render() {
          return (
            <WrappedComponent count={this.state.count} {...this.props} />
          )
        }
      }
}

export default withHomeProfile;