function beggars(values, n){
  console.log(values, n)
  
  /* Explanation
    // * Description
    - The task at hand is relatively simple.
    - Given an array of values (values), and number of beggars (n),
      return an array with the sum of what each beggar brings home.
    - This is assuming that each beggar takes regular turns (taking values), in chronological order (first to last).
    
    // * Examples
    - For example, given the values [1,2,3,4,5] and the n value of 2, 
      these 2 beggars will return the result of [9,6].
      This is because the first beggar takes [1,3,5], while the second beggar takes [2, 4].
      
    // * Notes
    - Do not modify the input array.
    - If the array ends before each begger can get his turn, those beggars simply get nothing.
  */
  
  /* Implementation */
  // define variables
  // fill array, each value representing 1 beggar.
  let finalResult = Array(n).fill(0)
  // set beggarIterator to 0
  let beggarIncrementor = 0
  
  // for all values (gold / treasure) in provided array
  for(let i = 0; i < values.length; ++i){
    // if i is divisible by n (last beggar reached), reset it.
    if(i % n === 0){
      beggarIncrementor = 0
    }
    // incremenet current beggar's gold stash by the current value of the pile.
    finalResult[beggarIncrementor] += values[i]
    // increment beggarIncrementor by 1.
    beggarIncrementor ++
  }

  // log values for debugging
  console.log(values, n)
  console.log(finalResult)
  
  // return final filtered result (of all beggar stashes), removing NaNs respectively.
  return finalResult.filter(v=>!Number.isNaN(v))
}
