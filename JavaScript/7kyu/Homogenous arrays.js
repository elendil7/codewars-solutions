function filterHomogenous(arrays) {
  return arrays.filter(v=>v.length>0).filter(v=>v.every((x,i,a)=>typeof(x)===typeof(a[0])))
}
