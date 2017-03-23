// jscs:disable maximumLineLength
// Some Elements
html = document.documentElement;
body = document.body;

html.className = html.className.replace(/\bno-js\b/g,'');

getProtokoll = 'https:' == document.location.protocol ? 'https' : 'http';

getID = function(id) {
	return document.getElementById(id);
};

getTag = function(tag) {
	return document.getElementsByTagName(tag);
};

lastVisitedNode = function(node) {
	try {
		if (typeof node == 'undefined') {
			node = document.body.getAttribute('data-neos-node') || false;
		}
		if (typeof node == 'string') {
			sessionStorage.setItem('TYPO3.Neos.lastVisitedNode', node);
		}
	} catch (error) {}
};

if (typeof document.getElementsByClassName !== 'undefined') {
	getClass = function(value) {
		return document.getElementsByClassName(value);
	};
} else if (typeof document.querySelectorAll !== 'undefined') {
	getClass = function(value) {
		return document.querySelectorAll('.' + value);
	};
} else {
	getClass = function(value) {
		var a = [];
		var re = new RegExp('(^| )' + value + '( |$)');
		var els = document.getElementsByTagName('*');
		var length = els.length;
		for (var i = 0; i < length; i++) {
			if (re.test(els[i].className)) {
				a.push(els[i]);
			}
		}
		return a;
	};
}

hasID = function(id) {
	return getID(id) ? true : false;
};

hasTag = function(tag) {
	return getTag(tag).length ? true : false;
};

hasClass = function(value) {
	return getClass(value).length ? true : false;
};

// Version of assets (string)
dataVersion = html.getAttribute('data-version') || 1;

isIE = (function() {
	var agent = navigator.userAgent.toLowerCase();
	return (agent.indexOf('msie') != -1) ? parseInt(agent.split('msie')[1]) : false;
})();

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

// Language of the document (string)
language = html.lang || 'de';

// Live workspace (boolean)
isLive = html.className.indexOf('live') > -1;

path = {
	base: '/_Resources/Static/Packages/Dotpulse.Theme/'
};
path.Scripts = path.base + 'Scripts/';
path.Assets = path.base + 'Assets/';

NeosEvents = function() {
	return 'No Neos Events added';
};
if (typeof document.addEventListener === 'function' && !isLive) {
	NeosEvents = function(events, callback) {
		if (typeof events === 'string') {
			events = events.split(',');
		}
		for (var i = events.length - 1; i >= 0; i--) {
			var name = events[i].replace(/\s/g,'');
			document.addEventListener('Neos.' + name, callback);
		}
		return events.length + ' Neos Event' + (events.length === 1 ? '' : 's') + ' added.';
	};
}
