// jscs:disable maximumLineLength
// Some Elements
html = document.documentElement;

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

elementHasClass = function(node, value) {
	return node.className.indexOf(value) > -1;
};

elementRemoveClass = function(node, value) {
	var regex = new RegExp(value, 'g');
	node.className = node.className.replace(regex, '').replace(/\s\s*/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

elementAddClass = function(node, value) {
	if (!elementHasClass(node, value)) {
		node.className += ' ' + value;
	}
};

elementToggleClass = function(node, value, boolean) {
	if (typeof boolean == 'undefined') {
		boolean = !elementHasClass(node, value);
	}
	if (boolean) {
		elementAddClass(node, value);
	} else {
		elementRemoveClass(node, value);
	}
	return boolean;
};

elementsRemoveClass = function(nodes, value) {
	var count = nodes.length;
	while (count--) {
		elementRemoveClass(nodes[count], value);
	}
};

elementsAddClass = function(nodes, value) {
	var count = nodes.length;
	while (count--) {
		elementAddClass(nodes[count], value);
	}
};

getIndex = function(node) {
	var returnedIndex = 0;
	var siblings = node.parentNode.childNodes;
	var count = siblings.length;
	var index = 0;
	while (index < count) {
		if (siblings[index].nodeType === 1) {
			// Node is an element
			if (node == siblings[index]) {
				break;
			}
			returnedIndex++;
		}
		index++;
	}
	return returnedIndex;
};

elementRemoveClass(html, 'no-js');

// Version of assets (string)
dataVersion = html.getAttribute('data-version') || 0;

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
isLive = elementHasClass(html, 'live');

theme = typeof theme == 'string' ? theme : 'Dotpulse.Theme';

path = {
	base: '/_Resources/Static/Packages/' + theme + '/'
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

domReady = function(callback) {
	var done = false;
	var top = true;
	var win = window;
	var doc = win.document;
	var root = doc.documentElement;
	var hasListener = doc.addEventListener ? true : false;

	var add = hasListener ? 'addEventListener' : 'attachEvent';
	var rem = hasListener ? 'addEventListener' : 'attachEvent';
	var pre = hasListener ? '' : 'on';

	var init = function(event) {
		if (event.type == 'readystatechange' && doc.readyState != 'complete') {
			return;
		}
		(event.type == 'load' ? win : doc)[rem](pre + event.type, init, false);
		if (!done && (done = true)) {
			callback.call(win, event.type || event);
		}
	};

	var poll = function() {
		try {
			root.doScroll('left');
		} catch (error) {
			setTimeout(poll, 50);
			return;
		}
		init('poll');
	};

	if (doc.readyState == 'complete') {
		callback.call(win, 'lazy');
	} else {
		if (doc.createEventObject && root.doScroll) {
			try {
				top = !win.frameElement;
			} catch (error) { }
			if (top) {
				poll();
			}
		}
		doc[add](pre + 'DOMContentLoaded', init, false);
		doc[add](pre + 'readystatechange', init, false);
		win[add](pre + 'load', init, false);
	}
};

onReady = {};
onReadyRun = function() {
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

domReady(function() {
	window.body = document.body;
});
