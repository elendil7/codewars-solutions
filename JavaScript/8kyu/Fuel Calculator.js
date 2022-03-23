fuelPrice = (l, p) =>
	+(
		l * p -
		l *
			(l > 9
				? 0.25
				: l > 7
				? 0.2
				: l > 5
				? 0.15
				: l > 3
				? 0.1
				: l > 1
				? 0.05
				: 0)
	).toFixed(2);
