function factorial(n){
  if(n<0||n>12) throw new RangeError()
  return n==0?1:Array.from(Array(n).keys()).map(v=>v+1).reduce((a,b)=>a*b)
}
