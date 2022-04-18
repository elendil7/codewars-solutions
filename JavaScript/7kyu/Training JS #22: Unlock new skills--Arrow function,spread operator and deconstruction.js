function shuffleIt(nums, ...arrs){
  let arr = [...nums]
  let temp
  
  arrs.map(v=>{
    temp = arr[v[0]]
    arr[v[0]] = arr[v[1]]
    arr[v[1]] = temp
  })
  
  return arr
}
