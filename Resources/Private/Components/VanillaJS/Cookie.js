window.getCookie = window.setCookie = function() {
	return false;
};

window.deleteCookie = function() {
	return setCookie(name, '', -1);
};

if (navigator.cookieEnabled) {
	getCookie = function(name) {
		var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		return v ? v[2] : null;
	};
	setCookie = function(name, value, days) {
		var d = new Date();
		var expires = '';
		if (typeof days == 'number') {
			d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
			expires = 'expires=' + d.toGMTString();
		}
		document.cookie = name + '=' + value + ';path=/;' + expires;
		return true;
	};
}
