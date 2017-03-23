// jscs: disable
// jshint ignore:start
// FEATURE.JS 1.0.1, http://featurejs.com
!function(e,t,n){"use strict";var r=t.documentElement,i={create:function(e){return t.createElement(e)},old:!!/(Android\s(1.|2.))|(Silk\/1.)/i.test(navigator.userAgent),pfx:function(){var e=t.createElement("dummy").style,r=["Webkit","Moz","O","ms"],i={};return function(t){if("undefined"==typeof i[t]){var c=t.charAt(0).toUpperCase()+t.substr(1),a=(t+" "+r.join(c+" ")+c).split(" ");i[t]=null;for(var o in a)if(e[a[o]]!==n){i[t]=a[o];break}}return i[t]}}()},c={css3Dtransform:function(){var e=!i.old&&null!==i.pfx("perspective");return!!e}(),cssTransform:function(){var e=!i.old&&null!==i.pfx("transformOrigin");return!!e}(),cssTransition:function(){var e=null!==i.pfx("transition");return!!e}(),addEventListener:!!e.addEventListener,querySelectorAll:!!t.querySelectorAll,matchMedia:!!e.matchMedia,deviceMotion:"DeviceMotionEvent"in e,deviceOrientation:"DeviceOrientationEvent"in e,contextMenu:"contextMenu"in r&&"HTMLMenuItemElement"in e,classList:"classList"in r,placeholder:"placeholder"in i.create("input"),localStorage:function(){var e="x";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}(),historyAPI:e.history&&"pushState"in e.history,serviceWorker:"serviceWorker"in navigator,viewportUnit:function(e){try{e.style.width="1vw";var t=""!==e.style.width;return!!t}catch(n){return!1}}(i.create("dummy")),remUnit:function(e){try{e.style.width="1rem";var t=""!==e.style.width;return!!t}catch(n){return!1}}(i.create("dummy")),canvas:function(e){return!(!e.getContext||!e.getContext("2d"))}(i.create("canvas")),svg:!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,webGL:function(t){try{return!(!e.WebGLRenderingContext||!t.getContext("webgl")&&!t.getContext("experimental-webgl"))}catch(n){return!1}}(i.create("canvas")),cors:"XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest,touch:!!("ontouchstart"in e||e.navigator&&e.navigator.msPointerEnabled&&e.MSGesture||e.DocumentTouch&&t instanceof DocumentTouch),async:"async"in i.create("script"),defer:"defer"in i.create("script"),geolocation:"geolocation"in navigator,srcset:"srcset"in i.create("img"),sizes:"sizes"in i.create("img"),pictureElement:"HTMLPictureElement"in e,testAll:function(){var e=" js";for(var t in this)"testAll"!==t&&"constructor"!==t&&this[t]&&(e+=" "+t);r.className+=e.toLowerCase()}};e.feature=c}(window,document);

// Add Retina
feature.retina = (function() {
	var test = window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia('(-webkit-min-device-pixel-ratio:1.5),(-moz-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5)').matches);
	return !!test;
})();
// jshint ignore:end
// jscs: enable

// Add Oldie
feature.oldie = (function() {
	var test = isIE && isIE < 10 ? 'oldie' : false;
	return !!test;
})();

feature.testAll();
