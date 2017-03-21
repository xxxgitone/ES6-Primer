//从语法上来讲，Generator可以理解成一个状态机，封装了内部多个状态
//执行Generator函数会返回一个遍历器对象，也就是说，Generator函数除了是状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态
// function* helloWorldGenerator() {
// 	yield 'hello';
// 	yield 'world';
// 	return 'ending';
// }

// 调用Generator函数后，该函数并不会执行，返回的也不是函数运行的结果，而是一个指向内部状态的指针对象，也就是遍历器对象
// var hw = helloWorldGenerator();

//调用next方法,使得指针移向下一个状态，也就是说每次调用next方法，内部指针就从函数的头部或上一次停留的地方开始执行，知道遇到yield或return。换言之，Generator函数是分段执行的，yield语句是暂停执行的标记，而next方法可以恢复执行
// console.log(hw.next());//Object {value: "hello", done: false}
// console.log(hw.next());//Object {value: "world", done: false}
// console.log(hw.next());//Object {value: "ending", done: true}
// console.log(hw.next());//Object {value: undefined, done: true}

// Generator函数可以不用yield语句，这时候变成了一个单纯的暂缓执行函数
// function* f() {
// 	console.log('执行了');
// }

// var generator = f();

// setTimeout(() => {
// 	generator.next();
// },2000);

//不可以在普通函数中使用yield语句

//用生成器实现斐波那契数列
// function* fibo() {
// 	let a = 0;
// 	let b = 1;

// 	yield a;
// 	yield b;

// 	while(true) {
// 		let next = a + b;
// 		a = b;
// 		b = next;
// 		yield next;
// 	}
// }

// let generator = fibo();

// for(let i = 0; i < 10; i++)
// 	console.log(generator.next().value);//0 1 1 2 3 5 8 13 21 34 55

// var gimmeSomething = (function () {
// 	var nextVal;

// 	return function () {
// 		if (nextVal === undefined) {
// 			nextVal = 1;
// 		} else {
// 			nextVal = (3 * nextVal) + 6
// 		}

// 		return nextVal;
// 	}
// })();

// console.log(gimmeSomething()); //1
// console.log(gimmeSomething());//9
// console.log(gimmeSomething());//33
// console.log(gimmeSomething());//105


//为数字序列生成器实现标准的迭代器接口
// var something = (function () {
// 	var nextVal;

// 	return {
// 		// for ... of循环需要
// 		[Symbol.iterator]: function () {
// 			return this;
// 		},
		
// 		//标准迭代器接口方法
// 		next: function () {
// 			if (nextVal === undefined) {
// 				nextVal = 1;
// 			} else {
// 				nextVal = (3 * nextVal) + 6;
// 			}

// 			return { done: false, value: nextVal }

// 		}
// 	}
// })();

// console.log(something.next().value) //1
// console.log(something.next().value) //9
// console.log(something.next().value) //33
// console.log(something.next().value) //105

//使用for..of循环，自动迭代标准迭代器
// for(var v of something){
// 	console.log(v);

// 	if (v > 500) {
// 		break;
// 	}
// }

//1 9 33 105 321 969


//通过生成器实现实现前面的数字序列
// function *something() {
// 	var nextVal;

// 	while(true) {
// 		if (nextVal === undefined) {
// 			nextVal = 1;
// 		} else {
// 			nextVal = (3 * nextVal) + 6;
// 		}

// 		yield nextVal;
// 	}
// }

// for(var v of something()){//这里并不是直接写something
// 	console.log(v);

// 	if (v > 500) {
// 		break;
// 	}
// }

//1 9 33 105 321 969



// function foo(x, y, cb) {
// 	ajax('http://xxxx.com/?x=' + x + '&y=' + y, cb);
// }

// foo(11, 13, function (err, text) {
// 	if (err) {
// 		console.error(err);
// 	} else {
// 		console.log(text);
// 	}
// })

// ////异步迭代生成器,表达同样的任务流程控制
// function foo(x, y) {
// 	ajax('http://xxxx.com/?x=' + x + '&y=' + y,
// 		  function (err, data) {
// 		  	if (err) {
// 		  		//向*main()抛出一个错误
// 		  		it.throw(err);
// 		  	} else {
// 		  		//用接收到的data回复*main()
// 		  		it.next(data);
// 		  	}
// 		  }
// 	)
// }

// function *main() {
// 	try {
// 		var text = yield foo(11, 31); //这里返回undefined
// 		console.log(text);
// 	}
// 	catch (err) {
// 		console.log(err);
// 	}
// }

// var it = main();

// it.next();



// 假定ajax( {url}, {callback})存在
// function request(url) {
// 	return new Promise(function (resolve, reject) {
		
// 		ajax(url, resolve);
// 	})
// }


//生成器+Promise

//前面的ajax例子基于Promise实现
// function foo(x, y) {
// 	return request('http://xxxx.com/?x=' + x + '&y=' + y);
// }

// foo(11, 31)
// 	.then(function (text) {
// 		console.log(text);
// 	},function (err) {
// 		console.log(err);
// 	})

//获得Promise和生成器最大效用的最自然的方法就是yield出来一个Promise
// 然后通过Promise来控制生成器的迭代器
// function foo(x, y) {
// 	return request('http://xxxx.com/?x=' + x + '&y=' + y);
// }

// function *main() {
// 	try {
// 		var text = yield foo(11, 31); //foo返回的是一个promis
// 		console.log(text);
// 	}
// 	catch (err) {
// 		console.error(err);
// 	}
// }

// var it = main();
// var p = it.next().value;

// p.then(function (text) {
// 	it.next(text)
// }, function (err) {
// 	it.throw(err);
// })


//支持Promise的Generator Runner,自动异步运行传入的生成器，直到结束
// function run(gen) {
// 	var args = [].slice.call(arguments, 1), it;
	
// 	//在当前上下文初始化生成器
// 	it = gen.apply(this, args);
	
// 	// 返回一个Promise用于生成器完成
// 	return Promise.resolve()
// 		.then(function handleNext(value) {
			
// 			var next = it.next(value);

// 			retrun (function handleResult(next) {
// 				if (next.done) {
// 					return next.value;
// 				} else {
// 					return Promise.resolve(next.value)
// 						.then(function handleErr(err) {
// 							return Promise.resolve(it.throw(err))
// 								.then(handleResult);
// 						})
// 				}
// 			})(next);
// 		})
// }


// function *main() {
// 	try {
// 		var text = yield foo(11, 31); //foo返回的是一个promis
// 		console.log(text);
// 	}
// 	catch (err) {
// 		console.error(err);
// 	}
// }

// run( main )



//生成器委托
function *foo() {
	console.log('*foo() starting');
	yield 3;
	yield 4;
	console.log('*foo() finished');
}

function *bar() {
	yield 1;
	yield 2;
	yield *foo();
	yield 5;
}

var it = bar();

it.next().value; //1
it.next().value; //2
it.next().value; //starting
				//3
it.next().value; //4
it.next().value; //5
				//end









