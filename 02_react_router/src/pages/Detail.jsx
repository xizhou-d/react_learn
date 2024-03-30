import React from 'react'
import withRouter from '../hoc/with_router'

class Detail extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {router} = this.props
        console.log('router', router)
        const {params} = router
        return (
            <div>
                <h1>Detail page.</h1>
                <p>id:  {params.id}</p>
            </div>
        ) 
    }
}

export default withRouter(Detail)