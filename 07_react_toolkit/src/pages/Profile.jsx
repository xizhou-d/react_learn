import React from 'react'
import { connect } from 'react-redux'
import { addNum, subNum } from '../store/features/counter'
import { fetchHomeMutiDataAction } from '../store/features/home'

class Prifile extends React.Component {
    componentDidMount() {
        this.props.fetchHomeMutiData()
    }
    addNum = (num) => {
        this.props.addNum(num)
    }

    subNum = (num) => {
        this.props.subNum(num)
    }

    render() {
        const { counter } = this.props
        return (
            <div>
                <h1>Profile Page: {counter}</h1>
                <div>
                    <button onClick={() => this.addNum(10)}>+10</button>
                    <button onClick={() => this.addNum(20)}>+20</button>
                    <button onClick={() => this.subNum(10)}>-10</button>
                    <button onClick={() => this.subNum(20)}>-20</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({counter: state.counter.counter})

const mapActionsToProps = (dispatch) => ({
    addNum(num) {
        dispatch(addNum(num))
    },
    subNum(num) {
        dispatch(subNum(num))
    },
    fetchHomeMutiData() {
        dispatch(fetchHomeMutiDataAction({name: 'why', age: 18}))
    }
})

export default connect(mapStateToProps, mapActionsToProps)(Prifile);