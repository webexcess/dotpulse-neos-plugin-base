// Needs Selectors, Each, Attr, domReady
(function() {
	if (feature.retina) {
		onReady.Retina = function() {
			$('img').each(function() {
				if (!this.hasClass('load')) {
					var src = this.attr('data-src-retina');
					if (src) {
						this.attr('src', src).removeAttr('data-src-retina');
					}
				}
			});
		};
		onReady.Retina();
	}
})();
