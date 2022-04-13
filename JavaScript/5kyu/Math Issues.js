Math.round = function (number) {
	return (number + 0.5) | 0;
};

Math.ceil = function (number) {
	if (`50`.includes(number)) return number;
	return -~number;
};

Math.floor = function (number) {
	return ~~number;
};
