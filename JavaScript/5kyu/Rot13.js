function rot13(m){
  const a = `abcdefghijklmnopqrstuvwxyz`.split("");
  function t(c) {
    let x = a[a.indexOf(c.toLowerCase())+13]
    if(!x) { x = a[a.indexOf(c.toLowerCase())-13]}
    if(c == c.toUpperCase()) { return x.toUpperCase()}
    return x;
  }
  return m.split("").map(c => a.includes(c.toLowerCase()) ? t(c) : c).join("")
}
