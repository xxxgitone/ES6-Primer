'use strict';

// function timeout(ms) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(resolve, ms, 'done');
// 	})
// };

// timeout(100).then((value) => {
// 	console.log(value);//done
// })

//加载图片,一旦加载完成，Promise的状态就发生变化
// const preloadImage = function (path) {
// 	return new Promise(function (resolve, reject) {
// 		var image = new Image();
// 		image.onload = resolve;
// 		image.onerror = reject;
// 		image.src = path;
// 	})
// }

// const timer = new Promise(function (resolve, reject) {

// 	console.log('Init promise');

// 	setTimeout(function () {
// 		console.log('Timeout done');
// 		resolve();
// 	}, 5000);
// })

// timer.then(function () {
// 	console.log('Proceed now that timer has concluded.');
// })

// let timer = function (lenth) {
// 	new Promise(function (resolve, reject) {

// 		console.log('Init promise');

// 		setTimeout(function () {
// 			console.log('Timeout done');
// 			resolve();
// 		}, lenth);
// 	})
// }

// timer(2000).then(() => console.log('end'))

// let myPromise = new Promise((resolve, reject) => {

// 	setTimeout(() => {
// 		resolve('Good to go!');
// 	}, 1000);

// 	setTimeout(() => {
// 		reject('Uh oh');
// 	},500)

// });

// myPromise.then((res) => {
// 	console.log(res)
// })
// //catch用于捕捉错误，相当于.then(null,function(err){})
// .catch((err) => {
// 	console.log(err)
// })

var myPromise = new Promise(function (resolve, reject) {

	setTimeout(function () {
		resolve('Good to go!');
	}, 1000);
});

var myPromise2 = new Promise(function (resolve, reject) {

	setTimeout(function () {
		resolve('Promise 2 - the promising');
	}, 1500);
});

//将多个promise实例包装成一个新的Promise实例
//当所有实例都为Fulfilled，新的Promise状态才为Fulfilled
//有一个为rejected，则Promise变为rejected
Promise.all([myPromise, myPromise2]).then(function (data) {
	console.log(data); //["Good to go!", "Promise 2 - the promising"]
});