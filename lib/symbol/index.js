'use strict';

// Symbol
// 创建
var firstName = Symbol();
var person = {};

person[firstName] = 'Nicholas';
console.log(person[firstName]);