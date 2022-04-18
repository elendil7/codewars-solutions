function billboard(name, price = 30){
  return [...Array(name.length)].map((v,i)=>price).reduce((a,b)=>a+b,0)
}
