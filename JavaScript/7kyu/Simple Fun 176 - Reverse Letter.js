reverseLetter = (s) =>
	s
		.split('')
		.filter((v) => /[a-z]/gi.test(v) === true)
		.reverse('')
		.join('');
