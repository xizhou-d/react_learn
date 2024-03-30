import React, { memo, useCallback, useRef, useState } from 'react'

let obj = null;

const App = memo(() => {
  const [count, setCount] = useState(0)
  const nameRef = useRef()
  console.log(obj === nameRef)
  obj = nameRef

  // 通过 useRef 解决闭包陷阱问题
  const countRef = useRef()
  countRef.current = count
  const increment = useCallback(() => {
    setCount(countRef.current + 1)
  }, [])

  return (
    <div>
        <h2>Hello World.</h2>
        <hr />
        <h2>计数：{count}</h2>
        <button onClick={increment}>+1</button>
    </div>
  )
})

export default App