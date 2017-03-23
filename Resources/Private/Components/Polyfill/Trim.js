if (!String.prototype.trim) {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '');
	};
}

function stripTags(html) {
	var element = html;
	var text = '';
	if (typeof html === 'string') {
		element = document.createElement('div');
		element.innerHTML = html;
	}
	if (element.nodeType == Node.ELEMENT_NODE) {
		text = element.textContent || element.innerText;
	}
	return text.trim();
}
