// Init Funktionen
(function($) {
	// Funktionen, welche beim DOM Rendering ausgeführt werden
	$.onReady = {};
	$.onReadyRun = function() {
		return $.each($.onReady, function() {
			if (typeof this === 'function') {
				this(); // Funktion ausführen
			}
		});
	};

	$.stripTags = function(html) {
		return $('<div>' + html + '</div >').text();
	};

	$(document).on('click', '.disabled', function() {
		return false;
	});
})(jQuery);
