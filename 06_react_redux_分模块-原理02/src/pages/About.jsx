import React from 'react'
import { connect } from 'react-redux'
import { addAction, subAction} from '../store/counter/actionCreators'

class About extends React.Component {

    calcNum = (num, bool) => {
        if (bool) {
            this.props.addNum(num)
        } else {
            this.props.subNum(num)
        }
    }
    render() {
        const { count, banners, recommends, userinfo } = this.props
         return (
            <div>
                <div className='user'>
                    <h1>user name: {userinfo.nickName}</h1>
                </div>
                <h2>About Page: {count}</h2>
                <div>
                    <button onClick={() => this.calcNum(10, true)}>+10</button>
                    <button onClick={() => this.calcNum(20, true)}>+20</button>
                    <button onClick={() => this.calcNum(10, false)}>-10</button>
                    <button onClick={() => this.calcNum(20, false)}>-20</button>
                </div>
                <div className='banners'>
                    <h1>banners</h1>
                    <ul>
                        {
                            banners.map((item, index) => (
                                <li key={index}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='recommends'>
                    <h1>recommends</h1>
                    <ul>
                        {
                            recommends.map((item, index) => (
                                <li key={index}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         count: state.count
//     }
// }

// function fn2(dispatch) {
//     return {
//         addNum(num) {
//             dispatch(addAction(num))
//         },
//         subNum(num) {
//             dispatch(subAction(num))
//         }
//     }
// }

const mapStateToProps = (state) => ({
    count: state.count.count,
    banners: state.home.banners,
    recommends: state.home.recommends,
    userinfo: state.user.userInfo
})


const mapDispatchToProps = (dispatch) => ({
    addNum(num) {
        dispatch(addAction(num))
    },
    subNum(num) {
        dispatch(subAction(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)