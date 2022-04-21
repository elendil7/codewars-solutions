function allNonConsecutive (arr) {
  let nums = []
  
  for(let i = 0; i < arr.length - 1; ++i){
    if(arr[i] + 1 !== arr[i+1]){
      nums.push({i: i+1, n: arr[i+1]})
    }
  }
  
  return nums
}
