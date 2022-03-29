function howBiggaMaPizza(blobDiameter, crust) {
	let volumeOfBlob = (4 / 3) * Math.PI * (blobDiameter / 2) ** 3;

	if (crust == `crispy`) {
		return Math.sqrt(volumeOfBlob / (Math.PI * 1));
	} else {
		return Math.sqrt(volumeOfBlob / (Math.PI * 5));
	}
}

howBiggaMaPizza = (d, c, p = Math.PI) =>
	(((4 / 3) * p * (d / 2) ** 3) / (p * (c == `crispy` ? 1 : 5))) ** 0.5;
