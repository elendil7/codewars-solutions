function comp(a1, a2) {
	if (!a1 || !a2 || a1.length !== a2.length) return false;
	return (
		a1
			.map((v) => v * v)
			.sort((a, b) => a - b)
			.toString() === a2.sort((a, b) => a - b).toString()
	);
}

// return a1.map(v => v === Math.sqrt(a2[a1.indexOf(v)]))
