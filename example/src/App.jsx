import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CodeBox from "verify-code-box";

function App() {
  const codeRef = useRef()

  // 清空
  const clear = () => {
    codeRef.current.clear()
  }

  const onChange = val => {
    console.log('val:', val)
  }

  return (
    <div className="App">
      <CodeBox ref={codeRef} onChange={onChange} />
    </div>
  )
}

export default App
