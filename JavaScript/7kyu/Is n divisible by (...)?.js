function isDivisible(...args){
  return args.slice(1).every(v=>!(args[0]%v)%2)
}
