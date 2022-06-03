function getLargerNumbers(a, b) {
  return a.map((v,i)=>Math.max(v,b[i]))
}
