function arithmeticSequenceElements(a,r,n) {
  let result = [a]
  
  for(let i = 0; i < n-1; ++i){
    result.push(result[i] + r)
  }
  
  return result.join`, `
}
