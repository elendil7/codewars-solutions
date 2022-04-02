function minimumSteps(numbers, value) {
	numbers.sort((a, b) => a - b);
	let total = 0,
		count = 0;

	for (let i = 0; i < numbers.length; ++i) {
		total += numbers[i];
		if (total >= value) return count;
		count++;
	}
}
