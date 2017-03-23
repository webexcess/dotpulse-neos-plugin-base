Object.defineProperty(Object.prototype, 'each', {
	value: function(callback) {
		var length = this.length;
		var index = 0;
		for (; index < length; index++) {
			if (callback.call(this[index], index, this[index]) === false) {
				break;
			}
		}
		return this;
	}
});
