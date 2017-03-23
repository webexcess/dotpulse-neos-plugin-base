// jscs:disable maximumLineLength
// Some Elements
window.html = document.documentElement;
window.body = document.body;

window.getProtokoll = 'https:' == document.location.protocol ? 'https' : 'http';

window.getID = function(id) {
	return document.getElementById(id);
};

window.getTag = function(tag) {
	return document.getElementsByTagName(tag);
};

if (typeof document.getElementsByClassName !== 'undefined') {
	window.getClass = function(value) {
		return document.getElementsByClassName(value);
	};
} else if (typeof document.querySelectorAll !== 'undefined') {
	window.getClass = function(value) {
		return document.querySelectorAll('.' + value);
	};
} else {
	window.getClass = function(value) {
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

window.hasID = function(id) {
	return getID(id) ? true : false;
};

window.hasTag = function(tag) {
	return getTag(tag).length ? true : false;
};

window.hasClass = function(value) {
	return getClass(value).length ? true : false;
};

// Version of assets (string)
window.dataVersion  = html.getAttribute('data-version') || 1;

// Language of the document (string)
window.language = html.lang || 'de';

// Live workspace (boolean)
window.isLive   = html.className.indexOf('live') > -1;

// Retina Screen (boolean)
window.isRetina = window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia('(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)').matches);

// Touch Screen (boolean)
window.isTouch  = ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) ? true : false;

// Add Retina & Touch Class to the html element
(function() {
	var htmlClasses = html.className + ' ';
	if (!isRetina) {
		htmlClasses += 'no-';
	}
	htmlClasses += 'retina ';

	if (!isTouch) {
		htmlClasses += 'no-';
	}
	htmlClasses += 'touch';

	html.className = htmlClasses;
})();
