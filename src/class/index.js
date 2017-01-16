//1.基本语法
//ES5写的类
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')';
// };

// var p = new Point(1, 2);
// console.log(p.toString());


// class Point{
// 	// 构造函数，当使用new的时候，会执行
// 	constructor(x,y){
// 		this.x=x;
// 		this.y=y;
// 	}
// 	// 相当于在类的原型上添加方法
// 	toString(){
// 		return '(' + this.x + ', ' + this.y + ')';
// 	}
// }

// var p = new Point(1, 2);
// console.log(p.toString());

// 类的继承
// 子类必须的构造函数必须包含super方法，才能使用this
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}



