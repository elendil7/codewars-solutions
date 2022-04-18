function duplicates(arr) {
  let thing = []
  let result = []
  
  for(let i = 0; i < arr.length; ++i){
    if(thing.includes(arr[i])){
      result.push(arr[i])
    }
    thing.push(arr[i])
  }
  
  return [...new Set(result)]
}
