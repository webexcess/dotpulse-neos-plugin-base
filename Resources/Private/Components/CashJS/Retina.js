(function($) {
	$.fn.retina = function() {
		if (!$(this).hasClass('load')) {
			var src = $(this).attr('data-src-retina');
			if (src) {
				$(this).attr('src', src).removeAttr('data-src-retina');
			}
		}
		return this;
	};

	if (feature.retina) {
		onReady.Retina = function() {
			$('img').retina();
		};
		onReady.Retina();
	}
})(cash);
