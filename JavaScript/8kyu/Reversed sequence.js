const reverseSeq = (n) => {
	return Array.from(Array(n).keys())
		.map((v) => v + 1)
		.reverse();
};
