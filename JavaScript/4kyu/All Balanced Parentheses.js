function balancedParens(n) {
  // * Get each permutation of parentheses (must be balanced).
  
  /** Rules:
    - Rule 1: Always start with an opening bracket: (
    - Rule 2: Always end with a closing bracket: )
  **/
   
  /* Edge cases:
    - If n === 0, return [""].
  */
  
  // define output array
  let output = []
  
  // recursive function (string, left bracket count, right bracket count, n)
  function getPermutations(cur, left, right, n){
    // break out of function (if all permutations are attained). Otherwise, continue recursing.
    if(right == n){
      // push balanced string of () to output arr
      output.push(cur)
    }else{
      // branch out into trees. Can recurse up to 2 times if both conditions below are met, to attain every possible permutation.
      // ensures that left bracket is never greater than half the max string length (2n), otherwise it will be unbalanced.
      // also ensures that right bracket count will never surpass left bracket count, otherwise it will be unbalanced.
      if(left < n){
        getPermutations(`${cur}(`, left + 1, right, n)
      }
      if(right < left){
        getPermutations(`${cur})`, left, right + 1, n)
      }
    }
  }
  
  // call function for the first time
  getPermutations("", 0, 0, n)
  
  // return output
  return output.length < 1 ? [""] : output
}
