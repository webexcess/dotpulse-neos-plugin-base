Element.prototype.attr = function(key, value) {
	if (typeof value === 'string' || value === true) {
		this.setAttribute(key, value);
	} else if (value === false || value === null) {
		this.removeAttribute(key);
	} else {
		return this.getAttribute(key);
	}
	return this;
};
Element.prototype.removeAttr = function(key) {
	this.removeAttribute(key);
	return this;
};
