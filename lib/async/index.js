'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(gen);

//Generator函数处理异步
function gen() {
	var url, result;
	return regeneratorRuntime.wrap(function gen$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					url = 'https://api.github.com/users/github';
					_context.next = 3;
					return fetch(url);

				case 3:
					result = _context.sent;

					console.log(result.bio);

				case 5:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

var g = gen();
var result = g.next();

result.value.then(function (data) {
	return data.json();
}).then(function (data) {
	g.next(data);
});