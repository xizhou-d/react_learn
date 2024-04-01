import React from 'react'
import Comm2 from './Comm2'
import ErrorBound from './ErrorBound'

export default function Comm1() {
  return (
    <div style={{
        width: '90%',
        height: '400px',
        border: '1px solid',
        margin: '5px'
    }}>
        <h1>Comm1</h1>
        <ErrorBound>
            <Comm2 />
        </ErrorBound>
    </div>
  )
}
