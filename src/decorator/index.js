// 修饰器只能用于类和类的方法
// 1.修饰类：修改类的行为
// 下面为类添加了静态和原型属性
@testable
class MyTestableClass {}

// 修饰器是一个对类进行处理的函数，第一个参数就是所要修饰的目标类
function testable (target) {
  target.isTestable = true

  // 实例属性
  // target.prototype.isTestable = true
}

console.log(MyTestableClass.isTestable) // true

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
function mixins (...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo () {
    console.log('foo')
  }
}

@mixins(Foo)
class MyClass {}

const obj = new MyClass()
obj.foo()

// react + redux
// @connect(mapStateToProps, mapDispatchToProps)


// 2.方法的修饰
class Person {
  @readonly
  name () {return `${this.first}`}
}

// readonly
function readonly (target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

readonly(Person.prototype, 'name', descriptor)
// 类似
// Object.defineProperty(Person.prototype, 'name', descriptor)
