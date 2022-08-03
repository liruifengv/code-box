# CodeBox
---
CodeBox 验证码输入组件

### 基本用法

```
const codeRef = useRef()

// 清空
const clear = () => {
  codeRef.current.clear()
}

const onChange = val => {
  console.log('val:', val)
}

<CodeBox ref={codeRef} onChange={onChange} />

```

#####  Attributes
| 参数        | 说明           | 类型  | 可选值 | 默认值 |
| ------------- |:-------------:| :-----|:-----|:-----|
| ref   | 实例 |   func | ——— | ——— |
| onChange   | change事件 |   func | ——— | ——— |


##### 实例方法

| 方法名        | 说明           | 参数  |
| ------------- |:-------------:| :-----|
| clear   | 清除 | ——— |