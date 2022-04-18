function productArray(nums){
  let tempArr = [...nums]
  let res = []
  
  for(let i = 0; i < nums.length; ++i){
    tempArr.splice(i, 1)
    res.push(tempArr.reduce((a,b)=>a*b))
    tempArr = [...nums]
  }
  
  return res
}
