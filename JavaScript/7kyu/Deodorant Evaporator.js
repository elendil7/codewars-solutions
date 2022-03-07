function evaporator(content, evap_per_day, threshold) {
	let evap = evap_per_day / 100;
	let thresh = content * (threshold / 100);

	let count = 0;

	while (content > thresh) {
		content = content - content * evap;
		count++;
	}
	return count;
}
