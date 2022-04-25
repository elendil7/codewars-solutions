function isTriangular(t) {
  for(let i = 0; i < 100000; ++i){
    if(t === i * (i + 1) / 2) return !0
  }
  return !1
}
