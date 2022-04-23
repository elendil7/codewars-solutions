function ArithmeticSequenceSum(a, r, n) {
  return [...Array(n)].map((v,i)=>a+Array(i).fill(r).reduce((a,b)=>a+b,0)).reduce((a,b)=>a+b)
}
