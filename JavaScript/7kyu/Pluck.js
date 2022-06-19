function pluck(objs, name) {
  let seq = []
  for(let key in objs){
    seq.push(objs[key][name] || undefined)
  }
  
  return seq
}
