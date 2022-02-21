function revrot(str, sz) {
	// edge case destroyer
	if (str == '' || sz <= 0 || sz > str.length) return '';

	// define variables
	let temp = '';
	let chunks = [];

	// generate substring chunks using sz (ignore substrings lower than length of sz)
	for (let i = 0; i < str.length; i++) {
		temp += str.charAt(i);
		if (temp.length == sz) {
			chunks.push(temp);
			temp = '';
		}
	}

	// for each chunk
	chunks.forEach((chunk, i, arr) => {
		// get sum of cubes of chunk digits
		const sumOfCubesOfChunkDigits = chunk
			.split('')
			.map((v) => Math.pow(parseInt(v), 3))
			.reduce((a, b) => a + b);
		// if sum of cubes of chunk digits is divisible by 2
		if (sumOfCubesOfChunkDigits % 2 === 0) {
			// reverse the chunk
			arr[i] = chunk.split('').reverse().join('');
		} else {
			// rotate chunk to left by 1 position
			arr[i] = chunk.slice(1) + chunk.slice(0, 1);
		}
	});

	// return joined chunks
	return chunks.join('');
}
