function deepCount(a){
  // define count
  let count = 0

  // define recursive function
  function process(arr){
    // add array length to count
    count += arr.length
    
    // get all nested array lengths within current array (n levels deep)
    for(let i = 0; i < arr.length; ++i){
      // if current value is itself an array, pass it into recursive function
      if(Array.isArray(arr[i])){
        process(arr[i])
      }
    }

    // log various values
    console.log(`Array:`, a)
    console.log(`Arr length:`, a.length)
    console.log(`Count:`, count)
    console.log()
  }
  
  // run recursive function for the first time
  process(a, count)
    
  // return overall count
  return count
}
