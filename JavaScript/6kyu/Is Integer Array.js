function isIntArray(arr) {
	if (!arr) return false;
	if (arr.length < 1) return true;

	return arr.every((v) => !(`` + v).includes(`.`) && +v === v);
}
