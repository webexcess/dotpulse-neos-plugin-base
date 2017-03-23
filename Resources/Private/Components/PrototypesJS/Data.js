Element.prototype.data = function(key, value) {
	if (typeof value === 'string' || value === true) {
		this.setAttribute('data-' + key, value);
	} else if (value === null) {
		this.removeData(key);
	} else if (typeof value !== 'undefined') {
		this[key] = value;
	} else {
		if (typeof this[key] !== 'undefined') {
			return this[key];
		} else {
			return this.getAttribute('data-' + key);
		}
	}
	return this;
};
Element.prototype.removeData = function(key) {
	if (typeof this[key] !== 'undefined') {
		delete this[key];
	}
	this.removeAttribute('data-' + key);
	return this;
};
