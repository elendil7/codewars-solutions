function countAdjacentPairs(searchString) {
  let arr = searchString.toLowerCase().split(" ")
  let temp = ""
  let count = 0
  
  for(let i = 0; i < arr.length - 1; ++i){
    if(arr[i].toLowerCase() == arr[i+1].toLowerCase() && arr[i+1].toLowerCase() != temp){
      count ++
      temp = arr[i].toLowerCase()
    }
  }
  
  return count
}
