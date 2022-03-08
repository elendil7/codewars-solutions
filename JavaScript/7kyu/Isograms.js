function isIsogram(s) {
	return !/(\w).*\1/i.test(s);
}

isIsogram = (s, x = [...s.toLowerCase()]) => `` + x == `` + [...new Set(x)];
