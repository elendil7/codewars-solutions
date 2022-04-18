function generateIntegers(m, n) {  
  return (z=>m<1?[0].concat(z):z)([...Array(n)].map((v,i)=>++i).slice((x=>x<0?0:x)(m-1)))
}
