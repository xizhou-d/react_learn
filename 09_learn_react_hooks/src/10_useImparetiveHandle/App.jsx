import React, { memo, useRef, useImperativeHandle, forwardRef } from 'react'

const InputComponent = memo(
    forwardRef((props, ref) => {
        const inputRef = useRef()

        // 子组件对父组件传入的 ref 进行处理
        useImperativeHandle(ref, () => {
            return {
                focus() {
                    console.log('focus')
                    inputRef.current.focus()
                }, 
                setValue(val) {
                    inputRef.current.value = val
                } 
            }
        })
        return <input type="text" ref={inputRef}/>
    })
)

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  function handleDom() {
    // console.log(titleRef.current)
    console.log('aaaaaaa', inputRef.current)
    inputRef.current.value = ''
    inputRef.current.focus()
    inputRef.current.setValue('There is a will, there is a way.')
  }

  return (
    <div>
        <h2 ref={titleRef}>hahahah</h2>
        <hr />
        <InputComponent ref={inputRef} />
        <button onClick={handleDom}>DOM 操作</button>
    </div>
  )
})

export default App