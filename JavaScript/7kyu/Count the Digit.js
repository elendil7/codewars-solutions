function nbDig(n, d) {
  // make array with squared numbers upto N
  let arr = Array.from(Array(n+1).keys()).map(v=>v**2)
  // define variables
  let count = 0;
  // for each value in array
  for(let i = 0; i < arr.length; i++){
    // turn current array value into string
    let str = String(arr[i])
    // for each individual number
    for(let x = 0; x < str.length; x++){
      // for the number
      if(str[x]==d) count++
    }
  }
  return count
}
