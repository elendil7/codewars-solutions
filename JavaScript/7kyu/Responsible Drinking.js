function hydrate(s) {
	return ((x) => `${x} glass${x < 2 ? `` : `es`} of water`)(
		[...s].filter((v) => /\d/.test(v)).reduce((a, b) => +a + +b, 0)
	);
}
