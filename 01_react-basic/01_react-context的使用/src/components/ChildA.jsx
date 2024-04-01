import React from 'react'

import { NewContext } from '../context/NewContext'
import { ChildAContext } from '../context/ChildAContext'

export default function ChildA() {
    return (
        <>
            <NewContext.Consumer>
                {
                    (value) => {
                        return (
                            <div>ChildA: {value.a} {value.b}</div>
                        )
                    }
                }
                
            </NewContext.Consumer>
            <ChildAContext.Consumer>
                {
                    (value) => {
                        return (
                            <div>{value.a}</div>
                        )
                    }
                }
            </ChildAContext.Consumer>
        </>
    )
}
