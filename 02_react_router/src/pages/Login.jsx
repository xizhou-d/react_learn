import React from 'react'
import { Navigate } from 'react-router-dom'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            islogin: false
        }
        this.login = this.login.bind(this)
    }

    login() {
        this.setState({
            islogin: true
        })
    }
    render() {
        const {islogin} = this.state
        console.log('this.state.islogin', this.state.islogin)

        return (
            <div>
                <h1>Login page.</h1>
                {!islogin ? <button onClick={this.login}>登陆</button> : <Navigate to='/home'/>}
            </div>
        ) 
    }
}