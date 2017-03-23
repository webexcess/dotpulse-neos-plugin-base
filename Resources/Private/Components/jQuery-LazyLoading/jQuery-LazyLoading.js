(function() {
	// jshint ignore:start
	var define;
	var exports;
	delete define;
	delete exports;
	//= require /bower_components/waitForImages/dist/jquery.waitforimages.min.js
	//= require /bower_components/jquery-unveil/jquery.unveil.min.js
	// jshint ignore:end
})();
/* global isRetina, jQuery */

(function($) {
	'use strict';
	$.fn.lazyLoad = function(options) {
		var opt = options ? options : {};
		if (opt.force) {
			this.each(function() {
				var retina = $(this).data('src-retina');
				var src    = isRetina && retina ? retina : $(this).data('src');
				$(this).add($(this).parents('figure').first()).removeClass('load');
				if (src) {
					$(this).attr('src', src).waitForImages(true).done(function() {
						if (typeof opt.callback === 'function') {
							opt.callback();
						}
					});
				}
			});
		} else {
			$(this).filter('.load').unveil(200, function() {
				var _this = this;
				$(this).waitForImages(true).done(function() {
					if (typeof opt.callback === 'function') {
						opt.callback();
					}
					$(_this).add($(_this).parents('figure').first()).removeClass('load');
				});
			});
		}
		return this;
	};
	$.lazyLoad = function(options) {
		$('img').lazyLoad(options);
	};
})(jQuery);
