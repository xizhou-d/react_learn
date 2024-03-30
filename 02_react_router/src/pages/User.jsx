import React from 'react'
import withRouter from '../hoc/with_router'

class User extends React.Component {
    constructor(props) {
        super(props)
        console.log('aaaaaa', this.props.router)
    }
    render() {
        const {router} = this.props
        const {query} = router
        return (
            <div>
                <h1>User page.</h1>
                <p>{query.name}-{query.age}</p>
            </div>
        ) 
    }
}

export default withRouter(User)