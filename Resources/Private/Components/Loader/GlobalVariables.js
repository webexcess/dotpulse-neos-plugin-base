// jscs:disable maximumLineLength
window.html = document.documentElement;
html.className = html.className.replace(new RegExp('\\bno-js\\b', 'g'), '').replace(/\s\s*/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
window.dataVersion = html.getAttribute('data-version') || 0; // Version of assets (string)
window.getProtokoll = 'https:' == document.location.protocol ? 'https' : 'http';
window.language = html.lang || 'de'; // Language of the document (string)
window.isLive = new RegExp('\\blive\\b').test(html.className);

window.lastVisitedNode = function(node) {
	try {
		if (typeof node == 'undefined') {
			node = document.body.getAttribute('data-neos-node') || false;
		}
		if (typeof node == 'string') {
			sessionStorage.setItem('Neos.Neos.lastVisitedNode', node);
		}
	} catch (error) {}
};

window.NeosEvents = function() {
	return 'No Neos Events added';
};

window.isIE = (function() {
	var agent = navigator.userAgent.toLowerCase();
	return (agent.indexOf('msie') != -1) ? parseInt(agent.split('msie')[1]) : false;
})();

window.theme = typeof theme == 'string' ? theme : 'Dotpulse.Theme';

window.path = {
	base: '/_Resources/Static/Packages/' + theme + '/'
};
path.Scripts = path.base + 'Scripts/';
path.Assets = path.base + 'Assets/';

window.onReady = {
	body: function() {
		window.body = document.body;
	}
};

window.onReadyRun = function() {
	for (var key in onReady) {
		if (!onReady.hasOwnProperty(key)) {
			continue;
		}

		var func = onReady[key];
		if (typeof func === 'function') {
			func(); // Run function
		}
	}
};
