function f(n) {
	if (parseInt(n) !== n || n < 1) return false;
	return Array.from(Array(Math.floor(n)).keys())
		.map((v) => v + 1)
		.reduce((a, b) => a + b);
}

f = (n) => ((~~n == n) & (n > 1) ? (n / 2) * (n + 1) : false);

f = (n) => ((~~n == n) & (n > 0) ? (n / 2) * ++n : !1);
