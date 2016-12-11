// {
//   let a = 10;
//   var b = 1;
// }

// a;   //not defined
// b;


// for (let i = 0; i < 10; i++) {}

// console.log(i);//i is not defined


// ES6明确规定，如果区块中存在let和const命令，
// 这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错
// 暂时式死区
// var tmp = 123;

// if (true) {
// //块级作用域内定义了一个tmp，所以提前给它赋值会报错
//   tmp = 'abc'; // ReferenceError
//   let tmp;
// }

// 隐蔽的"死区"
// function bar(x = y, y = 2) {
//   return [x, y];
// }

// bar(); // 报错

//使用var定义变量存在变量提升、导致内层的tmp覆盖了
//外层的tmp
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}

f(); // undefined




















