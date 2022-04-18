function nbYear(p0, percent, aug, p) {
  let x = p0, y = 0;
  while(x < p){
    x += x*(percent/100) + aug
    y++
  }
  return y;
}
