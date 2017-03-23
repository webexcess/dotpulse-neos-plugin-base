Element.prototype.index = function() {
	var returnedIndex = 0;
	var siblings = this.parentNode.childNodes;
	var count = siblings.length;
	var index = 0;
	while (index < count) {
		if (siblings[index].nodeType === Node.ELEMENT_NODE) {
			// Node is an element
			if (this == siblings[index]) {
				break;
			}
			returnedIndex++;
		}
		index++;
	}
	return returnedIndex;
};
