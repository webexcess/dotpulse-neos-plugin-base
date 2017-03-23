window.transitionEvent = (function() {
	var t;
	var element = document.createElement('div');
	var transitions = {
		transition: 'transitionend',
		OTransition: 'oTransitionEnd',
		MozTransition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd'
	};

	for (t in transitions) {
		if (element.style[t] !== undefined) {
			return transitions[t];
		}
	}
})();
