function alphanumeric(str) {
	if (!str) return false;

	for (let i = 0; i < str.length; i++) {
		if (/[a-z0-9]/gi.test(str[i]) === false) return false;
	}

	return true;
}

alphanumeric = (s) => !!s && /^[0-9a-z]*$/i.test(s);

alphanumeric = (s) => /^[\da-z]+$/i.test(s);
