function gordon(a) {
	return a.toUpperCase().split` `.map(
		(v) => v.replace(/a/gi, `@`).replace(/[aeiou]/gi, `*`) + `!!!!`
	).join` `;
}
