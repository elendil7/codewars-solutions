function diagonalSum(matrix){
  let toBeReduced = []
  
  for(let i = 0; i < matrix.length; ++i){
    toBeReduced.push(matrix[i][i])
  }
  
  return toBeReduced.reduce((a,b)=>a+b,0)
}
