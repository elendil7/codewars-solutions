String.prototype.digit = function () {
	return /[0-9]/.test(this) && this.length == 1;
};
