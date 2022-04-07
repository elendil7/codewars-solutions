function countLettersAndDigits(input) {
	return [...input].map((v) => (/[a-z\d]/gi.test(v) ? v : ``)).join``.length;
}
