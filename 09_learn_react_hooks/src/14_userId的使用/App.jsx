import React, { memo, useId, useState } from 'react'

const App = memo(() => {
    const [count, setCount] = useState(0)
    const id = useId()
    console.log('id', id)
    return (
        <div>
            <button onClick={e => setCount(count + 1)}>count + 1: {count}</button>
        </div>
    )
})

export default App