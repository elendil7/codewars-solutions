function gap(g, m, n) {

  console.log(g, m, n)
  
  let A = [], R = [];
  
  var array = [], upperLimit = Math.sqrt(n), output = [];

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
      if(array[i]) {
          output.push(i);
      }
  }
  
  console.log(output)
  
  output = output.filter(v=>v>=m)  
  
  console.log(output)
  
  for(let i = 0; i < output.length; i++){
    if(output[i+1]-output[i]===g) return [output[i], output[i+1]]
  }
  return null;

}

gap=(g,m,n)=>{  
  let A = [], R = [];
  var array = [], upperLimit = Math.sqrt(n), output = [];
  for (var i = 0; i < n; i++){array.push(true)}
  for (var i = 2; i <= upperLimit; i++){if (array[i]) {for (var j = i * i; j < n; j += i) {array[j] = false;}}}
  for (var i = 2; i < n; i++) {if(array[i]) {output.push(i)}}
  output = output.filter(v=>v>=m)  
  for(let i = 0; i < output.length; i++){if(output[i+1]-output[i]===g) return [output[i], output[i+1]]}
  return null;
}
