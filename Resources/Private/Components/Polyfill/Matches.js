// matches polyfill
// jshint ignore:start
// jscs: disable
this.Element && function(ElementPrototype) {
	ElementPrototype.matches = ElementPrototype.matches ||
	ElementPrototype.matchesSelector ||
	ElementPrototype.webkitMatchesSelector ||
	ElementPrototype.msMatchesSelector ||
	function(selector) {
		var node = this;
		var nodes = (node.parentNode || node.document).querySelectorAll(selector);
		var i = -1;
		while (nodes[++i] && nodes[i] != node);
		return !!nodes[i];
	};
}(Element.prototype);
// jshint ignore:end
// jscs: enable
