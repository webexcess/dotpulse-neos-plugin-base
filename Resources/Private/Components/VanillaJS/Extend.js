function extend(object) {
	var objects = Array.prototype.slice.call(arguments, 1);
	var length = arguments.length;
	var index = 0;
	var merge = function(index) {
		if (typeof objects[index] == 'object') {
			Object.keys(objects[index]).forEach(function(key) {
				object[key] = objects[index][key];
			});
		}
	};
	for (; index < length; index++) {
		merge(index);
	}
	return object;
}
