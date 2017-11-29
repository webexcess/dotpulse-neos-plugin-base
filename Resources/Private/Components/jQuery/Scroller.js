// Require feature.cssTransition
(function($) {
	// Scrolle zu einer bestimmten Position, Nimmt Element (id / this) oder Nummer entgegen
	var doc            = $.document ? $.document : document;
	var $doc           = $(doc);
	var $html          = $(doc.documentElement);
	var $body          = $(doc.body);
	var $htmlAndBody   = $($html).add($body);
	var scrollPosition = 0;
	var htmlEvent      = false;
	$.scroller = function(id, options) {
		// Scrollersettings
		var opt      = $.extend({}, $.scroller.defaults, options);
		var time     = 10;
		var position = (typeof id === 'number') ? id - opt.offset : ($(id).length) ? $(id).offset().top - opt.offset : false;
		//console.log('id: ' + id + ' \n' + position);
		if (position !== false) {
			if (opt.animate) {
				var scrollTop = $doc.scrollTop();
				var height    = position < scrollTop ? scrollTop - position : position - scrollTop;
				time      = height * opt.msPerPixel;
				time      = Math.min(time, opt.maxRange);
				time      = Math.max(time, opt.minRange);

				if (feature.cssTransition && opt.cssAnimate) {
					if (!htmlEvent) {
						htmlEvent = true;
						$html.on('transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd', function(event) {
							if (event.target == event.currentTarget && $html.data('transitioning') === true) {
								$(this).removeAttr('style').data('transitioning', false);
								$htmlAndBody.scrollTop(scrollPosition);
								return;
							}
						});
					}
					var avail = $doc.height() - $(window).height();

					if (position > avail) {
						position = avail;
					}
					scrollPosition = position;
					$html.css({
						marginTop: scrollTop - position,
						transition: time + 'ms ease-in-out'
					}).data('transitioning', true);
				} else {
					$htmlAndBody.animate({
						scrollTop: position
					}, time);
				}
			} else {
				$doc.scrollTop(position);
			}
			if (typeof opt.callback == 'function') {
				setTimeout(function() {
					callback();
				}, time);
			}
		}
	};
	$.scroller.defaults = {
		animate    : true,  // Scrolle zu einem Element
		cssAnimate : true,  // Animiere das Scrollen mit CSS
		msPerPixel : 0.5,   // Wie viele ms pro Pixel
		minRange   : 400,   // Minimale Animationszeit
		maxRange   : 1500,  // Maximale Animationszeit
		offset     : 0,     // Offset (z.B. wegen Navigationsbar)
		callback   : null   // möglicher Callback
	};
})(jQuery);
