function uniqueSum(a){
  return !a[0]?null:[...new Set(a)].reduce((a,b)=>a+b,0)
}
