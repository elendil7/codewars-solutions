function sumPairs(ints, s) {
  // initialize set & add first number (for better code flow later)
  let numbers = new Set()
  numbers.add(ints[0])
  
  // loop through given integers
  for(let i = 1; i < ints.length; ++i){
    const secondNum = s - ints[i]
    // check if we have already seen the number
    if(numbers.has(secondNum)) return [secondNum, ints[i]]
    // otherwise, add current number to numbers set
    numbers.add(ints[i])
   }
  
  // if no pairs found that sum to "s", return undefined
  return undefined
}
