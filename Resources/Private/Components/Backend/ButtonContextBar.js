ButtonContextBar = {
	add: function(options) {
		if (options.className && options.icon && options.title) {
			var addButton = function() {
				var button = document.createElement('button');
				button.className = 'neos-button ' + options.className;
				button.setAttribute('type', 'button');
				button.setAttribute('title', options.title);
				button.innerHTML = '<i class="' + options.icon + '"></i>';
				document.querySelector('#neos-context-bar > .neos-right').insertBefore(button, element.firstChild);
			};

			if (document.getElementById('neos-context-bar')) {
				addButton();
			} else {
				NeosEvents('ContentModuleLoaded', addButton);
			}
		}
	},
	remove: function(className) {
		if (typeof className === 'string') {
			var parent = document.querySelector('#neos-context-bar>.neos-right');
			var button = document.querySelector('#neos-context-bar>.neos-right>.' + className);
			if (button) {
				parent.removeChild(button);
			}
		}
	}
};
