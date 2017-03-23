ButtonContextBar = {
	add: function(options) {
		if (options.className && options.icon && options.title) {
			var addButton = function() {
				var button = document.createElement('button');
				button.className = 'neos-button ' + options.className;
				button.attr('type', 'button');
				button.attr('title', options.title);
				button.innerHTML = '<i class="' + options.icon + '"></i>';
				$.first('#neos-context-bar > .neos-right').insertBefore(button, element.firstChild);
			};

			if ($has.id('neos-context-bar')) {
				addButton();
			} else {
				NeosEvents('ContentModuleLoaded', addButton);
			}
		}
	},
	remove: function(className) {
		if (typeof className === 'string') {
			var parent = $.first('#neos-context-bar>.neos-right');
			var button = $.first('#neos-context-bar>.neos-right>.' + className);
			if (button) {
				parent.removeChild(button);
			}
		}
	}
};
