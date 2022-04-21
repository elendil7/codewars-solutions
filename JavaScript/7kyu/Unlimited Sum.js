function sum(...args){
  return args.filter(v=>~~v === v).reduce((a,b)=>+a + +b,0)
}
