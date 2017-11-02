// Mit einem Wert wird die Höhe gesetzt
// true: Höhe lesen und setzen
// false: Höhe lesen und auf 0
// Kein Wert: Höhe lesen
//= require Dotpulse.Base/Resources/Private/Components/VanillaJS/TransitionEvent.js
Element.prototype.elementHeight = function(value) {
	var _this = this;
	if (typeof value === 'string' || value === 0) {
		_this.style.height = value;
		return this;
	} else if (typeof value === 'number') {
		_this.style.height = value + 'px';
		return this;
	} else {
		var style = window.getComputedStyle(this);
		var attr = _this.getAttribute('style');
		var wantedHeight = 0;
		var styleTop = 0;
		var width = style.width;
		var autoHeight = function() {
			_this.style.height = 'auto';
			_this.removeEventListener(transitionEvent, autoHeight);
		};

		// Nur wenn nötig verschieben und messen
		if (style.display === 'none' || parseFloat(style.maxHeight) === 0 || parseFloat(style.height) === 0) {
			if (_this.offsetParent != document.body) {
				styleTop = ~~(-window.pageYOffset - _this.getBoundingClientRect().top);
			}

			_this.style.transitionDuration = '0s';
			_this.style.transitionDelay = '0s';
			_this.style.width = width;
			_this.style.top = styleTop + 'px';

			_this.style.position = 'absolute';
			_this.style.visibility = 'hidden';
			_this.style.display = 'block';
			_this.style.height = 'auto';
		}

		wantedHeight = _this.offsetHeight;
		if (wantedHeight > 0) {
			wantedHeight += 'px';
		}

		_this.setAttribute('style', attr);

		// Falls ein Wert gesetzt ist, ist eine Aktion erwünscht
		if (value === false || value) {
			// Höhe setzen
			_this.style.height = value ? 0 : wantedHeight;
			// Höhe animieren
			setTimeout(function() {
				_this.style.height = value ? wantedHeight : 0;
				if (value) {
					_this.addEventListener(transitionEvent, autoHeight);
				}
			}, 0);
		}

		return wantedHeight;
	}
};
