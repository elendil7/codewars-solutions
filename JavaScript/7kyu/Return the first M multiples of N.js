function multiples(m, n){  
  return [...Array(m)].map((v,i)=>n*++i)
}
