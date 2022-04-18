function squareSum(n){
  let a = 0;
  n.map(v => a+=Math.pow(v, 2))
  return a;
}

function squareSum(n){
  return n.map(v => Math.pow(v, 2)).reduce((a, b) => a+b, 0)
}
