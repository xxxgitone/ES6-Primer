//1.函数的参数的默认值
//传统的设置参数默认值方式
// function log(x, y) {
//   y = y || 'World';
//   console.log(x, y);
// }

// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello World
// 这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。
// 就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。

//ES6语法可以直接给参数设置默认值，参数变量是默认的，不能使用let和const再定义
// function log(x, y = 'World') {
//   console.log(x, y);
// }

// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello

// 参数默认位置，应该是函数的尾参数
// function f(x, y = 5, z) {
//   return [x, y, z];
// }

// f() // [undefined, 5, undefined]
// f(1) // [1, 5, undefined]
// f(1, ,2) // 报错
// f(1, undefined, 2) // [1, 5, 2]

// 函数的lenght属性，返回没有指定默认值的参数个数，也就是说指定了默认值的。失真
// 
// (function (a) {}).length // 1
// (function (a = 5) {}).length // 0
// (function (a) {}).length// 默认值不是尾参数，那么length不在计入后面的参数
// (function (a, b, c = 5) {}).length // 2
// (function (a = 0, b, c) {}).length // 0
// (function (a, b = 1, c) {}).length // 1
// rest参数不会计入length中
//(function(...args) {}).length // 0

//应用
//如果调用的时候没有参数，则会报一个错误
// function throwIfMissing() {
//   throw new Error('Missing parameter');
// }

// function foo(mustBeProvided = throwIfMissing()) {
//   return mustBeProvided;
// }

// foo()
// // Error: Missing parameter
// //设置成undefined则表示可选
// function foo(optional = undefined) { ··· }

// 2.rest参数,可以不使用arguments
// 形式为"...变量名"，用于获取函数的多余参数
// function add(...values) {
//   let sum = 0;

//   for (var val of values) {
//     sum += val;
//   }

//   return sum;
// }

// console.log(add(2, 5, 3)); // 10

// 3.扩展运算符，三个点(...),它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。
// console.log(...[1,2,3]);//1 2 3
// console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

//[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]

//主要用于函数调用
// function add(x, y) {
//   return x + y;
// }

// var numbers = [4, 38];
// add(...numbers) // 42

// 3.2替代数组apply方法
// ES5的写法
// function f(x, y, z) {
//   // ...
// }
// var args = [0, 1, 2];
// f.apply(null, args);

// ES6的写法
// function f(x, y, z) {
//   // ...
// }
// var args = [0, 1, 2];
// f(...args);

//应用Math.max方法，简化求出一个数组最大元素的写法。原生没有提供求数组中最大值的方法
// ES5的写法
// Math.max.apply(null, [14, 3, 77])

// // ES6的写法
// Math.max(...[14, 3, 77])

// // 等同于
// Math.max(14, 3, 77);

// 通过push函数，将一个数组添加到另一个数组中
// ES5的写法
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// Array.prototype.push.apply(arr1, arr2);

// // ES6的写法
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// arr1.push(...arr2);













