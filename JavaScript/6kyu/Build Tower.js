function towerBuilder(n) {
  const a = [];
  for(let i = 2*n; i > 0; i--){
    if(i%2 == 0) continue;
    a.unshift(` `.repeat(a.length) + `*`.repeat(i) + ` `.repeat(a.length))
  }
  return a;
}
