function pyramid(n) {  
  if(n < 1) return []
  return [...Array(n)].map((v,i)=>[...Array(++i)].fill(1))
}
