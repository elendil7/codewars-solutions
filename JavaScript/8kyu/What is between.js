function between(a, b) {
	let res = [];

	for (i = a; i <= b; ++i) {
		res.push(i);
	}
	return res;
}

between = (a, b) =>
	Array(b - a + 1)
		.fill(a)
		.map((v, i) => v + i);
