function generateIntegers(n) {
  return [...Array(n+1)].map((v,i)=>i)
}

generateIntegers=n=>[...Array(++n)].map((v,i)=>i)
