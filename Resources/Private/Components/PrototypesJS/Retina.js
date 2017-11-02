//= require Dotpulse.Base/Resources/Private/Components/PrototypesJS/Selectors.js
//= require Dotpulse.Base/Resources/Private/Components/PrototypesJS/ClassManipulation.js
//= require Dotpulse.Base/Resources/Private/Components/PrototypesJS/EachElement.js
//= require Dotpulse.Base/Resources/Private/Components/PrototypesJS/Attr.js
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
