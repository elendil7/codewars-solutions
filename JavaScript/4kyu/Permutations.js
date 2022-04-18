function permutations(string) {
  /* 💢 Heap's algorithm 💢 */
  
  /*
    Detailed description (algorithm):
    Heap's algorithm generates all possible permutations (a set) of n items (or in this case, all potential iterations of a singular string).
    It derives each permutation by interpreting the previous, then interchanging a single pair of elements.
    
    For a string "S" contained n different characters, we wish to produce each combination of these characters exactly once.
    We shall be utilising a recursive algorithm named "decrease and conquer".
    This method involves carrying out operations at every character of the string.
    Let's refer to our current stage (string[i]) as "k" (initially, k == n, then at the next stage, k < n).
    Each "step" generates !k permutations, which end with the same n to k (n - k) final characters (at the end of each permutation of the current string position).
    This is achieved by calling itself once when the "k" element has not been altered, then (k - 1) times, with the "k" element being altered with the previous iteration's "k" element.
    Thus, the recursive function calls modify the initial (k - 1) elements, exchanging it with a specific indexed character of the string, based on the rule provided.
    In this case, we shall be using the "parity" of the number of elements operated on at the current step.
    The rule goes as follows: if k is even, the final element is iteratively exchanged with each element index.
    Instead, if k is odd, the final element is exchanged with the first.
    
    Conditions:
    1. Each theoretically possible permutation must be included.
    2. Length of each permutation must be of the same length as the input string.
    3. Repeat permutations must be excluded from the final set.
    
    Links:
    - https://en.wikipedia.org/wiki/Heap%27s_algorithm
    - https://en.wikipedia.org/wiki/Permutation
  */
  
  /* Implementation */
  // Define variables
  // populate array with characters of string
  let arr = string.split``
  // set (initial) k equal to array length + 1
  let k = arr.length + 1
  // define temporary variable for index value switching
  let temp
  // define a set for storing the results in
  let finalArr = []
  
  // Ensure condition (1) is met by obtaining all permutations of the input string.
  function generatePermutations(k, arr){
    // push current state of array to finalArray
    finalArr.push(arr.join``)
    // if k reaches 1, exit function
    if(k === 1){
      return
    }else{
      // generate permutations with (k - 1)nth unaltered (only once)
      // as know, k is initially (only once) equal to n (string.length)
      generatePermutations(k - 1, arr)
      
      // generate permutations for (k - 1)nth swapped with each initial (k - 1)
      for(let i = 0; i < k; ++i){
        // swap depending on whether k is even or odd (based on our defined rules)
        // if even
        if(k % 2 !== 0){
          // swap values (must store one value temporarily)
          temp = arr[i]
          arr[i] = arr[k - 1]
          arr[k - 1] = temp
        // if odd
        }else{
          temp = arr[0]
          arr[0] = arr[k - 1]
          arr[k - 1] = temp
        }
        // recurse till k reaches 1
        generatePermutations(k - 1, arr)
      }
    }
  }
  // run recursive function for the first time
  generatePermutations(k, arr)
  
  // Ensure condition (2) is met by removing all substrings of lesser size than the original string.
  finalArr = finalArr.filter(v=>v.length == string.length)
  
  // Ensure condition (3) is met by removing duplicates from final set.
  return [...new Set(finalArr)]
}
