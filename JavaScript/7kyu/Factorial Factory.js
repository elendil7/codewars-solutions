function factorial (n) {
  return n<0?null:[...Array(n)].map((v,i)=>++i).reduce((a,b)=>a*b,1)
}
