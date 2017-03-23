// Require Extend
//= require ../Polyfill/RequestAnimationFrame.js
//= require Extend.js
(function() {
	var doScroll = function(position, options) {
		var start = Date.now();
		var scrollTop = window.pageYOffset;
		var scroll = function(timestamp) {
			var currentTime = Date.now();
			var time = Math.min(1, ((currentTime - start) / options.duration));
			var easedT = options.easing(time);
			window.scrollTo(0, (easedT * (position - scrollTop)) + scrollTop);
			if (time < 1) {
				requestAnimationFrame(scroll);
			} else if (typeof options.callback === 'function') {
				options.callback();
			}
		};

		if (scrollTop === position) {
			if (typeof options.callback === 'function') {
				options.callback();
			}
			return; // Prevent scrolling to the Y point if already there
		}

		requestAnimationFrame(scroll);
	};

	window.scroller = function(id, opt) {
		var scrollTop = window.pageYOffset;
		var options = scroller.defaults;
		var position = 0;
		var height = 0;
		var time = 0;

		if (typeof opt === 'object') {
			extend(options, opt);
		}

		if (typeof id === 'number') {
			position = id - options.offset;
		} else if (typeof id === 'string') {
			id = document.querySelector(id);
		}

		if (typeof id === 'object') {
			try {
				position = Math.round(id.getBoundingClientRect().top + scrollTop);
			} catch (error) {
				position = 0;
			}
		}

		position += options.offset;

		if (!options.animate) {
			window.scrollTo(0, position);
			return;
		}
		height = position < scrollTop ? scrollTop - position : position - scrollTop;
		time = height * options.msPerPixel;
		time = Math.min(time, options.maxRange);
		time = Math.max(time, options.minRange);
		options.duration = time;

		doScroll(position, options);
	};

	scroller.defaults = {
		animate    : true,  // Animiere Scrolling
		msPerPixel : 0.5,   // Wie viele ms pro Pixel
		minRange   : 400,   // Minimale Animationszeit
		maxRange   : 1500,  // Maximale Animationszeit
		offset     : 0,     // Offset (z.B. wegen Navigationsbar)
		easing     : function(t) { return t < 0.5 ? 2 * t  * t  : -1 + (4 - 2 * t) * t; }, // easeInOutQuad,
		callback   : null   // möglicher Callback
	};

}());
