function numPrimorial(n){
  // * Explanation
  /*
    // * Description
    - A primorial is similar to that of the factorial of a number.
    - However, rather than the natural numbers being multipled, only prime numbers are multiplied together,
      to derive the "primorial of a number".
    - The primorial of a number is denoted by the following symbol: P#.
    - In layman's terms it is the product of the first n prime numbers.
    
    // * Task
    - Given a number (n > 0), calculate its primordial.
  */
  
  // * Implementation
  // edge cases
  if(n < 2) return 2
  
  // define variables
  let results = []
  
  // define function for checking prime numbers
  let isPrime=(num)=>{
    // if num is less than 2, return 1 (not a prime)
    if(num < 2) return 0
    // if given num is divisible by any number between 1 and itself (1 < i < num)
    for(let i = 2; i < num; ++i){
      // return 0 (not prime)
      if(num % i === 0) return 0
    }
    // if prime number passes all tests above, return it
    return num
  }
  
  // get a certain amount of prime numbers (n numbers in total)
  for(let i = 1; i <= n ** 4; ++i){
    results.push(isPrime(i))
  }
  
  // log values
  //console.log(n, results)
  //console.log(results.filter(v=>v))
  //console.log(results.filter(v=>v).slice(0,n))
  //console.log(results.filter(v=>v).slice(0,n).reduce((a,b)=>a*b,1))
  
  /* filter all the zeroes to get clean prime numbers, slice the result (to get the first n prime numbers),
  then return first n number of prime numbers, multiplied together to get the primordial. */
  return results.filter(v=>v).slice(0,n).reduce((a,b)=>a*b,1)
}
