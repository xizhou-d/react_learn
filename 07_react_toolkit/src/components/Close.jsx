import React, { useState, useEffect } from 'react'

export default function Close() {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
      setCount(count + 1);
    }
    const handleClickDelay = () => {
        console.log('count', count)
      setTimeout(() => {
        setCount(count + 1);
        // setCount((count) => {
        //   return count + 1;
        // });
      }, 2000);
    }
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClickDelay}>
          延迟2秒触发
        </button>
        <button onClick={handleClick}>
          立即触发
        </button>
      </div>
    );
  }
