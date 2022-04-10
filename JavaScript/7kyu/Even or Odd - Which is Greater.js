function evenOrOdd(str) {
	let arr = str.split``;

	let even = arr.filter((v) => +v % 2 == 0);

	let odd = arr.filter((v) => +v % 2);

	let addedEvens = even.reduce((a, b) => +a + +b, 0);
	let addedOdds = odd.reduce((a, b) => +a + +b, 0);

	return addedEvens > addedOdds
		? `Even is greater than Odd`
		: addedOdds > addedEvens
		? `Odd is greater than Even`
		: `Even and Odd are the same`;
}
