// Require Polyfill Matches

if ('classList' in document.documentElement) {
	Element.prototype.hasClass = function(className) {
		return this.classList.contains(className);
	};
	Element.prototype.addClass = function(className) {
		this.classList.add(className);
		return this;
	};
	Element.prototype.removeClass = function(className) {
		this.classList.remove(className);
		return this;
	};
} else {
	Element.prototype.hasClass = function(className) {
		return new RegExp('\\b' +  className + '\\b').test(this.className);
	};
	Element.prototype.addClass = function(className) {
		if (!this.hasClass(className)) {
			this.className += ' ' + className;
		}
		return this;
	};
	Element.prototype.removeClass = function(className) {
		var regex = new RegExp('\\b' + className + '\\b', 'g');
		var classes = this.className;
		this.className = classes.replace(regex, '').replace(/\s\s*/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		return this;
	};
}

Element.prototype.toggleClass = function(className, boolean) {
	if (typeof boolean == 'undefined') {
		boolean = !this.hasClass(className);
	}
	if (boolean) {
		this.addClass(className);
	} else {
		this.removeClass(className);
	}
	return this;
};

Element.prototype.is = function(selector) {
	return this.matches(selector);
};

Object.defineProperty(Object.prototype, 'addClass', {
	value: function(className) {
		var length = this.length;
		while (length--) {
			this[length].addClass(className);
		}
		return this;
	}
});

Object.defineProperty(Object.prototype, 'removeClass', {
	value: function(className) {
		var length = this.length;
		while (length--) {
			this[length].removeClass(className);
		}
		return this;
	}
});

Object.defineProperty(Object.prototype, 'toggleClass', {
	value: function(className, boolean) {
		var length = this.length;
		while (length--) {
			this[length].toggleClass(className, boolean);
		}
		return this;
	}
});
