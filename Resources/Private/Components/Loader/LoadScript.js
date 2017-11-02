window.loadScript = function(url, callback) {
	if (typeof url === 'string') {
		console.info('Load ' + url + ' ...');
		var doc = document;
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = url;
		if (typeof callback === 'function') {
			script.addEventListener('load', function (event) {
				callback(null, event);
			}, false);
		}
		document.head.appendChild(script);
	}
};
