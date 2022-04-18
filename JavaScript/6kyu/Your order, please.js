function order(w){  
  let arr = w.split(" ")
  let count = 1;
  let result = []
  
  if(!w || w == ``) return ``
  
  // keep looping till array is sorted
  function recursion(){
    // for each word
    for(let x = 0; x < arr.length; x++){
      // if words includes count (number)
      if(arr[x].includes(count)){
        // push value to results
        result.push(arr[x])
        // increment sorted by 1
        count++
        // break current iteration of loop
        break;
      }
    }
    // if result array is not yet filled, recurse
    if(result.length < arr.length) recursion()
  }recursion()
  
  return result.join(" ")
  
}
