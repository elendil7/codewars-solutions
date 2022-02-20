var capitals = function (word) {
	return word
		.split('')
		.map((v, i) => (v.toUpperCase() == v ? i : ''))
		.filter((v) => v.toString());
};
