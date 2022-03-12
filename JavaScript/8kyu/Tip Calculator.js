calculateTip = (a, b, r = b.toLowerCase()) =>
	((x) => (x == `` ? `Rating not recognised` : Math.ceil(x)))(
		r == `excellent`
			? a * 0.2
			: r == `great`
			? a * 0.15
			: r == `good`
			? a * 0.1
			: r == `poor`
			? a * 0.05
			: r == `terrible`
			? 0
			: ``
	);
