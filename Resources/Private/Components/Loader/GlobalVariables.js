// jscs:disable maximumLineLength
html = document.documentElement;
html.className = html.className.replace(new RegExp('\\bno-js\\b', 'g'), '').replace(/\s\s*/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
dataVersion = html.getAttribute('data-version') || 0; // Version of assets (string)
getProtokoll = 'https:' == document.location.protocol ? 'https' : 'http';
language = html.lang || 'de'; // Language of the document (string)
isLive = new RegExp('\\blive\\b').test(html.className);

function lastVisitedNode(node) {
	try {
		if (typeof node == 'undefined') {
			node = document.body.getAttribute('data-neos-node') || false;
		}
		if (typeof node == 'string') {
			sessionStorage.setItem('TYPO3.Neos.lastVisitedNode', node);
		}
	} catch (error) {}
}

function NeosEvents() {
	return 'No Neos Events added';
}

isIE = (function() {
	var agent = navigator.userAgent.toLowerCase();
	return (agent.indexOf('msie') != -1) ? parseInt(agent.split('msie')[1]) : false;
})();

theme = typeof theme == 'string' ? theme : 'Dotpulse.Theme';

path = {
	base: '/_Resources/Static/Packages/' + theme + '/'
};
path.Scripts = path.base + 'Scripts/';
path.Assets = path.base + 'Assets/';
