function pipeFix(nums){
  let count = nums[0]
  let result = []
  while(count <= Math.max(...nums)){
    result.push(count)
    count++
  }
  return result;
}
