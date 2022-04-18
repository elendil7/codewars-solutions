function divCon(x){
  return x.filter(v=>typeof(v)==`number`).reduce((a,b)=>a+b,0) - x.filter(v=>typeof(v)==`string`).reduce((a,b)=>+a + +b,0)
}
