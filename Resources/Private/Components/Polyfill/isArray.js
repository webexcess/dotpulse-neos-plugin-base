if (!Array.isArray) {
	Array.isArray = function(elements) {
		return Object.prototype.toString.call(elements) === '[object Array]';
	};
}
