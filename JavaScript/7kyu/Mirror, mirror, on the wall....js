function mirror(data) {
  let arr = [...data].sort((a,b)=>a-b)  
  let result = [...arr]
  
  for(let i = arr.length - 2; i >= 0; --i){
    result.push(arr[i])
  }
  
  return result
}
