# Symbol

`symbol`为`JavaScript`中第六种原始类型，一般用它来创建对象的私有成员

### 创建Symbol

与其他五种原始类型不一样的是，`Symbol`没有字面量的创建形式，也没有`new Symbol()`的形式，而是通过`Symbol`全局函数创建

```javascript
const symbol = new Symbol() // Uncaught TypeError: Symbol is not a constructor

// 正确形式
const symbol = Symbol()

// 检测
typeof symbol // "symbol"
```

`Symbol`可以接收一个可选参数，用来描述即将创建的`Symbol`,这段描述不可用于属性访问，但推荐每次创建的时候都加上描述,方便阅读

```JavaScript
const symbol = Symbol('test symbol')
let mySymbol = {}
mySymbol[symbol] = 'xxxgitone'

console.log(mySymbol[symbol]) // 'xxxgitone'
console.log(symbol) // "Symbol('test symbol')"
```



