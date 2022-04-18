function cutIt(arr){
  let minStrLen = Infinity
  let result = []  
  
  for(let i=0; i<arr.length; ++i){
    minStrLen = Math.min(minStrLen, arr[i].length)
  }
  for(let i=0; i<arr.length; ++i){
    result.push(arr[i].slice(0,minStrLen))
  }
  
  return result
}
