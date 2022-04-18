const findAll = (arr, n) => {
  let results = []
  
  for(let i=0; i<arr.length; ++i){
    if(arr[i] === n) results.push(i)
  }
  
  return results
}
