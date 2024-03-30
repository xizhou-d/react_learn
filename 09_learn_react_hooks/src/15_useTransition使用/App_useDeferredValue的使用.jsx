import React, { memo, useState, useTransition, useDeferredValue } from 'react'
import namesArray from './namesArray'

const App = memo(() => {
  const [names, setNames] = useState(namesArray)
  const deferredNames = useDeferredValue(names)

  function valueChangeHandle(e) {
    const filterNames = namesArray.filter(item => item.includes(e.target.value))
    setNames(filterNames)  
  }
  return (
    <div>
        <input type="text" onInput={valueChangeHandle} />
        <h2>用户名列表：</h2>
        <ul>
            {
              deferredNames.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    </div>
  )
})

export default App