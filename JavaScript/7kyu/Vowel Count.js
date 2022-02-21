function getCount(s) {
	return s.split('').filter((c) => /^[aeiou]$/i.test(c)).length;
}
