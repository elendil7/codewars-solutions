function sumTriangularNumbers(n) {
  return n<1?0:Array.from(Array(n).keys()).map(v=>v+1).map(v=>(v)*(v+1)/2).reduce((a,b)=>a+b)
}
