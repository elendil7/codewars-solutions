function findSum(...nums){
  if(nums.filter(v=>v<0)[0]) return -1
  return nums.reduce((a,b)=>a+b,0)
}
