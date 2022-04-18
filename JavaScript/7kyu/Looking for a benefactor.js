function newAvg(arr, newavg) {  
  /* Explanation */
  /*
    // * Description:
    John is an accountant at the FFC (Fat to Fit Club). This association is funded through financial donations obtained from various benefactors.
    John possesses a list of the first n donations: [14, 30, 5, 7, 9, 11, 15]
    He wishes to calculate how much the next benefactor must give to the association, 
    so that the average of the first (n + 1) donations reach an average of 30.
    After doing the maths, he found that this number is 149 (which is incorrect).
    
    // * Task
    The function newAvg(arr, newavg) should return the next expected donation to sate the provided average.
    Essentially, the target value, when added to the net donations array,
    the average of this array of donations should equate to the provided average.
    
    // * Important notes
    - The return value (next donation) must be rounded up to the next integer.
    - If the final donation turns out to be <= 0, return -1 or null.
    - Provide arrays may be empty, but all navg (averages) are integers or floats.
  */
  
  /* Implementation */
  
  // log values for debugging
  console.log(arr, newavg)
  
  // pass provided values into designated formula to derive x:
  // Missing Number = (Average x N) - (n1 + n2 + n3 +...)
  let val = (newavg * (++arr.length)) - arr.reduce((a,b)=>a+b,0)
  let up = new RangeError(`Output value is <= 0. No donation required.`)
  if(val < 1) throw up
  return Math.ceil(val)
}
