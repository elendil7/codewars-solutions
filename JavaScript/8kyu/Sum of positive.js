function positiveSum(a) {
	return a.filter((v) => v > 0).length === 0
		? 0
		: a.filter((v) => v > 0).reduce((a, b) => a + b);
}
