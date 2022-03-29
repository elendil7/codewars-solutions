squareRoot = (n) =>
	((x) => (~~(x ** 0.5) == x ** 0.5 ? x ** 0.5 : x))(
		n.reduce((a, b) => a + b, 0)
	);
