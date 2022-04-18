function minValue(values){
  console.log(values)
  return Number([... new Set(values)].sort().reduce((a,b)=>String(a)+String(b)))
}
