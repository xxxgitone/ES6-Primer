'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//set是一种新的数据结构，类似于数组，但成员的值是唯一的，没有重复的值
// var s = new Set();

// [2,3,5,4,2,3].map(x => s.add(x));

// for (i of s){
// 	console.log(i); //2 3 5 4
// }

//可以传入一个数组初始化
// var set = new Set([1,2,3,4,5]);
// console.log([...set]);//1 2 3 4 5

// var items = new Set([1,2,3,4,5,5,5,5]);
// console.log(items.size);//5

//类似于
// var s = new Set();
// items = [2,3,5,4,2,3];
// items.map(x => s.add(x));
// console.log(s.size);//4

//注意：向Set加入值时不会发生类型转换，所以5和"5"是两个不一样的值


// Set的操作方法
// add(value)：添加某个值，返回Set解构本身
// delete(value)：删除某个值，返回一个布尔值
// has(value)：返回一个布尔值，表示参数是否为Set的成员
// clear()：清除所有成员，没有返回值
// var s = new Set();
// s.add(1).add(2).add(2);

// console.log(s.size);//2

// console.log(s.has(1));//true
// console.log(s.has(3));//false

// s.delete(2);

// console.log(s.has(2));//false

// s.clear();
// console.log(s.size);//0

//判断是否包括一个键上Object和Set解构的写法不同
// 对象的写法
// var properties = {
// 	'width':1,
// 	'height':1
// }

// if(properties[someName]){
// 	//do Something
// }

//Set的写法
// var properties = new Set();

// properties.add('width');
// properties.add('height');

// if (properties.has(someName)) {
// 	//do something
// }

// Array.from方法可以将set结构转换为数组
// var items = new Set([1,2,3,4,5]);
// var array = Array.from(items);
// console.log(array);//[1,2,3,4,5]

// //去重
// function dedupe(array) {
// 	return Array.from(new Set(array))
// }

// console.log(dedupe([1,1,2,4]));//[1, 2, 4]

//遍历操作
// keys()：返回一个键名的遍历器
// values()：返回一个键值的遍历器
// entries()：返回一个键值对的遍历器
// forEach()：使用回调函数遍历每个成员
// Set解构没有键名，只有键值（键名和键值是同一个值），所以keys和values方法的行为完全一样

// let set = new Set(['red', 'green', 'blue']);
// // console.log(set.values());
// for (let item of set.keys()){
// 	console.log(item);
// }
// red
// green
// blue

// for (let item of set.entries()){
// 	console.log(item);
// }
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

//Set解构的实例默认可以遍历，其默认遍历器生成函数就是它的values方法
// console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);//true
// console.log(Set.prototype);
// 所以可以省略values方法，直接用for...of循环遍历Set

// let set = new Set(['red', 'green', 'blue']);
// for (let item of set){
// 	console.log(item);
// }
// red
// green
// blue

//可以使用扩展运算符
// let set = new Set(['red', 'green', 'blue']);
// let arr = [...set]
// console.log(arr);//["red", "green", "blue"]

// 快捷的去重方法
// let arr = [1,2,4,3,2,1,5,6];
// let unique = [...new Set(arr)]
// console.log(unique)//[1, 2, 4, 3, 5, 6]

//而且数组的map和filter方法也适合
// let set = new Set([1,2,3])
// set = new Set([...set].map(x => x * 2));
// console.log(set);//Set {2, 4, 6}

// let set = new Set([1,2,3]);
// set.forEach((value, key) => console.log(value * 2))
//2
//4
//6

//Map类似于对象，也是键值对的结合。对象的键局限于字符串，但是Map不限于字符串，可以是各种类型的值
// var m = new Map();
// m.set('o', 'content');
// console.log(m.get('o'));

// var map = new Map([['name', '张三'], ['title', 'author']]);
// map.has('name');//true
// map.get('name');//张三


//map的属性，操作方法，遍历方法与set类似
//keys()
//values()
//entries()
//forEach()

var map = new Map([['name', '张三'], ['title', 'author']]);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = map.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var item = _step.value;

		console.log(item[0], item[1]);
	}
	// name 张三
	// title author

	// 默认遍历接口为entries方法
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var _step2$value = _slicedToArray(_step2.value, 2),
		    key = _step2$value[0],
		    value = _step2$value[1];

		console.log(key, value);
	}
	// name 张三
	// title author

	// map可以与其他数据结构互相转换，数组，对象，json
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}