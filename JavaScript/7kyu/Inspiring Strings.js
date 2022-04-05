function longestWord(stringOfWords) {
	let arr = stringOfWords.split` `.reverse();

	arr.sort((a, b) => b.length - a.length);

	return arr[0];
}

longestWord = (s) =>
	s.split` `.reverse().sort((a, b) => b.length - a.length)[0];
