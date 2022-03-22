getOrder = (
	s,
	o = `ॱBurgerॱFriesॱChickenॱPizzaॱSandwichॱOnionringsॱMilkshakeॱCoke`
		.split`ॱ`,
	n = [],
	t = ``
) => {
	[...s].map((v, i) => {
		t += v;
		return ((x) => (o.includes(x) ? (n.push(o.indexOf(x)), (t = ``)) : 0))(
			t.toUpperCase().slice(0, 1) + t.slice(1)
		);
	});
	return n.sort((a, b) => a - b).map((v) => o[v]).join` `;
};
