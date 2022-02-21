function squareDigits(n) {
	let r = '';
	[...n.toString()].forEach((num) => (r = `${r}${Math.pow(num, 2)}`));
	return parseInt(r);
}
