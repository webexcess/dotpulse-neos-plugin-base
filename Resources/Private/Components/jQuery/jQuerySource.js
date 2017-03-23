jQuerySRC = (function() {
	var version = 'data-jq';
	try {
		if (isIE && isIE < 9) {
			version += '-old';
		}
	} catch (error) {
	} finally {
		version = html.getAttribute(version);
	}
	return getProtokoll + '://code.jquery.com/jquery-' + version + '.min.js';
})();
