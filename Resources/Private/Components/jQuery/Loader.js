// Init Funktionen
(function($) {
	// Funktionen, welche beim DOM Rendering ausgeführt werden
	$.onReady      = {};
	$.windowLoaded = false;
	$.onReadyRun   = function() {
		return $.each($.onReady, function() {
			if (typeof this === 'function') {
				this(); // Funktion ausführen
			}
		});
	};
	$(window).load(function() {
		$.windowLoaded = true;
	});
	$(document).on('click', '.disabled', function() {
		return false;
	});
})(jQuery);
