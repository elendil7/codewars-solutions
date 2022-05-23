function generatePairs(n) {
  let res = []
  
  for(let i = 0; i <= n; ++i){
    for(let j = i; j <= n; ++j){
      res.push([i, j])
    }
  }

  return res
}
