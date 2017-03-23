Array.isNodeList = function(elements) {
	return Object.prototype.toString.call(elements) === '[object NodeList]';
};
