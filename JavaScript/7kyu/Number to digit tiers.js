function createArrayOfTiers(num) {
  return (n=>[...Array(n.length)].map((v,i)=>n.slice(0,++i)))(``+num)
}

createArrayOfTiers=(n,m=``+n)=>[...Array(m.length)].map((v,i)=>m.slice(0,++i))
