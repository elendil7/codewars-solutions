function squares(x, n) {
  let result = []
  
  for(let i=1; i<=n; ++i){
    result.push(x)
    x = x**2
  }
  
  return result
}
