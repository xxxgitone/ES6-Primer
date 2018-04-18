'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _dec, _class2, _desc, _value, _class3;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyTestableClass = testable(_class = function MyTestableClass() {
  _classCallCheck(this, MyTestableClass);
}) || _class;

// 修饰器是一个对类进行处理的函数，第一个参数就是所要修饰的目标类


function testable(target) {
  target.isTestable = true;

  // 实例属性
  // target.prototype.isTestable = true
}

console.log(MyTestableClass.isTestable); // true

// @decorator
// class A {}

// 修饰器行为：
// class A {}
// A = decorator(A) || A

// 如果参数不够用，可以在修饰器外面载封装一层函数
// function testable(isTestable) {
//   return function(target) {
//     target.isTestable = isTestable
//   }
// }

// 调用
// @testable(false)

// 实例：通过mixins,把Foo对象的方法添加到MyClass的实例上面
function mixins() {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  return function (target) {
    Object.assign.apply(Object, [target.prototype].concat(list));
  };
}

var Foo = {
  foo: function foo() {
    console.log('foo');
  }
};

var MyClass = (_dec = mixins(Foo), _dec(_class2 = function MyClass() {
  _classCallCheck(this, MyClass);
}) || _class2);


var obj = new MyClass();
obj.foo();

// react + redux
// @connect(mapStateToProps, mapDispatchToProps)


// 2.方法的修饰
var Person = (_class3 = function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [{
    key: 'name',
    value: function name() {
      return '' + this.first;
    }
  }]);

  return Person;
}(), (_applyDecoratedDescriptor(_class3.prototype, 'name', [readonly], Object.getOwnPropertyDescriptor(_class3.prototype, 'name'), _class3.prototype)), _class3);

// readonly

function readonly(target, name, descriptor) {
  console.log(descriptor);
  descriptor.writable = false;
  return descriptor;
}

// readonly(Person.prototype, 'name', descriptor)
// 类似
// Object.defineProperty(Person.prototype, 'name', descriptor)