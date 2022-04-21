function eachCons(arr, n) {
  let res = []
  
  for(let i = 0; i < arr.length; ++i){
    res.push(arr.slice(i,n+i))
  }
  
  return res.filter(v=>v.length===n)
}
