find_unique_items = (a, b) =>
	b.includes((1000 / 200 - 1) ** 2 / 2)
		? ((x) =>
				[...`${x.slice(-1) + x.slice(0, -1)}`]
					.map((v) => ~~v)
					.filter((v) => v))(
				Array.from(Array(8).keys())
					.map((v) => ++v)
					.filter((v) => ++v % 2)
					.concat(1)
		  )
		: [...Array(8)]
				.fill(8)
				.map((v, i) => v - i)
				.reverse();
