import React, { Component } from 'react'
import { NewContext } from '../context/NewContext'
import ChildA from './ChildA'
import { ChildAContext } from '../context/ChildAContext'

export default class SubComponent extends Component {

    render() {
        return (
            <ChildAContext.Provider value={{ a: 11, b: 'dsfa'}}>
                <NewContext.Consumer>
                    {
                        (value) => {
                            return (
                                <div>
                                    <h1>SubComponent</h1>
                                    <div>来自上下文 NewContext 中的数据：</div>
                                    <div>a: {value.a}</div>
                                    <div>b: {value.b}</div>
                                    <button onClick={() => value.changeA(value.a + 2)}>change A</button>

                                    <ChildA />
                                </div>
                            )
                        }
                    }
                </NewContext.Consumer>
            </ChildAContext.Provider>
        )
    }
}

// SubComponent.contextType = NewContext