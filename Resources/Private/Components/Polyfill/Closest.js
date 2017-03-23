// jshint ignore:start
// jscs: disable
// closest polyfill
//= require Matches.js
this.Element && function(ElementPrototype) {
	ElementPrototype.closest = ElementPrototype.closest ||
	function(selector) {
		var el = this;
		while (el.matches && !el.matches(selector)) el = el.parentNode;
		return el.matches ? el : null;
	}
}(Element.prototype);
// jshint ignore:end
// jscs: enable
