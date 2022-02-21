function squareSum(n) {
	return n.map((v) => Math.pow(v, 2)).reduce((a, b) => a + b, 0);
}
