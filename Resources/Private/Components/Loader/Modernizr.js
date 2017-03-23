// jscs: disable
// jshint ignore:start
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-bgsizecover-boxshadow-cookies-cssanimations-cssfilters-csstransforms-csstransforms3d-csstransitions-flexbox-flexboxlegacy-flexboxtweener-hashchange-history-ie8compat-overflowscrolling-rgba-smil-svg-svgasimg-textshadow-setclasses !*/
!function(e,t,n){function r(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(T&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?S.className.baseVal=t:S.className=t)}function o(e,t){return typeof e===t}function i(){var e,t,n,r,i,s,a;for(var d in w)if(w.hasOwnProperty(d)){if(e=[],t=w[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){if("object"==typeof e)for(var n in e)A(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var o=e.split("."),i=Modernizr[o[0]];if(2==o.length&&(i=i[o[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==o.length?Modernizr[o[0]]=t:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=t),r([(t&&0!=t?"":"no-")+o.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function d(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=s(T?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var i,a,d,f,l="modernizr",c=s("div"),p=u();if(parseInt(r,10))for(;r--;)d=s("div"),d.id=o?o[r]:l+(r+1),c.appendChild(d);return i=s("style"),i.type="text/css",i.id="s"+l,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),c.id=l,p.fake&&(p.style.background="",p.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=f,S.offsetHeight):c.parentNode.removeChild(c),!!a}function c(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],o(r,"function")?c(r,n||t):r);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+m(t[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,r,i){function a(){l&&(delete L.style,delete L.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var u=h(e,r);if(!o(u,"undefined"))return u}for(var l,c,p,m,g,v=["modernizr","tspan"];!L.style;)l=!0,L.modElem=s(v.shift()),L.style=L.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],g=L.style[m],d(m,"-")&&(m=f(m)),L.style[m]!==n){if(i||o(r,"undefined"))return a(),"pfx"==t?m:!0;try{L.style[m]=r}catch(x){}if(L.style[m]!=g)return a(),"pfx"==t?m:!0}return a(),!1}function v(e,t,n,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+O.join(s+" ")+s).split(" ");return o(t,"string")||o(t,"undefined")?g(a,t,r,i):(a=(e+" "+N.join(s+" ")+s).split(" "),p(a,t,n))}function x(e,t,r){return v(e,n,n,t,r)}var y=[],w=[],b={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(n){return!1}}),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var S=t.documentElement,T="svg"===S.nodeName.toLowerCase();Modernizr.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var _=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();b.hasEvent=_,Modernizr.addTest("hashchange",function(){return _("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7});var C=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=C;var k="CSS"in e&&"supports"in e.CSS,E="supportsCSS"in e;Modernizr.addTest("supports",k||E);var P={}.toString;Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(P.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var A;!function(){var e={}.hasOwnProperty;A=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),b._l={},b.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},b._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){b.addTest=a}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var z="Moz O ms Webkit",N=b._config.usePrefixes?z.toLowerCase().split(" "):[];b._domPrefixes=N;var O=b._config.usePrefixes?z.split(" "):[];b._cssomPrefixes=O;var j=b.testStyles=l,M={elem:s("modernizr")};Modernizr._q.push(function(){delete M.elem});var L={style:M.elem.style};Modernizr._q.unshift(function(){delete L.style});var q=b.testProp=function(e,t,r){return g([e],n,t,r)};Modernizr.addTest("textshadow",q("textShadow","1px 1px")),b.testAllProps=v,b.testAllProps=x,Modernizr.addTest("cssanimations",x("animationName","a",!0)),Modernizr.addTest("boxshadow",x("boxShadow","1px 1px",!0)),Modernizr.addTest("bgsizecover",x("backgroundSize","cover")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return x("filter","blur(2px)");var e=s("a");return e.style.cssText=C.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",x("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",x("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",x("flexAlign","end",!0)),Modernizr.addTest("overflowscrolling",x("overflowScrolling","touch",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&x("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!x("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",j(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",x("transition","all",!0)),i(),r(y),delete b.addTest,delete b.addAsyncTest;for(var V=0;V<Modernizr._q.length;V++)Modernizr._q[V]();e.Modernizr=Modernizr}(window,document);
// jshint ignore:end
// jscs: enable

// Retina Screen (boolean)
isRetina = window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia('(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)').matches);

// Touch Screen (boolean)
isTouch = ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch) ? true : false;

// Add Oldie
oldie = (function() {
	var test = isIE && isIE < 10 ? 'oldie' : false;
	return !!test;
})();

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

	if (oldie) {
		htmlClasses += ' oldie';
	}

	html.className = htmlClasses;
})();