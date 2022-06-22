function duplicateElements(m, n) {
  if(m.length<1||n.length<1) return !1
  
  for(let x = 0; x < m.length; ++x){
    for(let y = 0; y < n.length; ++y){
      if(m[x] === n[y]) return !0
    }
  }
  
  return !1
}
