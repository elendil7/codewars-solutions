expandedForm = (n) =>
	n
		.toString()
		.split('')
		.map((v, i, arr) => `${arr[i]}${'0'.repeat([arr.length - 1 - i])}`)
		.filter((v) => parseInt(v) > 0)
		.join(' + ');
