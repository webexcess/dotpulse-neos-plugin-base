// select a list of matching elements, context is optional
function $(selector, context) {
	return (context || document).querySelectorAll(selector);
}

// Select a id
$.id = function(selector, context) {
	return (context || document).getElementById(selector);
};

// Select first element
$.first = function(selector, context) {
	return (context || document).querySelector(selector);
};

// Select Classes
$.class = function(selector, context) {
	return (context || document).getElementsByClassName(selector);
};

function $has(selector, context) {
	return $.first(selector, context) ? true : false;
}

$has.id = function(selector, context) {
	return $.id(selector, context) ? true : false;
};

$has.class = function(selector, context) {
	return $.class(selector, context).length ? true : false;
};

Element.prototype.findElement = function(selector) {
	return $(selector, this);
};

Object.defineProperty(Object.prototype, 'firstElement', {
	value: function() {
		return this[0];
	}
});

Object.defineProperty(Object.prototype, 'lastElement', {
	value: function() {
		return this[this.length - 1];
	}
});
