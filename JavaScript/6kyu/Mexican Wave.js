const wave = (str) => {
	let e = [];
	for (let t = 0; t < str.length; t++) {
		if (' ' === str.charAt(t)) continue;
		let r =
			str.slice(0, t) +
			str.charAt(t).toUpperCase() +
			str.slice(t + 1, str.length);
		e.push(r);
	}
	return e;
};
