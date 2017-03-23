(function($, sr) {
// debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
var debounce = function(func, threshold, execAsap) {
	var timeout;
	return function debounced() {
		var _this = this;
		var args = arguments;
		var delayed = function() {
			if (!execAsap) {
				func.apply(_this, args);
			}
			timeout = null;
		};

		if (timeout) {
			clearTimeout(timeout);
		} else if (execAsap) {
			func.apply(_this, args);
		}

		timeout = setTimeout(delayed, threshold || 500);
	};
};
// smartresize
jQuery.fn[sr] = function(fn) {
	return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
};
})(jQuery,'smartresize');
