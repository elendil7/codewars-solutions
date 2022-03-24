stripWords = (t) =>
	t.toLowerCase().includes(`fight club`)
		? t.replace(/fight club/gi, `Knitting Club`)
		: t.replace(/knitting club/gi, `Fight Club`);

stripWords = (t) => t.replace(/fight club/gi, `Knitting Club`);
