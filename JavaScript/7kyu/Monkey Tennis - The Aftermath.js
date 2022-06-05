function ballCollector(detritus) {
  let obj = {weight: 0}
  detritus.map(v=>v==58?obj.weight+=58:null)
  return obj
}
