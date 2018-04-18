'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 1.数组的解构
//按照一定模式，从数组和对象中提取值，对变量进行赋值，称为解构
// 允许这样赋值
// var [a, b, c] = [1, 2, 3];
// console.log(a);

// 本质上属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋值对应的值

// let [foo, [[bar], baz]] = [1, [[2], 3]]
// console.log(foo);//1
// console.log(bar);//2
// console.log(baz);//3

// let [ , , third] = ['foo', 'bar', 'baz'];
// console.log(third); //baz

// let [head, ...tail] = [1, 2, 3, 4];
// console.log(head);//1
// console.log(tail);//[2,3,4]

// 2.对象的解构
// var { foo, bar } = { foo: 'aaa', bar: 'bbb'}
// console.log(foo);//aaa

// 实际是下面的简写
// var { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb'}

// 对象的解构赋值机制，是先找到同名属性，然后赋值给对应的变量，真正被赋值的是后者，而不是前者
// var { foo: baz } = { foo: 'aaa', bar: 'bbb'}
// console.log(baz);//aaa
// console.log(foo);//not defined

// 对象的解构赋值可以很方便地将现有对象的方法赋值到某个变量
//从Math对象中获取log，sin，cos方法
// let { log, sin, cos } = Math;
// console.log(sin);

// 变量解构赋值的用途
// 1.交换变量的值
// [x, y] = [y, x]

//2.从函数返回多个值
//函数只能返回一个值，如果要返回多个值，只能放在数组或对象中，解构赋值，可以方便取出这些值

//2.1返回一个数组
// function example() {
// 	return [1, 2, 3];
// }

// let [a, b, c] = example();
// console.log(a);//1

//2.2返回一个对象
// function example1() {
// 	return {
// 		foo: 1,
// 		bar: 2
// 	}
// }

// let { foo, bar } = example1();
// console.log(foo);//1


//3/函数参数的定义
//有序
// function f([x,y,z]) {
// 	// body...
// }
// f([1,2,3]);

//无序
// function f({x,y,z}) {
// 	// body...
// }
// f({z:1,y:2,x:3});

// 4.提取JSON数据
var jsonData = {
	id: 42,
	status: "OK",
	data: [888, 999]
};

var id = jsonData.id,
    status = jsonData.status,
    number = jsonData.data;

console.log(id, status, number); //42 "OK" [888, 999]

//5.函数参数的默认值


//6.遍历Map解构
var map = new Map();
map.set('first', 'Hello');
map.set('second', 'World');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _ref = _step.value;

		var _ref2 = _slicedToArray(_ref, 2);

		var key = _ref2[0];
		var value = _ref2[1];

		console.log(key + ' is ' + value);
	}
	//first is Hello
	//second is World

	//获取键名
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
		var _ref3 = _step2.value;

		var _ref4 = _slicedToArray(_ref3, 1);

		var _key = _ref4[0];
	}
	//获取键值
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

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
	for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		var _ref5 = _step3.value;

		var _ref6 = _slicedToArray(_ref5, 2);

		var _value = _ref6[1];
	}

	//7.输入模块的指定方法
	// const { SourceMapConsumer, SourceNode } = require('source-map');
} catch (err) {
	_didIteratorError3 = true;
	_iteratorError3 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion3 && _iterator3.return) {
			_iterator3.return();
		}
	} finally {
		if (_didIteratorError3) {
			throw _iteratorError3;
		}
	}
}