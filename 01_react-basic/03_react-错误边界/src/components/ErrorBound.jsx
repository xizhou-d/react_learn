import React, { Component } from 'react'

export default class ErrorBound extends Component {
    state = {
        hasError: false
    }
    // static getDerivedStateFromError(error) {
    //     console.log('error', error)
    //     return {
    //         hasError: true
    //     }
    // }

    componentDidCatch(err, info) {
        this.setState({
            hasError: true
        })
    }
  render() {
    console.log('this.state.hasError', this.state.hasError)
    if (this.state.hasError) {
        return <h1>发生了错误</h1>
    }
    return this.props.children
  }
}
