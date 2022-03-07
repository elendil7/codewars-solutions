function sumStrings(a, b) {
	return String(BigInt(a) + BigInt(b));
}

sumStrings = (a, b) => `` + (BigInt(a) + BigInt(b));
