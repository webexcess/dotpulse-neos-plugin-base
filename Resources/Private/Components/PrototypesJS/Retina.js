//= require Selectors.js
//= require ClassManipulation.js
//= require EachElement.js
//= require Attr.js
(function() {
	if (feature.retina) {
		onReady.Retina = function() {
			$('img').eachElement(function() {
				if (!this.classHas('load')) {
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
