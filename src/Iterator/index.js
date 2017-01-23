// Iterator是遍历器，是一种接口，为各种不同的数据结构提供统一的访问机制
// 任何数据类型，只要部署Iterator接口，就可以完成遍历操作

// 模拟next方法
// value属性是当前成员的值，done属性是一个布尔值，表示是否遍历完成
// function makeIterator(array) {
// 	var nextIndex = 0;
// 	return {
// 		next: function () {
// 			return nextIndex < array.length ?
// 				{value: array[nextIndex++], done: false} :
// 				{value: undefined, done: true}
// 		}
// 	}
// }

// var it = makeIterator(['a', 'b']);

// console.log(it.next());//Object {value: "a", done: false}
// console.log(it.next());//Object {value: "b", done: false}
// console.log(it.next());//Object {value: undefined, done: true}

//在ES6中有3类数据结构原生具备Iterator接口：数组、某些类似数组的对象，以及Set和Map结构
//下面例子中，变量arr是一个数组，原生具有遍历接口，部署在arr的Symbol.iterator属性上，调用这个属性就会得到遍历器对象
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next());//{value: "a", done: false}
console.log(iter.next());//{value: "b", done: false}
console.log(iter.next());//{value: "c", done: false}
console.log(iter.next());//Object {value: undefined, done: true}















