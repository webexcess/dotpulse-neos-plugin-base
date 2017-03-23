//= require ../Polyfill/Matches.js
if ('classList' in document.documentElement) {
	Element.prototype.classHas = function(className) {
		return this.classList.contains(className);
	};
	Element.prototype.classAdd = function(className) {
		this.classList.add(className);
		return this;
	};
	Element.prototype.classRemove = function(className) {
		this.classList.remove(className);
		return this;
	};
} else {
	Element.prototype.classHas = function(className) {
		return new RegExp('\\b' +  className + '\\b').test(this.className);
	};
	Element.prototype.classAdd = function(className) {
		if (!this.classHas(className)) {
			this.className += ' ' + className;
		}
		return this;
	};
	Element.prototype.classRemove = function(className) {
		var regex = new RegExp('\\b' + className + '\\b', 'g');
		var classes = this.className;
		this.className = classes.replace(regex, '').replace(/\s\s*/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		return this;
	};
}

Element.prototype.classToggle = function(className, boolean) {
	if (typeof boolean == 'undefined') {
		boolean = !this.classHas(className);
	}
	if (boolean) {
		this.classAdd(className);
	} else {
		this.classRemove(className);
	}
	return this;
};

Element.prototype.is = function(selector) {
	return this.matches(selector);
};

Object.defineProperty(Object.prototype, 'classAdd', {
	value: function(className) {
		var length = this.length;
		while (length--) {
			this[length].classAdd(className);
		}
		return this;
	}
});

Object.defineProperty(Object.prototype, 'classRemove', {
	value: function(className) {
		var length = this.length;
		while (length--) {
			this[length].classRemove(className);
		}
		return this;
	}
});

Object.defineProperty(Object.prototype, 'classToggle', {
	value: function(className, boolean) {
		var length = this.length;
		while (length--) {
			this[length].classToggle(className, boolean);
		}
		return this;
	}
});
