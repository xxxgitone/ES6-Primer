"use strict";

//includes(), startsWith(), endsWith()
// includes(): 返回布尔值，表示是否找到了参数字符串
// startsWith():返回布尔值，表示参数字符串是否在源字符串的头部
// endsWith():返回布尔值，表示参数字符串是否在源字符串的尾部

// var s = 'Hello world!';
// console.log(s.startsWith('Hello'));//true
// console.log(s.endsWith('!'));//true
// console.log(s.includes('o'));//true

//可以接受第二个参数，表示开始搜索的位置
// console.log(s.startsWith('world',6));//true
// console.log(s.endsWith('Hello',5));//true
// console.log(s.includes('Hello',6));//false
//endsWith的行为与其他两个方法有所不同，它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束的字符

// reapt() 返回一个新的字符串，表示将字符串重复n此
// 'x'.reapt(3);//'xxx'
// 'hello'.reapt(2);//'hellohello'
// 'na'.reapt(0); //''


//模板字符串

//普通字符串
console.log("In javascript '\n' is a line-feed");

// 多行字符串,空格会保留
console.log("string text line 1\nstring text line 2");
//string text line 1
// string text line 2

// 字符串中嵌入变量
var name = "Bob",
    time = "today";
console.log("Hello " + name + ", how are you " + time); //Hello Bob, how are you today

// 大括号里面可以放入任意javascript表达式，以及引用对象属性
var x = 1;
var y = 2;
console.log(x + " + " + y + " = " + (x + y)); //1 + 2 = 3

var obj = { x: 1, y: 2 };
console.log("" + (obj.x + obj.y));

//还可以调用函数
function fn() {
	return 'hello world';
}

console.log("foo " + fn() + " bar"); //foo hello world bar

//如果需要引用模板字符串本身
//写法一
// let str = 'return ' + '`Hello ${name}!`'
// let func = new Function('name', str);
// console.log(func('Jack'));//Hello Jack!
//写法二
var str = '(name) => `Hello ${name}!`';
var func = eval.call(null, str);
console.log(func('Jack'));