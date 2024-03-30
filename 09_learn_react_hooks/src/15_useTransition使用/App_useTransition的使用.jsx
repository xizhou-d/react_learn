import React, { memo, useState, useTransition } from 'react'
import namesArray from './namesArray'

const App = memo(() => {
  const [names, setNames] = useState(namesArray)
  const [pending, setTransition] = useTransition()

  function valueChangeHandle(e) {
    setTransition(() => {
      const filterNames = namesArray.filter(item => item.includes(e.target.value))

      setNames(filterNames)  
    })
  }
  return (
    <div>
        <input type="text" onInput={valueChangeHandle} />
        <h2>用户名列表：{pending && <span>Data loading ……</span>}</h2>
        <ul>
            {
              names.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    </div>
  )
})

export default App