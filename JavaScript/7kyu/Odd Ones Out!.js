function oddOnesOut(nums) {
  let finalResult = []
  
  for(let i = 0; i < nums.length; ++i){
    if(nums.filter(v=>v==nums[i]).length%2==0) finalResult.push(nums[i])
  }
    
  return finalResult
}
