import React from 'react'
import { connect } from 'react-redux'
import { addNum, subNum} from '../store/features/counter'

class Home extends React.Component {
    addNum = (num) => {
        this.props.addNum(num)
    }

    subNum = (num) => {
        this.props.subNum(num)
    }
  render() {
    const { counter, banners, recommends } = this.props
    return (
      <div>
        <h1>Home Page: {counter}</h1>
        <div>
            <button onClick={() => this.addNum(5)}>+5</button>
            <button onClick={() => this.addNum(8)}>+8</button>
            <button onClick={() => this.subNum(5)}>-5</button>
            <button onClick={() => this.subNum(8)}>-8</button>
        </div>
        <div className='banner'>
            <ul>
                {
                    banners.map((item, index) => <li key={index}>{item.title}</li>)
                }
            </ul>
        </div>
        <div className='recommends'>
            <ul>
                {
                    recommends.map((item, index) => <li key={index}>{item.title}</li>)
                }
            </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state = {}) => {
    return {
        counter: state.counter.counter,
        banners: state.home.banners,
        recommends: state.home.recommends
    }
}

const mapActionToProps = (dispatch) => ({
    addNum(num) {
        dispatch(addNum(num))
    },
    subNum(num) {
        dispatch(subNum(num))
    }
})

export default connect(mapStateToProps, mapActionToProps)(Home);