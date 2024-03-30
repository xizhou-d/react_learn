import React, { memo, useState, useMemo } from 'react'

function calculate(num) {
    let total = 0;
    console.log('calculate 计算过程被执行。')

    for (let i = 0; i <= num; i++) {
        total += i
    }

    return total
}

const HelloWorld = memo(() => {
    console.log('Hello World被渲染。')
    return <h2>
        Hello World.
    </h2>
})

const App = memo(() => {
  const [count, setCount] = useState(0)

  //   const result = calculate(50)

  // 不依赖任何值，进行计算
  //   let result = useMemo(() => {
  //     return calculate(50)
  //   }, [])

  //   依赖 count
    let result = useMemo(() => {
      return calculate(count * 2)
    }, [count])

  // useMemo 和 useCallback 的对比
  // useMemo(() => fn, deps) => useCallback(fn, deps)

  // 使用 useMemo 对子组件渲染进行优化
  // const info = {name: 'xizhou', age: 24}
  const info = useMemo(() => ({name: 'xizhou', age: 24}), [])
  return (
    <div>
        <h2>计算结果：{result}</h2>
        <hr />
        <h2>计数器：{count}</h2>
        <button onClick={e => setCount(count + 1)}>+1</button>
        <hr />
        <HelloWorld result={result} info={info} />
    </div>
  )
})

export default App