import React from 'react'

export default function App() {
  return (
    <div>
        <h1>App</h1>
        <button onClick={(e) => {
            console.log('react: 按钮被点击了')
        }}>按钮</button>
    </div>
  )
}

document.querySelector('#root').onclick = function(e) {
    console.log('真实的 DOM 元素被点击了：', ' ID 为 root 的 div 被点击了')
    // e.stopPropagation()
    // 要想阻止 react 事件冒泡需要使用 stopImmediatePropagation
    e.stopImmediatePropagation()
}