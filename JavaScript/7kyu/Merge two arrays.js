function mergeArrays(a, b) {
  let result = []
  
  for(let i = 0; i < Math.max(a.length, b.length); ++i){
    result.push(a[i], b[i])
  }
  
  return result.filter(v=>v)
}
