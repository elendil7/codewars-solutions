function smaller(nums) {
  console.log(nums)
  
  let count = 0;
  let result = [];
  
  for(let i = 0; i < nums.length; ++i){
    for(let j = i+1; j < nums.length; ++j){
      if(nums[j] < nums[i]){
        count ++
      }
    }
    result.push(count)
    count = 0
  }
  
  return result;
}
