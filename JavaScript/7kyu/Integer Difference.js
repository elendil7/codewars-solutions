const intDiff = (arr, n) => {
  let count = 0
  
  // for all values in arr against all values in arr
  for(let x = 0; x < arr.length; ++x){
    for(let y = 0; y < arr.length; ++y){
      if(x !== y){
        if(Math.abs(arr[x]-arr[y]) === n) count ++
      }
    }
  }
  
  return count / 2
}
