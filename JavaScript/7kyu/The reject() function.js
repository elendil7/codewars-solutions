function reject(arr, predicate) {
  let res = []
  
  for(let i = 0; i < arr.length; ++i){
    if(!predicate(arr[i])) res.push(arr[i])
  }
  
  return res
}
