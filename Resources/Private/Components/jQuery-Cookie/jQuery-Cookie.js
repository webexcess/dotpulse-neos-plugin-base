(function($) {
	$.cookie = true;
	$.removeCookie = true;
})(jQuery);

// jshint ignore:start
// jscs: disable
// jQuery Enhanced Cookie Plugin v1.2.2 (2014)
// https://github.com/t0mtaylor/jquery-enhanced-cookie/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){var b=window,c={},d={ls:0,ss:0,jse:b.JSON&&b.JSON.parse,n:null,u:void 0},e=function(a){return j.raw?a:encodeURIComponent(a)},f=function(a){return j.raw?a:decodeURIComponent(a)},g=function(a,c){return d.jse&&j.json?c?e(b.JSON.stringify(a)):f(b.JSON.parse(a)):String(a)},h={read:{storage:function(a){if(d.ls||d.ss){var b=a in d.ls?d.ls:a in d.ss?d.ss:0;if(b)return c.v=b.getItem(f(a)),c.v=c.v!==d.u&&c.v!==d.n?g(c.v,0):d.u,c.v}},cookie:function(b){if((!c.st||!c.o.uls||c.st&&c.o.ucc)&&a.cCookie){var e="",f=c.o.mnc;for(i=0;f>i;i++){if(e=a.cCookie(b+(0!==i?c.o.cpf+i:"")),e===d.u){0===i&&c.v!==d.u&&(c.v===d.n||0===c.v.length)&&(c.v=d.u);break}0===i&&(c.v=""),c.v+=e}return c.v}}},add:{storage:function(a,b){c.o.uls&&c.st&&(c.d=g(b,1),c.st.setItem(e(a),c.d))},cookie:function(b,e){if(a.cCookie){var f=e.match(new RegExp(".{1,"+c.o.mcs+"}","g"));if(f!==d.u){var g=f.length;for(i=0;g>i;i++)c.d=a.cCookie(b+(0!==i?c.o.cpf+i:""),f[i],c.o)}else c.d=a.cCookie(b,e,c.o)}}},remove:{storage:function(a){c.st&&a in c.st&&c.st.removeItem(f(a))},cookie:function(b){if((!c.st||!c.o.uls||c.st&&c.o.ucc)&&a.cCookie){var g,e=a.extend(1,c.o,{expires:-1}),f=c.o.mnc;for(i=0;f>i&&(g=b+(0!==i?e.cpf+i:""),a.cCookie(g)!==d.u);i++)a.cCookie(g,d.n,e)}}}},j=a.enhancedCookie=function(b,e,f){return!arguments.length>0||a.isFunction(e)?a.cCookie():(c={},f===d.u&&e!==d.u&&(f=e),c.o=a.extend({},j.defaults,a.extend(1,j.options,a.extend(1,j,f)))||{},c.st=c.o.expires!==d.u?d.ls:d.ss,"[object Object]"!==String(e)&&e!==d.u?(c.d=d.n,e===d.n||e===d.u?(h.remove.storage(b),h.remove.cookie(b)):c.o.uls&&c.st?(h.add.storage(b,e),c.o.ucc&&h.remove.cookie(b)):h.add.cookie(b,e),c.d):(c.v=d.u,h.read.storage(b),h.read.cookie(b),c.v))};j.defaults={mcs:3e3,mnc:20,cpf:"-cc"},j.options={uls:1,ucc:0},function(a,b){var d,e,f,g,c=[{n:"local",t:"ls"},{n:"session",t:"ss"}],h=c.length;for(d=0;h>d;d++)if(e=c[d],f=e.n+"Storage",!b[e.t]&&f in a&&typeof Storage!==b.u)try{g=a[f],g.setItem(f,1),g.removeItem(f),b[e.t]=g}catch(i){}}(b,d),a.cookie&&(a.cCookie=function(a){return a.cookie}(a),a.cookie=a.extend(1,a.cookie,a.enhancedCookie),a.cookie=a.enhancedCookie,a.removeCookie&&(a.removeCookie=function(b,c){return a.cookie(b,null,c||{expires:-1})}))});
// jscs: enable
// jshint ignore:end

// Setzen der Variable "$.cookiesAllowed".
// Bei jeder Funktion muss dies geprüft werden,
// da gerade Safari im privaten Modus Cookies unterbindet.

(function($) {
	var noError = true;
	try {
		$.cookie('cookiesAllowed');
	} catch (e) {
		noError = false;
	} finally {
		$.cookiesAllowed = noError;
	}
})(jQuery);
