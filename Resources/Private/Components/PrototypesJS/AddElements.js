Array.prototype.unique = function() {
	var array = this.concat();
	for (var i = 0; i < array.length; ++i) {
		for (var j = i + 1; j < array.length; ++j) {
			if (array[i] === array[j]) {
				array.splice(j--, 1);
			}
		}
	}
	return array;
};

(function() {
	var addElementToArray = function(element, array) {
		if (element) {
			if (element.nodeType == Node.ELEMENT_NODE) {
				array[array.length] = element;
			}
		}
		return array;
	};

	var processElements = function(elements, array) {
		array = addElementToArray(elements, array);
		if (typeof elements === 'object') {
			var length = elements.length;
			for (var index = 0; index < length; ++index) {
				array = addElementToArray(elements[index], array);
			}
		}
		return array;
	};

	var returnFunction = function(elements) {
		var returnArray = [];
		returnArray = processElements(this, returnArray);
		returnArray = processElements(elements, returnArray);
		return returnArray.unique();
	};

	Element.prototype.addElements = returnFunction;
	Object.defineProperty(Object.prototype, 'addElements', {
		value: returnFunction
	});
})();
