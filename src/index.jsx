import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'
import './style.css'

const CodeBox = forwardRef((props, ref) => {
  const { onChange } = props
  const inputRef = useRef([])

  const [code, setCode] = useState(new Array(6).fill(''))

  // 读取粘贴板
  const readClipboard = e => {
    const pasteText = (e.clipboardData || window.clipboardData).getData('text').trim()
    const data = pasteText.split('').slice(0, 6)
    const newCode = code.map(v => v)
    data.forEach((item, index) => {
      newCode[index] = item
    })
    setCode(newCode)
    if (newCode.every(v => v !== '')) {
      e.target.blur()
      onChange(newCode.join(''))
    }
  }

  useEffect(() => {
    inputRef.current[0].focus()
    document.addEventListener('paste', readClipboard)
    return function cleanup() {
      document.removeEventListener('paste', readClipboard)
    }
  }, [])

  // 聚焦
  const focusOn = index => {
    const el = inputRef.current[index]
    if (el) {
      el.focus()
    }
  }

  // 输入框 change 事件
  const handleChange = (e, i) => {
    const value = e.target.value.trim()
    const newCode = code.map(v => v)
    newCode[i] = value
    setCode(newCode)
    if (newCode.every(v => v !== '')) {
      e.target.blur()
      onChange(newCode.join(''))
      return
    }
    if (value !== '') {
      focusOn(i + 1)
    }
  }

  // 键盘事件
  const onKeyDown = (e, i) => {
    if (e.keyCode === 8) {
      if (e.target.value === '') {
        // 如果空的话，那么就退回到上一个输入框
        focusOn(i - 1)
      }
    }
  }

  useImperativeHandle(ref, () => ({
    clear: () => {
      focusOn(0)
      setCode(new Array(6).fill(''))
    },
  }))

  return (
    <div className="wrapper">
      <input
        className="codeInput"
        ref={el => {
          inputRef.current[0] = el
        }}
        maxLength="1"
        autoComplete="false"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        value={code[0]}
        onChange={e => {
          handleChange(e, 0)
        }}
        onKeyDown={e => {
          onKeyDown(e, 0)
        }}
      />
      <input
        className="codeInput"
        ref={el => {
          inputRef.current[1] = el
        }}
        maxLength="1"
        autoComplete="false"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        value={code[1]}
        onChange={e => {
          handleChange(e, 1)
        }}
        onKeyDown={e => {
          onKeyDown(e, 1)
        }}
      />
      <input
        className="codeInput"
        ref={el => {
          inputRef.current[2] = el
        }}
        maxLength="1"
        autoComplete="false"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        value={code[2]}
        onChange={e => {
          handleChange(e, 2)
        }}
        onKeyDown={e => {
          onKeyDown(e, 2)
        }}
      />
      <div className="separate">-</div>
      <input
        className="codeInput"
        ref={el => {
          inputRef.current[3] = el
        }}
        maxLength="1"
        autoComplete="false"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        value={code[3]}
        onChange={e => {
          handleChange(e, 3)
        }}
        onKeyDown={e => {
          onKeyDown(e, 3)
        }}
      />
      <input
        className="codeInput"
        ref={el => {
          inputRef.current[4] = el
        }}
        maxLength="1"
        autoComplete="false"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        value={code[4]}
        onChange={e => {
          handleChange(e, 4)
        }}
        onKeyDown={e => {
          onKeyDown(e, 4)
        }}
      />
      <input
        className="codeInput"
        ref={el => {
          inputRef.current[5] = el
        }}
        maxLength="1"
        autoComplete="false"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        value={code[5]}
        onChange={e => {
          handleChange(e, 5)
        }}
        onKeyDown={e => {
          onKeyDown(e, 5)
        }}
      />
    </div>
  )
})

CodeBox.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default CodeBox
