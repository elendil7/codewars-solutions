function whoIsPaying(name) {
	return name.length < 3 ? [name] : [name, name.slice(0, 2)];
}
