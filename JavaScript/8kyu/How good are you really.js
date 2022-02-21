function betterThanAverage(cp, yp) {
	return yp > cp.reduce((a, b) => a + b) / cp.length;
}
