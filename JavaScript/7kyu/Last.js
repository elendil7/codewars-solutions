function last(...list){
  let arr = [].concat(...list)
  let lastValue = arr[arr.length-1]
  
  return lastValue.length>1 ? lastValue[lastValue.length-1] : lastValue
}

last=(...l)=>(v=>v[1]?v[v.length-1]:v)((a=>a[a.length-1])([].concat(...l)))
