function sumOfDifferences(arr) {
  let total = 0
  for(let i=0; i<arr.sort((a,b)=>b-a).length-1; ++i){
    total += arr[i] - arr[i+1]
  }
  return total
}
