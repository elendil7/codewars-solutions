function findShort(s){
  return Math.min(...s.split(" ").map(v=>v.length))
}
