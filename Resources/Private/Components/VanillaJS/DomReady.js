function domReady(callback) {
	var done = false;
	var top = true;
	var win = window;
	var doc = win.document;
	var root = doc.documentElement;
	var hasListener = doc.addEventListener ? true : false;
	//jshint -W120
	var add = rem = hasListener ? 'addEventListener' : 'attachEvent';
	//jshint +W120
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
}

domReady(onReadyRun);
