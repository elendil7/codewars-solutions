function isNarcissistic(n){
  let arr = [...n+``]
  return arr.reduce((a,b)=>a + Math.pow(+b, arr.length), 0) === n
}
