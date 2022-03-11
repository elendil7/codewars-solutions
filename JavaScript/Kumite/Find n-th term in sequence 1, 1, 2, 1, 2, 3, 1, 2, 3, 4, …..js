solution = (n) =>
	[].concat(
		...[...Array(n)].map((v, i) => [...Array(++i).keys()].map((v) => ++v))
	)[--n];

solution = (n) =>
	Array(n)
		.fill(n)
		.map((v, i) => [...Array(++i).keys()].map((v) => ++v))
		.flat()[--n];
