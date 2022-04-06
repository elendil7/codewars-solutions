function datingRange(age) {
	if (age > 14) {
		return `${~~(age / 2 + 7)}-${~~((age - 7) * 2)}`;
	} else {
		return `${~~(age - 0.1 * age)}-${~~(age + 0.1 * age)}`;
	}
}
