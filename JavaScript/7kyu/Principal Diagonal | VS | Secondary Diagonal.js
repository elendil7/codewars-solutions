function diagonal(matrix){
  let primaryDiag = []
  let secondaryDiag = []
  
  for(let i = 0; i < matrix.length; ++i){
    primaryDiag.push(matrix[i][i])
    secondaryDiag.push(matrix[i][matrix.length-i-1])
  }
  
  return ((x,y)=>x===y?"Draw!":`${x>y?"Principal":"Secondary"} Diagonal win!`)(primaryDiag.reduce((a,b)=>a+b,0),secondaryDiag.reduce((a,b)=>a+b,0))
}
