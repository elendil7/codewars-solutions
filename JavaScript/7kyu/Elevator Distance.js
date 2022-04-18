function elevatorDistance(arr) {
  let count = 0
  
  for(let i = 0; i < arr.length-1; ++i){
    count += Math.abs(arr[i] - arr[i+1])
  }
  
  return count
}
