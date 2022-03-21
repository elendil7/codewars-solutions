remove = (s, n, r = []) => {
	for (i = 0; i < s.length; ++i) {
		if (s[i] == `!`) n--;
		else r.push(s[i]);
		if (n < 1) {
			r.push([...s].slice(++i).join``);
			break;
		}
	}
	return r.join``;
};
