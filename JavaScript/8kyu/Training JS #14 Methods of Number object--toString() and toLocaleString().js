function colorOf(r, g, b) {
	return `#${
		((x) => (r < 16 ? `0` : ``) + x)(r.toString(16)) +
		((x) => (g < 16 ? `0` : ``) + x)(g.toString(16)) +
		((x) => (b < 16 ? `0` : ``) + x)(b.toString(16))
	}`;
}

colorOf = (r, g, b) =>
	`#` +
	(r < 16 ? 0 : ``) +
	r.toString(16) +
	(g < 16 ? 0 : ``) +
	g.toString(16) +
	(b < 16 ? 0 : ``) +
	b.toString(16);