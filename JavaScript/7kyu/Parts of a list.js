partlist = (a) =>
	a.map((v, i) => [a.slice(0, i).join` `, a.slice(i).join` `]).slice(1);
