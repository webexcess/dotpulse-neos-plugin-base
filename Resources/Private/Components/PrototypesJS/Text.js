//= require Dotpulse.Base/Resources/Private/Components/Polyfill/Trim.js

String.prototype.innerTrim = function() {
	return this.replace(/\s\s+/g, ' ');
};

String.prototype.text = function() {
	var text = '';
	var element = document.createElement('div');
	element.innerHTML = this;
	text = element.textContent || element.innerText;
	return text.innerTrim().trim();
};

Element.prototype.text = function() {
	var text = '';
	if (this.nodeType == Node.ELEMENT_NODE) {
		text = this.textContent || this.innerText;
	}
	return text.innerTrim().trim();
};
