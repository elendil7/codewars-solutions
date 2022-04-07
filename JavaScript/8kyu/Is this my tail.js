function correctTail(body, tail) {
	let sub = body.substr(body.length - tail.length);
	return sub === tail;
}
