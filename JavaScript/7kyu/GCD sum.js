function solve(s,g){
  for(let i = g; i < 10000; ++i){
    if(i % g === 0 && (s - i) % g === 0) return [i, s-i].sort((a,b)=>a-b)
  }
  
  return -1
}
