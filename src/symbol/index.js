// Symbol
// 创建
const firstName = Symbol()
let person = {}

person[firstName] = 'Nicholas'
console.log(person[firstName])