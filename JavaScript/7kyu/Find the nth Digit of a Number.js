findDigit = (x, n) =>
	n < 1
		? -1
		: ~~(`` + Math.abs(x)).split``.filter((v) => ~~v == v).reverse().join``[
				--n
		  ] || 0;

findDigit = (x, n) => (n > 0 ? [...(`` + x)].reverse()[--n] | 0 : -1);
