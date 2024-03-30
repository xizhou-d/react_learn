import React from 'react'
import { connect } from 'react-redux'
import { fetchHomemutilDataSction } from '../store/actionCreators'

class Categary extends React.Component {
    componentDidMount() {
        this.props.fetchHomeMutiData()
    }
    render() {
        return (
            <div>
                <h2>Categary Page: </h2>
            </div>
        )
    }
}

const mapActionsToProps = (dispatch) => ({
    fetchHomeMutiData() {
        dispatch(fetchHomemutilDataSction())
    }
})

export default connect(null, mapActionsToProps)(Categary)