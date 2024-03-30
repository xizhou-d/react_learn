import React from 'react'
import { connect } from '../hoc'
import { addNum, subNum } from '../store/features/counter'
import Close from '../components/Close'

class About extends React.Component {
  render() {
    const {counter} = this.props
    return (
      <div>
        <h1>About Page: {counter}</h1>
        <Close />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log('map_state', state)
    return ({
        counter: state.counter.counter
    })    
}

const mapDispatchToProps = (dispatch) => ({
    addNum(num) {
        dispatch(addNum(num))
    },
    subNum(num) {
        dispatch(subNum(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)