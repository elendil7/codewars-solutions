function isIsogram(s) {
	return !/(\w).*\1/i.test(s);
}
