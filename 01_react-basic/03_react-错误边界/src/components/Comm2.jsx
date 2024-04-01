import React from 'react'

export default function Comm2() {
  const spans = arr.map(a => <span>莫里都是咖啡</span>)
  return (
    <div style={{
        width: '90%',
        height: '200px',
        border: '1px solid',
        margin: '5px'
    }}>
        <h1>Comm2</h1>
        {spans}
    </div>
  )
}
