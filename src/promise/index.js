// function timeout(ms) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(resolve, ms, 'done');
// 	})
// };

// timeout(100).then((value) => {
// 	console.log(value);//done
// })

//加载图片,一旦加载完成，Promise的状态就发生变化
const preloadImage = function (path) {
	return new Promise(function (resolve, reject) {
		var image = new Image();
		image.onload = resolve;
		image.onerror = reject;
		image.src = path;
	})
}










