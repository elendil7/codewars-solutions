isSortedAndHow = (a) =>
	`` + [...a].sort((a, b) => a - b) == `` + a
		? `yes, ascending`
		: `` + [...a].sort((a, b) => b - a) == `` + a
		? `yes, descending`
		: `no`;
