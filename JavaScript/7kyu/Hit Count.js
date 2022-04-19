function counterEffect(hitCount) {
  return [...hitCount].map(v=>[...Array(++v)].map((v,i)=>i))
}
