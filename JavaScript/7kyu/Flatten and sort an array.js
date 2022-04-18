function flattenAndSort(arr) {
  
  let result = []
  
  arr.forEach((a)=>{
    a.forEach((b)=>{
      result.push(b)
    })
  })
  
  return result.sort((a,b)=>a-b);
}
