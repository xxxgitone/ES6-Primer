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
	data: [888,999]
}

let { id, status, data:number } = jsonData;
console.log(id, status, number);//42 "OK" [888, 999]

//5.函数参数的默认值


//6.遍历Map解构
var map = new Map();
map.set('first', 'Hello');
map.set('second', 'World');

for( let [key, value] of map){
	console.log(key + ' is ' + value);
}
//first is Hello
//second is World

//获取键名
for( let [key] of map){

}
//获取键值
for( let [,value] of map){

}

//7.输入模块的指定方法
// const { SourceMapConsumer, SourceNode } = require('source-map');






