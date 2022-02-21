const openOrSenior = (d) =>
	d.map((v) => (v[0] > 54 && v[1] > 7 ? 'Senior' : 'Open'));
