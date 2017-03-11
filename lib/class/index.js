'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var ColorPoint = function (_Point) {
  _inherits(ColorPoint, _Point);

  function ColorPoint(x, y, color) {
    _classCallCheck(this, ColorPoint);

    // 调用父类的constructor(x, y)
    var _this = _possibleConstructorReturn(this, (ColorPoint.__proto__ || Object.getPrototypeOf(ColorPoint)).call(this, x, y));

    _this.color = color;
    return _this;
  }

  _createClass(ColorPoint, [{
    key: 'toString',
    value: function toString() {
      return this.color + ' ' + _get(ColorPoint.prototype.__proto__ || Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this); // 调用父类的toString()
    }
  }]);

  return ColorPoint;
}(Point);