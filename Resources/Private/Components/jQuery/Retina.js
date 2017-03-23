(function($) {
	$.fn.retina = function() {
		return this.each(function() {
			if (feature.retina && !$(this).hasClass('load')) {
				var src = $(this).data('src-retina');
				if (src) {
					$(this).attr('src', src).removeAttr('data-src-retina');
				}
			}
		});
	};
	$.onReady.retina = function() {
		$('img').retina();
	};
	$.onReady.retina();
})(jQuery);
