function gap(g, m, n) {
	console.log(g, m, n);

	let A = [],
		R = [];

	var array = [],
		upperLimit = Math.sqrt(n),
		output = [];

	for (var i = 0; i < n; i++) {
		array.push(true);
	}

	for (var i = 2; i <= upperLimit; i++) {
		if (array[i]) {
			for (var j = i * i; j < n; j += i) {
				array[j] = false;
			}
		}
	}

	// All array[i] set to true are primes
	for (var i = 2; i < n; i++) {
		if (array[i]) {
			output.push(i);
		}
	}

	console.log(output);

	output = output.filter((v) => v >= m);

	console.log(output);

	for (let i = 0; i < output.length; i++) {
		if (output[i + 1] - output[i] === g) return [output[i], output[i + 1]];
	}
	return null;
}

/*

for (let i = m; i <= n; i++) {
  let flag = 0;

  for (let j = 2; j < i; j++) {
      if (i % j == 0) {
          flag = 1;
          break;
      }
  }

  if (i > 1 && flag == 0) {
      R.push(i);
  }
}

*/

/*

for(let i = 2; i <= Math.sqrt(n); i++){
  if(A[i]){
    for(let x = 0; x <= n; x++){
      for(let y = (i*i) + (x*i); y <= n; y++){
        A[y] = false;
      }
    }
  }
}

*/

/*

var sieve = [], i, j, primes = [];
for (i = m; i <= n; ++i) {
    if (!sieve[i]) {
        primes.push(i);
        for (j = i << 1; j <= n; j += i) {
            sieve[j] = true;
        }
    }
}

console.log(sieve, primes)

console.log(g, m, n)

*/

/*

// populate array with digits ranging from m <= nums <= n
for(let i = m; i <= n; i++)[
  arrOfInts.push(true)
]

// define variables
let arrOfInts = [], newArr = []

console.log(arrOfInts)

// remove multiples of 2, 3, 5
for(var i = 2; i <= Math.sqrt(n); i++){
  if(arrOfInts[i]){
    for(var j = i * i; j < n; j += i) {
      arrOfInts[j] = false;
    }
  }
}

for(let i = m; i <= n; i++){
  if(arrOfInts[i]){
    newArr.push(i)
  }
}

console.log(newArr)

*/
