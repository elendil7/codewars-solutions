function mxdiflg(a1, a2) {
  return !a1[0] || !a2[0] ? -1 : Math.max(
    Math.abs(a1.sort((a,b)=>a.length<b.length).slice(0,1).join("").length - a2.sort((a,b)=>a.length>b.length).slice(0,1).join("").length),
    Math.abs(a1.sort((a,b)=>a.length>b.length).slice(0,1).join("").length - a2.sort((a,b)=>a.length<b.length).slice(0,1).join("").length)
  )
}
