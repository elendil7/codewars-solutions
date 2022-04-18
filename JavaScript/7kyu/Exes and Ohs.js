function XO(s) {
  let x = 0;
  let o = 0;
  
  s.split("").map(v => v.toLowerCase()==="x" ? x++ : v.toLowerCase()==="o" ? o++ : null)
  
  return x === o;
}
