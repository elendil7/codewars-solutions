function getFreeUrinals(urinals){
  if(urinals.includes(`11`)) return -1
  
  let arr = [...urinals]
  let count = 0
  
  for(let i = 0; i < arr.length; ++i){
    if(arr[i-1] != `1` && arr[i] == `0` && arr[i+1] != `1`){
      arr[i] = 1
      count ++
    }
  }
  
  return count
}
