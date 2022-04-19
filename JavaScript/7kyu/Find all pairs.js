function duplicates(arr){
  let count = 0
  
  for(let i = 0; i < arr.sort((a,b)=>a-b).length - 1; ++i){
    if(arr[i] === arr[i+1]){
      count ++
      ++i
    }
  }
  
  return count
}
