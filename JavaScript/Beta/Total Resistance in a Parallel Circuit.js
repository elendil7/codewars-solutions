function calculateTotalResistance(...args){
  return +(1/args.reduce((a,b)=>a + 1/b,0)).toFixed(2)
}
