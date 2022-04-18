function listSquared(m, n) {  
  // define variables
  let divisors = []
  let tempDivisors = [], tempAddedSqrt
  let finalResults = []
  
  // for all numbers between m and n
  for(let i = m; i <= n; ++i){
    // find all divisors of each number
    // for all numbers between 1 and i
    for(let x = 1; x <= i; ++x){
      // if current number is a divisor of M, push to temp array
      if(i%x == 0){
        tempDivisors.push(x)
      }
    }
    // push tempDivisors to divisors array
    divisors.push(tempDivisors)
    // reset tempDivisors
    tempDivisors = []
  }
  
  // for each array of divisors, square each divisor
  let squaredDivisors = divisors.map(v=>v.map(v=>v**2))
  
  // for each array of squared divisors
  squaredDivisors.map(v=>{
    // get square of sum of squared divisors
    tempAddedSqrt = Math.sqrt(v.reduce((a,b)=>a+b))
    // if the sum of squared divisors is a square (non-decimal)
    if(Math.floor(tempAddedSqrt) == tempAddedSqrt){
      /* push the pair to final results array. The subarrays (or tuples or Pairs) will have two elements: 
      first the number the squared divisors of which is a square and then the sum of the squared divisors. */
      finalResults.push([Math.sqrt(v[v.length-1]), v.reduce((a,b)=>a+b)])
    }
  })
  
  // return final 2D array of results
  return finalResults
}

listSquared=(m,n,d=[],k=[],f=[])=>{
  for(i=m;i<=n;++i){for(x=1;x<=i;++x)if(i%x==0){k.push(x**2)}d.push(k);k=[]}
  d.map(v=>{g=v.reduce((a,b)=>a+b);k=g**.5;if(~~k==k)f.push([v[v.length-1]**.5,g])})
  return f
}
